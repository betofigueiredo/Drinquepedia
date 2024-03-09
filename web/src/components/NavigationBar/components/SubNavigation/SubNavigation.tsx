import SubNavigationItem from "../SubNavigationItem";
import SubNavigationDivision from "../SubNavigationDivision";

const SubNavigation = () => {
  return (
    <div className="w-full h-14 bg-gray-100 border-slate-200 border-b text-center">
      <ul className="flex container">
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
};

export default SubNavigation;
