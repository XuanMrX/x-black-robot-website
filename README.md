# X Black Robot Website

一个极简黑色视觉风格的个人网站，用于展示 AI First 的个人品牌、作品橱窗和社交入口。

## 本地运行

先安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

默认访问：

```bash
http://localhost:3000
```

生产构建检查：

```bash
npm run build
```

## 发布到 GitHub

如果你是第一次把项目推到 GitHub，先在 GitHub 创建仓库：

```text
XuanMrX/x-black-robot-website
```

然后在项目目录执行：

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/XuanMrX/x-black-robot-website.git
git push -u origin main
```

如果远程仓库已经配置过，只需要：

```bash
git add .
git commit -m "Update website"
git push
```

## 部署到 Vercel

### 方式一：通过 Vercel 网页部署

1. 打开 [Vercel](https://vercel.com/)。
2. 使用 GitHub 账号登录。
3. 点击 `Add New...`。
4. 选择 `Project`。
5. 选择 GitHub 仓库 `XuanMrX/x-black-robot-website`。
6. Framework Preset 选择 `Next.js`。
7. Build Command 保持默认：

```bash
npm run build
```

8. Output Directory 保持默认，不需要填写。
9. Install Command 保持默认：

```bash
npm install
```

10. 点击 `Deploy`。

部署完成后，Vercel 会生成一个类似这样的访问地址：

```text
https://x-black-robot-website.vercel.app
```

### 绑定自定义域名

1. 进入 Vercel 项目。
2. 打开 `Settings`。
3. 进入 `Domains`。
4. 输入你的域名，例如：

```text
example.com
```

5. 按 Vercel 提示去域名服务商添加 DNS 记录。
6. 等待 DNS 生效。

常见 DNS 配置：

```text
类型：A
名称：@
值：76.76.21.21
```

如果绑定 `www` 子域名：

```text
类型：CNAME
名称：www
值：cname.vercel-dns.com
```

## 部署到 Cloudflare Pages

### 方式一：通过 Cloudflare Pages 连接 GitHub

1. 打开 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 进入 `Workers & Pages`。
3. 点击 `Create`。
4. 选择 `Pages`。
5. 选择 `Connect to Git`。
6. 连接 GitHub 账号。
7. 选择仓库 `XuanMrX/x-black-robot-website`。
8. Framework preset 选择 `Next.js`。
9. Build command 填写：

```bash
npm run build
```

10. Build output directory 填写：

```bash
.next
```

11. 点击 `Save and Deploy`。

### 推荐：使用 Cloudflare Pages 的 Next.js 适配方式

Cloudflare Pages 对 Next.js 的支持会随版本变化。若直接部署失败，推荐安装 Cloudflare 官方适配工具：

```bash
npm install -D @cloudflare/next-on-pages
```

然后在 `package.json` 中添加脚本：

```json
{
  "scripts": {
    "pages:build": "npx @cloudflare/next-on-pages"
  }
}
```

Cloudflare Pages 构建配置改为：

```bash
npm run pages:build
```

输出目录改为：

```bash
.vercel/output/static
```

### 绑定自定义域名

1. 进入 Cloudflare Pages 项目。
2. 打开 `Custom domains`。
3. 点击 `Set up a custom domain`。
4. 输入你的域名，例如：

```text
example.com
```

5. 如果域名已经托管在 Cloudflare，系统会自动配置 DNS。
6. 如果域名不在 Cloudflare，需要按提示添加 CNAME 记录。

常见 CNAME 配置：

```text
类型：CNAME
名称：www
值：你的 Pages 项目地址
```



## 项目结构

```text
app/
  icon.png
  layout.tsx
  page.tsx
  globals.css
components/
  spline-scene-basic.tsx
  ui/
lib/
public/
  work-*.jpg
  wechat-xiaoxuan.jpg
```
