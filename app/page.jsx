import AnimatedHero from "@/components/client/AnimatedHero";
import AboutSection from "@/components/server/AboutSection";
import SkillsSection from "@/components/server/SkillsSection";
import Timeline from "@/components/server/Timeline";

export default function Home(){
    return(
        <>
            <AnimatedHero/>
            <AboutSection/>
            <SkillsSection/>
            <Timeline/>
        </>
    )
}