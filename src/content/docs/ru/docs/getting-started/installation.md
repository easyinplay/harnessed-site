---
title: Установка
description: Установите harnessed и выполните setup за 30 секунд.
---

## Предварительные требования

- **Node.js 22+** — harnessed использует ESM и требует Node 22 или новее
- **AI-агент разработки** — harnessed работает внутри него. Основная цель — Claude Code (установите с [anthropic.com/claude/code](https://anthropic.com/claude/code)); Codex и другие харнессы поддерживаются через кросс-harness платформенный слой

## Установка

```bash
npm install -g harnessed
```

Проверьте установку:

```bash
harnessed --version
# → 4.43.0
```

## Автономный бинарник (без Node.js)

Нет Node.js? Установите самодостаточный однофайловый бинарник — он распространяется по платформам и обновляется сам через `harnessed update`:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

Устанавливается в `~/.local/bin/harnessed`. На unix PATH никогда не правится автоматически — если `~/.local/bin` нет в вашем PATH, установщик напечатает точный фрагмент для вашей оболочки.

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

Устанавливается в `%LOCALAPPDATA%\harnessed\bin\harnessed.exe`. В интерактивной сессии спрашивается согласие перед идемпотентным добавлением в пользовательский PATH; при неинтерактивном запуске (CI / пайплайн) печатается инструкция для ручного добавления.

Оба установщика скачивают артефакт платформы из GitHub releases и проверяют его контрольную сумму `.sha256`. Бинарный и npm каналы запускают один и тот же CLI — всё написанное ниже применимо без изменений. О самообновлении бинарника (подпись ed25519) и откате см. [`harnessed update`](/ru/docs/reference/cli/#harnessed-update).

## Запуск setup

```bash
harnessed setup
```

Setup автоматически выполняет четыре шага:

1. **Включает Agent Teams** — записывает `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` в `~/.claude/settings.json`, чтобы мультиагентные паттерны (Pattern A full-stack, Pattern C ревью специалистами) работали из коробки
2. **Задаёт локаль пользователя** — определяет локаль ОС и записывает `env.HARNESSED_USER_LANG` (zh-* → `zh-Hans`, всё остальное → `en`); переопределяется флагом `--user-lang`
3. **Устанавливает workflow skills** — копирует каждый `workflows/<name>/SKILL.md` в `~/.claude/skills/<name>/`, чтобы слеш-команды стали доступны в Claude Code
4. **Обрабатывает базовые манифесты** — проходит по `manifests/tools/*.yaml` и `manifests/skill-packs/*.yaml`, регистрируя зависимости upstream-инструментов

После setup слеш-команды `/auto`, `/discuss`, `/plan`, `/task` и `/verify` доступны в любой сессии Claude Code.

## Необязательные флаги

```bash
harnessed setup --user-lang zh-Hans   # принудительно китайский, независимо от локали ОС
harnessed setup --user-lang en        # принудительно английский
harnessed setup --dry-run             # только предпросмотр — покажет, что будет записано, диск не меняется
```

Полный список флагов — в разделе [Команды CLI](/ru/docs/reference/cli/).

## Замечание для Windows

PowerShell 5.x не поддерживает цепочку через `&&`. Используйте `;` или две отдельные строки:

```powershell
npm install -g harnessed
harnessed setup
```

PowerShell 7+, bash, zsh и cmd.exe поддерживают однострочную форму.
