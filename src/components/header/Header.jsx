import "./header.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect } from "react";


export default function Header() {
  const [listPost, setListPost] = useState([]);

  useEffect(() => {
    const getListPost = async () => {

      const res = await axios.get("http://localhost:3001/post/trending");
 
      setListPost(res.data);
      console.log("check",res.data)
   };
   
   getListPost()
  },[]);
   
  
  return (
    <div className="header">
      
      <div className="Carousel">
      <Carousel>

          {listPost.length > 0 &&
          listPost.map((item) => {
            
          return(
            
       <Carousel.Item key={item.id}>
      
      <img
        className="d-block w-100"
        src={item.image}
        width="900" height="600"

        alt="First slide"
      />
      <Carousel.Caption>
        <h3>
        { item.title}
        </h3>
    
        <p>Chuyến tàu khởi hành</p>
        <Button variant="primary">Read More</Button>{" "}
       </Carousel.Caption>
        </Carousel.Item>
  

 )
          
  
      })}
        </Carousel>
      </div>
      
    </div>
  );
}
