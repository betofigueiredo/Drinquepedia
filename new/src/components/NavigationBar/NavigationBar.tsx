import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Search from './components/Search';
import SubNavigation from './components/SubNavigation';
import SubNavigationMobile from './components/SubNavigationMobile';

const NavigationBar = () => (
  <>
    <div className="fixed top-0 z-10 h-16 w-full border-b border-slate-200 bg-white text-center md:hidden">
      <Logo />
    </div>
    <SubNavigationMobile />
    <div className="fixed bottom-0 z-10 w-full border-t border-slate-200 bg-white text-center md:relative md:bottom-auto md:border-none">
      <div className="container px-3 relative h-20 mx-auto">
        <div className="hidden md:inline">
          <Logo />
        </div>
        <Navigation />
        <Search />
      </div>
      <SubNavigation />
    </div>
  </>
);

export default NavigationBar;
