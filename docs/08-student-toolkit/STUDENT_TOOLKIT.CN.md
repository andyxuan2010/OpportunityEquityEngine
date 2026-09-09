---
layout: default
title: 学生工具箱
locale: zh
translation_en: /docs/08-student-toolkit/STUDENT_TOOLKIT.md
translation_zh: /docs/08-student-toolkit/STUDENT_TOOLKIT.CN.md
translation_fr: /docs/08-student-toolkit/STUDENT_TOOLKIT.FR.md
---

# 学生工具箱：协作、保持安全、持续推进

这是帮助学生项目健康运行的实用参考，涵盖协作、可访问性、隐私、故障排除和清晰沟通。

## 简单的 GitHub 工作流程

1. 创建或选择一个有明确成果和验收检查的 issue。
2. 创建分支，例如 `docs/add-research-guide` 或 `feature/save-opportunity`。
3. 完成小改动，并使用有意义的提交信息。
4. 在本地测试后打开 pull request，说明改了什么、如何测试以及还剩什么。
5. 请求审查。根据反馈改进工作，而不是隐藏问题。
6. 只有在检查和审查都完成后才合并。

除非团队明确同意进行极小的文档修正，否则不要直接在 `main` 上工作。

## Issue 模板

```text
目标：
谁会受益：
不在范围内的内容：
验收检查：
证据或来源：
问题和风险：
```

## Pull request 检查清单

- 改动只有一个清晰目的。
- 页面在手机和桌面设备上都能使用。
- 已检查链接、图片、翻译和标题。
- 没有加入秘密或不必要的个人信息。
- 已理解并审查 AI 生成的代码或文字。
- 描述中说明了审查者如何复现结果。

## 可访问性是质量的一部分

使用有意义的标题、清晰易读的对比度、描述性链接文字、信息性图片的替代文本、表单标签、支持键盘的控件，以及重要媒体的字幕或文字稿。不要只用颜色传达状态或匹配结果。在邀请学生试用之前，用缩放和键盘完成测试。

## 隐私与负责任的 AI

只收集匹配所需的最少学生信息。开发时避免使用真实个人数据，改用合成示例。API 密钥必须放在服务器或批准的秘密存储中。机会信息应显示来源和核验日期。AI 可以帮助总结或解释，但资格、截止日期、费用和安全声明必须由确定性规则和人工审查保护。

## 有哪些工具和服务可以帮助项目

不存在唯一“正确”的技术栈。选择一组最小的工具，让团队能够研究真实需求、构建可运行的垂直切片、测试它，并解释它的限制。学生团队通常应从每个必需类别中选择一个工具，而不是注册这里列出的每一项服务。

### 必需基础设施

