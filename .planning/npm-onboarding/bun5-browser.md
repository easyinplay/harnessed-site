# Bun 5.x 本地浏览器 QA

结果：PASS。2026-10-25 (Asia/Shanghai)，第 1 次尝试通过，未使用第 2 次。
浏览器执行 7452 ms；完整 sidecar 在 4 分钟上限内完成。

- 目标为现有 `http://127.0.0.1:4323`，没有启动、停止或修改 preview。
- 使用既有 Chromium 1247；没有安装、用户 profile、凭据、API mock 或配置修改。
- 4 个全新 context：EN/ZH × 1440x1000 / 390x844，各自点击 Bun tab。
- 4/4：首页新文案精确匹配，包含 owned hooks 无需独立 Node.js 与独立 upstream
  前提条件；无旧 4.x / Node.js 22 要求或旧 updater。安装/setup 链保持：
  `bun install -g harnessed && bun run --bun harnessed setup`。
- 4/4：无页面横向溢出、变更区域溢出、相邻块重叠、code/copy 按钮重叠或文案裁切；
  `pageerror` 均为空。仅变更区域作有界验收，不声明全站或 live-model 认证。
- EN/ZH 安装页 HTTP 200；精确 updater 为
  `bun run --bun harnessed update --package-manager bun`；确认其位于独立 legacy 4.x
  标题之前，`bun add -g harnessed@latest` 位于该标题之后。
  npm 默认 updater 与 bare shim shebang 提醒均保留。
- 四张截图已逐张通过 `view_image` 目检：新说明与命令均完整显示，移动端自然换行，
  未见变更区域重叠或裁切；既有移动 tab 换行布局保留。

## 证据

- `bun5-browser.json`：逐例 checks、几何值、实际 request failures 和清理结果，<35 KB。
- `bun5-local-r1-en-1440.png`
- `bun5-local-r1-en-390.png`
- `bun5-local-r1-zh-hans-1440.png`
- `bun5-local-r1-zh-hans-390.png`
- `bun5-browser.mjs`：本次有界临时脚本，不运行旧的完整测试集。

## 实际诊断与清理

本地 `C:/Users/easyi/.codex/rules/web-testing.md` 和
`C:/Users/easyi/.agents/skills/ego-browser/SKILL.md` 不存在，读取失败已在 JSON 记录；
已读取现有 `playwright-cli` skill 与站点 Playwright 脚本，直接复用本地 Playwright。
Cloudflare analytics 的 `net::ERR_FAILED` / `net::ERR_ABORTED` 已按实际请求记录，
不作为页面脚本错误，也没有虚报 metadata API 200。

创建 4 个 context，关闭 4 个 context，browser 已关闭；4323 / 4322 preview 均未操作。
没有源文件或旧证据修改，没有 build、commit、push 或 deploy。生产验证待 main 通知。
