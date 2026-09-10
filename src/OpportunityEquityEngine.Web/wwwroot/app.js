const opportunities = [
  { id: "ai-design", title: "Montreal AI Design Challenge", organization: "OEE Demo Team", category: "competition", categoryLabel: "Competition", icon: "✦", tone: "blue", location: "Montreal", locations: ["Montreal", "Online"], interests: ["AI", "Design", "Technology"], minGrade: 9, maxGrade: 12, cost: 0, deadline: "2026-10-18", deadlineLabel: "Oct 18, 2026", description: "A weekend team challenge to identify a real student problem and prototype a thoughtful AI-assisted solution.", action: "Build a two-minute prototype", sourceUrl: "https://www.youthscience.ca/science-fairs/cwsf/", applicationUrl: "https://www.youthscience.ca/science-fairs/cwsf/", verifiedAt: "Oct 02, 2026", status: "approved" },
  { id: "biomed", title: "Montreal Biomedical Research Program", organization: "OEE Demo Team", category: "research", categoryLabel: "Research", icon: "⌬", tone: "teal", location: "Montreal", locations: ["Montreal"], interests: ["Medicine", "Research", "Biology"], minGrade: 10, maxGrade: 12, cost: 0, deadline: "2027-02-01", deadlineLabel: "Feb 01, 2027", description: "An introduction to lab thinking, literature review, and research communication through a mentored project.", action: "Outline a research question", sourceUrl: "https://www.mcgill.ca/science/undergraduate", applicationUrl: "https://www.mcgill.ca/science/undergraduate", verifiedAt: "Sep 28, 2026", status: "approved" },
  { id: "mcgill", title: "McGill Entrance Scholarships", organization: "McGill University", category: "scholarship", categoryLabel: "Scholarship", icon: "◇", tone: "purple", location: "Montreal", locations: ["Montreal"], interests: ["University", "Academics"], minGrade: 11, maxGrade: 12, cost: 0, deadline: "2027-01-15", deadlineLabel: "Jan 15, 2027", description: "A starting point for researching entrance awards, eligibility, and the application timeline for future university study.", action: "Review eligibility criteria", sourceUrl: "https://www.mcgill.ca/undergraduate-admissions/scholarships-aid", applicationUrl: "https://www.mcgill.ca/undergraduate-admissions/scholarships-aid", verifiedAt: "Sep 30, 2026", status: "approved" },
  { id: "ocean", title: "Ocean Wise Youth Program", organization: "Ocean Wise", category: "volunteering", categoryLabel: "Volunteering", icon: "≈", tone: "green", location: "Online", locations: ["Online", "Vancouver"], interests: ["Environment", "Leadership", "Research"], minGrade: 9, maxGrade: 12, cost: 0, deadline: null, deadlineLabel: "Rolling intake", description: "Explore ocean action, build community, and turn environmental learning into a small local project.", action: "Choose one ocean issue", sourceUrl: "https://ocean.org/action/", applicationUrl: "https://ocean.org/action/", verifiedAt: "Oct 01, 2026", status: "needs-review" },
  { id: "cemc", title: "Waterloo CEMC Contests", organization: "University of Waterloo", category: "competition", categoryLabel: "Competition", icon: "∑", tone: "orange", location: "Online", locations: ["Online"], interests: ["Math", "Coding", "Academics"], minGrade: 9, maxGrade: 12, cost: 0, deadline: "2026-11-20", deadlineLabel: "Nov 20, 2026", description: "Practice mathematical problem solving through structured contests that can become a strong learning milestone.", action: "Try a past contest", sourceUrl: "https://cemc.uwaterloo.ca/contests/contests.html", applicationUrl: "https://cemc.uwaterloo.ca/contests/contests.html", verifiedAt: "Sep 27, 2026", status: "approved" },
  { id: "ai-studio", title: "Concordia Summer AI Studio", organization: "Concordia University", category: "summer", categoryLabel: "Summer program", icon: "▣", tone: "blue", location: "Montreal", locations: ["Montreal"], interests: ["AI", "Design", "Technology"], minGrade: 10, maxGrade: 12, cost: 250, deadline: "2027-03-15", deadlineLabel: "Mar 15, 2027", description: "A guided summer studio for learning AI concepts through creative prototyping, critique, and presentation.", action: "Save a project idea", sourceUrl: "https://www.concordia.ca/academics/undergraduate.html", applicationUrl: "https://www.concordia.ca/academics/undergraduate.html", verifiedAt: "Sep 25, 2026", status: "needs-review" },
  { id: "learning-code", title: "Canada Learning Code Youth Program", organization: "Canada Learning Code", category: "summer", categoryLabel: "Summer program", icon: "</>", tone: "yellow", location: "Online", locations: ["Online", "Toronto"], interests: ["Coding", "Technology", "Design"], minGrade: 9, maxGrade: 12, cost: 0, deadline: null, deadlineLabel: "Rolling intake", description: "Accessible coding activities and community support for young people who want to make their first digital project.", action: "Pick a first build", sourceUrl: "https://www.canadalearningcode.ca/", applicationUrl: "https://www.canadalearningcode.ca/", verifiedAt: "Sep 29, 2026", status: "approved" },
  { id: "climate", title: "Youth Climate Action Lab", organization: "OEE Demo Team", category: "volunteering", categoryLabel: "Volunteering", icon: "☼", tone: "green", location: "Montreal", locations: ["Montreal", "Online"], interests: ["Environment", "Leadership", "Design"], minGrade: 9, maxGrade: 12, cost: 40, deadline: "2026-12-01", deadlineLabel: "Dec 01, 2026", description: "Turn a climate concern into a scoped action plan with peers, evidence, and a practical first experiment.", action: "Name the change you want", sourceUrl: "https://davidsuzuki.org/take-action/", applicationUrl: "https://davidsuzuki.org/take-action/", verifiedAt: "Sep 26, 2026", status: "needs-review" },
  { id: "open-house", title: "University Open House Planning Sprint", organization: "OEE Demo Team", category: "scholarship", categoryLabel: "University planning", icon: "⌂", tone: "purple", location: "Online", locations: ["Online", "Montreal"], interests: ["University", "Design", "Leadership"], minGrade: 10, maxGrade: 12, cost: 0, deadline: "2026-10-28", deadlineLabel: "Oct 28, 2026", description: "A lightweight planning sprint for comparing programs, preparing questions, and making a realistic campus-visit plan.", action: "Compare two programs", sourceUrl: "https://www.educanada.ca/index.aspx", applicationUrl: "https://www.educanada.ca/index.aspx", verifiedAt: "Sep 24, 2026", status: "approved" }
];

