/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_ENDPOINT?: string;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.css" {
  const value: string;
  export default value;
}
