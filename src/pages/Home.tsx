import EverydayEssentials from "../components/sections/everyday-essentials/everyday-essentials";
import HeroBanner from "../components/landing/hero-banner";
import ProvenFavourites from "../components/sections/proven-favourites/proven-favourites";
import StyleItYourWay from "../components/sections/style-it-your-way/style-it-your-way";
import NewsList from "../components/sections/news/news-list";
import ValuePropositionsList from "../components/sections/value-propositions/value-proposition-list";
import HeroIntroAnimation from "../components/landing/hero-intro-animation";

function HomePage() {
  return (
    <body className="relative">
      <HeroIntroAnimation />
      <HeroBanner />

      <EverydayEssentials />
      <ProvenFavourites />
      <StyleItYourWay />
      <ValuePropositionsList />

      <NewsList />
    </body>
  );
}

export default HomePage;
