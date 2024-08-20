import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const AppLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? <NavMobile /> : <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
