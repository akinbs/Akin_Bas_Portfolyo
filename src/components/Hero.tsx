import { useEffect, useRef } from "react";
import TypewriterEffect from "./TypewriterEffect";
import LightRays from "./LightRays";
import { createTimeline } from "animejs";
import { useLang } from "../context/LangContext";

export default function Hero() {
  const { t } = useLang();
  const titleRef    = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = createTimeline({ defaults: { easing: "easeOutExpo" } });
    tl.add(titleRef.current,    { opacity: [0, 1], translateY: [60, 0], duration: 1000 })
      .add(subtitleRef.current, { opacity: [0, 1], translateY: [30, 0], duration: 700 }, "-=500")
      .add(ctaRef.current,      { opacity: [0, 1], translateY: [20, 0], duration: 500 }, "-=350");
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* WebGL LightRays background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#a0e0ab"
        raysSpeed={0.7}
        lightSpread={1.1}
        rayLength={2.2}
        pulsating={true}
        fadeDistance={1.2}
        followMouse={true}
        mouseInfluence={0.18}
        noiseAmount={0.025}
        distortion={0.06}
      />

      {/* Subtle radial vignette to ground the content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1078px] mx-auto px-6 flex flex-col justify-end min-h-screen pb-28 pt-32">

        <div ref={titleRef} style={{ opacity: 0 }}>
          <p className="text-white/55 text-[11px] uppercase tracking-[0.28em] mb-10 font-light">
            {t.hero.badge}
          </p>
          <h1
            className="font-light leading-[0.88] text-white mb-10 tracking-tight"
            style={{ fontSize: 'clamp(72px, 10vw, 120px)' }}
          >
            AKIN
            <br />
            BAŞ
          </h1>
        </div>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/70 font-light mb-12 tracking-tight"
          style={{ opacity: 0 }}
        >
          <TypewriterEffect
            texts={[
              "React Developer",
              "Frontend Specialist",
              "JavaScript Expert",
              "UI/UX Enthusiast",
              "Creative Web Developer",
            ]}
            speed={110}
          />
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-4 items-center" style={{ opacity: 0 }}>
          <a href="#projects" className="btn-ghost">{t.hero.viewProjects}</a>
          <a href="#contact"  className="btn-solid">{t.hero.getInTouch}</a>
        </div>
      </div>
    </section>
  );
}
