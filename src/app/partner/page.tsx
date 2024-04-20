import HeroSection from "@/src/components/common/HeroSection";
import Section from "@/src/components/pages/partnerPage/Section";
import Heading from "@/src/components/shared/common/Heading";

export default function App() {
  const data = [
    {
      id: 1,
      image: "/assets/image/part_3.png",
      link: "www.vierra.com",
      title:
        "Crypto Regulatory Initiatives Show SEC’s Dominance Among US Regulators",
      subTitle:
        "This article has been republished with permission from CoinDesk.Recent regulatory initiatives have shown the Securities and Exchange Commission’s (SEC) dominant position in the U.S.",
    },
    {
      id: 2,
      image: "/assets/image/part_6.png",
      link: "www.vierra.com",

      title:
        "Voyager to Hold Onto $445M of Alameda Loan Repayments Pending Court Order",
      subTitle:
        "This article has been republished with permission from CoinDesk.Estates for bankrupt crypto lender Voyager and bankrupt crypto exchange FTX reached an interim agreement on $445 million of disputed loan payments",
    },
    {
      id: 3,
      image: "/assets/image/part_2.png",
      link: "www.vierra.com",

      title:
        "Bitcoin Price Today 23 Feb: BTC Rise By 1.20% and Is Near Trading At 25000 Again",
      subTitle:
        "This article has been republished with permission from CoinGape.Bitcoin Price Today: Bitcoin and other Altcoins are seeing a jump yet again today. As of writing, Bitcoin price increased by 1.20% in the last 24 hours.",
    },
    {
      id: 4,
      image: "/assets/image/part_9.png",
      link: "www.vierra.com",

      title:
        "Bitcoin Price Today 23 Feb: BTC Rise By 1.20% and Is Near Trading At 25000 Again",
      subTitle:
        "This article has been republished with permission from CoinGape.Bitcoin Price Today: Bitcoin and other Altcoins are seeing a jump yet again today. As of writing, Bitcoin price increased by 1.20% in the last 24 hours.",
    },
    {
      id: 5,
      image: "/assets/image/part_7.png",
      link: "www.vierra.com",

      title:
        "Bitcoin Price Today 23 Feb: BTC Rise By 1.20% and Is Near Trading At 25000 Again",
      subTitle:
        "This article has been republished with permission from CoinGape.Bitcoin Price Today: Bitcoin and other Altcoins are seeing a jump yet again today. As of writing, Bitcoin price increased by 1.20% in the last 24 hours.",
    },
  ];

  return (
    <main className="flex justify-start items-center gap-8 flex-col lg:container mx-auto">
      <HeroSection label="Home / Partners" value="Partners" />
      <Heading label="News" />
      {/* Map over the data array and render a Section component for each item */}
      {data.map((item) => (
        <Section
          key={item.id}
          image={item.image}
          title={item.title}
          link={item.link}
          subTitle={item.subTitle}
        />
      ))}
    </main>
  );
}
