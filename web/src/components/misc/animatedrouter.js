import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lander from "../../pages/lander/lander";
import Dashboard from "../../pages/dashboard/dashboard";
import Search from "../../pages/search/search";
import AboutYouLayout from "../../pages/aboutyou/aboutRouter";
const AnimatedRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Lander></Lander>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route
          path="/aboutyou/*"
          element={<AboutYouLayout></AboutYouLayout>}
        ></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRouter;
