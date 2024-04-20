import HeroSection from "@/src/components/common/HeroSection";
import BullaCoin from "@/src/components/pages/landingPage/BullaCoin";
import YetToBeNFT from "@/src/components/pages/landingPage/YetToBeNFT";
import Heading from "@/src/components/shared/common/Heading";

export default function Mission() {
  return (
    <main className="flex justify-start items-center gap-4 flex-col lg:container mx-auto">
      <HeroSection label="Home / Products" value="Products" />
      <Heading label="About YetToBeNFT" />
      <YetToBeNFT />
      <Heading label="About Bulla Coin" />
      <BullaCoin />
    </main>
  );
}
