import { create } from "zustand";

type SearchStore = {
  name: string;
  calories: string;
  alcoholicContent: string;
  update: ({ key, value }: { key: string; value: string }) => void;
};

const useSearchStore = create<SearchStore>()((set) => ({
  name: "",
  calories: "",
  alcoholicContent: "",
  update: ({ key, value }) => set(() => ({ [key]: value })),
}));

export default useSearchStore;
