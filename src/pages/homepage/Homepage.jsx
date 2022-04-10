import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import PaginationNews from "../../components/Pagination/Pagination";
import Departments from "../../components/Department/Department";
import Features from "../../components/features/Features";
import Footer from "../../components/Footer/Footer";

import { BackTop } from "antd";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
      <Departments />
      </div>

      <div className="news">
        <Features />
         
        <Sidebar /> 
      </div>

     <BackTop/>
      <div className="bottom">
        <Footer />
      </div>

    </>
  );
}
