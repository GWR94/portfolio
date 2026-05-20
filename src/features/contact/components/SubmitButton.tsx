import { Spinner } from "@shared/index";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="relative w-full rounded-lg bg-primary px-4 py-3 text-lg font-bold text-white transition hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-70"
  >
    <span className={isSubmitting ? "invisible" : undefined} aria-hidden={isSubmitting}>
      Send Message
    </span>
    {isSubmitting && (
      <span className="absolute inset-0 flex items-center justify-center">
        <Spinner size="sm" />
      </span>
    )}
  </button>
);

export default SubmitButton;
