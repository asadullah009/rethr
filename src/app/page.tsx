import { TokenRate } from "../components/pages/landingPage/TokenRate";
import BullaCoin from "../components/pages/landingPage/BullaCoin";
import Hero from "../components/pages/landingPage/Hero";
import Media from "../components/pages/landingPage/Media";
import Partner from "../components/pages/landingPage/Partner";
import PopularCurrency from "../components/pages/landingPage/PopularCurrency";
import Post from "../components/pages/landingPage/Post";
import Team from "../components/pages/landingPage/Team";
import TimeToBuy from "../components/pages/landingPage/TimeToBuy";
import YetToBeNFT from "../components/pages/landingPage/YetToBeNFT";
import Heading from "../components/shared/common/Heading";

export default function App() {
  return (
    <main className="flex justify-start items-center gap-8 flex-col xl:container mx-auto py-6">

       <Hero />
      <TokenRate />
      <Heading label="Popular Crypto Currencies" />
      <PopularCurrency />
      <Heading label="About YetToBeNFT" />
       <YetToBeNFT />
      <Heading label="About Bulla Coin" />
      <BullaCoin />
      <TimeToBuy />
      <Heading label="Our Team" />
      <Team />
      <Heading label="Media about us" />
      <Media />
      <Heading label="Partners" />
      <Partner />
      <Heading label="Latest Post" />
      <Post />
    </main>
  );
}
