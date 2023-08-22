import EventSection from "../components/HomeSection/EventSection";
import Hero from "../components/HomeSection/Hero";
import MemberSection from "../components/HomeSection/MemberSection";
import NewsletterSignUp from "../components/HomeSection/NewsletterSection";
import StatsSection from "../components/HomeSection/StatsSection";
import TrustSection from "../components/HomeSection/TrustSection";
import Navbar from "../components/Navbar/Navbar";
import TestimonialsSection from "../components/HomeSection/TestimonialsSection";

const HomeScreen = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <EventSection />
      <TrustSection />
      <MemberSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSignUp />
    </main>
  );
};

export default HomeScreen;
