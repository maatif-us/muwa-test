import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";

import Layout from "../components/Layout";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AllVideos from "../pages/AllVideos";
import VideoStream from "../pages/VideoStream";
import PageNotFound from "../pages/PageNotFound";

import "../css/style.css";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />

        {/* Private Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/videos" element={<AllVideos />} />
          <Route path="/video/play/:id" element={<VideoStream />} />
        </Route>

        {/* Invalid Routes */}
        <Route path={"*"} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
