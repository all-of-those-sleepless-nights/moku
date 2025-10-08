import NavigationSection from "./navigations-section";

function PublicFooter() {
  return <div className="bg-blue-300 w-full z-20 sticky top-0 p-4 flex flex-col sm:flex-row gap-10 sm:gap-0 sm:justify-between sm:items-center">
    <label className="text-7xl">Moku</label>
    <NavigationSection/>
  </div>;
}

export default PublicFooter;
