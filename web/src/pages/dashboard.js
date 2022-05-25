import BaseLayout from "../components/layouts/baselayout";
import { motion } from "framer-motion";
import DashboardElement from "../components/dashboard/dashboardelement";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <motion.div
      style={{ height: "100vh" }}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <BaseLayout>
        <h1 className="h1 bold"> hi, andrew</h1>
        <div className="dashboard__container">
          <DashboardElement
            src="https://wallpaperaccess.com/full/3547007.jpg"
            alt="your music photos"
            label="about you"
            caption="either going to boost or destroy your ego"
            href="/about"
          ></DashboardElement>
          <DashboardElement
            src="https://wallpaperaccess.com/full/3547007.jpg"
            alt="your music photos"
            label="recommendations"
            caption="do you really trust an AI with your music?"
            href="/recommend"
          ></DashboardElement>
          <DashboardElement
            src="https://wallpaperaccess.com/full/3547007.jpg"
            alt="your music photos"
            label="log off"
            caption="see you soon!"
            href="/"
          ></DashboardElement>
        </div>
      </BaseLayout>
    </motion.div>
  );
};
export default Dashboard;
