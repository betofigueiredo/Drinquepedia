import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import SubNavigation from "./components/SubNavigation";

const NavigationBar = () => (
  <div className="fixed left-0 top-0 z-20 h-20 w-full border-b border-slate-200 bg-white text-center">
    <Logo />
    <Navigation />
    <SubNavigation />
  </div>
);

export default NavigationBar;
