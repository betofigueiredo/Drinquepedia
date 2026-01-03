import { Link } from '@tanstack/react-router';

const Logo = () => {
  return (
    <div className="relative z-10 w-auto pt-3 text-center text-[26px] font-medium md:absolute md:w-24 md:pt-5">
      <Link to="/">
        DRINQUE<span className="text-[#f3c73f]">PEDIA</span>
      </Link>
    </div>
  );
};

export default Logo;
