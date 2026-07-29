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

export default function Home() {
  return (
    <>
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
