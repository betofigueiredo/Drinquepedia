import { Link, useLocation } from '@tanstack/react-router';

const SubNavigationItem = ({ label, url }: { label: string; url: string }) => {
  const { pathname } = useLocation();

  const isActive = (): boolean => {
    const options = {
      '/drinques/AaZ': label === 'De A a Z',
      '/drinques/martinis': label === 'Martinis',
      '/drinques/tropicais': label === 'Tropicais',
      '/drinques/frozen': label === 'Frozen',
      '/drinques/quentes': label === 'Quentes',
      '/drinques/shot': label === 'Shots',
      '/drinques/classicos': label === 'Clássicos',
      '/drinques/semalcool': label === 'Sem Álcool',
      '/drinques/caipirinhas': label === 'Caipirinhas',
      '/drinques/smoothies': label === 'Smoothies',
    };
    return options[pathname as keyof typeof options] || false;
  };

  const getLabelCss = () =>
    isActive()
      ? 'relative h-14 flex items-center text-gray-950 font-medium'
      : 'relative h-14 flex items-center text-gray-700 hover:text-amber-500 transition-all';

  return (
    <li className="relative mx-2 px-2 first-of-type:ml-0 first-of-type:pl-0 last-of-type:pr-0">
      <Link to={url} className={getLabelCss()}>
        {label}
        {isActive() && (
          <div className="absolute bottom-px left-0 z-0 h-0.75 w-full bg-amber-400" />
        )}
      </Link>
    </li>
  );
};

export default SubNavigationItem;
