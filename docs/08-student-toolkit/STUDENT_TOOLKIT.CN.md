---
layout: default
title: 学生工具箱
locale: zh
translation_en: /docs/08-student-toolkit/STUDENT_TOOLKIT.md
translation_zh: /docs/08-student-toolkit/STUDENT_TOOLKIT.CN.md
translation_fr: /docs/08-student-toolkit/STUDENT_TOOLKIT.FR.md
---

# 学生工具箱：协作、安全和持续推进

这是帮助学生项目健康运行的实用参考：协作、可访问性、隐私、故障排除和清晰沟通。

## 简单的 GitHub 流程

1. 创建或选择一个有明确成果和验收方式的 issue。
2. 创建分支，例如 `docs/add-research-guide` 或 `feature/save-opportunity`。
3. 完成小改动，并使用有意义的信息提交。
4. 本地测试后打开 pull request，说明改了什么、如何测试、还剩什么。
5. 请求审查，根据反馈改进工作。
6. 检查和审查完成后再合并。

除非团队同意进行极小的文档修正，不要直接在 `main` 上工作。

## Issue 模板

```text
目标：
谁会受益：
不在范围内的内容：
验收方式：
证据或来源：
问题和风险：
```

## Pull request 检查

- 改动只有一个清晰目的。
- 手机和桌面页面都能使用。
- 已检查链接、图片、翻译和标题。
- 没有加入秘密或不必要的个人信息。
- 已理解并审查 AI 生成的代码或文字。
- 说明了审查者如何复现结果。

## 可访问性是质量的一部分

使用有意义的标题、足够的对比度、描述性链接文字、图片替代文本、表单标签和键盘可操作控件。不要只用颜色表示状态或匹配结果。提交前用缩放和键盘测试。

## 隐私与负责任的 AI

只收集匹配所需的最少学生信息。开发时使用虚构数据。API 密钥必须放在服务器或批准的密钥存储中。机会事实应显示来源和核验日期。AI 可以帮助总结和解释，但资格、截止日期、费用和安全声明必须受确定性规则与人工审查保护。

## 出现问题时

检查浏览器控制台、终端输出、网络请求、文件路径和拼写。用最小示例复现，并判断这是代码、数据、环境还是需求问题。记录解决办法，让下一位学生无需重新探索。

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
{{ canonical_source | remove_first: '---' | remove_first: '---' }}

</details>
