import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { FeaturedProject } from "@/components/sections/featured-project";
import { Hero } from "@/components/sections/hero";
import { OtherWork } from "@/components/sections/other-work";
import { SelectedProjects } from "@/components/sections/selected-projects";
import { Toolkit } from "@/components/sections/toolkit";
import { siteConfig } from "@/config/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.domain,
        jobTitle: "Software Engineer",
        email: siteConfig.contactUrl,
        sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Trakya University",
        },
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.domain,
        inLanguage: "en",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <FeaturedProject />
        <SelectedProjects />
        <Experience />
        <Toolkit />
        <About />
        <OtherWork />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
