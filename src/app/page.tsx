import HomeIntro from "@/components/HomeIntro";
import NavBar from "@/components/NavBar";
import FacultySection from "@/components/FacultySection";
import WhyStudySection from "@/components/WhyStudySection";
import AcademicOffersSection from "@/components/AcademicOffersSection";
import StatsBar from "@/components/StatsBar";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeIntro />
      <StatsBar />
      <FacultySection />
      <WhyStudySection />
      <AcademicOffersSection />
      <ContactSection />
    </div>
  );
}
