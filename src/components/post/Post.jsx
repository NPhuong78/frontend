

import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../service/postApi";
import "./post.css";

export default function Post() {

  const [listPost,setListPost] = useState([]);
  
  useEffect(()=>{
     const getListPost = async() =>{
        const res = await getAll()
        setListPost(res.data)
        console.log("check all post", res.data)

     }  
  getListPost();

  },[]);

  return (
    
 

    <div className="post">
       { listPost.length > 0 && 
           listPost.map((item)=>{

       return(
        <div className="container">
         <img 
        className="postImg"
        src={item.image}
        alt=""
      />

      <div className="postInfo">


        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </span>
        </div>


        <span className="postTitle">
          <Link to="/post/abc" className="link">
           {item.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>

         
      </div>
       
         ) 
        
        })
        
        }
    </div>
  
  );
}



//  <img 
      //   className="postImg"
      //   src={item.image}
      //   alt=""
      // />

      // <div className="postInfo">

      //   <div className="postCats">
      //     <span className="postCat">
      //       <Link className="link" to="/posts?cat=Music">
      //         Music
      //       </Link>
      //     </span>
      //     <span className="postCat">
      //       <Link className="link" to="/posts?cat=Life">
      //         Life
      //       </Link>
      //     </span>
      //   </div>

      //   <span className="postTitle">
      //     <Link to="/post/abc" className="link">
      //       Lorem ipsum dolor sit amet
      //     </Link>
      //   </span>
      //   <hr />
      //   <span className="postDate">1 hour ago</span>
      // </div>
      // <p className="postDesc">
      //   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      //   officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
      //   fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      //   atque, exercitationem quibusdam, reiciendis odio laboriosam?
      // </p>

