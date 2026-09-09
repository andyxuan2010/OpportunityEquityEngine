---
layout: default
title: 从这里开始
locale: zh
translation_en: /docs/00-start-here/START_HERE.md
translation_zh: /docs/00-start-here/START_HERE.CN.md
translation_fr: /docs/00-start-here/START_HERE.FR.md
---

# 从这里开始：你的第一次贡献

这是从“我想帮忙”到完成一个可审查贡献的最短路径。你不需要在开始前学会所有内容。

## 用一分钟理解项目

机会公平引擎帮助高中生发现、理解并优先选择有意义的机会。我们先构建一条小而可信的垂直切片：

```text
学生档案 → 已核验的机会数据 → 匹配 → 解释 → 下一步
```

## 你的第一个小时

1. 阅读[文档索引](../INDEX.html)和[入门项目指南](../03-student-guides/BEGINNER_PROJECT_GUIDE.html)。
2. 为第一个任务选择一个角色：研究、产品设计、开发、测试、数据审核或展示。
3. 阅读[学习先修知识](../03-student-guides/LEARNING_PREREQUISITES.html)和[学生工具箱](../08-student-toolkit/STUDENT_TOOLKIT.html)。
4. 按照[实现指南](../05-build/DEMO_IMPLEMENTATION_GUIDE.html)配置 Git、编辑器和工具。
5. 创建一个描述小成果的 GitHub issue，不要只写一个模糊活动。
6. 完成一个小改动、测试它，并在 issue 或 pull request 中记录学到的内容。

## 选择你的起点

| 你喜欢什么 | 从哪里开始 | 第一个成果 |
|---|---|---|
| 提问和倾听 | [研究与验证](../07-research-and-validation/RESEARCH_AND_VALIDATION.html) | 访谈记录和已测试的假设 |
| 用视觉解释想法 | [项目倡议](../01-initiative/initiative.html)和[演示交付物](../06-demo/DEMO_DELIVERABLES.html) | 用户流程或线框图 |
| 整理信息 | [架构](../02-architecture/architecture.html) | 数据字段或流程建议 |
| 编写代码 | [演示实现](../05-build/DEMO_IMPLEMENTATION_GUIDE.html) | 一个经过测试的小功能 |
| 帮助团队协作 | [学生工具箱](../08-student-toolkit/STUDENT_TOOLKIT.html) | issue、检查清单或代码审查 |

## 团队约定

- 先完成最小的有用改动。
- 需求不清楚时，用文字提出问题。
- 把 AI 输出当作草稿，使用前要理解、测试和审查。
- 不要提交密码、API 密钥、学生隐私信息或未经许可的复制内容。
- 保留来源，并清楚标记样例数据、假设和未来想法。
- 评价工作，不评价个人。

## 开始前与完成后的检查

开始前要能回答：谁会受益？什么会改变？哪些内容不在范围内？如何测试？决定依据是什么？完成后应有可复现结果、测试或证据，并考虑可访问性、隐私和安全；最好由队友审查。

## 遇到困难时

先花 15 分钟理解错误。复制完整错误信息，说明预期结果和已经尝试的步骤，然后在 issue 中提出一个具体问题。清晰的问题本身也是贡献。
## 完整同步参考

以下内容会直接同步英文原文，包含完整章节、示例、链接、表格和媒体资源。

<details markdown="1">
<summary>打开完整英文参考</summary>

{% capture canonical_source %}{% include_relative START_HERE.md %}{% endcapture %}
{{ canonical_source | remove_first: '---' | remove_first: '---' }}

</details>
