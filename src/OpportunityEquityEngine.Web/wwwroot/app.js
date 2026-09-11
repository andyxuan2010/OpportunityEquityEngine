const opportunities = [
  { id: "ai-design", title: "Montreal AI Design Challenge", organization: "OEE Demo Team", category: "competition", categoryLabel: "Competition", icon: "✦", tone: "blue", location: "Montreal", locations: ["Montreal", "Online"], interests: ["AI", "Design", "Technology"], minGrade: 9, maxGrade: 12, cost: 0, deadline: "2026-10-18", deadlineLabel: "Oct 18, 2026", description: "A weekend team challenge to identify a real student problem and prototype a thoughtful AI-assisted solution.", action: "Build a two-minute prototype", sourceUrl: "https://www.youthscience.ca/science-fairs/cwsf/", applicationUrl: "https://www.youthscience.ca/science-fairs/cwsf/", verifiedAt: "Oct 02, 2026", status: "approved" },
  { id: "biomed", title: "Montreal Biomedical Research Program", organization: "OEE Demo Team", category: "research", categoryLabel: "Research", icon: "⌬", tone: "teal", location: "Montreal", locations: ["Montreal"], interests: ["Medicine", "Research", "Biology"], minGrade: 10, maxGrade: 12, cost: 0, deadline: "2027-02-01", deadlineLabel: "Feb 01, 2027", description: "An introduction to lab thinking, literature review, and research communication through a mentored project.", action: "Outline a research question", sourceUrl: "https://www.mcgill.ca/science/undergraduate", applicationUrl: "https://www.mcgill.ca/science/undergraduate", verifiedAt: "Sep 28, 2026", status: "approved" },
  { id: "mcgill", title: "McGill Entrance Scholarships", organization: "McGill University", category: "scholarship", categoryLabel: "Scholarship", icon: "◇", tone: "purple", location: "Montreal", locations: ["Montreal"], interests: ["University", "Academics"], minGrade: 11, maxGrade: 12, cost: 0, deadline: "2027-01-15", deadlineLabel: "Jan 15, 2027", description: "A starting point for researching entrance awards, eligibility, and the application timeline for future university study.", action: "Review eligibility criteria", sourceUrl: "https://www.mcgill.ca/undergraduate-admissions/scholarships-aid", applicationUrl: "https://www.mcgill.ca/undergraduate-admissions/scholarships-aid", verifiedAt: "Sep 30, 2026", status: "approved" },
  { id: "ocean", title: "Ocean Wise Youth Program", organization: "Ocean Wise", category: "volunteering", categoryLabel: "Volunteering", icon: "≈", tone: "green", location: "Online", locations: ["Online", "Vancouver"], interests: ["Environment", "Leadership", "Research"], minGrade: 9, maxGrade: 12, cost: 0, deadline: null, deadlineLabel: "Rolling intake", description: "Explore ocean action, build community, and turn environmental learning into a small local project.", action: "Choose one ocean issue", sourceUrl: "https://ocean.org/action/", applicationUrl: "https://ocean.org/action/", verifiedAt: "Oct 01, 2026", status: "needs-review" },
  { id: "cemc", title: "Waterloo CEMC Contests", organization: "University of Waterloo", category: "competition", categoryLabel: "Competition", icon: "∑", tone: "orange", location: "Online", locations: ["Online"], interests: ["Math", "Coding", "Academics"], minGrade: 9, maxGrade: 12, cost: 0, deadline: "2026-11-20", deadlineLabel: "Nov 20, 2026", description: "Practice mathematical problem solving through structured contests that can become a strong learning milestone.", action: "Try a past contest", sourceUrl: "https://cemc.uwaterloo.ca/contests/contests.html", applicationUrl: "https://cemc.uwaterloo.ca/contests/contests.html", verifiedAt: "Sep 27, 2026", status: "approved" },
  { id: "ai-studio", title: "Concordia Summer AI Studio", organization: "Concordia University", category: "summer", categoryLabel: "Summer program", icon: "▣", tone: "blue", location: "Montreal", locations: ["Montreal"], interests: ["AI", "Design", "Technology"], minGrade: 10, maxGrade: 12, cost: 250, deadline: "2027-03-15", deadlineLabel: "Mar 15, 2027", description: "A guided summer studio for learning AI concepts through creative prototyping, critique, and presentation.", action: "Save a project idea", sourceUrl: "https://www.concordia.ca/academics/undergraduate.html", applicationUrl: "https://www.concordia.ca/academics/undergraduate.html", verifiedAt: "Sep 25, 2026", status: "needs-review" },
  { id: "learning-code", title: "Canada Learning Code Youth Program", organization: "Canada Learning Code", category: "summer", categoryLabel: "Summer program", icon: "⌨", tone: "yellow", location: "Online", locations: ["Online", "Toronto"], interests: ["Coding", "Technology", "Design"], minGrade: 9, maxGrade: 12, cost: 0, deadline: null, deadlineLabel: "Rolling intake", description: "Accessible coding activities and community support for young people who want to make their first digital project.", action: "Pick a first build", sourceUrl: "https://www.canadalearningcode.ca/", applicationUrl: "https://www.canadalearningcode.ca/", verifiedAt: "Sep 29, 2026", status: "approved" },
  { id: "climate", title: "Youth Climate Action Lab", organization: "OEE Demo Team", category: "volunteering", categoryLabel: "Volunteering", icon: "☼", tone: "green", location: "Montreal", locations: ["Montreal", "Online"], interests: ["Environment", "Leadership", "Design"], minGrade: 9, maxGrade: 12, cost: 40, deadline: "2026-12-01", deadlineLabel: "Dec 01, 2026", description: "Turn a climate concern into a scoped action plan with peers, evidence, and a practical first experiment.", action: "Name the change you want", sourceUrl: "https://davidsuzuki.org/take-action/", applicationUrl: "https://davidsuzuki.org/take-action/", verifiedAt: "Sep 26, 2026", status: "needs-review" },
  { id: "open-house", title: "University Open House Planning Sprint", organization: "OEE Demo Team", category: "scholarship", categoryLabel: "University planning", icon: "⌂", tone: "purple", location: "Online", locations: ["Online", "Montreal"], interests: ["University", "Design", "Leadership"], minGrade: 10, maxGrade: 12, cost: 0, deadline: "2026-10-28", deadlineLabel: "Oct 28, 2026", description: "A lightweight planning sprint for comparing programs, preparing questions, and making a realistic campus-visit plan.", action: "Compare two programs", sourceUrl: "https://www.educanada.ca/index.aspx", applicationUrl: "https://www.educanada.ca/index.aspx", verifiedAt: "Sep 24, 2026", status: "approved" }
];

const opportunityIntros = {
  "ai-design": "Work with a small team to identify a real student problem, explore how AI can help, and prototype a thoughtful solution. Practice research, design, collaboration, and presentation skills in a supportive challenge.",
  biomed: "Learn how biomedical researchers ask questions, review evidence, and communicate findings. Work through a mentored project that connects medicine, science, and technology to real health challenges.",
  mcgill: "Explore entrance scholarship pathways and build a realistic university funding plan. Review eligibility, important dates, and application steps so you can prepare early and make informed choices.",
  ocean: "Explore ocean action, build community, and turn an environmental concern into a local project. Gain practical experience in teamwork, leadership, research, and communicating positive change.",
  cemc: "Practice mathematical problem solving through structured contests designed to stretch your thinking. Build confidence, compare strategies, and turn each challenge into evidence of your curiosity and persistence.",
  "ai-studio": "Learn core AI ideas through creative prototyping, guided feedback, and presentation. Develop a project from an early concept into a clearer solution while working with peers and mentors.",
  "learning-code": "Start with accessible coding activities and build a small digital project from the ground up. Learn through guided practice, community support, and a welcoming path for students who are new to technology.",
  climate: "Turn a climate concern into a focused action plan with peers, evidence, and a practical first experiment. Explore environmental leadership while learning how research can support community change.",
  "open-house": "Compare university programs, prepare thoughtful questions, and make a realistic campus-visit plan. Use this planning sprint to connect your interests with possible study paths and next steps.",
};

