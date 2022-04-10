import "./departments.css"
import { Container , Row , Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDesktop , faHandshake , faMoneyBill , faComments , faLightbulb } from "@fortawesome/free-solid-svg-icons"
export default function Departments() {


return(
  

    <Container>
      <div class="departments">
      <div class="title"> CÁC PHÒNG BAN </div>
     <Row>
    <div class="col-md-4 col-sm-5 col-xs-5 col-md-offset-1 text-center" >
    <Col> <Link class="link" to="/bcm" > 
     
     <FontAwesomeIcon icon={faDesktop} size="8x" color="orange"> </FontAwesomeIcon> 
     <br/> 
     <div class="small-text" > Ban Chuyên Môn </div>
      </Link> </Col>   
    </div>

    <div class="col-md-4 col-sm-5 col-xs-5 col-md-offset-1 text-center" >
      <Col> <Link class="link" to="/bvh" >
     <FontAwesomeIcon icon={faHandshake}  size="8x" color="pink"> </FontAwesomeIcon>  
      <br/> 
     <div class="small-text"> Ban Văn Hóa </div></Link> </Col>
    </div>          

    <div class="col-md-4 col-sm-5 col-xs-5 col-md-offset-1 text-center" >
     <Col> <Link class="link" to="btt" > 
     <FontAwesomeIcon icon={faComments}  size="8x" color="blue"> </FontAwesomeIcon>     <br/> 
     <div class="small-text"> Ban Truyền Thông </div></Link> </Col>
     </div>  

    <div class="col-md-7 col-sm-5 col-xs-5 col-md-offset-1 text-center" >
     <Col> <Link class="link" to="bdn" >
     <FontAwesomeIcon icon={faMoneyBill}  size="8x" color="green"> </FontAwesomeIcon>     <br/> 
     <div class="small-text"> Ban Đối Ngoại </div></Link> </Col>
    </div>  

    <div class="col-md-3 col-sm-5 col-xs-5 col-md-offset-1 text-center" >
     <Col><Link class="link" to="bnd" >
     <FontAwesomeIcon icon={faLightbulb}  size="8x" color="yellow"> </FontAwesomeIcon>  <br/> 
     <div class="small-text"> Ban Nội Dung </div></Link> </Col>
     </div>  
     </Row>
     </div> 

    </Container>


)




}