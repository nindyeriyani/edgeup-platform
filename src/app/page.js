import Hero from "./landing/Hero";
import About from "./landing/About";
import Recommendation from "./landing/Recommendation";
import JobTrends from "./landing/JobTrends";
import Stories from "./landing/Stories";
import Roadmap from "./landing/Roadmap";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <main className="pt-[90px] bg-[#F7F8F9] w-full font-['Nunito_Sans'] min-h-screen overflow-hidden">
        <Hero />
        <About />
        <Recommendation />
        <JobTrends />
        <Stories />
        <Roadmap />
    
      </main>
      <Footer />
    </div>
  );
}
