export const nexoraCaseStudy = {
  facts: [
    "React frontend",
    "Go and Gin backend",
    "MySQL data layer",
    "Firebase messaging",
    "Gemini integration",
  ],
  overview:
    "Nexora explores how a modern social platform can bring feed, discovery, short-form media, messaging and account security into one consistent experience. The project combines a React interface with Go backend services, MySQL persistence, Firebase messaging and Gemini-assisted content analysis.",
  role:
    "I worked across the application’s frontend and backend, including account flows, social features, feed and discovery interfaces, messaging integration, data handling and AI-assisted content experiences.",
  capabilities: [
    {
      title: "Secure account flows",
      description:
        "Registration, email verification, login recovery and two-factor authentication.",
    },
    {
      title: "Feed and discovery",
      description:
        "Home feed, search, Explore filters, tags and content browsing.",
    },
    {
      title: "Realtime messaging",
      description:
        "Firebase-backed conversations and online communication workflows.",
    },
    {
      title: "Social interaction",
      description:
        "Posts, comments, notifications, likes, saves and profiles.",
    },
    {
      title: "Short-form media",
      description: "Reels browsing and creation experiences.",
    },
    {
      title: "AI-assisted experiences",
      description:
        "Gemini-powered content analysis and conversational assistance.",
    },
  ],
  decisions: [
    {
      title: "Separate realtime communication",
      body:
        "Realtime conversations were handled through Firebase while the main application data and backend workflows remained centered on Go and MySQL.",
    },
    {
      title: "Secure account checkpoints",
      body:
        "Email verification, recovery and two-factor authentication were treated as explicit user flows rather than hidden backend-only features.",
    },
    {
      title: "Consistent social navigation",
      body:
        "Feed, Explore, Reels, messages, notifications and profiles share a persistent navigation structure so users can move between social workflows without losing context.",
    },
    {
      title: "AI as a supporting layer",
      body:
        "Gemini was used to analyze content and assist users while the application’s primary social and discovery experiences remained usable without depending entirely on generated output.",
    },
  ],
  closing:
    "Nexora brings secure account workflows, social discovery, Firebase messaging and AI-assisted content analysis and discovery into a single full-stack product. This case study focuses on the verified product surface and technical boundaries without claiming deployment or usage outcomes.",
} as const;
