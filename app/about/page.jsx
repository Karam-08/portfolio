import AboutHero from "@/components/server/AboutHero";
import DeveloperStory from "@/components/server/DeveloperStory";
import Timeline from "@/components/server/Timeline";
import CoreValues from "@/components/server/CoreValues";

export default function About(){
    return(
        <main>
            <AboutHero/>
            <DeveloperStory/>
            <Timeline/>
            <CoreValues/>
        </main>
    )
}