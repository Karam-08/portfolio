import AnimatedHero from "@/components/client/AnimatedHero";
import FeaturedSkills from "@/components/server/FeaturedSkills";
import FeaturedProjects from "@/components/server/FeaturedProjects";
import CTASection from "@/components/server/CTASection";

export default function Home(){
    return(
        <main>
            <AnimatedHero/>
            <FeaturedSkills/>
            <FeaturedProjects/>
            <CTASection/>
        </main>
    )
}