// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./components/Navigation";
import SubNavigation from "./components/SubNavigation";

const NavigationBar = () => {
  return (
    <div
      id="navigation-bar"
      className="fixed left-0 top-0 z-20 h-20 w-full border-b border-slate-200 bg-white text-center"
    >
      <div className="absolute w-24 pt-7 text-center text-2xl font-medium">
        DRINQUE<span className="text-[#f3c73f]">PEDIA</span>
      </div>
      <Navigation />
      <SubNavigation />
    </div>
  );
};

export default NavigationBar;
