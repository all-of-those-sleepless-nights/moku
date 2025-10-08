import NavigationSection from "./navigations-section";

function PublicFooter() {
  return <div className="bg-blue-300 w-full z-20 sticky top-0 p-4 flex justify-between items-center">
    <label className="text-7xl">Moku</label>
    <NavigationSection/>
  </div>;
}

export default PublicFooter;
