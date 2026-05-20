interface SpinnerProps {
  size?: "sm" | "md";
  className?: string;
}

const sizeClasses = {
  sm: "h-5 w-5 border-2",
  md: "h-8 w-8 border-[3px]",
};

const Spinner = ({ size = "md", className = "" }: SpinnerProps) => (
  <span
    role="status"
    aria-label="Loading"
    className={`inline-block animate-spin rounded-full border-white/30 border-t-white ${sizeClasses[size]} ${className}`}
  />
);

export default Spinner;
