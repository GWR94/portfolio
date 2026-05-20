import CodeCard from "./CodeCard";
import LandingHero from "./LandingHero";

const LandingPage = () => (
  <section
    id="landing-page"
    aria-label="Hero"
    className="relative min-h-screen flex items-center overflow-hidden bg-background"
  >
    <div
      className="
        pointer-events-none absolute inset-0
        before:absolute before:content-['']
        before:-top-[20%] before:-right-[10%]
        before:w-[70vw] before:h-[70vw]
        before:rounded-full
        before:bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_70%)]
        before:blur-[80px]
      "
    />

    <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <LandingHero />
        <div className="hidden lg:block">
          <CodeCard />
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default LandingPage;