const interestOptions = ["AI", "Medicine", "Research", "Coding", "Design", "Environment", "Leadership", "University", "Finance", "Technology", "Science", "Mathematics", "Business", "Entrepreneurship", "Health & Wellness", "Arts & Culture", "Communication", "Social Impact", "Career Development"];
const opportunityCategoryOptions = [
  { value: "scholarship", label: "Scholarships" },
  { value: "competition", label: "Competitions" },
  { value: "research", label: "Research Programs" },
  { value: "volunteering", label: "Volunteering" },
  { value: "summer", label: "Summer Programs" },
  { value: "university-preparation", label: "University-Preparation" },
  { value: "job", label: "Jobs" },
  { value: "event", label: "Events" },
  { value: "all", label: "ALL" }
];
const opportunityImages = {
  competition: "./assets/opportunities/competition-v2.png",
  research: "./assets/opportunities/research.png",
  summer: "./assets/opportunities/coding.png",
  scholarship: "./assets/opportunities/research.png",
  volunteering: "./assets/opportunities/competition.png"
};
const defaultCategoryValues = opportunityCategoryOptions.filter((option) => option.value !== "all").map((option) => option.value);
const defaultInterestValues = [...interestOptions];
const emptyProfile = { categories: ["all", ...defaultCategoryValues], grade: null, interests: ["all", ...defaultInterestValues], location: "Montreal", delivery: "any", transportation: "city", language: "English", accessibility: "No specific needs", budget: 0 };
const emptyAccountDetails = { name: "", phone: "", address: "", email: "", language: "", grade: "", school: "", onboardingStatus: "pending" };
const reviewDefaults = Object.fromEntries(opportunities.filter((item) => item.status === "needs-review").map((item) => [item.id, "needs-review"]));
let currentUser = null;
let profile = { ...emptyProfile };
let accountDetails = { ...emptyAccountDetails };
let saved = [];
let reviews = load("oee-reviews", reviewDefaults);
let activeView = "dashboard";
let currentDetailId = null;
const languageTranslations = {
  fr: {
    "My Dashboard": "Mon tableau de bord", "Find opportunities": "Trouver des occasions", "Saved": "Enregistrés", "My interests": "Mes intérêts", "Account details": "Détails du compte", Resources: "Ressources", "Review queue": "File de révision", "Sign in to continue": "Connectez-vous pour continuer", "No account connected": "Aucun compte connecté", "Demo data": "Données de démonstration", "Guidance, not a guarantee.": "Conseils, sans garantie.", Appearance: "Apparence", "Log off": "Se déconnecter", "← Documentation": "← Documentation", Home: "Accueil", Explore: "Explorer", Prototype: "Prototype", "Prototype mode": "Mode prototype", Dashboard: "Tableau de bord", Account: "Compte", "Saved opportunities": "Occasions enregistrées", "Review queue": "File de révision", "Welcome to your opportunity workspace.": "Bienvenue dans votre espace d’occasions.", "Explore. Learn. Apply. A brighter future is within reach.": "Explorez. Apprenez. Postulez. Un avenir meilleur est à portée de main.", "Edit profile": "Modifier le profil", "Complete your account details": "Complétez les détails de votre compte", "Add details": "Ajouter des détails", "Skip for now": "Ignorer pour l’instant", "YOUR MATCHING PROFILE": "VOTRE PROFIL DE CORRESPONDANCE", "Complete your profile to personalize recommendations.": "Complétez votre profil pour personnaliser vos recommandations.", "Your interests and preferences shape the opportunities we show you.": "Vos intérêts et préférences influencent les occasions que nous vous présentons.", "No preferences yet": "Aucune préférence pour l’instant", "START EXPLORING": "COMMENCEZ À EXPLORER", "Find opportunities that fit you": "Trouvez des occasions qui vous conviennent", "Search programs, internships, scholarships and more...": "Rechercher des programmes, des stages, des bourses et plus encore...", Search: "Rechercher", "Different backgrounds.": "Différents parcours.", "Brighter futures.": "Des avenirs plus brillants.", "Opportunities for everyone.": "Des occasions pour tous.", "PERSONALIZED FOR YOU": "PERSONNALISÉ POUR VOUS", "Recommended for you": "Recommandé pour vous", "View all": "Voir tout", "KEEP MOVING": "CONTINUEZ À AVANCER", "Next deadlines": "Prochaines échéances", "YOUR NEXT STEP": "VOTRE PROCHAINE ÉTAPE", "Turn a match into momentum.": "Transformez une correspondance en élan.", "Explore the library": "Explorer la bibliothèque", Discover: "Découvrir", Understand: "Comprendre", Act: "Agir", "OPPORTUNITY LIBRARY": "BIBLIOTHÈQUE D’OCCASIONS", "Explore what could be next.": "Explorez la suite.", "All categories": "Toutes les catégories", "Any budget": "Tout budget", "Free only": "Gratuit seulement", "Under $300": "Moins de 300 $", Clear: "Effacer", "Sorted by fit for your profile": "Triées selon votre profil", "PLAN · APPLY · GROW": "PLANIFIER · POSTULER · PROGRESSER", "My saved opportunities": "Mes occasions enregistrées", "Stay organized, take action, and never miss a deadline.": "Restez organisé, passez à l’action et ne manquez aucune échéance.", "Find a match": "Trouver une correspondance", "Nothing saved yet": "Rien d’enregistré pour l’instant", "Explore the library and save an opportunity to see it here.": "Explorez la bibliothèque et enregistrez une occasion pour la voir ici.", "PERSONALIZED OPPORTUNITIES": "OCCASIONS PERSONNALISÉES", "Let’s find": "Trouvons", opportunities: "des occasions", "for you.": "pour vous.", "Personalized opportunities. A brighter tomorrow.": "Des occasions personnalisées. Un avenir meilleur.", "Your interests. More possibilities.": "Vos intérêts. Plus de possibilités.", "Student profile": "Profil étudiant", "What types of opportunities interest you?": "Quels types d’occasions vous intéressent?", "Choose one or more categories, or select All to see every type.": "Choisissez une ou plusieurs catégories, ou sélectionnez Tout pour voir tous les types.", Continue: "Continuer", Back: "Retour", "What topics interest you?": "Quels sujets vous intéressent?", "Select the subjects and themes you would like to explore.": "Sélectionnez les sujets et thèmes que vous souhaitez explorer.", "Access preferences": "Préférences d’accès", "We have added practical defaults. You can change any of them before saving.": "Nous avons ajouté des choix pratiques par défaut. Vous pouvez les modifier avant d’enregistrer.", "Account details": "Détails du compte", "Keep your account up to date.": "Gardez votre compte à jour.", "Your account information is separate from your opportunity-matching profile and can be completed whenever you are ready.": "Les informations de votre compte sont distinctes de votre profil de correspondance et peuvent être complétées quand vous le souhaitez.", "Personal information": "Informations personnelles", "Quick sign-up is always available. You can update these details later.": "L’inscription rapide est toujours disponible. Vous pourrez modifier ces détails plus tard.", "Save account details": "Enregistrer les détails du compte", "ACCOUNT VS PROFILE": "COMPTE ET PROFIL", "Two kinds of information, one clear experience.": "Deux types d’informations, une expérience claire.", "Your privacy matters": "Votre vie privée compte", "WELCOME": "BIENVENUE", "Sign up or log in to continue.": "Inscrivez-vous ou connectez-vous pour continuer.", "Create your free opportunity workspace or return to your profile with your Google account.": "Créez gratuitement votre espace d’occasions ou retrouvez votre profil avec votre compte Google.", "Continue with Google": "Continuer avec Google", "ACTIVE SESSION": "SESSION ACTIVE", "Your account": "Votre compte", "You are signed in. Your account identity comes from your connected provider.": "Vous êtes connecté. Votre identité provient de votre fournisseur connecté.", "Sign out": "Se déconnecter", "Search opportunities, fields, or locations...": "Rechercher des occasions, des domaines ou des lieux...", "No specific needs": "Aucun besoin particulier", "Online or in-person": "En ligne ou en personne", "Within my city": "Dans ma ville", English: "Anglais", French: "Français", "Other": "Autre", "Other / not listed": "Autre / non répertorié", "Step 1 of 4 · Opportunity types": "Étape 1 sur 4 · Types d’occasions", "Step 2 of 4 · Student profile": "Étape 2 sur 4 · Profil étudiant", "Step 3 of 4 · Topic interests": "Étape 3 sur 4 · Sujets d’intérêt", "Step 4 of 4 · Access preferences": "Étape 4 sur 4 · Préférences d’accès"
  },
  zh: {
    "My Dashboard": "我的仪表板", "Find opportunities": "查找机会", Saved: "已保存", "My interests": "我的兴趣", "Account details": "账户详情", Resources: "资源", "Review queue": "审核队列", "Sign in to continue": "登录后继续", "No account connected": "未连接账户", "Demo data": "演示数据", "Guidance, not a guarantee.": "仅供参考，不代表保证。", "Log off": "退出登录", Home: "首页", Explore: "探索", Prototype: "原型", "Prototype mode": "演示模式", Dashboard: "仪表板", Account: "账户", "Saved opportunities": "已保存的机会", "Welcome to your opportunity workspace.": "欢迎来到您的机会空间。", "Explore. Learn. Apply. A brighter future is within reach.": "探索、学习、申请。更明亮的未来触手可及。", "Edit profile": "编辑资料", "Complete your account details": "完善账户详情", "Add details": "添加详情", "Skip for now": "暂时跳过", "YOUR MATCHING PROFILE": "您的匹配资料", "Complete your profile to personalize recommendations.": "完善资料以获得个性化推荐。", "Your interests and preferences shape the opportunities we show you.": "您的兴趣和偏好决定我们为您展示的机会。", "No preferences yet": "暂未设置偏好", "START EXPLORING": "开始探索", "Find opportunities that fit you": "寻找适合您的机会", "Search programs, internships, scholarships and more...": "搜索项目、实习、奖学金等机会……", Search: "搜索", "Different backgrounds.": "不同背景。", "Brighter futures.": "更明亮的未来。", "Opportunities for everyone.": "人人都有机会。", "PERSONALIZED FOR YOU": "为您个性化推荐", "Recommended for you": "为您推荐", "View all": "查看全部", "KEEP MOVING": "继续前进", "Next deadlines": "即将截止", "YOUR NEXT STEP": "您的下一步", "Turn a match into momentum.": "把匹配变成行动。", "Explore the library": "探索机会库", Discover: "发现", Understand: "了解", Act: "行动", "OPPORTUNITY LIBRARY": "机会库", "Explore what could be next.": "探索下一步可能性。", "All categories": "所有类别", "Any budget": "不限预算", "Free only": "仅限免费", "Under $300": "低于 300 美元", Clear: "清除", "Sorted by fit for your profile": "按资料匹配度排序", "PLAN · APPLY · GROW": "规划 · 申请 · 成长", "My saved opportunities": "我保存的机会", "Stay organized, take action, and never miss a deadline.": "井然有序地行动，不错过任何截止日期。", "Find a match": "寻找匹配机会", "Nothing saved yet": "暂未保存机会", "Explore the library and save an opportunity to see it here.": "探索机会库并保存机会后，它们会显示在这里。", "PERSONALIZED OPPORTUNITIES": "个性化机会", "Let’s find": "让我们寻找", opportunities: "机会", "for you.": "适合您的机会。", "Personalized opportunities. A brighter tomorrow.": "个性化机会，更明亮的明天。", "Your interests. More possibilities.": "您的兴趣，更多可能。", "Student profile": "学生资料", "What types of opportunities interest you?": "您对哪些机会类型感兴趣？", "Choose one or more categories, or select All to see every type.": "选择一个或多个类别，或选择“全部”查看所有类型。", Continue: "继续", Back: "返回", "What topics interest you?": "您对哪些主题感兴趣？", "Select the subjects and themes you would like to explore.": "选择您想探索的学科和主题。", "Access preferences": "访问偏好", "We have added practical defaults. You can change any of them before saving.": "我们已设置实用的默认选项，保存前可以随时修改。", "Keep your account up to date.": "及时更新您的账户信息。", "Your account information is separate from your opportunity-matching profile and can be completed whenever you are ready.": "账户信息与机会匹配资料分开，您可以在方便时完成。", "Personal information": "个人信息", "Quick sign-up is always available. You can update these details later.": "您可以快速注册，之后再补充或修改这些信息。", "Save account details": "保存账户详情", "ACCOUNT VS PROFILE": "账户与资料", "Two kinds of information, one clear experience.": "两类信息，带来清晰的使用体验。", "Your privacy matters": "您的隐私很重要", "WELCOME": "欢迎", "Sign up or log in to continue.": "注册或登录后继续。", "Create your free opportunity workspace or return to your profile with your Google account.": "免费创建您的机会空间，或使用 Google 账户返回您的资料。", "Continue with Google": "使用 Google 继续", "ACTIVE SESSION": "当前会话", "Your account": "您的账户", "You are signed in. Your account identity comes from your connected provider.": "您已登录。账户身份来自您连接的登录服务。", "Sign out": "退出登录", "Search opportunities, fields, or locations...": "搜索机会、领域或地点……", "No specific needs": "无特殊需求", "Online or in-person": "线上或线下", "Within my city": "在我的城市范围内", English: "英语", French: "法语", "Other": "其他", "Other / not listed": "其他 / 未列出", "Step 1 of 4 · Opportunity types": "第 1 步，共 4 步 · 机会类型", "Step 2 of 4 · Student profile": "第 2 步，共 4 步 · 学生资料", "Step 3 of 4 · Topic interests": "第 3 步，共 4 步 · 兴趣主题", "Step 4 of 4 · Access preferences": "第 4 步，共 4 步 · 访问偏好",
    "What grade or level are you in?": "您目前处于哪个年级或阶段？", "Choose a grade or level": "选择年级或阶段", "Below Grade 9": "九年级以下", "Grade 9": "九年级", "Grade 10": "十年级", "Grade 11": "十一年级", "Grade 12": "十二年级", "CEGEP 1": "CEGEP 1", "CEGEP 2": "CEGEP 2", "University or higher": "大学或以上", "Choose one or more categories, or select All to see every type.": "选择一个或多个类别，或选择“全部”查看所有类型。", ALL: "全部", Scholarships: "奖学金", Competitions: "竞赛", "Research Programs": "研究项目", "Research programs": "研究项目", Volunteering: "志愿服务", "Summer Programs": "暑期项目", "Summer programs": "暑期项目", "University-Preparation": "大学准备", "University preparation": "大学准备", Jobs: "工作", Events: "活动", "All categories": "所有类别", AI: "人工智能", Medicine: "医学", Research: "研究", Coding: "编程", Design: "设计", Environment: "环境", Leadership: "领导力", University: "大学", Finance: "金融", Technology: "科技", Science: "科学", Mathematics: "数学", Business: "商业", Entrepreneurship: "创业", "Health & Wellness": "健康与福祉", "Arts & Culture": "艺术与文化", Communication: "沟通", "Social Impact": "社会影响", "Career Development": "职业发展", "Which city are you in?": "您所在的城市是？", Montreal: "蒙特利尔", Quebec: "魁北克", Toronto: "多伦多", Vancouver: "温哥华", Online: "线上", "Preferred format": "偏好形式", "Online only": "仅线上", "In-person preferred": "优先线下", "Transportation range": "交通范围", "Within my region": "在我的地区范围内", Anywhere: "不限地点", "Preferred language": "偏好语言", "English and French": "英语和法语", "Accessibility needs": "无障碍需求", "Prefer accessible options": "优先选择无障碍选项", "I will share details with the provider": "我会向提供方说明详情", "Maximum budget": "最高预算", "Up to $300": "最高 300 美元", "Up to $500": "最高 500 美元", "Up to $1,000": "最高 1,000 美元", "See my opportunities": "查看我的机会", "Your privacy matters": "您的隐私很重要", "We only use the information needed to match you with relevant opportunities.": "我们只使用为您匹配相关机会所需的信息。", "Your matching preferences are saved in this browser.": "您的匹配偏好会保存在此浏览器中。",
    "Name": "姓名", "Phone number": "电话号码", "Your name": "您的姓名", "Your phone number": "您的电话号码", Email: "电子邮箱", Address: "地址", "Your address": "您的地址", "Language preference": "语言偏好", "Choose a language": "选择语言", School: "学校", "Choose your school": "选择您的学校", Grade: "年级", "Choose a grade": "选择年级", Password: "密码", "Managed by Google": "由 Google 管理", "This site never collects or stores your Google password.": "本网站不会收集或存储您的 Google 密码。", OPTIONAL: "可选", SAVED: "已保存", "Save account details": "保存账户详情", "Skip for now": "暂时跳过",
    "No eligible matches": "没有符合条件的匹配", "Try a broader search or update your profile filters.": "尝试扩大搜索范围或更新资料筛选条件。", "Edit profile": "编辑资料", "opportunities found": "个机会已找到", "Sorted by fit for your profile": "按资料匹配度排序", "View details ↗": "查看详情 ↗", "Save opportunity": "保存机会", "Saved": "已保存", "Saved to your shortlist": "已保存到您的候选清单", "Removed from your shortlist": "已从候选清单移除", "Nothing saved yet": "暂未保存机会", "Build your shortlist": "建立您的候选清单", "The best shortlist is small enough to act on.": "最好的候选清单应当简洁且便于行动。", "Stay organized, take action, and never miss a deadline.": "井然有序地行动，不错过任何截止日期。", "Save an opportunity to keep its next deadline close.": "保存机会，随时掌握下一个截止日期。", "Stay on track": "保持进度", "Keep your opportunities in one place and never miss what matters.": "把机会集中管理，不错过重要事项。", "Queue is clear": "审核队列已清空", "All demo records have a review decision.": "所有演示记录都已完成审核决定。", "Browse opportunities": "浏览机会", "Verification requested": "已请求验证", "Needs review": "需要审核", "Check source ↗": "查看来源 ↗", "Request verification": "请求验证", Approve: "批准", "Record approved": "记录已批准", "Verification requested": "已请求验证", "Admin-only prototype view": "仅限管理员的原型视图", "Review before publishing.": "发布前进行审核。", "A small quality-control surface for checking extracted opportunity records.": "用于检查提取的机会记录的简易质量控制界面。", "More opportunities. A brighter tomorrow.": "更多机会，更明亮的明天。", "Good opportunities should be easier to find.": "优质机会应该更容易找到。", "Find opportunities": "查找机会", "Save the next step": "保存下一步", "Review with care": "认真审核", "Open review queue ↗": "打开审核队列 ↗", "Sign in before editing your account": "编辑账户前请先登录", "Account details saved": "账户详情已保存", "You can complete your account details later": "您可以稍后完善账户详情", "Sign in before saving your profile": "保存资料前请先登录", "Complete each profile step before continuing": "请完成每个资料步骤后再继续", "Profile updated — recommendations refreshed": "资料已更新，推荐已刷新"
  }
};
Object.assign(languageTranslations.zh, { "Documentation ↗": "文档 ↗", Chinese: "中文", Competition: "竞赛", Research: "研究", Scholarship: "奖学金", Volunteering: "志愿服务", "Summer program": "暑期项目", "University planning": "大学规划", "OEE Demo Team": "OEE 演示团队", "Source & more information": "来源与更多信息", Overview: "概览", "What you’ll do": "您将做什么", Eligibility: "资格要求", Deadline: "截止日期", Cost: "费用", "Open application ↗": "打开申请 ↗", "How your match works": "匹配方式", "WHY THIS MATCHES YOU": "为什么适合您", "Source information": "来源信息", "View source →": "查看来源 →" });
Object.assign(languageTranslations.fr, { "Create your free opportunity workspace or return to your profile with a connected account.": "Créez gratuitement votre espace d’occasions ou retrouvez votre profil avec un compte connecté.", "Choose a connected provider. Provider credentials must be enabled in App Service Easy Auth; Instagram is reserved for a future custom integration.": "Choisissez un fournisseur connecté. Les identifiants doivent être activés dans Easy Auth d’App Service; Instagram est réservé à une future intégration personnalisée.", "Coming soon": "Bientôt disponible", "A CLEARER START": "UN DÉPART PLUS CLAIR", "Find what could be next.": "Trouvez votre prochaine possibilité.", "Save your interests once, then discover opportunities that are easier to compare and act on.": "Enregistrez vos intérêts une fois, puis découvrez des occasions plus faciles à comparer et à saisir." });
Object.assign(languageTranslations.zh, { "Create your free opportunity workspace or return to your profile with a connected account.": "免费创建您的机会空间，或使用已连接的账户返回您的资料。", "Choose a connected provider. Provider credentials must be enabled in App Service Easy Auth; Instagram is reserved for a future custom integration.": "请选择已连接的登录服务。必须先在 App Service Easy Auth 中启用对应凭据；Instagram 将在未来通过自定义集成支持。", "Coming soon": "即将推出", "A CLEARER START": "更清晰的开始", "Find what could be next.": "发现下一步可能性。", "Save your interests once, then discover opportunities that are easier to compare and act on.": "一次保存您的兴趣，发现更容易比较并采取行动的机会。" });
let currentLanguage = load("oee-language", "en");
if (!["en", "fr", "zh"].includes(currentLanguage)) currentLanguage = "en";
const originalTextNodes = new WeakMap();
const idleTimeoutMs = 10 * 60 * 1000;
let idleTimer = null;
let lastActivityAt = Date.now();
function translationKey(value) { return String(value || "").replace(/\s+/g, " ").trim(); }
function translatePage(language = currentLanguage) {
  currentLanguage = ["en", "fr", "zh"].includes(language) ? language : "en";
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : currentLanguage;
  const dictionary = languageTranslations[currentLanguage] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (node.parentElement?.closest("script,style,#language-selector")) return;
    const source = originalTextNodes.get(node) || translationKey(node.nodeValue);
    originalTextNodes.set(node, source);
    const translated = dictionary[source] || source;
    const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  });
  const selector = document.querySelector("#language-selector");
  if (selector) selector.value = currentLanguage;
}
function stopIdleLogout() { if (idleTimer) window.clearTimeout(idleTimer); idleTimer = null; }
function signOut() { stopIdleLogout(); window.location.assign("/.auth/logout?post_logout_redirect_uri=/"); }
function enforceIdleLogout() {
  if (!currentUser) return stopIdleLogout();
  const remaining = idleTimeoutMs - (Date.now() - lastActivityAt);
  if (remaining <= 0) return signOut();
  stopIdleLogout();
  idleTimer = window.setTimeout(enforceIdleLogout, remaining + 50);
}
function startIdleLogout() { lastActivityAt = Date.now(); enforceIdleLogout(); }
function recordActivity() {
  if (!currentUser) return;
  const now = Date.now();
  if (now - lastActivityAt < 1000) return;
  lastActivityAt = now;
  enforceIdleLogout();
}
["click", "keydown", "pointerdown", "pointermove", "scroll", "touchstart"].forEach((eventName) => window.addEventListener(eventName, recordActivity, { passive: true }));
document.addEventListener("visibilitychange", enforceIdleLogout);

