# Bun 5.x 文案验证

日期：2026-10-25 (Asia/Shanghai)。锁定规格，无新增功能设计。
仅修改 `src/i18n/onboarding.ts`、`src/lib/onboarding.test.ts`，以及
`src/content/docs/{docs,zh-hans/docs}/getting-started/{installation,quickstart}.md`；
本文件是唯一新增证据。既有未跟踪证据保留，不改依赖或配置。

## 交付边界

- 首页 10 个 locale 各自翻译 Bun 说明，移除旧版 4.x 警告和旧更新命令。
- 仅显式使用 Bun 的 harnessed 本体和 first-party hooks 无需另装 Node.js。
  上游依赖、权限与真实模型工作流就绪不在该声明内。
- EN/ZH 文档保留安装/setup 链、裸 shim 的 Node shebang 提醒；说明运行时
  不代表安装管理器，更新默认仍使用 npm。5.x Bun 管理的包显式执行：
  `bun run --bun harnessed update --package-manager bun`。
- `bun add -g harnessed@latest` 仅放在独立的 legacy 4.x 升级备用章节。

## RED / GREEN

原生 ralph-loop 不可用，采用最多 3 次有界修改/验证；第 2 次收敛
(第 1 次功能 GREEN，第 2 次仅修正测试换行格式)，未耗尽重试。

- RED，生产文案修改前：`vp test src/lib/onboarding.test.ts`，exit 1，
  28 failed / 21 passed / 49 total。00:10:35。
  失败覆盖 10 个 locale 的旧文案、first-party/upstream 边界和 4 篇文档更新契约。
  实际错误示例：`AssertionError: expected 'Requires Bun. 4.x hooks still need No…' not to contain 'bun add -g harnessed@latest'`。
- GREEN：同一定向命令 exit 0，49/49，00:12:18。
- 全站：`vp test` exit 0，6 files / 101 tests；格式化后于 00:14:43 再跑仍为 101/101。
- 构建：`vp run build` exit 0，00:13:04，`121 page(s) built in 16.58s`。
  随后仅格式化测试文件，不改变生产源文件。
- scoped lint/type：`vp check --no-fmt src/i18n/onboarding.ts src/lib/onboarding.test.ts`
  exit 0，2 files，`Found no warnings, lint errors, or type errors in 2 files`。
- scoped format：`vp fmt --check --threads=1` 加上述 6 个源文件，exit 0，
  `All matched files use the correct format.`，`6 files using 1 threads`。
- `git diff --check` exit 0；只有 Windows LF/CRLF 提示，无 whitespace error。

## 实际诊断与修正

- PowerShell 经 `apply_patch.bat` 管道传参：
  `Error: --codex-run-as-apply-patch requires a UTF-8 PATCH argument.`
- wrapper 直接传参：`Invalid patch: The last line of the patch must be '*** End Patch'`。
  两次均未改文件。之后直接调用该 wrapper 对应的可执行文件，使用同一
  `--codex-run-as-apply-patch` 模式成功应用 patch。
- 探查不存在的可选配置文件时，命令报告 exit 1：
  `rg: .oxfmtrc.json: 系统找不到指定的文件。 (os error 2)`；
  `rg: .oxlintrc.json: 系统找不到指定的文件。 (os error 2)`。
  已读取实际 `vite.config.ts`，未创建配置。
- 初次六文件 `vp check` exit 1：

  ```text
  src/lib/onboarding.test.ts (57ms)
  error: Formatting issues found
  Found formatting issues in 1 file (126420ms, 24 threads). Run `vp check --fix` to fix them.
  ```

  单线程检查复现同一格式问题，仅用 `vp fmt --threads=1 src/lib/onboarding.test.ts`
  修正，再做 scoped format 和 lint/type 验证；没有全仓格式化或终止其他任务进程。
- 构建非阻断提示保留：`Some chunks are larger than 500 kB after minification.`；
  `Entry docs → 404 was not found.`。未扩展修复范围。

未运行浏览器、preview、生产验证、模型调用、全局安装、commit、push 或 deploy。
四例本地/生产浏览器验证由 main 统一完成；没有 Chromium 安装或认证声明。
