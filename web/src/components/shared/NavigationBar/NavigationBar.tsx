// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import NavigationItem from "./NavigationItem";

const NavigationBar = () => {
  return (
    <div
      id="navigation-bar"
      className="fixed left-0 top-0 z-20 h-20 w-full border-b border-slate-200 bg-white text-center"
    >
      <div className="absolute w-24 pt-7 text-center text-2xl font-medium">
        DRINQUE<span className="text-[#f3c73f]">PEDIA</span>
      </div>
      <ul className="relative container m-0 ml-auto mr-auto flex list-none flex-row justify-center gap-4">
        <NavigationItem to="/drinques" label="Drinques" />
        <NavigationItem to="/buy-me-a-coffee" label="Destaques" />
        <NavigationItem to="/songs" label="Tudo sobre bar" />
        <NavigationItem to="/dicas" label="Dicas" />
      </ul>
      <div className="w-full h-12 bg-gray-100 border-slate-200 border-b">
        asd
      </div>
    </div>
  );
};

export default NavigationBar;
