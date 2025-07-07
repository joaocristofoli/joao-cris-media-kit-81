
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SocialStats from "@/components/SocialStats";
import Audience from "@/components/Audience";
import Partners from "@/components/Partners";
import PricingTable from "@/components/PricingTable";
import Contact from "@/components/Contact";

console.log('Index page loaded'); // Debug log

const Index = () => {
  console.log('Index component rendering...'); // Debug log
  
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <SocialStats />
      <Audience />
      <Partners />
      <PricingTable />
      <Contact />
    </div>
  );
};

export default Index;
