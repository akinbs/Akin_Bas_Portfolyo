import { useState, useEffect, lazy, Suspense } from "react";
import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import FloatingActionMenu from "./components/FloatingActionMenu";
import CustomCursor from "./components/CustomCursor";

const About        = lazy(() => import("./components/About"));
const Projects     = lazy(() => import("./components/Projects"));
const TechStack    = lazy(() => import("./components/TechStack"));
const Achievements = lazy(() => import("./components/Achievements"));
const Contact      = lazy(() => import("./components/Contact"));
const Footer       = lazy(() => import("./components/Footer"));

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;

    const cycle = ['AKIN BAS', '· AKIN BAS ·'];
    let i = 0;
    let ticker: ReturnType<typeof setInterval>;
    let reset: ReturnType<typeof setTimeout>;

    const startTicker = () => {
      ticker = setInterval(() => {
        i = (i + 1) % cycle.length;
        document.title = cycle[i];
      }, 2600);
    };

    const onVisibility = () => {
      clearInterval(ticker);
      clearTimeout(reset);
      if (document.hidden) {
        document.title = '← come back.';
      } else {
        document.title = '✦ welcome back!';
        reset = setTimeout(() => {
          document.title = 'AKIN BAS';
          i = 0;
          startTicker();
        }, 2000);
      }
    };

    document.title = 'AKIN BAS';
    document.addEventListener('visibilitychange', onVisibility);
    startTicker();

    return () => {
      clearInterval(ticker);
      clearTimeout(reset);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [loaded]);

  if (!loaded) return <Loader finish={() => setLoaded(true)} />;

  return (
    <LangProvider>
    <div className="relative min-h-screen overflow-x-clip bg-black">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={
          <div className="flex justify-center items-center py-24">
            <div className="w-8 h-8 border border-white/15 border-t-white/70 rounded-full animate-spin" />
          </div>
        }>
          <About />
          <Projects />
          <TechStack />
          <Achievements />
          <Contact />
          <Footer />
        </Suspense>
      </main>

      <FloatingActionMenu />
    </div>
    </LangProvider>
  );
}

export default App;