| 需求 | 推荐起点 | 用途 |
|---|---|---|
| 源代码管理和审查 | [Git](https://git-scm.com/doc)、[GitHub](https://docs.github.com/en/get-started)、GitHub Issues 和 [Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) | 保存历史、团队协作、任务、决策和可审查的改动 |
| 网站和文档托管 | [GitHub Pages](https://docs.github.com/en/pages)、[Jekyll](https://jekyllrb.com/docs/)、[GitHub Actions](https://docs.github.com/en/actions) | 发布文档，并自动测试或部署它 |
| 编程环境 | [Visual Studio Code](https://code.visualstudio.com/docs)、[GitHub Codespaces](https://docs.github.com/en/codespaces)、[Node.js](https://nodejs.org/en/learn)、[Python](https://docs.python.org/3/) | 在本地或云端编辑、运行和调试项目 |
| 浏览器检查 | [Chrome DevTools](https://developer.chrome.com/docs/devtools/overview)、[Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/) | 检查布局、控制台错误、网络请求、存储和性能 |
| 设计和用户流程 | [Figma](https://help.figma.com/hc/en-us)、Canva | 制作线框图、原型、图标、演示图形并讨论可用性 |

### 数据、研究和机会来源

| 需求 | 可选工具或服务 | 用途 |
|---|---|---|
| 小型数据集 | CSV、[Google Sheets API](https://developers.google.com/sheets/api)、Microsoft [Graph Excel API](https://learn.microsoft.com/en-us/graph/api/resources/excel)、[Airtable Web API](https://airtable.com/developers/web/api/introduction) | 建立学生可以检查和修正的可管理机会目录 |
| 数据清理 | [OpenRefine](https://openrefine.org/docs)、电子表格公式、使用 [pandas](https://pandas.pydata.org/docs/) 的 Python | 统一名称、日期、地点、类别和缺失值 |
| 公共和官方数据 | 政府开放数据门户、[CKAN](https://docs.ckan.org/en/latest/api/)、[Socrata APIs](https://dev.socrata.com/)、机构官方 API、RSS/Atom 信息源 | 导入当前机会，并保存来源 URL 和核验日期 |
| 研究和访谈 | [Google Forms API](https://developers.google.com/workspace/forms/api)、Microsoft Forms、访谈、观察记录、[Miro](https://miro.com/) | 在开发功能前了解学生真正需要什么 |
| 数据存储 | [Supabase/Postgres](https://supabase.com/docs)、[Firebase](https://firebase.google.com/docs)、[Azure](https://learn.microsoft.com/en-us/azure/)、[Cloudflare D1](https://developers.cloudflare.com/d1/)、[Neon](https://neon.tech/docs) | 存储机会、用户资料、已保存项目、反馈和审计字段 |

每条机会记录至少应保留：`title`、`provider`、`description`、`eligibility`、`location`、`cost`、`deadline`、`source_url`、`last_verified_at` 和 `status`。不要把缺失信息默默转换成“符合资格”“免费”或“仍在开放”。

### 前端和交互选择

| 需求 | 可选工具 | 适用情况 |
|---|---|---|
| 简单网站 | 语义化 HTML、CSS、JavaScript、[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) | 项目主要是内容、搜索、筛选和少量状态 |
| 基于组件的 Web 应用 | [React](https://react.dev/learn)、[Vue](https://vuejs.org/guide/introduction.html)、[Svelte](https://svelte.dev/docs/svelte/overview) | 多个页面共享可复用组件和交互 |
| 全栈或服务端渲染应用 | [Next.js](https://nextjs.org/docs)、[Nuxt](https://nuxt.com/docs)、[SvelteKit](https://svelte.dev/docs/kit/introduction)、[Astro](https://docs.astro.build/en/getting-started/) | 需要搜索、身份验证、服务端数据访问或结构化页面 |
| 样式 | [Tailwind CSS](https://tailwindcss.com/docs/installation)、[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)、CSS 自定义属性 | 团队需要快速建立一致的响应式布局 |
| 图表和仪表板 | [Chart.js](https://www.chartjs.org/docs/latest/)、[D3](https://d3js.org/getting-started)、[Recharts](https://github.com/recharts/recharts) | 展示机会数量、截止日期、结果或公平性指标 |
| 地图和位置 | [Leaflet](https://leafletjs.com/)、[Mapbox](https://docs.mapbox.com/)、[OpenStreetMap](https://www.openstreetmap.org/) | 位置有助于学生发现附近机会；请遵守瓦片和地理编码的使用政策 |

### 托管、后端和身份

| 需求 | 可选方案 | 重要决策 |
|---|---|---|
| 静态部署 | GitHub Pages、[Cloudflare Pages](https://developers.cloudflare.com/pages/)、[Netlify](https://docs.netlify.com/)、[Vercel](https://vercel.com/docs)、[Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/) | 适合不包含私密学生数据的公开原型 |
| 服务端 API | [Cloudflare Workers](https://developers.cloudflare.com/workers/)、[Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/)、[Vercel Functions](https://vercel.com/docs/functions)、[Netlify Functions](https://docs.netlify.com/build/functions/overview/)、[Firebase Cloud Functions](https://firebase.google.com/docs/functions)、[Supabase Edge Functions](https://supabase.com/docs/guides/functions) | 将 API 密钥、匹配逻辑和有权限的数据库访问放在浏览器之外 |
| 身份验证 | [Supabase Auth](https://supabase.com/docs/guides/auth)、[Firebase Authentication](https://firebase.google.com/docs/auth)、[Auth0](https://auth0.com/docs)、[Clerk](https://clerk.com/docs)、[Microsoft Entra External ID](https://learn.microsoft.com/en-us/entra/external-id/) | 只有项目确实需要账户时才使用；不要自行收集密码 |
| 搜索 | 先使用数据库筛选；[Algolia](https://www.algolia.com/doc/)、[Typesense](https://typesense.org/docs/)、[Meilisearch](https://www.meilisearch.com/docs)、[OpenSearch](https://opensearch.org/docs/latest/) | 只有当数据集对数据库来说太大或太慢时才增加搜索服务 |
| 邮件和提醒 | [Resend](https://resend.com/docs)、[SendGrid](https://docs.sendgrid.com/)、[Twilio](https://www.twilio.com/docs)、[Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) | 发送用户主动订阅的确认、截止日期提醒或管理员通知；提供退订和失败处理 |

### API 和 LLM

LLM 适合用于解释、起草、辅助分类、语义匹配、翻译，或从杂乱文字中提取字段。对于资格、日期、费用、排名约束和其他必须可重复的决定，应使用普通代码和经过审查的数据集。

| 提供商或方法 | 可用于 | 对学生的建议 |
|---|---|---|
| [OpenAI Responses API](https://developers.openai.com/api/reference/cli/resources/responses/methods/create) | 结构化提取、解释、嵌入、视觉和调用工具的助手 | 适合作为通用起点；要求返回结构化 JSON 并进行验证 |
| [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/) | 在 Azure 管理环境中使用 OpenAI 模型 | 如果学校已经使用 Azure 身份、计费或治理，可以考虑它 |
| [Anthropic Claude](https://docs.anthropic.com/en/docs/build-with-claude/overview) | 长文档分析、写作、编程和解释 | 适合在评估时与第二个模型进行比较 |
| [Google Gemini API](https://ai.google.dev/gemini-api/docs) | 多模态输入、提取、摘要和聊天 | 如果团队已经使用 Google Cloud 或 Google AI 工具，可以考虑它 |
| [Mistral](https://docs.mistral.ai/)、[Cohere](https://docs.cohere.com/)、[Hugging Face](https://huggingface.co/docs) | 备选托管模型、多语言工作、检索或实验 | 比较质量、成本、速度、隐私和速率限制，不要只按品牌选择 |
| 使用 [Ollama](https://docs.ollama.com/) 的本地模型 | 私密或离线实验，以及低风险开发数据 | 需要合适的电脑；本地运行不代表自动准确 |
| 模型网关或路由器 | [LiteLLM](https://docs.litellm.ai/)、提供商 SDK 或小型内部适配器 | 让应用不依赖单一提供商，并使模型替换可以测试 |
| 检索增强生成 | [pgvector](https://github.com/pgvector/pgvector)、[Pinecone](https://docs.pinecone.io/)、[Qdrant](https://qdrant.tech/documentation/)、[Chroma](https://docs.trychroma.com/)、[Weaviate](https://docs.weaviate.io/) | 让回答基于已批准的机会记录，并显示使用的来源 |
| 翻译 | [DeepL API](https://developers.deepl.com/docs)、[Google Cloud Translation](https://cloud.google.com/translate/docs)、[Azure Translator](https://learn.microsoft.com/en-us/azure/ai-services/translator/) | 先翻译草稿，再审查名称、资格、日期和文化敏感表述 |

#### 本项目的安全 LLM 模式

1. 只检索与问题相关且已批准的记录。
2. 要求模型返回定义好的结构，例如 `summary`、`why_it_may_fit`、`source_url` 和 `confidence_notes`。
3. 在代码中验证响应，缺少来源 URL 或日期无效时拒绝响应。
4. 显示原始来源、核验日期和“AI 辅助”标签。
5. 允许学生或教职员工审查者修正结果，并记录修正内容。

绝不要把提供商 API 密钥放在浏览器 JavaScript 中、提交到 GitHub，或向模型发送不必要的学生个人信息。设置消费上限、速率限制、超时、重试机制，以及排除敏感数据的日志，并准备不依赖 AI 的备用方案。

### 测试、可访问性、安全和可靠性

| 质量领域 | 工具和服务 | 学生至少要做的检查 |
|---|---|---|
| 端到端浏览器测试 | [Playwright](https://playwright.dev/docs/intro)、[Cypress](https://docs.cypress.io/) | 在桌面设备和窄屏手机视口上测试主要流程 |
| 单元测试和数据测试 | [Vitest](https://vitest.dev/guide/)、[Jest](https://jestjs.io/docs/getting-started)、[pytest](https://docs.pytest.org/en/stable/) | 测试匹配规则、日期处理、空状态和错误输入 |
| 可访问性 | [axe-core](https://www.deque.com/axe/core-documentation/)、[WAVE](https://wave.webaim.org/)、[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)、键盘测试、[NVDA](https://www.nvaccess.org/about-nvda/)、VoiceOver | 检查标题、标签、焦点顺序、对比度、缩放、键盘操作和屏幕阅读器基础体验 |
| 代码和依赖安全 | GitHub [CodeQL](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning)、[Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)、[Gitleaks](https://github.com/gitleaks/gitleaks)、[Trivy](https://github.com/aquasecurity/trivy)、[OWASP ZAP](https://www.zaproxy.org/docs/) | 分享前扫描；删除秘密并修复高风险发现 |
| 秘密存储 | [GitHub Actions secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)、[Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)、[Google Secret Manager](https://cloud.google.com/secret-manager/docs/overview)、[AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) | 不要让秘密出现在源代码、截图、浏览器包或 issue 评论中 |
| 监控和分析 | [Sentry](https://docs.sentry.io/)、[PostHog](https://posthog.com/docs)、[Plausible](https://plausible.io/docs)、[Google Analytics](https://developers.google.com/analytics) | 衡量错误和有用结果；公开说明分析工具，避免不必要的跟踪 |
| 备份和正常运行时间 | 服务提供商备份、定期导出、[Better Stack](https://betterstack.com/docs/)、[Better Stack Uptime](https://betterstack.com/uptime) | 知道如何恢复数据，以及谁会收到故障提醒 |

### 团队沟通和项目交付

[GitHub Discussions](https://docs.github.com/en/discussions)、[Slack](https://slack.com/help/categories/360000049043-Slack-guides)、Microsoft Teams、[Discord](https://support.discord.com/hc/en-us)、[Notion](https://www.notion.so/help/guides)、Google Docs 和共享日历都可以使用。重要的不是品牌，而是要维护一个所有人都能看到的决策日志、一个真实来源的待办列表、会议记录、负责人、截止日期和证据链接。使用 [GitHub Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) 或简短的变更日志，让其他学生能够理解发生了什么变化。

## 一套合理的入门技术栈

对于本项目，一个低风险的第一版可以使用：

- GitHub 仓库、Issues、Projects、Actions 和 Pages/Jekyll，用于代码、规划、检查和文档。
- 在增加数据库前，先使用经过审查的 CSV 或 Google Sheet。当学生需要保存项目、账户或反馈时，再迁移到 Supabase/Postgres。
- 对简单目录使用语义化 HTML/CSS/JavaScript；只有在共享交互组件确实需要时，才加入 React、Vue 或 Svelte。
- 对任何 LLM 或私有集成使用一个服务端 API。先从一个模型提供商开始，并通过适配器隔离提供商。
- 使用确定性筛选处理资格和截止日期；LLM 可以解释结果，但不能成为最终权威。
- 在 GitHub Actions 中使用 Playwright、axe、Lighthouse，以及键盘和手机审查。
- 只有在团队写下需要学习的内容后，才加入 Sentry 或重视隐私的分析工具。

这套技术栈是有意设计成可替换的。成功的学生项目应当是清晰、经过测试、可访问且数据可信的体验，而不是大量云账户的集合。

## 决定项目成败的非工具要求

在选择服务之前，先同意以下项目规则：

- 明确的学生受众，以及两到三个可衡量的结果。
- 数据字典、来源登记表、核验负责人和刷新计划。
- 书面的“匹配”定义，包括如何处理未知或已过期的信息。
- 针对学生数据的同意、隐私、保留、删除和事件响应决定。
- 带有预期结果的小型测试数据集，包括边界情况和故意错误的记录。
- 人工审查路径、联系方法，以及报告错误机会的可见方式。
- 预算负责人、免费额度限制、供应商退出方案、备份和关闭流程。
- 一份演示脚本，展示问题、用户旅程、证据、限制和团队学到的内容。

## 出现问题时

检查浏览器控制台、终端输出、网络请求、文件路径和拼写。用最小示例复现问题。判断这是代码、数据、环境还是需求不清导致的问题。记录修复方法，让下一位学生不必重新探索。

## 小词典

| 术语 | 简单含义 |
|---|---|
| Issue | 被跟踪的问题、任务、错误或决定 |
| Branch | 用于一个改动的安全代码副本 |
| Pull request | 请求队友审查改动 |
| 垂直切片 | 一条端到端可运行的小流程 |
| 确定性规则 | 相同输入得到相同结果的规则 |
| 有依据的 AI | 依据可审查来源生成答案的 AI |

不确定时，选择另一个学生最容易理解、测试和撤销的方案。

## 完整同步参考

以下内容会直接同步英文原文，包含完整章节、示例、链接、表格和媒体资源。

<details markdown="1">
<summary>打开完整英文参考</summary>

{% capture canonical_source %}{% include_relative STUDENT_TOOLKIT.md %}{% endcapture %}
{{ canonical_source | split: 'translation_fr: /docs/08-student-toolkit/STUDENT_TOOLKIT.FR.md' | last }}

</details>
