import { useState, lazy, Suspense } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import FloatingActionMenu from "./components/FloatingActionMenu";
import CustomCursor from "./components/CustomCursor";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const TechStack = lazy(() => import("./components/TechStack"));
const Achievements = lazy(() => import("./components/Achievements"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [loaded, setLoaded] = useState(false);
  
  if (!loaded) return <Loader finish={() => setLoaded(true)} />;
  
  return (
    <ThemeProvider>
      <div className="bg-gradient-to-br from-[#fafcff] to-[#c3cfe2] dark:from-[#0e1118] dark:to-[#2c5364] min-h-screen transition-colors duration-300">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="flex justify-center items-center py-20"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#71f9e4]"></div></div>}>
          <About />
          <Projects />
          <TechStack />
          <Achievements />
          <Testimonials />
          <Contact />
          <Footer />
        </Suspense>
        <FloatingActionMenu />
      </div>
    </ThemeProvider>
  );
}

export default App;
