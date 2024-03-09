import { Link } from "react-router-dom";

const SubNavigationItem = ({ label, url }: { label: string; url: string }) => {
  return (
    <li className="pl-2 pr-2 ml-2 mr-2 first-of-type:pl-0 last-of-type:pr-0">
      <Link
        to={url}
        className="h-14 flex items-center text-gray-700 hover:text-amber-500 transition-all"
      >
        {label}
      </Link>
    </li>
  );
};

export default SubNavigationItem;
