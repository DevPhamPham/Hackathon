import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
