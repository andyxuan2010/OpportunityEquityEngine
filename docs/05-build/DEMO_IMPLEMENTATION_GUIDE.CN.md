---
layout: default
title: 演示实现指南
locale: zh
translation_en: /docs/05-build/DEMO_IMPLEMENTATION_GUIDE.md
translation_zh: /docs/05-build/DEMO_IMPLEMENTATION_GUIDE.CN.md
translation_fr: /docs/05-build/DEMO_IMPLEMENTATION_GUIDE.FR.md
---

# 机会公平引擎——入门演示实现指南

## 目标

实现一个小型、可运行、可解释的端到端演示：学生填写档案，系统读取已核验样例数据，应用资格规则，计算匹配分数，并解释推荐原因。

## 建议顺序

1. 创建项目和基础页面。
2. 定义 `Opportunity` 数据结构和少量样例记录。
3. 创建档案表单并验证输入。
4. 编写确定性的资格函数。
5. 编写透明的排序函数。
6. 显示结果、来源、截止日期和下一步。
7. 增加机会详情、保存和管理员审核的最小流程。

## 数据模型

每条机会至少应包含名称、组织、类别、地点、年级范围、语言、费用、截止日期、资格描述、官方 URL、核验日期和审核状态。缺少的事实要标为未知或待审核，不能用猜测填充。

## 匹配规则

先判断硬性资格条件；不符合时给出清晰原因。符合后再按兴趣、成本、时间和截止日期排序。分数应由容易理解的部分组成，并在界面中展示解释。

## 测试

测试符合和不符合年级、地区、语言、预算及截止日期的记录，测试缺失字段和错误输入，测试没有结果、加载失败和来源失效等状态。手动完成一次完整用户流程。

## 部署与安全

演示环境可以使用托管服务，但秘密不能提交到 Git。生产版本需要认证、权限控制、备份、日志、输入验证和隐私政策。演示中的样例数据必须明确标注。
## 完整同步参考

以下内容会直接同步英文原文，包含完整章节、示例、链接、表格和媒体资源。

<details markdown="1">
<summary>打开完整英文参考</summary>

{% capture canonical_source %}{% include_relative DEMO_IMPLEMENTATION_GUIDE.md %}{% endcapture %}
{{ canonical_source | split: "\n" | slice: 7, 9999 | join: "\n" }}

</details>
