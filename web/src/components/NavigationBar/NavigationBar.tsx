import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import SubNavigation from "./components/SubNavigation";

const NavigationBar = () => (
  <div className="w-full bg-white text-center">
    <div className="container h-20">
      <Logo />
      <Navigation />
    </div>
    <SubNavigation />
  </div>
);

export default NavigationBar;
