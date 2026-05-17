import AnimatedHero from "@/components/client/AnimatedHero";
import SkillsSection from "@/components/server/SkillsSection";
import ProjectSection from "@/components/server/ProjectSection";
import CTASection from "@/components/server/CTASection";

export default function Home(){
    return(
        <main>
            <AnimatedHero/>
            <SkillsSection/>
            <ProjectSection/>
            <CTASection/>
        </main>
    )
}