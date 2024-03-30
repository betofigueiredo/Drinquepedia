import { Outlet } from "react-router-dom";
import NavigationBar from "@/components/NavigationBar";

const Layout = () => {
  return (
    <div className="pb-60 pt-12 md:pt-0">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Layout;
