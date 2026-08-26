---
title: Cài đặt
description: Cài harnessed và chạy setup trong 30 giây.
---

## Điều kiện tiên quyết

- **Node.js 22+** — harnessed dùng ESM và yêu cầu Node 22 trở lên
- **Một agent lập trình AI** — harnessed chạy bên trong nó. Claude Code là mục tiêu chính (cài từ [anthropic.com/claude/code](https://anthropic.com/claude/code)); Codex và các harness khác được hỗ trợ qua lớp nền tảng cross-harness

## Cài đặt

```bash
npm install -g harnessed
```

Kiểm tra bản cài:

```bash
harnessed --version
# → 4.32.20
```

## Binary độc lập (không cần Node.js)

Không có Node.js? Hãy cài binary một tệp tự chứa — phân phối theo nền tảng, tự cập nhật qua `harnessed update`:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

Cài vào `~/.local/bin/harnessed`. Trên unix, PATH không bao giờ bị sửa tự động — nếu `~/.local/bin` chưa nằm trong PATH, trình cài đặt sẽ in ra đoạn cần thêm chính xác cho shell của bạn.

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

Cài vào `%LOCALAPPDATA%\harnessed\bin\harnessed.exe`. Phiên tương tác sẽ hỏi ý bạn trước khi thêm PATH ở phạm vi người dùng theo cách idempotent; lần chạy không tương tác (CI / pipeline) sẽ in hướng dẫn thủ công.

Cả hai trình cài đặt đều tải tài nguyên theo nền tảng từ GitHub releases và kiểm tra checksum `.sha256`. Kênh binary và kênh npm chạy cùng một CLI — mọi nội dung bên dưới áp dụng nguyên vẹn. Xem [`harnessed update`](/vi/docs/reference/cli/#harnessed-update) để biết binary tự cập nhật (ký ed25519) và rollback ra sao.

## Chạy setup

```bash
harnessed setup
```

Setup tự động thực hiện bốn bước:

1. **Bật Agent Teams** — ghi `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` vào `~/.claude/settings.json` để các pattern đa agent (Pattern A full-stack, Pattern C review chuyên gia) dùng được ngay
2. **Đặt locale người dùng** — phát hiện locale hệ điều hành và ghi vào `env.HARNESSED_USER_LANG` (zh-* → `zh-Hans`, còn lại → `en`); ghi đè bằng `--user-lang`
3. **Cài workflow skills** — chép mỗi `workflows/<name>/SKILL.md` sang `~/.claude/skills/<name>/` để các lệnh gạch chéo khả dụng trong Claude Code
4. **Xử lý manifest nền** — chạy qua `manifests/tools/*.yaml` và `manifests/skill-packs/*.yaml` để đăng ký các phụ thuộc công cụ upstream

Sau setup, các lệnh gạch chéo như `/auto`, `/discuss`, `/plan`, `/task` và `/verify` khả dụng trong mọi phiên Claude Code.

## Cờ tùy chọn

```bash
harnessed setup --user-lang zh-Hans   # ép tiếng Trung bất kể locale hệ điều hành
harnessed setup --user-lang en        # ép tiếng Anh
harnessed setup --dry-run             # chỉ xem trước những gì sẽ ghi — không đụng vào đĩa
```

Xem danh sách cờ đầy đủ ở [Lệnh CLI](/vi/docs/reference/cli/).

## Lưu ý cho Windows

PowerShell 5.x không hỗ trợ nối lệnh bằng `&&`. Hãy dùng `;` hoặc tách thành hai dòng:

```powershell
npm install -g harnessed
harnessed setup
```

PowerShell 7+, bash, zsh và cmd.exe đều hỗ trợ dạng một dòng.
