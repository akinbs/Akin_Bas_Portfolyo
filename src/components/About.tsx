import { motion } from "framer-motion";
import { memo } from "react";
import profileImg from "../assets/akın.jpg";
import { useLang } from "../context/LangContext";

const About = memo(function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-28 px-6 bg-black">
      <div className="max-w-[1078px] mx-auto">

        <motion.div
          className="flex items-baseline gap-5 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">01</span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">{t.about.heading}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-white/72 leading-relaxed mb-6 font-light">{t.about.p1}</p>
            <p className="text-base text-white/42 leading-relaxed mb-5 font-light">{t.about.p2}</p>
            <p className="text-base text-white/42 leading-relaxed mb-10 font-light">{t.about.p3}</p>

            <a href="#contact" className="btn-ghost inline-flex">
              {t.about.cta}
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
            >
              <motion.div
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ y: 0, scale: 1, rotateX: 0, rotateY: 0 }}
                whileHover={{
                  y: -10, scale: 1.04, rotateX: 5, rotateY: -6,
                  transition: { type: "spring", stiffness: 160, damping: 16 },
                }}
                transition={{
                  y:       { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
                  scale:   { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
                  rotateX: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
                  rotateY: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-5 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse, rgba(160,224,171,0.22) 0%, transparent 70%)",
                    filter: "blur(10px)",
                  }}
                />

                <div className="relative">
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    style={{ overflow: "visible" }}
                  >
                    <rect x="0.5" y="0.5" width="99" height="99" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" rx="3" />
                    <motion.rect
                      x="0.5" y="0.5" width="99" height="99"
                      fill="none"
                      stroke="rgba(255,255,255,0.78)"
                      strokeWidth="0.9"
                      rx="3"
                      strokeLinecap="round"
                      strokeDasharray="99 99"
                      animate={{ strokeDashoffset: [0, -396] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>

                  <img
                    src={profileImg}
                    alt="Akın Baş"
                    className="w-72 h-72 md:w-80 md:h-80 object-cover object-center"
                    style={{ borderRadius: "10px", filter: "grayscale(15%) contrast(1.04)" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

export default About;
