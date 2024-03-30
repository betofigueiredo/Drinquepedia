import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="absolute z-10 w-24 pt-3 text-center text-[26px] font-medium">
      <Link to="/">
        DRINQUE<span className="text-[#f3c73f]">PEDIA</span>
      </Link>
    </div>
  );
};

export default Logo;
