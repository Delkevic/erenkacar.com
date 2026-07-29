export const gradeWatcherCaseStudy = {
  facts: ["Python", "Playwright", "Telegram Bot API", "Private project"],
  overview:
    "Repeatedly checking an academic portal for newly published results is a small but distracting manual task. Grade Watcher automates the authenticated browser workflow, normalizes the visible result state and sends a notification only when a meaningful change is detected.",
  role:
    "I designed and implemented the automation workflow, including browser-session handling, result parsing, state comparison, watch-mode execution and Telegram notifications.",
  homepageFlow: [
    { label: "Student portal", icon: "desktop" },
    { label: "Playwright session", icon: "workflow" },
    { label: "Change detection", icon: "automation" },
    { label: "Telegram alert", icon: "mail" },
  ],
  architecture: [
    { label: "Local runner", icon: "code" },
    { label: "Playwright browser", icon: "workflow" },
    { label: "Authenticated academic portal", icon: "desktop" },
    { label: "Result parser", icon: "server" },
    { label: "Snapshot comparison", icon: "automation" },
    { label: "Telegram Bot API", icon: "mail" },
  ],
  workflow: [
    {
      title: "Start the watcher",
      body: "The private tool is launched locally with its configured account and notification settings.",
    },
    {
      title: "Open an authenticated session",
      body: "Playwright navigates the academic portal and maintains the required browser session.",
    },
    {
      title: "Read the result state",
      body: "Visible result rows are parsed and normalized into a stable internal representation.",
    },
    {
      title: "Compare with the previous snapshot",
      body: "The current state is compared with the last known state to identify meaningful additions or updates.",
    },
    {
      title: "Send a Telegram notification",
      body: "A notification is sent only when a new result or relevant change is detected.",
    },
    {
      title: "Continue watching",
      body: "Watch mode repeats the process while avoiding duplicate notifications.",
    },
  ],
  decisions: [
    {
      title: "Session continuity",
      body: "The workflow preserves browser state across portal navigation and redirects instead of treating every page as an isolated request.",
    },
    {
      title: "Resilient result parsing",
      body: "Result data is normalized before comparison so presentation-level differences do not automatically become false change events.",
    },
    {
      title: "Duplicate-safe notifications",
      body: "Previously observed result state is retained so the same update does not trigger repeated Telegram messages.",
    },
    {
      title: "Private configuration",
      body: "Account and notification configuration remain outside public portfolio content and the project repository is not exposed through the site.",
    },
  ],
  status: [
    "Private utility project",
    "Local/watch-mode execution",
    "Telegram notification workflow implemented",
    "No public repository or live demo",
  ],
  statusSummary:
    "Grade Watcher is a private utility rather than a public product. The case study focuses on the automation design and reliability decisions without exposing account details or portal-specific internals.",
} as const;
