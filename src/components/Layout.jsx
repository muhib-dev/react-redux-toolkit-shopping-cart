import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children || <Outlet />}</main>
    </>
  );
};

export default Layout;
