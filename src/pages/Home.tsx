import EverydayEssentials from "../components/sections/everyday-essentials/everyday-essentials";
import PublicFooter from "../components/footers/public-footer";
import HeroBanner from "../components/landing/hero-banner";
import ProvenFavourites from "../components/sections/proven-favourites/proven-favourites";
import StyleItYourWay from "../components/sections/style-it-your-way/style-it-your-way";
import NewsList from "../components/sections/news/news-list";
import ValuePropositionsList from "../components/sections/value-propositions/value-proposition-list";

function HomePage() {
  return (
    <body className="relative">
      <HeroBanner />

      <EverydayEssentials />
      <ProvenFavourites/>
      <StyleItYourWay/>
      <ValuePropositionsList/>

      <NewsList/>

    </body>
  );
}

export default HomePage;
