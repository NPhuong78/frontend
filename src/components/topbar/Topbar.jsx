import { Link } from "react-router-dom";
import "./topbar.css";
export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
       <div className="logo">
       <Link classname="link" to="/">
       <img width="50" src="https://scontent.fhan4-1.fna.fbcdn.net/v/t31.18172-8/12022330_845928092188375_8890160160420757664_o.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=VOmJanGu2bwAX_Pfrol&_nc_ht=scontent.fhan4-1.fna&oh=00_AT_C5JlBDLXMqvD6S5_p1HQLwco6TlDImUyK8UI4QvQfCQ&oe=626EA640"  />        
         </Link>  
      
         </div>      
        {/* <a href="https://www.facebook.com/fu.jsclub">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>

        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        //<i className="topIcon fab fa-twitter-square"></i> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/news">
              NEWS
            </Link>
            </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
