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
    return isActive ? "w-full text-base font-medium" : "w-full text-base";
  }

  return (
    <li className="relative">
      <Link
        to={to}
        className="flex h-20 flex-row align-middle text-center uppercase"
      >
        <span className={getLabelCss()}>{label}</span>
      </Link>
    </li>
  );
};

type Props = {
  to: string;
  label: string;
};

export default NavigationItem;