function load(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; } catch { return fallback; }
}
function normalizeProfile(value) {
  if (!value || typeof value !== "object") return { ...emptyProfile, categories: [...emptyProfile.categories], interests: [...emptyProfile.interests] };
  const categories = Array.isArray(value.categories) && value.categories.length ? value.categories : [...emptyProfile.categories];
  const interests = Array.isArray(value.interests) && value.interests.length ? value.interests : [...emptyProfile.interests];
  return { ...emptyProfile, categories: categories.includes("all") ? ["all", ...defaultCategoryValues] : categories, grade: value.grade ?? null, interests: interests.includes("all") ? ["all", ...defaultInterestValues] : interests, location: value.location || emptyProfile.location, delivery: value.delivery || emptyProfile.delivery, transportation: value.transportation || emptyProfile.transportation, language: value.language || emptyProfile.language, accessibility: value.accessibility || emptyProfile.accessibility, budget: value.budget ?? emptyProfile.budget };
}
function normalizeAccountDetails(value) {
  if (!value || typeof value !== "object") return { ...emptyAccountDetails, name: currentUser?.name || "", email: currentUser?.email || "" };
  return { ...emptyAccountDetails, name: value.name || currentUser?.name || "", phone: value.phone || "", address: value.address || "", email: currentUser?.email || value.email || "", language: value.language || "", grade: value.grade || "", school: value.school || "", onboardingStatus: value.onboardingStatus || "pending" };
}
function accountStorageKey(key) { return `oee-account-v2:${currentUser?.subject || "guest"}:${key}`; }
function loadAccountState() {
  profile = normalizeProfile(load(accountStorageKey("profile"), emptyProfile));
  accountDetails = normalizeAccountDetails(load(accountStorageKey("account"), null));
  saved = load(accountStorageKey("saved"), []);
  if (!Array.isArray(saved)) saved = [];
}
function persistAccount(key, value) { persist(accountStorageKey(key), value); }
function persist(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
function escapeHtml(value) { return String(value ?? "").replace(/[&<>\"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[character])); }
function formatCost(cost) { return cost === 0 ? "Free" : `$${cost}`; }
function getOpportunity(id) { return opportunities.find((item) => item.id === id); }
function opportunityIntro(item) { return opportunityIntros[item.id] || item.description; }
function isSaved(id) { return saved.includes(id); }
function reviewStatus(opportunity) { return reviews[opportunity.id] || opportunity.status; }
function isPendingReview(opportunity) { return ["needs-review", "verification-requested"].includes(reviewStatus(opportunity)); }

function matchOpportunity(opportunity) {
  if (!isProfileComplete(profile)) return { eligible: false, score: 0, reason: "Complete all four profile steps to see recommendations." };
  const grade = gradeValue(profile.grade); const budget = Number(profile.budget);
  const categoryFit = profile.categories.includes("all") || profile.categories.includes(opportunity.category);
  const gradeFit = profile.grade === "other" || (grade !== null && grade >= opportunity.minGrade && grade <= opportunity.maxGrade);
  const locationFit = opportunity.locations.includes(profile.location) || opportunity.locations.includes("Online") || profile.location === "Online";
  const onlineAvailable = opportunity.locations.includes("Online");
  const formatFit = profile.delivery === "any" || (profile.delivery === "online" && onlineAvailable) || (profile.delivery === "in-person" && opportunity.locations.some((location) => location !== "Online"));
  const transportationFit = profile.transportation !== "online-only" || onlineAvailable;
  const budgetFit = opportunity.cost <= budget;
  if (!categoryFit || !gradeFit || !locationFit || !formatFit || !transportationFit || !budgetFit) return { eligible: false, score: 0, reason: "Outside your selected category, student profile, access, or budget preferences." };
  const selectedInterests = profile.interests.filter((interest) => interest !== "all");
  const matches = opportunity.interests.filter((interest) => profile.interests.includes("all") || profile.interests.includes(interest));
  let score = 52 + Math.round((matches.length / Math.max(selectedInterests.length, 1)) * 30) + 8 + 5 + 5;
  score = Math.min(99, score);
  const matchedInterests = matches.slice(0, 2).join(" and ");
  const opportunityInterests = opportunity.interests.slice(0, 2).join(" and ");
  const gradeRange = `grades ${opportunity.minGrade}–${opportunity.maxGrade}`;
  const locationText = opportunity.locations.includes("Online") ? "offers an online option" : `is available in ${opportunity.location}`;
  const budgetText = opportunity.cost === 0 ? `has no program fee and stays within your maximum budget of $${budget}` : `costs $${opportunity.cost} and stays within your maximum budget of $${budget}`;
  const reason = matches.length
    ? `Your interest in ${matchedInterests} is directly reflected in this opportunity. It is open to ${gradeRange}, ${locationText}, and ${budgetText}, so it fits the preferences you shared.`
    : `This is a useful adjacent option because it can help you explore ${opportunityInterests} while building related experience. It is open to ${gradeRange}, ${locationText}, and ${budgetText}, making it a practical way to broaden your options.`;
  return { eligible: true, score, reason };
}
function gradeValue(value) { const values = { "below-9": 8, "9": 9, "10": 10, "11": 11, "cegep1": 13, "cegep2": 14, "university-plus": 15 }; return Object.prototype.hasOwnProperty.call(values, String(value)) ? values[String(value)] : null; }
function gradeLabel(value) { const labels = { "below-9": "Below Grade 9", "9": "Grade 9", "10": "Grade 10", "11": "Grade 11", "cegep1": "CEGEP 1", "cegep2": "CEGEP 2", "university-plus": "University or higher", other: "Other" }; return labels[String(value)] || String(value || "Not specified"); }
function isProfileComplete(value) { return value.categories.length > 0 && value.grade !== null && value.grade !== "" && value.interests.length > 0 && value.location && value.delivery && value.transportation && value.language && value.accessibility && value.budget !== null; }
function sortedMatches(items = opportunities) { return items.map((item) => ({ item, match: matchOpportunity(item) })).filter(({ match }) => match.eligible).sort((a, b) => b.match.score - a.match.score || a.item.title.localeCompare(b.item.title)); }
function icon(item) { return `<span class="opportunity-icon ${escapeHtml(item.tone)}">${escapeHtml(item.icon)}</span>`; }
function opportunityImage(item) { return opportunityImages[item.category] || null; }
function opportunityCard(item, match) {
  const savedState = isSaved(item.id);
  const image = opportunityImage(item);
  const visual = image ? `<img src="${image}" alt="" loading="lazy">` : `<span>${escapeHtml(item.icon)}</span>`;
  return `<article class="opportunity-card"><div class="card-heading"><div class="card-visual ${escapeHtml(item.tone)}${image ? " has-image" : ""}" aria-hidden="true">${visual}</div><span class="fit-score">${match.score}<small>% fit</small></span></div><div class="card-top"><div class="card-identity">${icon(item)}<div><span class="category-label">${escapeHtml(item.categoryLabel)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.organization)} · ${escapeHtml(item.location)}</p></div></div></div><p class="card-description">${escapeHtml(opportunityIntro(item))}</p><div class="card-facts"><span><b>◷</b>${escapeHtml(item.deadlineLabel)}</span><span><b>◈</b>${escapeHtml(formatCost(item.cost))}</span></div><section class="card-match-reason"><strong>Why this matches</strong><p>${escapeHtml(match.reason)}</p></section><div class="card-actions"><button class="text-link card-detail-button" data-detail-id="${item.id}">View details <span>↗</span></button><button class="save-button ${savedState ? "is-saved" : ""}" data-save-id="${item.id}" aria-label="${savedState ? "Remove" : "Save"} ${escapeHtml(item.title)}">${savedState ? "♥ Saved" : "♡ Save"}</button></div></article>`;
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
    if (currentUser) startIdleLogout(); else stopIdleLogout();
    document.querySelector("#quick-profile-form").innerHTML = profileFormMarkup(false);
    if (currentUser) {
      if (activeView === "auth") showView("dashboard");
      if (activeView === "dashboard") renderDashboard();
      if (activeView === "profile") renderProfile();
      if (activeView === "account") renderAccountDetails();
    } else {
      showView("auth");
    }
    translatePage(currentLanguage);
  } catch (_) {
    currentUser = null;
    stopIdleLogout();
    loadAccountState();
    updateAccountIdentity();
    document.querySelector("#quick-profile-form").innerHTML = profileFormMarkup(false);
    showView("auth");
    translatePage(currentLanguage);
  }
}
document.addEventListener("click", (event) => { const target = event.target instanceof Element ? event.target : null; if (!target) return; const provider = target.closest("[data-auth-provider]"); if (provider) { beginFederatedLogin(provider.dataset.authProvider); } const signout = target.closest("#auth-signout, [data-action=\"sign-out\"]"); if (signout) { signOut(); } });
document.addEventListener("change", (event) => {
  const input = event.target instanceof HTMLInputElement ? event.target : null;
  if (!input || !["categories", "interests"].includes(input.name)) return;
  const group = input.name === "categories" ? "#category-options" : "#interest-options";
  const options = [...document.querySelectorAll(`${group} input[name="${input.name}"]`)];
  const allInput = options.find((option) => option.value === "all");
  const individualInputs = options.filter((option) => option.value !== "all");
  if (input.value === "all") individualInputs.forEach((option) => { option.checked = input.checked; });
  else if (allInput) allInput.checked = individualInputs.every((option) => option.checked);
});

function profileFormMarkup(includeButton = true) {
  const gradeOptions = [{ value: "below-9", label: "Below Grade 9" }, { value: "9", label: "Grade 9" }, { value: "10", label: "Grade 10" }, { value: "11", label: "Grade 11" }, { value: "cegep1", label: "CEGEP 1" }, { value: "cegep2", label: "CEGEP 2" }, { value: "university-plus", label: "University or higher" }, { value: "other", label: "Other" }];
  return `<div class="account-context"><small>ACCOUNT</small><strong>${escapeHtml(currentUser?.name || currentUser?.email || "Sign in with a provider first")}</strong></div><div class="form-row"><label>Grade<select name="grade">${gradeOptions.map((grade) => `<option value="${grade.value}" ${String(profile.grade) === grade.value ? "selected" : ""}>${grade.label}</option>`).join("")}</select></label><label>Location<select name="location"><option value="">Choose a location</option>${["Montreal", "Quebec", "Toronto", "Online"].map((location) => `<option ${profile.location === location ? "selected" : ""}>${location}</option>`).join("")}</select></label></div><fieldset><legend>Interests</legend><div class="interest-options">${interestOptions.map((interest) => `<label class="interest-chip"><input type="checkbox" name="interests" value="${interest}" ${profile.interests.includes("all") || profile.interests.includes(interest) ? "checked" : ""}><span>${interest}</span></label>`).join("")}<label class="interest-chip"><input type="checkbox" name="interests" value="all" ${profile.interests.includes("all") ? "checked" : ""}><span>ALL</span></label></div></fieldset><label>Maximum budget<select name="budget"><option value="">Choose a budget</option>${[0, 300, 500, 1000].map((budget) => `<option value="${budget}" ${Number(profile.budget) === budget ? "selected" : ""}>${budget === 0 ? "Free only" : `Up to $${budget.toLocaleString()}`}</option>`).join("")}</select></label>${includeButton ? `<button class="primary-button" type="submit">Update recommendations <span>→</span></button><p class="form-note">Only your matching preferences are saved in this browser.</p>` : `<button class="primary-button" type="submit">Save preferences <span>→</span></button>`}`;
}
let activeProfileStep = 1;
function profileFromForm(form) {
  const data = new FormData(form);
  return normalizeProfile({
    categories: data.getAll("categories"),
    grade: String(data.get("grade") || ""),
    interests: data.getAll("interests"),
    location: String(data.get("location") || ""),
    delivery: String(data.get("delivery") || ""),
    transportation: String(data.get("transportation") || ""),
    language: String(data.get("language") || ""),
    accessibility: String(data.get("accessibility") || ""),
    budget: data.get("budget") === "" ? null : Number(data.get("budget"))
  });
}
function profileStepComplete(form, step) {
  const data = new FormData(form);
  if (step === 1) return data.getAll("categories").length > 0;
  if (step === 2) return Boolean(data.get("grade"));
  if (step === 3) return data.getAll("interests").length > 0;
  return data.get("location") && data.get("delivery") && data.get("transportation") && data.get("language") && data.get("accessibility") && data.get("budget") !== "";
}
function setProfileStep(step) {
  activeProfileStep = Math.min(4, Math.max(1, Number(step)));
  document.querySelectorAll("[data-profile-panel]").forEach((panel) => panel.classList.toggle("active", Number(panel.dataset.profilePanel) === activeProfileStep));
  document.querySelectorAll("[data-profile-step]").forEach((button) => button.classList.toggle("current", Number(button.dataset.profileStep) === activeProfileStep));
  const labels = currentLanguage === "fr" ? ["Types d’occasions", "Profil étudiant", "Sujets d’intérêt", "Préférences d’accès"] : currentLanguage === "zh" ? ["机会类型", "学生资料", "兴趣主题", "访问偏好"] : ["Opportunity types", "Student profile", "Topic interests", "Access preferences"];
  document.querySelector("#profile-step-label").textContent = `Step ${activeProfileStep} of 4 · ${labels[activeProfileStep - 1]}`;
}
function renderProfile() {
  const form = document.querySelector("#profile-form");
  const categoryOptionsNode = document.querySelector("#category-options");
  categoryOptionsNode.innerHTML = opportunityCategoryOptions.map((category) => `<label><input type="checkbox" name="categories" value="${category.value}" ${profile.categories.includes("all") || profile.categories.includes(category.value) ? "checked" : ""}><span>${category.label}</span></label>`).join("");
  const interestOptionsNode = document.querySelector("#interest-options");
  interestOptionsNode.innerHTML = `${interestOptions.map((interest) => `<label><input type="checkbox" name="interests" value="${interest}" ${profile.interests.includes("all") || profile.interests.includes(interest) ? "checked" : ""}><span>${interest}</span></label>`).join("")}<label><input type="checkbox" name="interests" value="all" ${profile.interests.includes("all") ? "checked" : ""}><span>ALL</span></label>`;
  ["grade", "location", "delivery", "transportation", "language", "accessibility", "budget"].forEach((name) => { const field = form.querySelector(`[name="${name}"]`); if (field) field.value = profile[name] ?? ""; });
  setProfileStep(1);
}
function renderAccountDetails() {
  const form = document.querySelector("#account-form");
  if (!form) return;
  ["name", "phone", "email", "address", "language", "school", "grade"].forEach((name) => { const field = form.querySelector(`[name="${name}"]`); if (field) field.value = accountDetails[name] ?? ""; });
  const status = document.querySelector("#account-status");
  if (status) status.textContent = accountDetails.onboardingStatus === "completed" ? "SAVED" : "OPTIONAL";
}
function handleAccountSubmit(form) {
  if (!currentUser) { showView("auth"); showToast("Sign in before editing your account"); return; }
  const data = new FormData(form);
  accountDetails = normalizeAccountDetails({ name: String(data.get("name") || ""), phone: String(data.get("phone") || ""), address: String(data.get("address") || ""), email: currentUser.email || String(data.get("email") || ""), language: String(data.get("language") || ""), grade: String(data.get("grade") || ""), school: String(data.get("school") || ""), onboardingStatus: "completed" });
  persistAccount("account", accountDetails);
  updateAccountIdentity();
  showToast("Account details saved");
  showView("dashboard");
}
function skipAccountSetup() {
  if (!currentUser) { showView("auth"); return; }
  accountDetails = normalizeAccountDetails({ ...accountDetails, onboardingStatus: "skipped" });
  persistAccount("account", accountDetails);
  updateAccountIdentity();
  showToast("You can complete your account details later");
  showView("dashboard");
}
function renderAdmin() {
  const queue = opportunities.filter(isPendingReview); document.querySelector("#admin-large-number").textContent = String(queue.length).padStart(2, "0");
  document.querySelector("#review-list").innerHTML = queue.length ? queue.map((item) => `<article class="review-row"><div class="review-identity">${icon(item)}<div><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.organization)} · ${escapeHtml(item.verifiedAt)}</small></div></div><span class="status-badge">${reviewStatus(item) === "verification-requested" ? "Verification requested" : "Needs review"}</span><a class="text-link" href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener">Check source ↗</a><div class="review-actions"><button class="outline-button compact" data-review-action="request" data-review-id="${item.id}">Request verification</button><button class="primary-button compact" data-review-action="approve" data-review-id="${item.id}">Approve</button></div></article>`).join("") : emptyState("Queue is clear", "All demo records have a review decision.", "explore", "Browse opportunities");
}
function updateAccountIdentity() {
  const displayName = accountDetails.name || currentUser?.name || currentUser?.email || "Sign in to continue";
  const initials = currentUser ? displayName.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase() : "?";
  document.body.classList.toggle("guest-mode", !currentUser);
  document.querySelector("#auth-guest-panel").hidden = Boolean(currentUser);
  document.querySelector("#auth-session-panel").hidden = !currentUser;
  document.querySelector("#sidebar-avatar").textContent = initials;
  document.querySelector("#sidebar-name").textContent = displayName;
  document.querySelector("#sidebar-profile").textContent = currentUser ? "My account" : "No account connected";
  const sidebarSignout = document.querySelector("#sidebar-signout");
  if (sidebarSignout) sidebarSignout.hidden = !currentUser;
  document.querySelector(".top-avatar").textContent = initials;
  document.querySelector("#auth-session-name").textContent = displayName;
  document.querySelector("#auth-session-details").textContent = currentUser ? `${currentUser.provider || "Connected provider"}${currentUser.email ? ` · ${currentUser.email}` : ""}` : "";
  document.querySelector("#dashboard-welcome").innerHTML = currentUser ? `Welcome, <span>${escapeHtml(displayName)}</span>.` : "Welcome to your opportunity workspace.";
  const accountBanner = document.querySelector("#account-setup-banner");
  if (accountBanner) accountBanner.hidden = !currentUser || accountDetails.onboardingStatus !== "pending";
  if (currentUser && document.querySelector("#account-form")) renderAccountDetails();
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
  const summary = hasPreferences ? `${gradeLabel(profile.grade)} · ${profile.location} · ${profile.interests.includes("all") ? "All topics" : profile.interests.slice(0, 2).join(" + ")}` : "Complete your profile to personalize recommendations.";
  document.querySelector("#dashboard-profile").textContent = summary;
  document.querySelector("#dashboard-tags").innerHTML = hasPreferences ? `<span>Under ${formatCost(profile.budget)}</span><span>${profile.interests.includes("all") ? "All topics" : `${profile.interests.length} interests`}</span>` : "<span>No preferences yet</span>";
  document.querySelector("#saved-count").textContent = saved.length; document.querySelector("#review-count").textContent = opportunities.filter(isPendingReview).length;
}
function showView(view) {
  if (!currentUser && view !== "auth") view = "auth";
  activeView = view; document.querySelectorAll(".view").forEach((section) => section.classList.toggle("active", section.id === `view-${view}`)); document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === view)); const section = document.querySelector(`#view-${view}`); document.querySelector("#page-label").textContent = (languageTranslations[currentLanguage] || {})[section.dataset.label] || section.dataset.label;
  if (view === "dashboard") renderDashboard(); if (view === "explore") renderExplore(); if (view === "saved") renderSaved(); if (view === "detail") renderDetailPage(); if (view === "profile") renderProfile(); if (view === "account") renderAccountDetails(); if (view === "admin") renderAdmin(); window.scrollTo({ top: 0, behavior: "smooth" }); translatePage(currentLanguage);
}
function toggleSaved(id) { saved = isSaved(id) ? saved.filter((savedId) => savedId !== id) : [id, ...saved]; persistAccount("saved", saved); updateProfileCopy(); showToast(isSaved(id) ? "Saved to your shortlist" : "Removed from your shortlist"); if (activeView === "dashboard") renderDashboard(); if (activeView === "explore") renderExplore(); if (activeView === "saved") renderSaved(); if (activeView === "detail") renderDetailPage(); }
function closeModals() { document.querySelectorAll(".modal-backdrop").forEach((modal) => { modal.hidden = true; }); }
function showToast(message) { const toast = document.querySelector("#toast"); toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600); }
function openProfileModal() { showView("profile"); }
function handleProfileSubmit(form) { if (!currentUser) { showView("auth"); showToast("Sign in before saving your profile"); return; } const nextProfile = profileFromForm(form); if (!isProfileComplete(nextProfile)) { const firstIncomplete = [1, 2, 3, 4].find((step) => !profileStepComplete(form, step)) || 1; setProfileStep(firstIncomplete); showToast("Complete each profile step before continuing"); return; } profile = nextProfile; persistAccount("profile", profile); closeModals(); updateProfileCopy(); showToast("Profile updated — recommendations refreshed"); showView("dashboard"); }

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null; if (!target) return;
  const profileStepButton = target.closest("[data-profile-step]"); if (profileStepButton) { setProfileStep(profileStepButton.dataset.profileStep); return; }
  const profileNextButton = target.closest("[data-profile-next]"); if (profileNextButton) { const form = document.querySelector("#profile-form"); if (!profileStepComplete(form, activeProfileStep)) { showToast("Complete this step before continuing"); return; } setProfileStep(profileNextButton.dataset.profileNext); return; }
  const profilePreviousButton = target.closest("[data-profile-prev]"); if (profilePreviousButton) { setProfileStep(profilePreviousButton.dataset.profilePrev); return; }
  const viewButton = target.closest("[data-view]"); if (viewButton) { event.preventDefault(); showView(viewButton.dataset.view); return; }
  const action = target.closest("[data-action]"); if (action?.dataset.action === "toggle-theme") { const next = document.documentElement.dataset.theme === "light" ? "dark" : "light"; document.documentElement.dataset.theme = next; persist("oee-theme", next); } if (action?.dataset.action === "edit-profile") openProfileModal(); if (action?.dataset.action === "skip-account-setup") skipAccountSetup(); if (action?.dataset.action === "close-modal") closeModals();
  const taskButton = target.closest(".mark-done"); if (taskButton) { const row = taskButton.closest(".saved-timeline-card"); row?.classList.toggle("is-complete"); taskButton.textContent = row?.classList.contains("is-complete") ? "Marked done" : "Mark as done"; return; }
  const card = target.closest(".opportunity-card, .result-card");
  const detail = target.closest("[data-detail-id]") || card?.querySelector("[data-detail-id]");
  const interactive = target.closest("button, a, input, select, label");
  if (detail && (!interactive || target.closest("[data-detail-id]"))) { event.preventDefault(); openDetails(detail.dataset.detailId); return; }
  const saveButton = target.closest("[data-save-id]"); if (saveButton) { event.stopPropagation(); toggleSaved(saveButton.dataset.saveId); }
  const reviewButton = target.closest("[data-review-action]"); if (reviewButton) { reviews[reviewButton.dataset.reviewId] = reviewButton.dataset.reviewAction === "approve" ? "approved" : "verification-requested"; persist("oee-reviews", reviews); renderAdmin(); updateProfileCopy(); showToast(reviewButton.dataset.reviewAction === "approve" ? "Record approved" : "Verification requested"); }
});
document.querySelector("#profile-form").addEventListener("submit", (event) => { event.preventDefault(); handleProfileSubmit(event.currentTarget); });
document.querySelector("#account-form").addEventListener("submit", (event) => { event.preventDefault(); handleAccountSubmit(event.currentTarget); });
document.querySelector("#quick-profile-form").addEventListener("submit", (event) => { event.preventDefault(); handleProfileSubmit(event.currentTarget); });
document.querySelector("#language-selector").addEventListener("change", (event) => { currentLanguage = event.currentTarget.value; persist("oee-language", currentLanguage); if (activeView === "profile") renderProfile(); translatePage(currentLanguage); });
document.querySelector("#search-input").addEventListener("input", renderExplore); document.querySelector("#category-filter").addEventListener("change", renderExplore); document.querySelector("#budget-filter").addEventListener("change", renderExplore);
document.querySelector("#clear-filters").addEventListener("click", () => { document.querySelector("#search-input").value = ""; document.querySelector("#category-filter").value = "all"; document.querySelector("#budget-filter").value = "all"; renderExplore(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModals(); const card = event.target instanceof Element ? event.target.closest(".opportunity-card, .result-card") : null; if (card && (event.key === "Enter" || event.key === " ") && event.target === card) { event.preventDefault(); const detail = card.querySelector("[data-detail-id]"); if (detail) openDetails(detail.dataset.detailId); } });
document.documentElement.dataset.theme = load("oee-theme", "light"); loadAccountState(); document.querySelector("#quick-profile-form").innerHTML = profileFormMarkup(false); updateProfileCopy(); updateAccountIdentity(); showView("auth"); translatePage(currentLanguage);
updateDashboardDateTime(); window.setInterval(updateDashboardDateTime, 60000);
refreshAuthSession();

/* Reference-inspired list, detail, and matching surfaces. */
function resultOpportunityCard(item, match) {
  const savedState = isSaved(item.id);
  const secondaryInterest = item.interests.find((interest) => profile.interests.includes(interest)) || item.interests[0];
  const image = opportunityImage(item);
  const visual = image ? `<img src="${image}" alt="" loading="lazy">` : `<span>${escapeHtml(item.icon)}</span>`;
  return `<article class="result-card"><div class="result-main"><div class="result-thumb ${escapeHtml(item.tone)}${image ? " has-image" : ""}" aria-hidden="true">${visual}</div><div class="result-copy"><div class="result-title-row"><h3>${escapeHtml(item.title)}</h3><span class="verified-badge">✓ Verified</span></div><p>${escapeHtml(item.description)}</p><div class="result-tags"><span>${escapeHtml(item.categoryLabel)}</span><span>${escapeHtml(secondaryInterest)}</span></div></div></div><div class="result-metrics"><div class="result-score-ring ${escapeHtml(item.tone)}"><strong>${match.score}%</strong><small>match</small></div><div class="result-fact"><b>▣</b><strong>${escapeHtml(item.deadlineLabel)}</strong><small>Deadline</small></div><div class="result-fact"><b>＄</b><strong>${escapeHtml(formatCost(item.cost))}</strong><small>Cost</small></div><div class="result-fact"><b>⌖</b><strong>${escapeHtml(item.location)}</strong><small>Location</small></div><label class="compare-toggle"><input type="checkbox"><span>Compare</span></label><button class="text-link result-detail-link" data-detail-id="${item.id}">View details <span>↗</span></button><button class="save-button ${savedState ? "is-saved" : ""}" data-save-id="${item.id}" aria-label="${savedState ? "Remove" : "Save"} ${escapeHtml(item.title)}">${savedState ? "♥" : "♡"}</button></div></article>`;
}

function renderExplore() {
  const query = document.querySelector("#search-input").value.trim().toLowerCase(); const category = document.querySelector("#category-filter").value; const budget = document.querySelector("#budget-filter").value;
  const filtered = opportunities.filter((item) => { const searchable = `${item.title} ${item.organization} ${item.location} ${item.description} ${item.interests.join(" ")}`.toLowerCase(); return (!query || searchable.includes(query)) && (category === "all" || item.category === category) && (budget === "all" || item.cost <= Number(budget)); });
  const matches = sortedMatches(filtered); document.querySelector("#results-count").textContent = `${matches.length} opportunit${matches.length === 1 ? "y" : "ies"} found`;
  document.querySelector("#explore-list").innerHTML = matches.length ? matches.map(({ item, match }) => resultOpportunityCard(item, match)).join("") : emptyState("No eligible matches", "Try a broader search or update your profile filters.", "profile", "Edit profile");
}

function renderDetailPage() {
  const id = currentDetailId; const item = getOpportunity(id); if (!item) return;
  const match = matchOpportunity(item); const savedState = isSaved(item.id);
  const interestText = item.interests.slice(0, 3).join(" · ");
  const location = profile.location || item.location;
  const grade = profile.grade ? gradeLabel(profile.grade) : `Grade ${item.minGrade}`;
  const image = opportunityImage(item);
  const heroVisual = image ? `<img src="${image}" alt="" loading="lazy">` : `<span>${escapeHtml(item.icon)}</span>`;
  document.querySelector("#detail-page-content").innerHTML = `<div class="detail-back-row"><button class="detail-back" type="button" data-view="explore">← Back to results</button></div><div class="detail-intro"><div class="detail-heading"><div><span class="category-label">${escapeHtml(item.categoryLabel)} · ${escapeHtml(interestText)}</span><h2 id="detail-title">${escapeHtml(item.title)}</h2><p>${escapeHtml(item.organization)} · ${escapeHtml(item.location)}</p><div class="detail-meta-line"><span>⌖ ${escapeHtml(item.location)} or online</span><span>▣ ${escapeHtml(item.categoryLabel)}</span><span>♙ Grades ${item.minGrade}–${item.maxGrade}</span></div></div></div><div class="detail-score-ring large ${escapeHtml(item.tone)}"><strong>${match.score}</strong><small>/100<br>match</small></div></div><div class="detail-feature-grid"><div class="detail-hero-visual ${escapeHtml(item.tone)}${image ? " has-image" : ""}">${heroVisual}<small>EXPLORE<br>CONTRIBUTE<br>GROW</small></div><div class="detail-side-stack"><aside class="match-panel"><p class="eyebrow">WHY THIS MATCHES YOU</p><h3>${match.score}% fit for your profile</h3><ul><li><span>✓</span> ${escapeHtml(String(grade))} eligible</li><li><span>✓</span> ${escapeHtml(location)} or online</li><li><span>✓</span> ${escapeHtml(item.interests[0])} interest</li><li><span>✓</span> Within your budget</li></ul></aside><section class="detail-ai-panel"><h3><span>ⓘ</span> How your match works</h3><p>We compare the opportunity details with your profile, including location, interests, eligibility, and budget, to explain why it may be a useful fit. This is guidance, not a guarantee of acceptance.</p></section><div class="detail-actions"><button class="primary-button" data-save-id="${item.id}">${savedState ? "♥ Saved" : "♡ Save opportunity"}</button><a class="outline-button" href="${escapeHtml(item.applicationUrl)}" target="_blank" rel="noopener">Open application ↗</a></div></div></div><div class="detail-card-grid"><section class="detail-info-card"><h3><span>▧</span>Overview</h3><p>${escapeHtml(item.description)} You’ll get a practical way to learn, contribute, and connect the experience to your next step.</p></section><section class="detail-info-card"><h3><span>☷</span>What you’ll do</h3><ul class="detail-bullets"><li>Work on a focused project with guidance and feedback.</li><li>Build evidence of what you learned and contributed.</li><li>Share a clear next step with your team or mentor.</li></ul></section><section class="detail-info-card"><h3><span>♧</span>Eligibility</h3><ul class="detail-bullets"><li>Grades ${item.minGrade}–${item.maxGrade}</li><li>Interest in ${escapeHtml(item.interests.slice(0, 2).join(" and "))}</li><li>Open to students in ${escapeHtml(item.location)} or online</li><li>No prior experience required</li></ul></section><section class="detail-info-card"><h3><span>▣</span>Deadline</h3><strong>${escapeHtml(item.deadlineLabel)}</strong><p>Confirm the current deadline and requirements on the official source.</p></section><section class="detail-info-card"><h3><span>◇</span>Cost</h3><strong>${escapeHtml(formatCost(item.cost))}</strong><p>Review any travel or participation costs before applying.</p></section><section class="detail-info-card source-card"><h3><span>↗</span>Source & more information</h3><strong class="source-status">● Source information</strong><p>Record reviewed ${escapeHtml(item.verifiedAt)}. Confirm current details before applying.</p><a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener">View source →</a></section></div>`;
  const detailPage = document.querySelector("#detail-page-content");
  const matchPanel = detailPage?.querySelector(".detail-side-stack .match-panel");
  const detailIntro = detailPage?.querySelector(".detail-intro");
  if (matchPanel && detailIntro) detailIntro.append(matchPanel);
}

function openDetails(id) {
  if (!getOpportunity(id)) return;
  currentDetailId = id;
  showView("detail");
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
