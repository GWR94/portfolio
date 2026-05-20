import { Spinner } from "@shared/index";

const SectionFallback = () => (
  <div className="flex min-h-[280px] items-center justify-center py-12" aria-hidden>
    <Spinner />
  </div>
);

export default SectionFallback;
