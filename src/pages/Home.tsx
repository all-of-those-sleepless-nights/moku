import PublicFooter from "../components/footers/public-footer";

function HomePage() {
  return (
    <section className="relative">
      <section className="bg-yellow-400 relative w-full h-screen" />

      <div className="bg-red-300 relative w-full h-[200vh]" />

      <PublicFooter />
    </section>
  );
}

export default HomePage;
