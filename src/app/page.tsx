import Image from "next/image";
import HeroSection from '../components/HeroSection';
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseSection from "@/components/WhyChooseSection";
import Testimonial from "@/components/Testimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">APP ROuter</h1> */}
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseSection/>
      <Testimonial/>
      <UpcomingWebinars/>
      <Instructors/>
    </main>
  );
}
