import { Hero } from "@/components/sections/Hero";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
