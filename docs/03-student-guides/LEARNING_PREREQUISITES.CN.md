---
layout: default
title: 学习先修知识
locale: zh
translation_en: /docs/03-student-guides/LEARNING_PREREQUISITES.md
translation_zh: /docs/03-student-guides/LEARNING_PREREQUISITES.CN.md
translation_fr: /docs/03-student-guides/LEARNING_PREREQUISITES.FR.md
---

# 学习先修知识与交付路线

## 总体原则

不必在开始前掌握所有技术。边做边学，每次只学习完成下一个可验证任务所需的知识。AI 是解释和协作工具，不是替代理解、测试和责任的黑箱。

## 产品与研究

需要学习如何定义目标用户、采访用户、记录证据、区分假设和事实、绘制用户流程，并用可观察的行为验证问题是否真实。

## Web 基础

学习 HTML 结构、CSS 布局、响应式设计、JavaScript 变量和函数、数组与对象、表单事件、异步请求和浏览器调试。先能读懂简单代码，再逐步生成代码。

## 数据与规则

学习 JSON、表格、唯一 ID、日期、枚举和数据验证。把资格条件写成明确的规则，例如年级范围、地区、语言、费用上限和截止日期。每条规则都要有正例和反例。

## AI 与来源

学习提示词、结构化输出、引用来源、幻觉风险和人工复核。AI 提取的字段必须与官方页面对照，无法确认的内容应标记为待审核，而不是补全猜测。

## 测试与交付

学习单元测试、流程测试、可访问性检查、错误处理、Git 分支和代码评审。每个迭代都应包含一个可运行的增量、已知限制和下一步。

## 建议路线

从问题研究开始，接着制作静态原型，再实现样例数据和匹配规则，最后加入持久化、审核和部署。清晰的垂直切片比大量未完成的功能更有价值。
## 完整同步参考

以下内容会直接同步英文原文，包含完整章节、示例、链接、表格和媒体资源。

<details markdown="1">
<summary>打开完整英文参考</summary>

{% capture canonical_source %}{% include_relative LEARNING_PREREQUISITES.md %}{% endcapture %}
{{ canonical_source | split: 'translation_fr: /docs/03-student-guides/LEARNING_PREREQUISITES.FR.md' | last }}

</details>
