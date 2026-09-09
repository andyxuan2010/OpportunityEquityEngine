---
layout: default
title: 项目方案
locale: zh
translation_en: /docs/01-initiative/Opportunity_Equity_Engine.md
translation_zh: /docs/01-initiative/Opportunity_Equity_Engine.CN.md
translation_fr: /docs/01-initiative/Opportunity_Equity_Engine.FR.md
---

# Opportunity Equity Engine：高中生 AI 项目方案

## 项目概述

**Opportunity Equity Engine** 非常适合由 **3–5 名 Grade 11 学生**组队完成。

前提是必须控制范围。不要一开始就试图覆盖“全加拿大所有奖学金、竞赛、科研、志愿者和夏校机会”。更现实的做法是先完成一个窄而完整的 MVP，例如：

> **面向 Montreal / Quebec 高中生的 STEM、大学预科、奖学金、科研和志愿机会智能匹配平台。**

这个项目真正有价值的地方，不是简单“列出机会”，而是解决一个具体问题：

> 很多学生不是没有能力，而是不知道哪些机会存在、自己是否符合资格、什么时候截止，以及哪些机会最值得优先申请。

如果做好，它更接近一个 **AI Opportunity Matching Engine**，而不是普通的活动目录网站。

---

## 核心产品体验

假设用户输入：

- Grade 11
- Montreal
- Interested in medicine / AI
- French + English
- Available weekends
- Budget < $300
- Wants research / volunteering
- GPA / subjects
- Age 16

系统输出：

| Opportunity | Match | Deadline | Why |
|---|---:|---|---|
| Local AI Competition | 94% | Oct 18 | Grade 9–12, AI interest, team eligible |
| Hospital Volunteering | 88% | Rolling | Age requirement met, local |
| Research Summer Program | 82% | Feb 1 | STEM profile strong |
| Scholarship X | 76% | Mar 15 | Academic eligibility met |
| Program Y | 12% | Jan 30 | Requires Grade 12 |

这已经构成一个完整、可展示、可测试的产品。

---

## AI 在项目中真正负责什么

这个项目不能只是一个普通数据库，也不能只是一个 ChatGPT wrapper。

AI 应该负责那些真正需要“理解”的任务。

### 1. Information Extraction

很多机会信息存在于网页、PDF、学校通知或机构页面中。

例如原始内容：

> Applicants must currently be enrolled in Grade 10 or 11 at a Canadian secondary school and demonstrate an interest in STEM. Applicants must be Canadian citizens or permanent residents.

AI 可以自动提取成结构化数据：

```json
{
  "grades": [10, 11],
  "country": "Canada",
  "field": ["STEM"],
  "citizenship": ["citizen", "permanent_resident"]
}
```

这一步是项目的第一层 AI 能力。

---

### 2. Eligibility Matching

学生资料：

```text
Grade: 11
Country: Canada
Status: Permanent Resident
Interest: AI / Medicine
```

系统判断：

```text
Grade requirement       PASS
Location requirement    PASS
Status requirement      PASS
Interest match          PASS
```

最终输出：

> Eligible — high confidence.

需要注意，eligibility 不应该全部交给 LLM 判断。

例如：

```python
if student.grade not in opportunity.grades:
    eligible = False
```

这类明确规则应该由程序直接执行。

更合理的架构是：

> **LLM 负责理解非结构化文本，传统代码负责确定性规则判断。**

这更接近真实 AI 产品的工程设计。

---

### 3. Opportunity Ranking

仅仅符合资格还不够。

系统还要判断哪些机会最值得推荐。

例如：

```text
Match Score =
Eligibility        40%
Interest Match     20%
Location           10%
Cost               10%
Schedule           10%
Competitiveness     5%
Deadline Urgency    5%
```

最终结果：

```text
McGill Research Program
Match Score: 91/100
```

AI 再生成解释：

> Strong match because you are a Grade 11 Montreal student interested in biomedical research. The program is local and meets your stated budget constraint.

这样系统就同时具有：

- Eligibility
- Ranking
- Personalization
- Explainability

---

## 推荐的系统架构

```text
Opportunity Websites / PDFs
        ↓
Data Collection
        ↓
LLM Information Extraction
        ↓
Structured Database
        ↓
Eligibility Engine
        ↓
Ranking Algorithm
        ↓
LLM Explanation
        ↓
Web App
```

---

## 推荐技术栈

### Frontend

- Next.js
- React

### Backend

- Python
- FastAPI

### Database

- PostgreSQL
- Supabase

### AI

- OpenAI API
- Gemini API
- 其他适合结构化提取和文本理解的 LLM

### Semantic Search

- pgvector
- Embeddings

### Deployment

- Vercel
- Supabase

第一版完全没有必要自己训练大型模型。

高中生项目更专业的做法是：

> **LLM + Structured Data + Deterministic Rules + Ranking Algorithm**

而不是试图从零训练一个 LLM。

---

## MVP 应该控制在什么规模

建议第一版只覆盖：

- 100 个 scholarships
- 100 个 competitions
- 75 个 volunteering opportunities
- 75 个 summer programs
- 50 个 research opportunities

总计：

