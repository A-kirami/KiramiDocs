# 贡献指南

## 撰写/修正文档

如果你在文档中发现了错误，欢迎随时提出问题或发起 Pull Request（PR）。

一旦你提交了 PR，GitHub 会自动构建网站并将临时预览部署到 Netlify 上。

## 风格

以下是一些风格准则，以帮助我们在文档中保持一致的风格：

1. 使用 [引用样式链接]。这有助于阅读原始的 Markdown 并更新链接。
2. 更偏好使用纯粹的 Markdown 而非 HTML/MDX。这有助于阅读 Markdown。
3. 中文与英文、数字、半角符号之间需要有空格。
4. 若非英文整句，使用全角标点符号。
5. 直引号「」和弯引号“”都可接受，但同一份文件里应使用同种引号。
6. **不要使用斜体**，你不需要一种与粗体不同的强调。除此之外，你也可以考虑使用 [docusaurus 告示]。
7. 文档中应以“我们”指代机器人开发者，以“用户”指代机器人的使用者，以“开发者”指代机器人的插件开发者。

如果你需要编辑器检查 Markdown 规范，可以在 VSCode 中安装 [markdownlint] 扩展。

## 代码空间

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=677594368)

## 本地开发

通过运行以下命令安装依赖项：

```shell
yarn
```

下面的命令启动一个本地开发服务器并打开一个浏览器窗口。大多数更改会实时反映在无需重新启动服务器的情况下。

```shell
yarn start
```

此命令会生成静态内容，可以使用任何静态内容托管服务进行提供。

```shell
yarn build
```

## 持续集成（CI）

在提交 PR 后，GitHub 将构建网站，然后将结果发送到 Netlify 进行预览。成功构建后，URL 将添加到 PR 的评论中。

在将代码推送到主分支时，将触发构建，然后将生成的文件发送到 Netlify 以发布到生产环境。

## 国际化（i18n）

由于我们正在编写完善目前的文档内容，翻译工作目前已暂停。建议密切关注 [开发者交流群](https://qm.qq.com/q/fQvd478kz8) 和本存储库，了解何时开始接受翻译。

## 版本控制

附加的版本控制参考：[Docusaurus](https://docusaurus.io/docs/versioning)

只有 `/docs/` 文件夹中的文件将会被"版本化"。

[引用样式链接]: https://www.markdownguide.org/basic-syntax/#reference-style-links
[docusaurus 告示]: https://docusaurus.io/docs/markdown-features/admonitions
[markdownlint]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
