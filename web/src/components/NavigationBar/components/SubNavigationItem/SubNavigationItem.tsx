import { Link, useLocation, useParams } from "react-router-dom";

const SubNavigationItem = ({ label, url }: { label: string; url: string }) => {
  const location = useLocation();
  const params = useParams<Record<string, string>>();

  const isActive = (): boolean => {
    const currentLocation =
      Object.values(params).reduce(
        (path, param) => path?.replace("/" + param, ""),
        location.pathname
      ) || "/";
    const options = {
      "/drinques/AaZ": label === "De A a Z",
      "/drinques/martinis": label === "Martinis",
      "/drinques/tropicais": label === "Tropicais",
      "/drinques/frozen": label === "Frozen",
      "/drinques/quentes": label === "Quentes",
      "/drinques/shot": label === "Shots",
      "/drinques/classicos": label === "Clássicos",
      "/drinques/semalcool": label === "Sem Álcool",
      "/drinques/caipirinhas": label === "Caipirinhas",
      "/drinques/smoothies": label === "Smoothies",
    };
    return options[currentLocation as keyof typeof options] || false;
  };

  const getLabelCss = () =>
    isActive()
      ? "relative h-14 flex items-center text-gray-950 font-medium"
      : "relative h-14 flex items-center text-gray-700 hover:text-amber-500 transition-all";

  return (
    <li className="relative pl-2 pr-2 ml-2 mr-2 first-of-type:pl-0 last-of-type:pr-0">
      <Link to={url} className={getLabelCss()}>
        {label}
        {isActive() && (
          <div className="absolute w-full h-[3px] left-0 bg-amber-400 bottom-[1px] z-0" />
        )}
      </Link>
    </li>
  );
};

export default SubNavigationItem;
