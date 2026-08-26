---
title: การติดตั้ง
description: ติดตั้ง harnessed และรัน setup ใน 30 วินาที
---

## สิ่งที่ต้องมีก่อน

- **Node.js 22+** — harnessed ใช้ ESM จึงต้องการ Node 22 ขึ้นไป
- **agent เขียนโค้ด AI สักตัว** — harnessed รันอยู่ภายในมัน เป้าหมายหลักคือ Claude Code (ติดตั้งจาก [anthropic.com/claude/code](https://anthropic.com/claude/code)) ส่วน Codex และ harness อื่นรองรับผ่านชั้นแพลตฟอร์มข้าม harness

## ติดตั้ง

```bash
npm install -g harnessed
```

ตรวจสอบว่าติดตั้งสำเร็จ:

```bash
harnessed --version
# → 4.32.20
```

## ไบนารีไฟล์เดียวแบบสแตนด์อโลน (ไม่ต้องมี Node.js)

ไม่มี Node.js? ติดตั้งไบนารีไฟล์เดียวที่มีทุกอย่างในตัวแทนได้ — แจกจ่ายตามแพลตฟอร์ม และอัปเดตตัวเองผ่าน `harnessed update`:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

ติดตั้งไปที่ `~/.local/bin/harnessed` บน unix จะไม่แก้ PATH ให้อัตโนมัติเด็ดขาด — ถ้า `~/.local/bin` ยังไม่อยู่ใน PATH ตัวติดตั้งจะพิมพ์ข้อความที่ต้องเพิ่มให้ตรงกับ shell ของคุณ

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

ติดตั้งไปที่ `%LOCALAPPDATA%\harnessed\bin\harnessed.exe` เซสชันแบบโต้ตอบจะขอความยินยอมก่อนเพิ่ม PATH ระดับผู้ใช้แบบ idempotent ส่วนการรันแบบไม่โต้ตอบ (CI / ไปป์ไลน์) จะพิมพ์วิธีทำด้วยมือแทน

ตัวติดตั้งทั้งสองแบบดาวน์โหลดไฟล์ตามแพลตฟอร์มจาก GitHub releases และตรวจ checksum `.sha256` ช่องทางไบนารีกับ npm รันคำสั่ง CLI ชุดเดียวกัน — ทุกอย่างด้านล่างจึงใช้ได้เหมือนกัน ดูวิธีที่ไบนารีอัปเดตตัวเอง (ลงลายเซ็น ed25519) และย้อนกลับได้ที่ [`harnessed update`](/th/docs/reference/cli/#harnessed-update)

## รัน setup

```bash
harnessed setup
```

Setup ทำสี่ขั้นตอนให้อัตโนมัติ:

1. **เปิด Agent Teams** — เขียน `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` ลง `~/.claude/settings.json` เพื่อให้แพตเทิร์นหลาย agent (Pattern A full-stack, Pattern C review โดยผู้เชี่ยวชาญ) ใช้ได้ทันที
2. **ตั้ง locale ของผู้ใช้** — ตรวจ locale ของระบบปฏิบัติการแล้วเขียนลง `env.HARNESSED_USER_LANG` (zh-* → `zh-Hans`, นอกนั้น → `en`) เขียนทับได้ด้วย `--user-lang`
3. **ติดตั้ง workflow skills** — คัดลอก `workflows/<name>/SKILL.md` แต่ละไฟล์ไปที่ `~/.claude/skills/<name>/` เพื่อให้คำสั่งสแลชใช้ได้ใน Claude Code
4. **ประมวลผล manifest พื้นฐาน** — ไล่ผ่าน `manifests/tools/*.yaml` และ `manifests/skill-packs/*.yaml` เพื่อลงทะเบียนการพึ่งพาเครื่องมือ upstream

หลัง setup คำสั่งสแลชอย่าง `/auto`, `/discuss`, `/plan`, `/task` และ `/verify` จะใช้ได้ในทุกเซสชันของ Claude Code

## แฟล็กเสริม

```bash
harnessed setup --user-lang zh-Hans   # บังคับภาษาจีนไม่ว่า locale ระบบจะเป็นอะไร
harnessed setup --user-lang en        # บังคับภาษาอังกฤษ
harnessed setup --dry-run             # ดูตัวอย่างสิ่งที่จะเขียน — ไม่แตะดิสก์
```

ดูรายการแฟล็กทั้งหมดได้ที่ [คำสั่ง CLI](/th/docs/reference/cli/)

## หมายเหตุสำหรับ Windows

PowerShell 5.x ไม่รองรับการต่อคำสั่งด้วย `&&` ให้ใช้ `;` หรือแยกเป็นสองบรรทัด:

```powershell
npm install -g harnessed
harnessed setup
```

PowerShell 7+, bash, zsh และ cmd.exe รองรับรูปแบบบรรทัดเดียวทั้งหมด
