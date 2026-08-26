---
title: 설치
description: 30초 만에 harnessed를 설치하고 setup을 실행합니다.
---

## 사전 조건

- **Node.js 22+** — harnessed는 ESM을 사용하므로 Node 22 이상이 필요합니다
- **AI 코딩 agent** — harnessed는 그 안에서 실행됩니다. 주 대상은 Claude Code입니다([anthropic.com/claude/code](https://anthropic.com/claude/code)에서 설치). Codex를 비롯한 다른 harness는 크로스 harness 플랫폼 계층으로 지원합니다

## 설치

```bash
npm install -g harnessed
```

설치를 확인합니다:

```bash
harnessed --version
# → 4.32.20
```

## 단일 파일 바이너리 (Node.js 불필요)

Node.js가 없나요? 자체 완결형 단일 파일 바이너리를 대신 설치할 수 있습니다 —— 플랫폼별로 배포되며 `harnessed update`로 자체 업데이트됩니다:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash
```

`~/.local/bin/harnessed`에 설치됩니다. unix에서는 PATH를 절대 자동으로 수정하지 않습니다 —— `~/.local/bin`이 PATH에 없으면 설치 프로그램이 셸별 정확한 추가 스니펫을 출력합니다.

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex
```

`%LOCALAPPDATA%\harnessed\bin\harnessed.exe`에 설치됩니다. 대화형 세션에서는 멱등한 사용자 범위 PATH 추가 전에 동의를 묻습니다. 비대화형 실행(CI / 파이프라인)에서는 수동 안내를 출력합니다.

두 설치 프로그램 모두 GitHub releases에서 플랫폼 자산을 내려받아 `.sha256` 체크섬을 검증합니다. 바이너리 채널과 npm 채널은 동일한 CLI를 실행하므로 아래 내용이 그대로 적용됩니다. 바이너리의 자체 업데이트(ed25519 서명)와 롤백은 [`harnessed update`](/ko/docs/reference/cli/#harnessed-update)를 참고하세요.

## setup 실행

```bash
harnessed setup
```

Setup은 네 단계를 자동으로 수행합니다:

1. **Agent Teams 활성화** — `~/.claude/settings.json`에 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`을 기록해 다중 agent 패턴(Pattern A 풀스택, Pattern C 전문가 리뷰)을 바로 쓸 수 있게 합니다
2. **사용자 로케일 설정** — OS 로케일을 감지해 `env.HARNESSED_USER_LANG`에 기록합니다(zh-* → `zh-Hans`, 그 외 → `en`). `--user-lang`으로 덮어쓸 수 있습니다
3. **워크플로 skills 설치** — 각 `workflows/<name>/SKILL.md`를 `~/.claude/skills/<name>/`로 복사해 Claude Code에서 슬래시 명령을 쓸 수 있게 합니다
4. **base 매니페스트 처리** — `manifests/tools/*.yaml`과 `manifests/skill-packs/*.yaml`을 차례로 처리해 upstream 도구 의존성을 등록합니다

setup 이후에는 `/auto`, `/discuss`, `/plan`, `/task`, `/verify` 같은 슬래시 명령을 어떤 Claude Code 세션에서든 사용할 수 있습니다.

## 선택 플래그

```bash
harnessed setup --user-lang zh-Hans   # OS 로케일과 무관하게 중국어 강제
harnessed setup --user-lang en        # 영어 강제
harnessed setup --dry-run             # 기록될 내용 미리보기 — 디스크는 변경하지 않음
```

전체 플래그 목록은 [CLI 명령](/ko/docs/reference/cli/)을 참고하세요.

## Windows 참고 사항

PowerShell 5.x는 `&&` 체이닝을 지원하지 않습니다. `;`을 쓰거나 두 줄로 나누세요:

```powershell
npm install -g harnessed
harnessed setup
```

PowerShell 7+, bash, zsh, cmd.exe는 모두 한 줄 형식을 지원합니다.
