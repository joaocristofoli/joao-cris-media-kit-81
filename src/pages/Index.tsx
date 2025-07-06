
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SocialStats from "@/components/SocialStats";
import Audience from "@/components/Audience";
import PricingTable from "@/components/PricingTable";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <SocialStats />
      <Audience />
      <PricingTable />
      <Contact />
    </div>
  );
};

export default Index;
