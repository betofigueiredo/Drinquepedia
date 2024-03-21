import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import SubNavigation from "./components/SubNavigation";

const NavigationBar = () => (
  <div className="w-full bg-white text-center fixed bottom-0 md:relative md:bottom-auto">
    <div className="container h-20">
      <Logo />
      <Navigation />
    </div>
    <SubNavigation />
  </div>
);

export default NavigationBar;
