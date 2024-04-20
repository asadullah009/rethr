import HeroSection from "@/src/components/common/HeroSection";
import Section from "@/src/components/pages/missionPage/Section";

export default function Mission() {
  return (
    <main className="flex justify-start items-center gap-8 flex-col lg:container mx-auto">
      <HeroSection label="Home / Missions" value="Missions" />
      <Section/>
    </main>
  );
}
