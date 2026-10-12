import type { DictionaryProps } from "@/i18n/schema";
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

export function HomeView({ dictionary }: DictionaryProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
        jobTitle: dictionary.metadata.personJobTitle,
        email: siteConfig.contactUrl,
        sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: dictionary.metadata.alumni,
        },
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: dictionary.locale === "en" ? siteConfig.siteUrl : `${siteConfig.siteUrl}/tr`,
        inLanguage: dictionary.locale,
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
      <SiteHeader dictionary={dictionary} page="home" />
      <main id="main-content">
        <Hero dictionary={dictionary} />
        <FeaturedProject dictionary={dictionary} />
        <SelectedProjects dictionary={dictionary} />
        <Experience dictionary={dictionary} />
        <Toolkit dictionary={dictionary} />
        <About dictionary={dictionary} />
        <OtherWork dictionary={dictionary} />
        <Contact dictionary={dictionary} />
      </main>
      <SiteFooter dictionary={dictionary} />
    </>
  );
}
