# luckFan0519.github.io

> **姜凡** 的个人主页 — 暗色科技风 Jekyll + GitHub Pages 站点

🌐 **在线访问**: [https://luckFan0519.github.io/](https://luckFan0519.github.io/)

---

## ✨ 特性

| 效果 | 说明 |
|------|------|
| 🌌 Canvas 粒子背景 | 蓝紫色粒子 + 连线，随窗口自适应 |
| 💻 终端打字动画 | `~/portfolio` 循环打字效果 |
| 🪟 毛玻璃卡片 | `backdrop-filter: blur` 玻璃拟态 |
| ✨ Glitch 文字 | 标题赛博朋克故障效果 |
| 🎴 3D 倾斜卡片 | 鼠标悬停时卡片跟随 3D 倾斜 |
| 📡 鼠标光晕 | 跟随鼠标的蓝紫色光晕 |
| 🔮 卡片光泽扫过 | hover 时有光泽扫过动画 |
| 📱 完整响应式 | 手机端自适应 + 汉堡菜单 |

---

## 📂 项目结构

```
luckFan0519.github.io/
├── _config.yml              # Jekyll 配置
├── _data/
│   └── profile.yml          # 个人信息数据
├── _layouts/
│   ├── default.html         # 主布局
│   └── post.html            # 文章布局
├── _includes/
│   ├── header.html          # 毛玻璃导航栏
│   └── footer.html          # 页脚
├── assets/
│   ├── css/style.css        # 暗色科技风样式
│   ├── js/main.js           # 粒子/打字/3D交互
│   └── images/
│       ├── avatar.jpg       # 头像
│       ├── project-unetr.png    # UNETR++ 架构图
│       ├── project-slrnet.png   # SLRNet 架构图
│       └── project-furniture.png # 家具小程序截图
├── .github/workflows/
│   └── jekyll.yml           # GitHub Actions 自动构建
├── index.html               # 首页
├── Gemfile                  # Ruby 依赖
└── README.md
```

---

## 🚀 本地运行

需要安装 [Ruby](https://www.ruby-lang.org/) 和 [Bundler](https://bundler.io/)：

```bash
# 安装依赖
bundle install

# 本地预览
bundle exec jekyll serve

# 打开浏览器访问 http://127.0.0.1:4000
```

---

## 📋 代表作品

| # | 项目 | 关键指标 |
|---|------|----------|
| 1 | **改进UNETR++的3D医学图像分割** | Synapse Dice 87.94%（+0.72%），仅增 0.54M 参数 |
| 2 | **SLRNet实时图像去雾网络** | SOTS PSNR 28.78dB / SSIM 0.9645，1.44ms/图 |
| 3 | **家具展示微信小程序** | 微信云开发，五大功能模块 |

---

## 🛠️ 技术栈

- **站点**: Jekyll + GitHub Pages + GitHub Actions
- **前端**: HTML5 / CSS3 / Vanilla JavaScript
- **字体**: Inter / Noto Sans SC / Orbitron (Google Fonts)
- **特效**: Canvas 2D / CSS Animations / IntersectionObserver

---

## 📄 License

本项目仅供个人学习与展示使用。未经授权，请勿将内容用于商业用途。

---

> 🏗️ Built with ❤️ by [姜凡](https://github.com/luckFan0519)
