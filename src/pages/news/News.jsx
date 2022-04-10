import "./news.css";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

import 'antd/dist/antd.css';
import { BackTop } from 'antd';
import { Container } from "react-bootstrap";
import PaginationNews from "../../components/Pagination/Pagination";
export default function News() {

    return (
      <>
        <Container>
          <div class="NewsTitle">Tin Tức Và Sự Kiện</div>
        </Container>
        <div className="home">

          <PaginationNews/>
          <Sidebar />

       </div>
      
            <>
              <BackTop />
              <strong className="site-back-top-basic"></strong>
            </>,
            <Footer /> 
             
             

  
      </>

         

    
    );
  }