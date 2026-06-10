import NavBar from "@/navigation/components/NavBar";
import { lazy, Suspense } from "react";
import SectionFallback from "@features/portfolio/components/SectionFallback";
import FeaturedWork from "@features/portfolio/components/FeaturedWork";
import ContactForm from "@features/contact/components/ContactForm";
import LandingPage from "@/features/landing/components/LandingPage";
import AboutMe from "@/features/about/components/AboutMe";
import { useHashScroll } from "@/hooks/useHashScroll";

const TechnicalJourney = lazy(
  () => import("@features/timeline/components/TechnicalJourney"),
);

function App() {
  useHashScroll();

  return (
    <>
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
          </div>
        </main>
      </div>
      <NavBar />
    </>
  );
}

export default App;
