import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="absolute w-24 pt-5 text-center text-[26px] font-medium z-10">
      <Link to="/">
        DRINQUE<span className="text-[#f3c73f]">PEDIA</span>
      </Link>
    </div>
  );
};

export default Logo;
