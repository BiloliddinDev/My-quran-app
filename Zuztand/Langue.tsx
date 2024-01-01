import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface langtype {
  langue: string;
  setLang: (value: string) => void;
}

export const useLangData = create<langtype>()(
  persist(
    (set) => ({
      langue: `uzb`,
      setLang: (langue: string) => set(() => ({ langue: langue })),
    }),
    {
      name: "langue",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
