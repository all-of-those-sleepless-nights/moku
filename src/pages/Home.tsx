import EverydayEssentials from "../components/sections/everyday-essentials/everyday-essentials";
import HeroBanner from "../components/landing/hero-banner";
import ProvenFavourites from "../components/sections/proven-favourites/proven-favourites";
import StyleItYourWay from "../components/sections/style-it-your-way/style-it-your-way";
import NewsList from "../components/sections/news/news-list";
import ValuePropositionsList from "../components/sections/value-propositions/value-proposition-list";
import HeroIntroAnimation from "../components/landing/hero-intro-animation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="hero-intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 4.5, duration: 0.5, ease: "easeInOut" }}
          >
            <HeroIntroAnimation />
          </motion.div>
        )}
      </AnimatePresence>

      <HeroBanner />

      <EverydayEssentials />
      <ProvenFavourites />
      <StyleItYourWay />
      <ValuePropositionsList />

      <NewsList />
    </div>
  );
}

export default HomePage;