const interestOptions = ["AI", "Medicine", "Research", "Coding", "Design", "Environment", "Leadership", "University"];
const emptyProfile = { grade: null, location: "", interests: [], budget: null };
const reviewDefaults = Object.fromEntries(opportunities.filter((item) => item.status === "needs-review").map((item) => [item.id, "needs-review"]));
let currentUser = null;
let profile = { ...emptyProfile };
let saved = [];
let reviews = load("oee-reviews", reviewDefaults);
let activeView = "dashboard";

function load(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; } catch { return fallback; }
}
function normalizeProfile(value) {
  if (!value || typeof value !== "object") return { ...emptyProfile };
  return { ...emptyProfile, grade: value.grade ?? null, location: value.location || "", interests: Array.isArray(value.interests) ? value.interests : [], budget: value.budget ?? null };
}
function accountStorageKey(key) { return `oee-account-v2:${currentUser?.subject || "guest"}:${key}`; }
function loadAccountState() {
  profile = normalizeProfile(load(accountStorageKey("profile"), emptyProfile));
  saved = load(accountStorageKey("saved"), []);
  if (!Array.isArray(saved)) saved = [];
}
function persistAccount(key, value) { persist(accountStorageKey(key), value); }
function persist(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
function escapeHtml(value) { return String(value ?? "").replace(/[&<>\"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[character])); }
function formatCost(cost) { return cost === 0 ? "Free" : `$${cost}`; }
function getOpportunity(id) { return opportunities.find((item) => item.id === id); }
function isSaved(id) { return saved.includes(id); }
function reviewStatus(opportunity) { return reviews[opportunity.id] || opportunity.status; }
function isPendingReview(opportunity) { return ["needs-review", "verification-requested"].includes(reviewStatus(opportunity)); }

function matchOpportunity(opportunity) {
  if (profile.grade === null || !profile.location || !profile.interests.length || profile.budget === null) return { eligible: false, score: 0, reason: "Complete your matching preferences to see recommendations." };
  const grade = Number(profile.grade); const budget = Number(profile.budget);
  const gradeFit = grade >= opportunity.minGrade && grade <= opportunity.maxGrade;
  const locationFit = opportunity.locations.includes(profile.location) || opportunity.locations.includes("Online") || profile.location === "Online";
  const budgetFit = opportunity.cost <= budget;
  if (!gradeFit || !locationFit || !budgetFit) return { eligible: false, score: 0, reason: "Outside your current grade, location, or budget filters." };
  const matches = opportunity.interests.filter((interest) => profile.interests.includes(interest));
  let score = 52 + Math.round((matches.length / Math.max(profile.interests.length, 1)) * 30) + 8 + 5 + 5;
  score = Math.min(99, score);
  const reason = matches.length ? `Strong fit for ${matches.slice(0, 2).join(" and ")}.` : "A useful adjacent option for your current profile.";
  return { eligible: true, score, reason };
}
function sortedMatches(items = opportunities) { return items.map((item) => ({ item, match: matchOpportunity(item) })).filter(({ match }) => match.eligible).sort((a, b) => b.match.score - a.match.score || a.item.title.localeCompare(b.item.title)); }
function icon(item) { return `<span class="opportunity-icon ${escapeHtml(item.tone)}">${escapeHtml(item.icon)}</span>`; }
function opportunityCard(item, match) {
  const savedState = isSaved(item.id);
  return `<article class="opportunity-card"><div class="card-heading"><div class="card-visual ${escapeHtml(item.tone)}" aria-hidden="true"><span>${escapeHtml(item.icon)}</span></div><span class="fit-score">${match.score}<small>% fit</small></span></div><div class="card-top"><div class="card-identity">${icon(item)}<div><span class="category-label">${escapeHtml(item.categoryLabel)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.organization)} · ${escapeHtml(item.location)}</p></div></div></div><p class="card-description">${escapeHtml(item.description)}</p><div class="card-facts"><span><b>◷</b>${escapeHtml(item.deadlineLabel)}</span><span><b>◈</b>${escapeHtml(formatCost(item.cost))}</span></div><section class="card-match-reason"><strong>Why this matches</strong><p>${escapeHtml(match.reason)}</p></section><div class="card-actions"><button class="text-link card-detail-button" data-detail-id="${item.id}">View details <span>↗</span></button><button class="save-button ${savedState ? "is-saved" : ""}" data-save-id="${item.id}" aria-label="${savedState ? "Remove" : "Save"} ${escapeHtml(item.title)}">${savedState ? "♥ Saved" : "♡ Save"}</button></div></article>`;
}
function compactOpportunity(item, match) { return `<div class="deadline-item"><div>${icon(item)}<div><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.deadlineLabel)} · ${escapeHtml(item.organization)}</small></div></div><span class="mini-score">${match.score}%</span></div>`; }
function emptyState(title, copy, view, label) { return `<div class="empty-state"><span class="how-icon">◎</span><h3>${title}</h3><p>${copy}</p><button class="outline-button" data-view="${view}">${label} <span>→</span></button></div>`; }

function renderDashboard() {
  const matches = sortedMatches();
  document.querySelector("#recommendation-list").innerHTML = matches.slice(0, 3).map(({ item, match }) => opportunityCard(item, match)).join("") || emptyState("Set your preferences first", "Choose your grade, location, interests, and budget to see recommendations.", "profile", "Set preferences");
  const savedItems = saved.map(getOpportunity).filter(Boolean).map((item) => ({ item, match: matchOpportunity(item) }));
  const deadlines = savedItems.length ? savedItems.slice(0, 3) : matches.filter(({ item }) => item.deadline).slice(0, 3);
  document.querySelector("#deadline-list").innerHTML = deadlines.length ? deadlines.map(({ item, match }) => compactOpportunity(item, match)).join("") : `<p class="empty-copy">Save an opportunity to keep its next deadline close.</p>`;
  updateProfileCopy();
}
function renderExplore() {
  const query = document.querySelector("#search-input").value.trim().toLowerCase(); const category = document.querySelector("#category-filter").value; const budget = document.querySelector("#budget-filter").value;
  const filtered = opportunities.filter((item) => { const searchable = `${item.title} ${item.organization} ${item.location} ${item.description} ${item.interests.join(" ")}`.toLowerCase(); return (!query || searchable.includes(query)) && (category === "all" || item.category === category) && (budget === "all" || item.cost <= Number(budget)); });
  const matches = sortedMatches(filtered); document.querySelector("#results-count").textContent = `${matches.length} opportunit${matches.length === 1 ? "y" : "ies"}`;
  document.querySelector("#explore-list").innerHTML = matches.length ? matches.map(({ item, match }) => opportunityCard(item, match)).join("") : emptyState("No eligible matches", "Try a broader search or update your profile filters.", "profile", "Edit profile");
}
function renderSaved() {
  const items = saved.map(getOpportunity).filter(Boolean); document.querySelector("#saved-large-number").textContent = String(items.length).padStart(2, "0");
  document.querySelector("#saved-summary-title").textContent = items.length ? `${items.length} opportunity${items.length === 1 ? "" : "ies"} in your shortlist` : "Nothing saved yet"; document.querySelector("#saved-summary-copy").textContent = items.length ? "Choose one small next action to keep your momentum." : "Explore the library and save an opportunity to see it here.";
  document.querySelector("#saved-list").innerHTML = items.length ? items.map((item) => `<article class="saved-card"><div class="saved-card-main">${icon(item)}<div><span class="category-label">${escapeHtml(item.categoryLabel)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p></div></div><div class="saved-meta"><span>◷ ${escapeHtml(item.deadlineLabel)}</span><span>◈ ${escapeHtml(formatCost(item.cost))}</span></div><div class="next-step"><small>NEXT ACTION</small><strong>${escapeHtml(item.action)}</strong><button class="text-link" data-detail-id="${item.id}">Open details ↗</button></div><button class="save-button is-saved" data-save-id="${item.id}">♥ Saved</button></article>`).join("") : emptyState("Build your shortlist", "The best shortlist is small enough to act on.", "explore", "Explore opportunities");
}

function beginFederatedLogin(provider) {
  const returnPath = `${window.location.pathname}${window.location.search}`;
  window.location.assign(`/.auth/login/${encodeURIComponent(provider)}?post_login_redirect_uri=${encodeURIComponent(returnPath)}`);
}
async function refreshAuthSession() {
  try {
    const response = await fetch("/api/auth/session", { credentials: "same-origin", headers: { Accept: "application/json" } });
    const session = response.ok ? await response.json() : { authenticated: false, user: null };
    currentUser = session.authenticated ? session.user : null;
    loadAccountState();
    updateAccountIdentity();
    document.querySelector("#quick-profile-form").innerHTML = profileFormMarkup(false);
    if (activeView === "dashboard") renderDashboard();
    if (activeView === "profile") renderProfile();
    if (currentUser) showToast(`Signed in with ${currentUser.provider || "your account"}`);
  } catch (_) {
    currentUser = null;
    loadAccountState();
    updateAccountIdentity();
    document.querySelector("#quick-profile-form").innerHTML = profileFormMarkup(false);
  }
}
document.addEventListener("click", (event) => { const target = event.target instanceof Element ? event.target : null; if (!target) return; const provider = target.closest("[data-auth-provider]"); if (provider) { beginFederatedLogin(provider.dataset.authProvider); } const signout = target.closest("#auth-signout"); if (signout) { window.location.assign("/.auth/logout?post_logout_redirect_uri=/"); } });

function profileFormMarkup(includeButton = true) {
  return `<div class="account-context"><small>ACCOUNT</small><strong>${escapeHtml(currentUser?.name || currentUser?.email || "Sign in with a provider first")}</strong></div><div class="form-row"><label>Grade<select name="grade">${[9, 10, 11, 12].map((grade) => `<option value="${grade}" ${Number(profile.grade) === grade ? "selected" : ""}>Grade ${grade}</option>`).join("")}</select></label><label>Location<select name="location"><option value="">Choose a location</option>${["Montreal", "Quebec", "Toronto", "Online"].map((location) => `<option ${profile.location === location ? "selected" : ""}>${location}</option>`).join("")}</select></label></div><fieldset><legend>Interests</legend><div class="interest-options">${interestOptions.map((interest) => `<label class="interest-chip"><input type="checkbox" name="interests" value="${interest}" ${profile.interests.includes(interest) ? "checked" : ""}><span>${interest}</span></label>`).join("")}</div></fieldset><label>Maximum budget<select name="budget"><option value="">Choose a budget</option>${[0, 300, 500, 1000].map((budget) => `<option value="${budget}" ${Number(profile.budget) === budget ? "selected" : ""}>${budget === 0 ? "Free only" : `Up to $${budget.toLocaleString()}`}</option>`).join("")}</select></label>${includeButton ? `<button class="primary-button" type="submit">Update recommendations <span>→</span></button><p class="form-note">Only your matching preferences are saved in this browser.</p>` : `<button class="primary-button" type="submit">Save preferences <span>→</span></button>`}`;
}
function renderProfile() {
  const form = document.querySelector("#profile-form"); form.querySelector('[name="grade"]').value = profile.grade ?? ""; form.querySelector('[name="location"]').value = profile.location; form.querySelector('[name="budget"]').value = profile.budget ?? "";
  const interestOptionsNode = document.querySelector("#interest-options"); interestOptionsNode.innerHTML = interestOptions.map((interest) => `<label class="interest-chip"><input type="checkbox" name="interests" value="${interest}" ${profile.interests.includes(interest) ? "checked" : ""}><span>${interest}</span></label>`).join("");
  document.querySelectorAll("#interest-options input").forEach((input) => { input.checked = profile.interests.includes(input.value); });
}
function renderAdmin() {
  const queue = opportunities.filter(isPendingReview); document.querySelector("#admin-large-number").textContent = String(queue.length).padStart(2, "0");
  document.querySelector("#review-list").innerHTML = queue.length ? queue.map((item) => `<article class="review-row"><div class="review-identity">${icon(item)}<div><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.organization)} · ${escapeHtml(item.verifiedAt)}</small></div></div><span class="status-badge">${reviewStatus(item) === "verification-requested" ? "Verification requested" : "Needs review"}</span><a class="text-link" href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener">Check source ↗</a><div class="review-actions"><button class="outline-button compact" data-review-action="request" data-review-id="${item.id}">Request verification</button><button class="primary-button compact" data-review-action="approve" data-review-id="${item.id}">Approve</button></div></article>`).join("") : emptyState("Queue is clear", "All demo records have a review decision.", "explore", "Browse opportunities");
}
function updateAccountIdentity() {
  const displayName = currentUser?.name || currentUser?.email || "Sign in to continue";
  const initials = currentUser ? displayName.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase() : "?";
  document.querySelector("#auth-guest-panel").hidden = Boolean(currentUser);
  document.querySelector("#auth-session-panel").hidden = !currentUser;
  document.querySelector("#sidebar-avatar").textContent = initials;
  document.querySelector("#sidebar-name").textContent = displayName;
  document.querySelector("#sidebar-profile").textContent = currentUser ? "My profile" : "No account connected";
  document.querySelector(".top-avatar").textContent = initials;
  document.querySelector("#auth-session-name").textContent = displayName;
  document.querySelector("#auth-session-details").textContent = currentUser ? `${currentUser.provider || "Connected provider"}${currentUser.email ? ` · ${currentUser.email}` : ""}` : "";
  document.querySelector("#dashboard-welcome").innerHTML = currentUser ? `Welcome, <span>${escapeHtml(displayName)}</span>.` : "Welcome to your opportunity workspace.";
}
function updateDashboardDateTime() {
  const dateNode = document.querySelector("#dashboard-date");
  if (!dateNode) return;
  const now = new Date();
  const date = new Intl.DateTimeFormat(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(now).toUpperCase();
  const time = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit", timeZoneName: "short" }).format(now);
  dateNode.textContent = `${date} · ${time}`;
}
function updateProfileCopy() {
  const hasPreferences = profile.grade !== null && profile.location && profile.interests.length && profile.budget !== null;
  const summary = hasPreferences ? `Grade ${profile.grade} · ${profile.location} · ${profile.interests.slice(0, 2).join(" + ")}` : "Complete your profile to personalize recommendations.";
  document.querySelector("#dashboard-profile").textContent = summary;
  document.querySelector("#dashboard-tags").innerHTML = hasPreferences ? `<span>Under ${formatCost(profile.budget)}</span><span>${profile.interests.length} interests</span>` : "<span>No preferences yet</span>";
  const profileSetupLink = document.querySelector("#profile-setup-link");
  if (profileSetupLink) profileSetupLink.innerHTML = `${hasPreferences ? "Edit profile" : "Set up profile"} <span>→</span>`;
  document.querySelector("#saved-count").textContent = saved.length; document.querySelector("#review-count").textContent = opportunities.filter(isPendingReview).length;
}
function showView(view) {
  activeView = view; document.querySelectorAll(".view").forEach((section) => section.classList.toggle("active", section.id === `view-${view}`)); document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === view)); const section = document.querySelector(`#view-${view}`); document.querySelector("#page-label").textContent = section.dataset.label;
  if (view === "dashboard") renderDashboard(); if (view === "explore") renderExplore(); if (view === "saved") renderSaved(); if (view === "profile") renderProfile(); if (view === "admin") renderAdmin(); window.scrollTo({ top: 0, behavior: "smooth" });
}
function toggleSaved(id) { saved = isSaved(id) ? saved.filter((savedId) => savedId !== id) : [id, ...saved]; persistAccount("saved", saved); updateProfileCopy(); showToast(isSaved(id) ? "Saved to your shortlist" : "Removed from your shortlist"); if (activeView === "dashboard") renderDashboard(); if (activeView === "explore") renderExplore(); if (activeView === "saved") renderSaved(); }
function openDetails(id) { const item = getOpportunity(id); if (!item) return; const match = matchOpportunity(item); document.querySelector("#detail-content").innerHTML = `<div class="detail-heading"><div>${icon(item)}<div><span class="category-label">${escapeHtml(item.categoryLabel)}</span><h2 id="detail-title">${escapeHtml(item.title)}</h2><p>${escapeHtml(item.organization)} · ${escapeHtml(item.location)}</p></div></div><span class="fit-score large">${match.score}<small>% fit</small></span></div><div class="detail-facts"><span><small>GRADE</small>${item.minGrade}–${item.maxGrade}</span><span><small>LOCATION</small>${escapeHtml(item.location)}</span><span><small>COST</small>${escapeHtml(formatCost(item.cost))}</span><span><small>DEADLINE</small>${escapeHtml(item.deadlineLabel)}</span></div><section class="detail-section highlight"><p class="eyebrow">WHY THIS MATCHES</p><p>${escapeHtml(match.reason)} ${escapeHtml(item.action)} is a clear next step.</p></section><section class="detail-section"><p class="eyebrow">OVERVIEW</p><p>${escapeHtml(item.description)}</p></section><section class="detail-section evidence"><p class="eyebrow">SOURCE EVIDENCE</p><p>Sample record reviewed ${escapeHtml(item.verifiedAt)}. Confirm current requirements and dates on the official source before applying.</p><a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener">Open official source ↗</a></section><div class="detail-actions"><button class="primary-button" data-save-id="${item.id}">${isSaved(item.id) ? "♥ Saved" : "♡ Save opportunity"}</button><a class="outline-button" href="${escapeHtml(item.applicationUrl)}" target="_blank" rel="noopener">View application ↗</a></div>`; document.querySelector("#detail-modal").hidden = false; }
function closeModals() { document.querySelectorAll(".modal-backdrop").forEach((modal) => { modal.hidden = true; }); }
function showToast(message) { const toast = document.querySelector("#toast"); toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600); }
function openProfileModal() { document.querySelector("#quick-profile-form").innerHTML = profileFormMarkup(false); document.querySelector("#profile-modal").hidden = false; }
function handleProfileSubmit(form) { if (!currentUser) { showView("auth"); showToast("Sign in before saving your profile"); return; } const data = new FormData(form); const interests = data.getAll("interests"); if (!data.get("grade") || !data.get("location") || data.get("budget") === "" || !interests.length) { showToast("Complete your preferences first"); return; } profile = { grade: Number(data.get("grade")), location: String(data.get("location")), interests, budget: Number(data.get("budget")) }; persistAccount("profile", profile); closeModals(); updateProfileCopy(); showToast("Profile updated — recommendations refreshed"); showView("dashboard"); }

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null; if (!target) return;
  const viewButton = target.closest("[data-view]"); if (viewButton) { event.preventDefault(); showView(viewButton.dataset.view); return; }
  const action = target.closest("[data-action]"); if (action?.dataset.action === "toggle-theme") { const next = document.documentElement.dataset.theme === "light" ? "dark" : "light"; document.documentElement.dataset.theme = next; persist("oee-theme", next); } if (action?.dataset.action === "edit-profile") openProfileModal(); if (action?.dataset.action === "close-modal") closeModals();
  const taskButton = target.closest(".mark-done"); if (taskButton) { const row = taskButton.closest(".saved-timeline-card"); row?.classList.toggle("is-complete"); taskButton.textContent = row?.classList.contains("is-complete") ? "Marked done" : "Mark as done"; return; }
  const detail = target.closest("[data-detail-id]"); if (detail) openDetails(detail.dataset.detailId);
  const saveButton = target.closest("[data-save-id]"); if (saveButton) { event.stopPropagation(); toggleSaved(saveButton.dataset.saveId); if (!document.querySelector("#detail-modal").hidden) openDetails(saveButton.dataset.saveId); }
  const reviewButton = target.closest("[data-review-action]"); if (reviewButton) { reviews[reviewButton.dataset.reviewId] = reviewButton.dataset.reviewAction === "approve" ? "approved" : "verification-requested"; persist("oee-reviews", reviews); renderAdmin(); updateProfileCopy(); showToast(reviewButton.dataset.reviewAction === "approve" ? "Record approved" : "Verification requested"); }
});
document.querySelector("#profile-form").addEventListener("submit", (event) => { event.preventDefault(); handleProfileSubmit(event.currentTarget); });
document.querySelector("#quick-profile-form").addEventListener("submit", (event) => { event.preventDefault(); handleProfileSubmit(event.currentTarget); });
document.querySelector("#search-input").addEventListener("input", renderExplore); document.querySelector("#category-filter").addEventListener("change", renderExplore); document.querySelector("#budget-filter").addEventListener("change", renderExplore);
document.querySelector("#clear-filters").addEventListener("click", () => { document.querySelector("#search-input").value = ""; document.querySelector("#category-filter").value = "all"; document.querySelector("#budget-filter").value = "all"; renderExplore(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModals(); });
document.documentElement.dataset.theme = load("oee-theme", "light"); loadAccountState(); document.querySelector("#quick-profile-form").innerHTML = profileFormMarkup(false); updateProfileCopy(); showView("dashboard");
updateDashboardDateTime(); window.setInterval(updateDashboardDateTime, 60000);
refreshAuthSession();

/* Reference-inspired list, detail, and matching surfaces. */
function resultOpportunityCard(item, match) {
  const savedState = isSaved(item.id);
  const secondaryInterest = item.interests.find((interest) => profile.interests.includes(interest)) || item.interests[0];
  return `<article class="result-card"><div class="result-main"><div class="result-thumb ${escapeHtml(item.tone)}" aria-hidden="true"><span>${escapeHtml(item.icon)}</span></div><div class="result-copy"><div class="result-title-row"><h3>${escapeHtml(item.title)}</h3><span class="verified-badge">✓ Verified</span></div><p>${escapeHtml(item.description)}</p><div class="result-tags"><span>${escapeHtml(item.categoryLabel)}</span><span>${escapeHtml(secondaryInterest)}</span></div></div></div><div class="result-metrics"><div class="result-score-ring ${escapeHtml(item.tone)}"><strong>${match.score}%</strong><small>match</small></div><div class="result-fact"><b>▣</b><strong>${escapeHtml(item.deadlineLabel)}</strong><small>Deadline</small></div><div class="result-fact"><b>＄</b><strong>${escapeHtml(formatCost(item.cost))}</strong><small>Cost</small></div><div class="result-fact"><b>⌖</b><strong>${escapeHtml(item.location)}</strong><small>Location</small></div><label class="compare-toggle"><input type="checkbox"><span>Compare</span></label><button class="text-link result-detail-link" data-detail-id="${item.id}">View details <span>↗</span></button><button class="save-button ${savedState ? "is-saved" : ""}" data-save-id="${item.id}" aria-label="${savedState ? "Remove" : "Save"} ${escapeHtml(item.title)}">${savedState ? "♥" : "♡"}</button></div></article>`;
}

function renderExplore() {
  const query = document.querySelector("#search-input").value.trim().toLowerCase(); const category = document.querySelector("#category-filter").value; const budget = document.querySelector("#budget-filter").value;
  const filtered = opportunities.filter((item) => { const searchable = `${item.title} ${item.organization} ${item.location} ${item.description} ${item.interests.join(" ")}`.toLowerCase(); return (!query || searchable.includes(query)) && (category === "all" || item.category === category) && (budget === "all" || item.cost <= Number(budget)); });
  const matches = sortedMatches(filtered); document.querySelector("#results-count").textContent = `${matches.length} opportunit${matches.length === 1 ? "y" : "ies"} found`;
  document.querySelector("#explore-list").innerHTML = matches.length ? matches.map(({ item, match }) => resultOpportunityCard(item, match)).join("") : emptyState("No eligible matches", "Try a broader search or update your profile filters.", "profile", "Edit profile");
}

function openDetails(id) {
  const item = getOpportunity(id); if (!item) return; const match = matchOpportunity(item); const savedState = isSaved(item.id);
  const interestText = item.interests.slice(0, 3).join(" · ");
  const location = profile.location || item.location;
  const grade = profile.grade || item.minGrade;
  document.querySelector("#detail-content").innerHTML = `<div class="detail-back-row"><button class="detail-back" type="button" data-action="close-modal">← Back to results</button></div><div class="detail-intro"><div class="detail-heading"><div><span class="category-label">${escapeHtml(item.categoryLabel)} · ${escapeHtml(interestText)}</span><h2 id="detail-title">${escapeHtml(item.title)}</h2><p>${escapeHtml(item.organization)} · ${escapeHtml(item.location)}</p><div class="detail-meta-line"><span>⌖ ${escapeHtml(item.location)} or online</span><span>▣ ${escapeHtml(item.categoryLabel)}</span><span>♙ Grades ${item.minGrade}–${item.maxGrade}</span></div></div></div><div class="detail-score-ring large ${escapeHtml(item.tone)}"><strong>${match.score}</strong><small>/100<br>match</small></div></div><div class="detail-feature-grid"><div class="detail-hero-visual ${escapeHtml(item.tone)}"><span>${escapeHtml(item.icon)}</span><small>EXPLORE<br>CONTRIBUTE<br>GROW</small></div><div class="detail-side-stack"><aside class="match-panel"><p class="eyebrow">WHY THIS MATCHES YOU</p><h3>${match.score}% fit for your profile</h3><ul><li><span>✓</span> Grade ${escapeHtml(String(grade))} eligible</li><li><span>✓</span> ${escapeHtml(location)} or online</li><li><span>✓</span> ${escapeHtml(item.interests[0])} interest</li><li><span>✓</span> Within your budget</li></ul></aside><section class="detail-ai-panel"><h3><span>ⓘ</span> How your match works</h3><p>We compare the opportunity details with your profile, including location, interests, eligibility, and budget, to explain why it may be a useful fit. This is guidance, not a guarantee of acceptance.</p></section><div class="detail-actions"><button class="primary-button" data-save-id="${item.id}">${savedState ? "♥ Saved" : "♡ Save opportunity"}</button><a class="outline-button" href="${escapeHtml(item.applicationUrl)}" target="_blank" rel="noopener">Open application ↗</a></div></div></div><div class="detail-card-grid"><section class="detail-info-card"><h3><span>▧</span>Overview</h3><p>${escapeHtml(item.description)} You’ll get a practical way to learn, contribute, and connect the experience to your next step.</p></section><section class="detail-info-card"><h3><span>☷</span>What you’ll do</h3><ul class="detail-bullets"><li>Work on a focused project with guidance and feedback.</li><li>Build evidence of what you learned and contributed.</li><li>Share a clear next step with your team or mentor.</li></ul></section><section class="detail-info-card"><h3><span>♧</span>Eligibility</h3><ul class="detail-bullets"><li>Grades ${item.minGrade}–${item.maxGrade}</li><li>Interest in ${escapeHtml(item.interests.slice(0, 2).join(" and "))}</li><li>Open to students in ${escapeHtml(item.location)} or online</li><li>No prior experience required</li></ul></section><section class="detail-info-card"><h3><span>▣</span>Deadline</h3><strong>${escapeHtml(item.deadlineLabel)}</strong><p>Confirm the current deadline and requirements on the official source.</p></section><section class="detail-info-card"><h3><span>◇</span>Cost</h3><strong>${escapeHtml(formatCost(item.cost))}</strong><p>Review any travel or participation costs before applying.</p></section><section class="detail-info-card source-card"><h3><span>↗</span>Source & more information</h3><strong class="source-status">● Source information</strong><p>Record reviewed ${escapeHtml(item.verifiedAt)}. Confirm current details before applying.</p><a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener">View source →</a></section></div>`;
  document.querySelector("#detail-modal").hidden = false;
}

function renderSaved() {
  const items = saved.map(getOpportunity).filter(Boolean);
  document.querySelector("#saved-large-number").textContent = String(items.length).padStart(2, "0");
  document.querySelector("#saved-summary-title").textContent = items.length ? `${items.length} opportunit${items.length === 1 ? "y" : "ies"} in your shortlist` : "Nothing saved yet";
  document.querySelector("#saved-summary-copy").textContent = items.length ? "Stay organized, take action, and never miss a deadline." : "Explore the library and save an opportunity to see it here.";
  const savedRows = items.map((item) => {
    const rolling = item.deadlineLabel === "Rolling intake";
    const dateParts = item.deadlineLabel.split(" ");
    const status = rolling ? { label: "Rolling", tone: "green", icon: "↻" } : item.status === "needs-review" ? { label: "Review", tone: "blue", icon: "◷" } : { label: "Plan", tone: "orange", icon: "◷" };
    return `<article class="saved-timeline-card"><div class="saved-date"><strong>${escapeHtml(rolling ? "ROLLING" : dateParts[0].toUpperCase())}</strong><small>${escapeHtml(rolling ? "" : dateParts[dateParts.length - 1])}</small></div><div class="timeline-track"><span class="timeline-dot ${escapeHtml(status.tone)}"></span></div><div class="saved-opportunity-card"><div class="saved-card-main">${icon(item)}<div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p><div class="result-tags"><span>${escapeHtml(item.categoryLabel)}</span><span>${escapeHtml(item.location)}</span><span>${item.maxGrade - item.minGrade > 1 ? "All students" : `Grade ${item.minGrade}`}</span></div></div></div><div class="next-step"><span class="saved-status ${escapeHtml(status.tone)}"><b>${status.icon}</b>${status.label}</span><small>NEXT STEP</small><label><input type="checkbox" data-task-id="${item.id}"> <span>${escapeHtml(item.action)}</span></label><button class="mark-done" type="button" data-task-id="${item.id}">Mark as done</button></div></div><button class="save-button is-saved saved-remove" data-save-id="${item.id}" aria-label="Remove ${escapeHtml(item.title)}">♥</button></article>`;
  }).join("");
  const calendarDays = ["27", "28", "29", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"].map((day, index) => `<span class="${day === "18" ? "today" : ""} ${index < 4 ? "muted-day" : ""}">${day}</span>`).join("");
  document.querySelector("#saved-list").innerHTML = items.length ? `<div class="saved-timeline">${savedRows}</div><aside class="calendar-card"><div class="calendar-header"><button type="button" aria-label="Previous month">‹</button><strong>October 2026</strong><button type="button" aria-label="Next month">›</button></div><div class="calendar-week"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div><div class="calendar-days">${calendarDays}</div><div class="calendar-callout"><span>▣</span><strong>Stay on track</strong><p>Keep your opportunities in one place and never miss what matters.</p></div></aside>` : emptyState("Build your shortlist", "The best shortlist is small enough to act on.", "explore", "Explore opportunities");
}
