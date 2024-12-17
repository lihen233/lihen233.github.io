+++
date = '2024-12-17T19:29:56+01:00'
draft = false
title = '如何推送到源码仓库'
+++
# Hugo Git 推送流程总结

以下是推送 Hugo 更新到 GitHub 并自动部署的完整流程：

---

## 1. 生成 Hugo 静态文件（可选）

在 Hugo 项目根目录运行以下命令，生成静态网站文件到 `public/` 目录：

```bash
hugo --cleanDestinationDir
```

---

## 2. 使用 Git 提交和推送更改

### **在 VSCode 中操作**

1. **暂存更改**：
   - 在 VSCode 左侧的 **源代码管理** (Source Control) 中，点击 **+** 号将文件添加到暂存区。
   - 等同于执行：
     ```bash
     git add .
     ```

2. **提交更改**：
   - 在提交框中输入提交信息，例如：
     ```
     Update Hugo site: 添加新文章或修改内容
     ```
   - 点击 **✓** 图标（提交）。
   - 等同于执行：
     ```bash
     git commit -m "Update Hugo site"
     ```

3. **推送到 GitHub**：
   - 点击 **同步更改** 按钮（⟳ 符号）。
   - 等同于执行：
     ```bash
     git push origin main
     ```

### **终端命令操作**

如果你更喜欢使用命令行，可以执行以下命令：

```bash
hugo --cleanDestinationDir     # 生成 Hugo 靜态文件
git add .                     # 添加所有更改
git commit -m "Update Hugo site"  # 提交更改
git push origin main          # 推送到 GitHub
```

---

## 3. GitHub Actions 自动部署

如果你配置了 **GitHub Actions**，推送到源码仓库后：
- GitHub Actions 会自动运行：
  - 拉取 Hugo 源代码。
  - 生成静态文件。
  - 推送静态文件到 **GitHub Pages** 仓库（例如 `lihen233/lihen233.github.io`）。

---

## 4. 验证更新

打开你的博客网址，确认更新是否成功：

```
https://lihen233.github.io
```

---

## **快速命令总结**

```bash
hugo --cleanDestinationDir  # 生成 Hugo 静态文件
git add .                   # 添加更改
git commit -m "Update Hugo site"  # 提交更改
git push origin main        # 推送到 GitHub
```

---

## 完成！

执行以上步骤后，Hugo 的内容就会成功发布到 GitHub Pages。如果遇到问题，检查 GitHub Actions 的日志，确保工作流正常运行。

