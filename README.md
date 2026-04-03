# Baobao Web

这是一个轻量的静态个人网站模板，适合放：

- 个人简介
- 最新论文
- 学习资料
- 常用查阅入口
- 研究时间线
- 工具箱 / 外部链接入口

## 目录

- `index.html`: 首页概览
- `pages/topics/index.html`: 学习专题页
- `pages/resources/index.html`: 学习文档页
- `pages/reference/index.html`: 资料查询页
- `pages/archive/index.html`: 低调归档页
- `assets/css/site.css`: 全站样式
- `assets/js/site-data.js`: 全站内容数据
- `assets/js/main.js`: 页面渲染逻辑

## 如何更新内容

1. 修改 `assets/js/site-data.js` 中的 `profile`、`papers`、`resources`、`timelineEvents`、`toolboxLinks`。
2. 如果要新增一个完整页面，就在 `pages/` 下新建目录和 `index.html`。
3. 如果需要更换视觉风格，再调整 `assets/css/site.css`。

## 本地预览

在当前目录执行：

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`

## GitHub Pages 部署

这个站点是纯静态站，适合直接部署到 GitHub Pages。

推荐仓库结构：

- 仓库根目录保留 `index.html`
- 二级页面放在 `pages/`
- 样式放在 `assets/css/`
- 数据和渲染逻辑放在 `assets/js/`
- 使用 `main` 分支直接发布
- 添加 `.nojekyll`，避免被 Jekyll 处理

如果要启用 GitHub Pages：

1. 创建一个新的 GitHub 仓库
2. 把当前目录内容推送到仓库
3. 在 GitHub 仓库设置里打开 `Pages`
4. 选择从 `main` 分支根目录部署

默认地址通常会是：

```text
https://<github-username>.github.io/<repo-name>/
```

如果你想绑定自己的域名：

1. 在仓库根目录新增 `CNAME` 文件，内容写你的域名，例如：

```text
www.your-domain.com
```

2. 在 GitHub Pages 设置里填入同一个自定义域名
3. 到域名服务商后台添加 DNS 记录

常见 DNS 配置：

- 子域名 `www`：配置 `CNAME` 指向 `<github-username>.github.io`
- 根域名：配置到 GitHub Pages 官方提供的 `A` 记录 IP

## 部署到当前服务器

可行，而且很适合这类站点。

如果你的服务器上已经有 Nginx，可以直接：

1. 把整个 `baobaoWEB` 目录内容上传到服务器目录，例如 `/var/www/baobao/`
2. 配置 Nginx `root` 指向这个目录
3. 把域名 DNS 解析到当前服务器 IP
4. 重载 Nginx 配置

一个最小 Nginx 配置示例：

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /var/www/baobao;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

如果你准备上 HTTPS，后面还可以配 `certbot` 或者现成的 SSL 证书。

## 域名部署思路

这个站点是纯静态网页，适合部署到：

- GitHub Pages
- Vercel
- Netlify
- 你自己的云服务器 / Nginx

如果你已经买了域名，只需要在部署平台配置自定义域名，然后去域名服务商后台配置 DNS 解析即可。
