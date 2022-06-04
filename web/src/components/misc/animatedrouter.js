import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lander from "../../pages/lander/lander";
import Dashboard from "../../pages/dashboard/dashboard";
const AnimatedRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Lander></Lander>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRouter;
