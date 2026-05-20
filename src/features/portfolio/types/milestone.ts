export interface Milestone {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  type: "academic" | "professional" | "web3";
  description: string;
  skills: string[];
  track: number;
}
