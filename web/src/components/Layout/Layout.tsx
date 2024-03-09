import { Outlet } from "react-router-dom";
import NavigationBar from "@/components/NavigationBar";

const Layout = () => {
  return (
    <div className="pt-36">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Layout;