> **约 400 个高质量 opportunities**

这已经足够做出一个真正能用的产品。

不要一开始追求 10,000 或 20,000 条数据。

质量、准确性和可验证性比数量重要。

---

## 4 人团队分工

### 1. Product / Research Lead

负责：

- 研究学生真正遇到的问题
- 访谈学生、老师、guidance counsellor
- 定义产品功能
- 定义数据结构
- 设计用户测试

### 2. AI / Data Lead

负责：

- Python
- LLM API
- Embeddings
- Information extraction
- Matching algorithm
- Evaluation

### 3. Full-Stack Developer

负责：

- React / Next.js
- Backend integration
- Database
- Authentication
- Dashboard

### 4. Data / Community Lead

负责：

- 收集机会
- 验证信息
- 联系学校和社区机构
- 用户测试
- 收集反馈
- 追踪实际使用情况

如果有第 5 个成员，可以负责：

- UI / UX
- Visual design
- Outreach
- Presentation
- Competition pitch

---

## 如何让这个项目真正有大学申请价值

真正有价值的不是：

> Built an AI website.

而是：

```text
Built Website
↓
50 Students Tested It
↓
Students Found Opportunities
↓
They Actually Applied
↓
Some Were Accepted
```

例如最终可以产生这些指标：

- 214 students created profiles
- 1,800 opportunity matches generated
- 67% of users discovered at least one opportunity they had never heard of
- 43 students submitted applications through opportunities discovered on the platform

这种数据比“我们做了一个 AI App”强得多。

---

## 可以加入研究实验

这个项目还可以变成一个研究项目。

例如找 60 个学生。

### Group A

使用普通 Google 搜索机会。

### Group B

使用 Opportunity Equity Engine。

测试问题：

> 在 20 分钟内，学生能找到多少个真正符合自己资格的机会？

例如：

```text
Google Group
Average: 3.2 opportunities

AI Platform
Average: 8.7 opportunities
```

还可以研究：

> 信息获取能力较弱的学生，是否从 AI 推荐系统中受益更多？

这就可以形成一个正式 research question：

> **Can AI-driven opportunity recommendation reduce information inequality among high-school students?**

这样项目就从普通 App 升级成：

> **Research + Social Impact + AI Product**

---

## 项目最大的几个风险

### 1. 不要做成 ChatGPT Wrapper

如果界面只是：

> “告诉我你的兴趣，我给你推荐几个 summer programs。”

然后把 prompt 直接发给 LLM，这个项目会很弱。

真正应该有：

- Verified opportunity database
- Structured eligibility
- Matching logic
- Ranking
- Explainability

---

### 2. 不要只做普通数据库

如果只有：

```text
Search
Filter by Grade
Filter by Location
```

那就不是一个真正的 AI 项目。

真正的 AI 部分应该包括：

> 自动读取 opportunity → 自动理解 eligibility → 自动匹配学生 profile → 排名 → 解释推荐原因

---

### 3. 不要收集不必要的敏感信息

初期不要要求：

- 家庭收入
- 健康信息
- 种族
- Immigration documents
- 精确地址

更安全的 profile 可以只有：

```text
Location: Montreal
Grade: 11
Age: 16
Interests: Medicine / AI
Budget: Free / <$500
```

已经足够完成第一版匹配。

---

### 4. 不要把项目变成 AI Essay Writer

例如：

> “AI 帮你写 Harvard essay。”

这个方向已经非常拥挤，也会削弱“机会公平”这个项目本身的定位。

项目核心应该始终是：

> **Opportunity Discovery + Eligibility + Matching**

---

## 项目 Mission

可以把项目定义为：

> **Make high-quality extracurricular, academic and community opportunities discoverable to students who do not already know where to look.**

中文可以表达为：

> **让原本不知道去哪里寻找机会的学生，也能公平地发现高质量的学术、课外和社区资源。**

---

## 为什么这个项目特别适合高中生

最大的优势是：

> **高中生自己就是目标用户。**

不需要假装理解医院、养老院、癌症诊断等专业领域。

高中生每天实际遇到的问题就是：

- Scholarship 在哪里？
- Research 机会在哪里？
- 什么比赛值得参加？
- Grade 11 可以申请吗？
- Deadline 是什么？
- 哪些 Summer Program 值得申请？
- 为什么有些学生很早就知道研究、竞赛和奖学金机会，而另一些完全不知道？

这是一个真实存在的信息不平等问题。

---

## 综合评分

| 指标 | 评分 |
|---|---:|
| 高中生完成可能性 | 9/10 |
| AI 技术含量 | 8/10 |
| 社会意义 | 9/10 |
| 原创空间 | 8/10 |
| 可扩展性 | 10/10 |
| 大学申请价值 | 9/10 |
| 做成真实产品可能性 | 9/10 |

---

## 最终定位

真正理想的 Opportunity Equity Engine 不应该只是一个“AI 推荐网站”。

它应该是：

> **Opportunity Database + AI Extraction + Eligibility Engine + Personalized Ranking + School / Community Deployment + Measurable Equity Impact**

如果能做到这个程度，它完全足够成为一个有分量的高中生 AI 项目。
