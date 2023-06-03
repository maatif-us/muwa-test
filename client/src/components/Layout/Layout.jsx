import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Header from "../Header";
import Footer from "../Footer";

import "react-toastify/dist/ReactToastify.css";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <main className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
