import { Drink } from "./drink";

export type Highlight = {
  id: string;
  oldId: number;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  customUrl?: string;
  drinks?: Drink[];
};
