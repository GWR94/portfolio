import { lazy, Suspense } from "react";
import ContactForm from "@/features/contact/components/ContactForm";
import LandingPage from "@/features/landing/components/LandingPage";
import { useHashScroll } from "../hooks/useHashScroll";
import AboutMe from "./AboutMe";
import FeaturedWork from "./FeaturedWork";
import SectionFallback from "./SectionFallback";

const TechnicalJourney = lazy(() => import("./TechnicalJourney"));
const Projects = lazy(() => import("./Projects"));

const HomePage = () => {
  useHashScroll();

  return (
    <div className="min-h-screen bg-background">
      <LandingPage />

      <main className="pb-32">
        <AboutMe />
        <FeaturedWork />
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
          <Suspense fallback={<SectionFallback />}>
            <TechnicalJourney />
          </Suspense>
          <ContactForm />
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
