using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace OpportunityEquityEngine.Web;

public sealed record AuthSessionResponse(bool Authenticated, AuthSessionUser? User);

public sealed record AuthSessionUser(
    string Name,
    string Email,
    string Provider,
    string Subject);

internal static class AppServicePrincipalReader
{
    public static AuthSessionResponse Read(HttpContext context)
    {
        if (!context.Request.Headers.TryGetValue("X-MS-CLIENT-PRINCIPAL", out var rawHeader)
            || string.IsNullOrWhiteSpace(rawHeader))
        {
            return new AuthSessionResponse(false, null);
        }

        try
        {
            var json = Encoding.UTF8.GetString(Convert.FromBase64String(rawHeader!));
            var principal = JsonSerializer.Deserialize<Principal>(json);
            if (principal is null)
            {
                return new AuthSessionResponse(false, null);
            }

            var claims = principal.Claims?
                .Where(claim => !string.IsNullOrWhiteSpace(claim.Type))
                .ToDictionary(claim => claim.Type!, claim => claim.Value ?? string.Empty, StringComparer.OrdinalIgnoreCase)
                ?? new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

            var name = FirstClaim(claims, "name", "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name")
                ?? principal.UserDetails
                ?? string.Empty;
            var email = FirstClaim(
                claims,
                "email",
                "preferred_username",
                "upn",
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress")
                ?? principal.UserDetails
                ?? string.Empty;
            var subject = principal.UserId ?? FirstClaim(claims, "oid", "sub") ?? string.Empty;
            var provider = principal.IdentityProvider ?? principal.AuthType ?? string.Empty;

            return string.IsNullOrWhiteSpace(name)
                && string.IsNullOrWhiteSpace(email)
                && string.IsNullOrWhiteSpace(subject)
                ? new AuthSessionResponse(false, null)
                : new AuthSessionResponse(true, new AuthSessionUser(name, email, provider, subject));
        }
        catch (FormatException)
        {
            return new AuthSessionResponse(false, null);
        }
        catch (JsonException)
        {
            return new AuthSessionResponse(false, null);
        }
    }

    private static string? FirstClaim(IReadOnlyDictionary<string, string> claims, params string[] names)
    {
        foreach (var name in names)
        {
            if (claims.TryGetValue(name, out var value) && !string.IsNullOrWhiteSpace(value))
            {
                return value;
            }
        }

        return null;
    }

    private sealed class Principal
    {
        [JsonPropertyName("user_id")]
        public string? UserId { get; init; }

        [JsonPropertyName("user_details")]
        public string? UserDetails { get; init; }

        [JsonPropertyName("identity_provider")]
        public string? IdentityProvider { get; init; }

        [JsonPropertyName("auth_typ")]
        public string? AuthType { get; init; }

        [JsonPropertyName("claims")]
        public List<PrincipalClaim>? Claims { get; init; }
    }

    private sealed class PrincipalClaim
    {
        [JsonPropertyName("typ")]
        public string? Type { get; init; }

        [JsonPropertyName("val")]
        public string? Value { get; init; }
    }
}
