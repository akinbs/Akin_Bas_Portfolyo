import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "../i18n/translations";

interface LangCtx {
  lang:    Lang;
  setLang: (l: Lang) => void;
  t:       Translations;
}

const LangContext = createContext<LangCtx | null>(null);

export function useLang(): LangCtx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}
