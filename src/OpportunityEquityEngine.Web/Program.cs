using OpportunityEquityEngine.Web;

// The existing visual demo is served from the standard wwwroot directory.
// The ASP.NET Core host supplies the health and session endpoints used by the
// frontend.
var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/health", () => Results.Json(new { status = "ready" }));
app.MapGet("/healthz", () => Results.Json(new { status = "ready" }));

app.MapGet("/api/auth/session", (HttpContext context) =>
    Results.Json(AppServicePrincipalReader.Read(context)));

app.MapGet("/auth/logout", () =>
    Results.Redirect("/.auth/logout?post_logout_redirect_uri=/"));

app.MapPost("/api/auth/logout", () =>
    Results.Redirect("/.auth/logout?post_logout_redirect_uri=/"));

app.MapFallbackToFile("index.html");

app.Run();
