import SubNavigationItem from './SubNavigationItem';
import SubNavigationDivision from './SubNavigationDivision';

const SubNavigation = () => (
  <div className="hidden h-14 w-full border-y border-slate-200 bg-gray-100 text-center md:block">
    <ul className="container px-3 flex whitespace-nowrap mx-auto">
      <SubNavigationItem label="De A a Z" url="/drinques/AaZ" />
      <SubNavigationDivision />
      <SubNavigationItem label="Martinis" url="/drinques/martinis" />
      <SubNavigationItem label="Tropicais" url="/drinques/tropicais" />
      <SubNavigationItem label="Frozen" url="/drinques/frozen" />
      <SubNavigationItem label="Quentes" url="/drinques/quentes" />
      <SubNavigationItem label="Shots" url="/drinques/shot" />
      <SubNavigationItem label="Clássicos" url="/drinques/classicos" />
      <SubNavigationItem label="Sem Álcool" url="/drinques/semalcool" />
      <SubNavigationDivision />
      <SubNavigationItem label="Caipirinhas" url="/drinques/caipirinhas" />
      <SubNavigationItem label="Smoothies" url="/drinques/smoothies" />
    </ul>
  </div>
);

export default SubNavigation;
