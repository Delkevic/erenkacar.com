import { siteConfig } from "@/config/site";
import { guitarSenseCaseStudy } from "@/data/case-study";
import { experience } from "@/data/experience";
import { gradeWatcherCaseStudy } from "@/data/grade-watcher";
import { guitarSenseImages } from "@/data/guitarsense-images";
import { nexoraCaseStudy } from "@/data/nexora-case-study";
import { nexoraArchitecture } from "@/data/nexora-architecture";
import { nexoraImages } from "@/data/nexora-images";
import { featuredProject, selectedProjects, otherWork } from "@/data/projects";
import { toolkit } from "@/data/toolkit";
import { getPublicPath } from "@/i18n/routes";

// Approved data modules own the reviewed paragraphs and screenshot copy.
// Compose them here so reusable views receive all locale-dependent content.
export const english = {
  locale: "en",
  links: { home: getPublicPath("home", "en"), work: `${getPublicPath("home", "en")}#work`, about: `${getPublicPath("home", "en")}#about` },
  shared: {
    skipLink: "Skip to content",
    homeLabel: "Eren Kaçar, home",
    primaryNavigation: "Primary navigation",
    languageNavigation: "Language selection",
    englishVersion: "View this page in English",
    turkishVersion: "View this page in Turkish",
    navigation: siteConfig.navigation,
    footerIdentity: "Eren Kaçar — Software Engineer",
    systems: "Desktop · Web · Real-time systems",
    footerLinks: "Footer profile links",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    downloadCv: "Download CV",
    downloadCvLabel: "Download Eren Kaçar’s CV as PDF",
    technologies: "{name} technologies",
    proofPoints: "{name} proof points",
    featurePoints: "{name} feature points",
    experienceTechnologies: "Technologies used at {name}",
    readCaseStudy: "Read the case study",
    viewProject: "View project",
    homepageAutomationLabel: "Grade Watcher automation flow",
  },
  home: {
    hero: {
      eyebrow: "Software Engineer",
      title: "Building end-to-end desktop, web and real-time products.",
      lead: "I build usable software across desktop and web, with a focus on real-time systems, product architecture, performance, security and the path from prototype to distributable product.",
      explore: "Explore selected work",
      about: "About me",
      profileLinks: "Profile and CV links",
      focusTitle: "Current focus",
      focus: "Building GuitarSense and documenting the engineering decisions behind a real-time desktop product.",
    },
    featured: {
      eyebrow: "01 / Featured project",
      title: "Engineering the full product, not just one layer.",
      intro: "A desktop product spanning interface design, audio processing, practice tools, performance and packaging.",
    },
    selected: {
      eyebrow: "02 / Selected projects",
      title: "Selected work across full-stack systems and automation.",
    },
    experience: {
      eyebrow: "03 / Experience",
      title: "Building workflows and learning systems from the inside.",
    },
    toolkit: {
      eyebrow: "04 / Technical toolkit",
      title: "Tools chosen to move a product forward.",
      intro: "Technologies used across interface, backend, desktop, audio and automation work.",
    },
    about: {
      eyebrow: "05 / About",
      title: "Product thinking grounded in implementation.",
      introduction: "I’m a Computer Engineering graduate based in Istanbul. I enjoy turning complex ideas into software people can actually use, especially across desktop, web and real-time systems. My work spans interface development, backend services, workflow automation, audio processing, packaging and deployment.",
      approach: "I care about more than getting a feature to work. I measure performance, design for failure and pay attention to security, usability and the path from a development build to a reliable product.",
    },
    otherWork: { eyebrow: "Additional projects", title: "Other work" },
    contact: {
      eyebrow: "06 / Contact",
      title: "Let’s build something useful.",
      emailLabel: "Email Eren Kaçar",
      note: "I’m interested in software engineering roles and collaborations involving desktop products, full-stack systems, automation and real-time applications.",
      linksLabel: "Contact and profile links",
      emailMe: "Email me",
    },
  },
  caseStudies: {
    common: {
      back: "Back to selected work",
      facts: "Project facts",
      overview: "Overview",
      role: "My role",
      capabilities: "Core capabilities",
      decisions: "Engineering decisions",
    },
    guitarsense: {
      name: "GuitarSense",
      eyebrow: "Flagship project",
      highlights: "Engineering highlights",
      technologies: "Technologies",
      technologiesLabel: "GuitarSense technologies",
      results: "Results",
    },
    nexora: {
      name: "Nexora",
      eyebrow: "FULL-STACK SOCIAL PLATFORM",
      introduction: "A full-stack social platform combining secure account flows, realtime messaging, content discovery, short-form media and Gemini-assisted content experiences.",
      walkthrough: "Product walkthrough",
      walkthroughIntro: "Selected interfaces showing account protection and realtime communication inside the wider social platform.",
      authentication: {
        heading: "Protect account access",
        text: "Email verification and two-factor authentication add explicit checkpoints to account creation and sign-in workflows.",
      },
      messaging: {
        heading: "Keep conversations realtime",
        text: "Firebase-backed messaging connects conversation lists, presence state and direct-message updates in a dedicated interface.",
      },
      architecture: "Technical architecture",
      architectureLabel: "Core application architecture",
      client: "Client",
      api: "API",
      firebaseDescription: "Realtime messaging",
      geminiDescription: "Content analysis and conversational assistance",
      closing: "Closing summary",
    },
    gradeWatcher: {
      name: "Grade Watcher",
      eyebrow: "BROWSER AUTOMATION",
      introduction: "A private automation tool that monitors changes in academic results and sends Telegram notifications when new results are detected.",
      architectureLabel: "Grade Watcher automation architecture",
      workflow: "How it works",
      status: "Current status",
    },
  },
  notFound: {
    eyebrow: "Route unavailable",
    code: "404",
    title: "Page not found",
    description: "The page you requested does not exist. Return home or continue with the selected project case studies.",
    home: "Back to homepage",
    work: "View selected work",
  },
  metadata: {
    homeTitle: "Eren Kaçar — Software Engineer",
    titleTemplate: "%s — Eren Kaçar",
    description: siteConfig.description,
    personJobTitle: "Software Engineer",
    alumni: "Trakya University",
    guitarsense: { title: "GuitarSense", socialTitle: "GuitarSense — Eren Kaçar", description: guitarSenseCaseStudy.introduction },
    nexora: { title: "Nexora", socialTitle: "Nexora — Eren Kaçar", description: "A full-stack social platform built with React, Go, MySQL, Firebase and Gemini-assisted content experiences." },
    "grade-watcher": { title: "Grade Watcher", socialTitle: "Grade Watcher — Eren Kaçar", description: "A private Playwright automation project for monitoring academic result changes and sending Telegram notifications." },
  },
  social: {
    brand: "Eren Kaçar · Portfolio",
    supportingLine: "Desktop · Web · Real-time systems",
    home: { title: siteConfig.name, label: "Software Engineer", alt: "Eren Kaçar — Software Engineer" },
    guitarsense: { title: "GuitarSense", label: "Desktop guitar practice application", alt: "GuitarSense — Desktop guitar practice application" },
    nexora: { title: "Nexora", label: "Full-stack social platform", alt: "Nexora — Full-stack social platform" },
    "grade-watcher": { title: "Grade Watcher", label: "Private browser automation", alt: "Grade Watcher — Private browser automation" },
  },
  content: {
    featuredProject, selectedProjects, otherWork, experience, toolkit,
    guitarSenseCaseStudy, nexoraCaseStudy, gradeWatcherCaseStudy,
    guitarSenseImages, nexoraImages, nexoraArchitecture,
  },
} as const;
