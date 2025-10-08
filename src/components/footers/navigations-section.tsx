import {
  generalNavigationLinks,
  infoNavigationLinks,
  navigationGroups,
  socialNavigationLinks,
} from "../../constants/navigation-links";

function NavigationSection() {
  return (
    <section className="flex items-center gap-8">
      <div className="flex flex-col gap-2">
        <label className="capitalize text-2xl">
          {navigationGroups.General}
        </label>
        {generalNavigationLinks.map((item, i) => (
          <div key={i}>
            <a className="hover:underline hover:cursor-pointer">{item.label}</a>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <label className="capitalize text-2xl">{navigationGroups.Info}</label>
        {infoNavigationLinks.map((item, i) => (
          <div key={i}>
            <a className="hover:underline hover:cursor-pointer">{item.label}</a>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <label className="capitalize text-2xl">{navigationGroups.Social}</label>
        {socialNavigationLinks.map((item, i) => (
          <div key={i}>
            <a className="hover:underline hover:cursor-pointer">{item.label}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NavigationSection;
