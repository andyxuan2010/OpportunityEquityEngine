---
layout: default
title: 项目管理计划
locale: zh
translation_en: /docs/04-delivery/PROJECT_MANAGEMENT_PLAN.md
translation_zh: /docs/04-delivery/PROJECT_MANAGEMENT_PLAN.CN.md
translation_fr: /docs/04-delivery/PROJECT_MANAGEMENT_PLAN.FR.md
---

# 机会公平引擎——项目管理计划

## 项目提案

团队将在一个学期内构建一个聚焦的学生机会发现演示。重点是可信数据、清晰匹配和可理解的下一步，而不是追求庞大的功能清单。

## 团队角色

建议分为产品与研究、设计与用户体验、数据与核验、前端实现、后端与基础设施、测试与展示等职责。一个人可以承担多个角色，但每项工作都应有负责人和复核人。

## 交付节奏

先完成问题研究和范围确认，再制作原型、建立样例数据、实现匹配流程、进行用户测试、修正关键问题并准备演示。每周应产生一个可以检查的成果。

## 工具与协作

使用 GitHub 管理代码和议题，使用 Markdown 记录决定，使用统一的数据模板记录机会，使用看板跟踪任务。提交应小而清晰，Pull Request 应说明改变、测试和已知限制。

## 成本与风险

第一版应优先使用免费或低成本服务。主要风险包括错误或过期的数据、AI 幻觉、范围膨胀、隐私泄露、时间不足和用户需求被假设取代。缓解方式包括来源核验、人工审核、最小数据收集、垂直切片和定期用户反馈。

## 完成定义

学生可以建立档案、得到匹配结果、理解原因、查看官方来源并完成一个保存或下一步操作；团队能够展示测试结果、已知限制、数据核验状态和后续计划。
## 完整同步参考

以下内容会直接同步英文原文，包含完整章节、示例、链接、表格和媒体资源。

<details markdown="1">
<summary>打开完整英文参考</summary>

{% capture canonical_source %}{% include_relative PROJECT_MANAGEMENT_PLAN.md %}{% endcapture %}
{{ canonical_source | remove_first: '---' | remove_first: '---' }}

</details>
