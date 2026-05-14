"use client";

import { Button } from "@/components/ui/button";
import landingData from "@/data/landingData.json";
import { motion } from "framer-motion";

interface HeroSectionProps {
  data: typeof landingData.es;
  isEnglish: boolean;
}

const revealAnimation = {
  initial: { opacity: 0, scale: 0.8, y: 60 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.6, ease: "easeOut" }
} as const;

import RotatingText from "@/components/animations/RotatingText";
import ShinyText from "@/components/animations/ShinyText";
import BlurText from "@/components/animations/BlurText";

export function HeroSection({ data, isEnglish }: HeroSectionProps) {
  const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, ' ');

  const rotatingWords = isEnglish 
    ? ["Repetitive", "Tedious", "Monotonous", "Redundant", "Unproductive", "Recurring"]
    : ["repetitivos", "tediosos", "monótonos", "redundantes", "improductivos", "recurrentes"];

  // Split title to inject RotatingText - Fixed case sensitivity for English "Repetitive"
  const splitWord = isEnglish ? "Repetitive" : "repetitivos";
  const titleParts = data.hero.title.split(splitWord);

  // Safety check and CLEANUP: Remove the trailing comma if it exists in the afterText
  const beforeText = titleParts[0] || "";
  let afterText = titleParts[1] || "";
  
  // Remove trailing comma immediately after the split word
  if (afterText.trim().startsWith(",")) {
    afterText = afterText.trim().substring(1);
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 md:py-32">
      <div className="max-w-[1800px] px-6 mx-auto">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Main Hook: Title & Description together */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 flex flex-col items-center"
          >
            <div>
              <h1 className="font-heading text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-white! dark:text-foreground!">
                <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4">
                  {/* Line 1 */}
                  <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
                    {isEnglish ? (
                      <>
                        <motion.div
                          initial={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
                          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        >
                          <RotatingText
                            texts={rotatingWords}
                            mainClassName="fusa-rotating-badge bg-[#1C058E] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl inline-flex overflow-hidden justify-center items-center w-[140px] sm:w-[300px] md:w-[400px] lg:min-w-[520px] whitespace-nowrap"
                            staggerFrom="last"
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-120%", opacity: 0 }}
                            staggerDuration={0.06}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={3500}
                          />
                        </motion.div>
                        <BlurText
                          text="processes,"
                          delay={60}
                          animateBy="words"
                          direction="top"
                          className="inline"
                        />
                      </>
                    ) : (
                      <>
                        <BlurText
                          text={stripHtml(beforeText)}
                          delay={60}
                          animateBy="words"
                          direction="top"
                          className="inline"
                        />
                        <motion.div
                          initial={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
                          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        >
                          <RotatingText
                            texts={rotatingWords}
                            mainClassName="fusa-rotating-badge bg-[#1C058E] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl inline-flex overflow-hidden justify-center items-center w-[140px] sm:w-[300px] md:w-[400px] lg:min-w-[520px] whitespace-nowrap"
                            staggerFrom="last"
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-120%", opacity: 0 }}
                            staggerDuration={0.06}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={3500}
                          />
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Line 2 */}
                  <div className="w-full flex justify-center">
                    <BlurText
                      text={isEnglish ? "inadequate software" : "software inadecuado"}
                      delay={60}
                      animateBy="words"
                      direction="top"
                      className="inline"
                    />
                  </div>

                  {/* Line 3 */}
                  <div className="w-full flex justify-center">
                    <BlurText
                      text={isEnglish ? "or an imperceptible brand?" : "o marca imperceptible?"}
                      delay={60}
                      animateBy="words"
                      direction="top"
                      className="inline"
                    />
                  </div>
                </div>
              </h1>

              {data.hero.subtitle && (
                <BlurText
                  text={stripHtml(data.hero.subtitle)}
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-muted-foreground block mt-2 sm:mt-4 text-base sm:text-xl md:text-2xl lg:text-3xl justify-center text-center"
                />
              )}
            </div>
 
            <p 
              className="max-w-5xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light"
              dangerouslySetInnerHTML={{ 
                __html: data.hero.description
                  .replace("tomar el control", '<span class="text-foreground font-bold">tomar el control</span>') 
                  .replace("volvé a", '<span class="text-foreground font-bold">volvé a</span>')
                  .replace("de tu negocio", '<span class="text-foreground font-bold">de tu negocio</span>')
              }}
            />
          </motion.div>

          {/* CTA: Delayed revealing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
            className="flex flex-col items-center gap-3 mt-4 w-full"
          >
            <Button asChild className="h-10 sm:h-14 md:h-16 px-6 sm:px-10 text-sm sm:text-lg md:text-xl font-semibold rounded-xl w-full sm:max-w-[380px] transition-all duration-300 hover:scale-105 bg-transparent! text-white! border-2! border-[#1C058E]! hover:bg-[#1C058E]/10!">
              <a href="#contacto" className="flex items-center justify-center">
                <ShinyText 
                  speed={5} 
                  color="#FFFFFF" 
                  shineColor="#1C058E"
                  className="font-semibold flex items-center justify-center gap-3"
                >
                  {isEnglish ? "Start Today!" : "Empezá hoy mismo"}
                  <span className="text-sm sm:text-lg md:text-xl ml-1 leading-none">→</span>
                </ShinyText>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
