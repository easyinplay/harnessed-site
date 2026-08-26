# task_plan — harnessed-site 工具链升级 + docs 多语言

状态：执行中
更新：2026-08-26

## 目标

1. Astro 4.16 → 7.x，Tailwind 3 → 4，为 Vite+ 铺平 Vite 8 前提
2. 接入 Vite+（`vp`）作为统一工具链
3. docs 按首页语言顺序补齐 8 套译文

## 已确认的版本约束（findings.md 有依据）

| 包 | 现状 | 目标 | 约束 |
|---|---|---|---|
| astro | 4.16.19 | 7.2.7 | 内置 vite ^8.0.13，engines node >=22.12（本机 v24.19 ✓） |
| @astrojs/starlight | 0.29.3 | 0.41.9 | peer astro ^7.0.2 |
| @astrojs/sitemap | 3.1.6 | 3.7.3 | 无 peer 限制 |
| astro-mermaid | 1.4.0 | 2.1.0 | peer astro >=4、mermaid ^11、新增 @mermaid-js/layout-elk ^0.2.0 |
| @astrojs/tailwind | 5.1.5 | **移除** | peer 仅到 astro ^5，Astro 7 无路可走 |
| tailwindcss | 3.4.19 | 4.x | 改用 @tailwindcss/vite@4.3.3（peer vite ^8 ✓） |
| @astrojs/starlight-tailwind | 无 | 5.0.0 | peer starlight >=0.38 + tailwindcss ^4 |

## Phase 1 — Astro 7 + Tailwind 4 ✅ 2026-08-26

- [x] 1.1 升级依赖，移除 `@astrojs/tailwind`，新增 `@tailwindcss/vite`、`@astrojs/starlight-tailwind`、`@mermaid-js/layout-elk`
- [x] 1.2 内容集合迁移：`src/content/config.ts` → `src/content.config.ts`，改用 Starlight `docsLoader`
- [x] 1.3 Tailwind CSS-first：`tailwind.config.mjs` 的 theme.extend 迁进 `global.css` 的 `@theme`，删除旧配置文件
- [x] 1.4 `astro.config.mjs`：`tailwind()` integration 换成 `vite.plugins: [tailwindcss()]`
- [x] 1.5 修 Starlight 0.29 → 0.41 的 API 漂移（`social` 由对象改为数组等）
- [x] 1.6 验收：`astro build` 绿 + agent-browser 首页/docs 双主题视觉冒烟

验收结果：121 页构建通过（astro 7.2.7 / vite 8.0.13 / tailwind 4.3.3），首页与 docs 零 console error，暗色主题与 --sl-color-accent #7c3aed 未走样，mermaid SVG 正常，日文 docs 侧边栏与 UI 字符串本地化正确、正文按预期回退英文。

原验收标准：121 页构建通过、零 console error、暗色主题与 violet accent 未走样、mermaid 图正常渲染、语言切换与 hreflang 不变。

## Phase 2 — Vite+ 接入

- [ ] 2.1 安装 `vp`（Windows：`irm https://vite.plus/ps1 | iex`）
- [ ] 2.2 `vp migrate --no-interactive`
- [ ] 2.3 `vp install` / `vp check` / `vp run build` 逐条验证
- [ ] 2.4 **部署兼容**：保留 package.json 的 `build: astro build`，确保 Cloudflare Pages 构建命令无需装 vp

风险：`vp build` 跑原生 Vite 构建，不能替代 `astro build`；本项目只能用 `vp run build` 转发。

## Phase 3 — docs 8 语翻译

顺序按首页 locale：zh-hant → ja → ko → pt-br → tr → ru → vi → th

每语 11 篇：index / getting-started×3 / concepts×4 / reference×3
每语一个 commit，完成即 build 验收。

- [x] zh-hant  - [x] ja  - [x] ko  - [x] pt-br
- [ ] tr  - [ ] ru  - [ ] vi  - [ ] th

## 已完成（本轮之前）

- 首页 10 语（i18n registry + 8 套词典 + 下拉切换器 + hreflang）— commit `15fa8c9`
- docs 10 语骨架：`src/i18n/locales.ts` 抽出、`astro.config.mjs` 10 locale + 侧边栏翻译、121 页构建通过、未译语言回退英文 — **未 commit**
