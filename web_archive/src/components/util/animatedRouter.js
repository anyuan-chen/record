import { Route, Routes, useLocation } from "react-router-dom";
import Lander from "../../pages/lander";
import Dashboard from "../../pages/dashboard";
import { AnimatePresence } from "framer-motion";
import AboutYou from "../../pages/aboutyou";
import Recommend from "../../pages/recommend";
const AnimatedRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Lander></Lander>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/aboutyou" element={<AboutYou></AboutYou>}></Route>
        <Route path="/recommend" element={<Recommend></Recommend>}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRouter;