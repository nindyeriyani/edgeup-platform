"use client";
import Hero from "./Hero";
import About from "./About";
import Recommendation from "./Recommendation";
import JobTrends from "./JobTrends";
import Stories from "./Stories";
import Roadmap from "./Roadmap";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Recommendation />
      <JobTrends />
      <Stories />
      <Roadmap />
      <Footer />
    </div>
  );
}
