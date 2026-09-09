---
layout: default
title: 入门项目指南
locale: zh
translation_en: /docs/03-student-guides/BEGINNER_PROJECT_GUIDE.md
translation_zh: /docs/03-student-guides/BEGINNER_PROJECT_GUIDE.CN.md
translation_fr: /docs/03-student-guides/BEGINNER_PROJECT_GUIDE.FR.md
---

# 机会公平引擎——入门项目指南

## 欢迎

你不需要先成为专业程序员。这个项目把产品思考、研究、设计、测试和小步实现结合起来。AI 可以帮助解释代码和生成起点，但你仍然负责判断需求是否正确、数据是否真实、体验是否有用。

## 先理解问题

先采访学生、家长或教师，记录他们如何寻找机会、最容易错过什么，以及什么信息会影响决定。把观察写成问题陈述，不要一开始就堆叠功能。

## 推荐学习顺序

1. 学会使用浏览器开发者工具和 GitHub。
2. 了解 HTML、CSS 和 JavaScript 的基本结构。
3. 使用 JSON 表示一条机会记录。
4. 学习条件判断、数组、函数和表单。
5. 用确定性规则进行筛选和排序。
6. 为关键行为编写测试，并观察真实用户。

## 第一条垂直切片

先实现一个小而完整的流程：

```text
填写档案 → 读取样例数据 → 判断资格 → 显示匹配 → 解释原因
```

只需要几条人工核验的机会记录、一个档案表单、一个结果页和一个机会详情页。完成后再加入保存、搜索、管理员审核和通知。

## 使用 AI 的安全方式

向 AI 提供一个小任务、明确的输入输出和验收标准。要求它解释代码，自己运行和修改测试，并对每个外部事实保留来源。不要把 AI 的猜测当成截止日期、费用或资格条件。

## 完成标准

学生能完成流程，看到相关机会，理解分数的原因，并通过官方链接继续申请。代码能够运行，错误状态有提示，样例数据有来源，团队也能解释做出的产品决定。
## 完整同步参考

以下内容会直接同步英文原文，包含完整章节、示例、链接、表格和媒体资源。

<details markdown="1">
<summary>打开完整英文参考</summary>

{% capture canonical_source %}{% include_relative BEGINNER_PROJECT_GUIDE.md %}{% endcapture %}
{{ canonical_source | split: 'translation_fr: /docs/03-student-guides/BEGINNER_PROJECT_GUIDE.FR.md' | last }}

</details>
