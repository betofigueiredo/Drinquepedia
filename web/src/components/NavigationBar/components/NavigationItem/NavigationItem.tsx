import { Link, useLocation, useParams } from "react-router-dom";

const NavigationItem = ({ to, label }: Props) => {
  const location = useLocation();
  const params = useParams<Record<string, string>>();
  const currentLocation =
    Object.values(params).reduce(
      (path, param) => path?.replace("/" + param, ""),
      location.pathname
    ) || "/";
  const isActive = to === currentLocation;

  function getLabelCss() {
    return isActive
      ? "relative w-full text-base font-medium z-10"
      : "w-full text-base text-gray-700";
  }

  return (
    <li className="relative flex items-center align-middle h-20 ml-4 mr-4">
      <Link to={to} className="h-12 uppercase pt-3">
        <span className={getLabelCss()}>{label}</span>
        {isActive && (
          <div className="absolute w-[110%] h-1 left-[-5%] bg-amber-400 bottom-8 z-0" />
        )}
      </Link>
    </li>
  );
};

type Props = {
  to: string;
  label: string;
};

export default NavigationItem;
