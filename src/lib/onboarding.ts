export const installMethods = ["unix", "windows", "bun", "npm"] as const;
export type InstallMethod = (typeof installMethods)[number];
export type Host = "claude" | "codex";

// Bun global resolution and Codex setup dry-run verified with Bun 1.4.4.
// Real writes, hooks and update still require lifecycle acceptance.
export const commands = {
  install: {
    unix: "curl -fsSL https://raw.githubusercontent.com/easyinplay/harnessed/main/install.sh | bash",
    windows: "irm https://raw.githubusercontent.com/easyinplay/harnessed/main/install.ps1 | iex",
    bun: "bun install -g harnessed",
    npm: "npm install -g harnessed",
  },
  workflow: { claude: "/auto", codex: "$auto" },
  status: "harnessed",
  resume: "harnessed resume",
} as const;

export function defaultInstallMethod(platform: string): InstallMethod {
  return /win/i.test(platform) ? "windows" : "unix";
}

export function installCommand(method: InstallMethod): string {
  if (method === "bun" || method === "npm")
    return `${commands.install[method]} && ${runtimeCommand(method, "harnessed setup")}`;
  return commands.install[method];
}

export function runtimeCommand(method: InstallMethod, command: string): string {
  return method === "bun" ? `bun run --bun ${command}` : command;
}

export function tabIndexForKey(key: string, current: number, count: number): number | null {
  if (key === "Home") return 0;
  if (key === "End") return count - 1;
  if (key === "ArrowRight") return (current + 1) % count;
  if (key === "ArrowLeft") return (current + count - 1) % count;
  return null;
}
