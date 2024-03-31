import { Link, useLocation, useParams } from "react-router-dom";

const NavigationItem = ({ to, label }: Props) => {
  const location = useLocation();
  const params = useParams<Record<string, string>>();

  const isActive = (): boolean => {
    const currentLocation =
      Object.values(params).reduce(
        (path, param) => path?.replace("/" + param, ""),
        location.pathname,
      ) || "/";
    const urlFirstPart = currentLocation.split("/")[1];
    const options = {
      drinques: label.toLowerCase() === "drinques",
      destaques: label.toLowerCase() === "destaques",
      tudosobrebar: label.toLowerCase() === "tudo sobre bar",
      dicas: label.toLowerCase() === "dicas",
    };
    return options[urlFirstPart as keyof typeof options] || false;
  };

  function getLabelCss() {
    return isActive()
      ? "h-12 uppercase pt-3 w-full text-xs md:text-base font-medium"
      : "h-12 uppercase pt-3 w-full text-xs md:text-base text-gray-700 hover:text-amber-500 transition-all";
  }

  return (
    <li className="relative mx-0 flex h-20 w-1/4 items-center align-middle md:mx-4 md:w-auto">
      <Link to={to} className={getLabelCss()}>
        <span className=" relative z-10">{label}</span>
        {isActive() && (
          <div className="absolute bottom-6 left-0 z-0 h-1 w-7 bg-amber-400" />
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
