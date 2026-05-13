import Hero from "@/components/server/Hero";
import AboutSection from "@/components/server/AboutSection";
import SkillsSection from "@/components/server/SkillsSection";
import Timeline from "@/components/server/Timeline";

export default function Home(){
    return(
        <>
            <Hero/>
            <AboutSection/>
            <SkillsSection/>
            <Timeline/>
        </>
    )
}