
import { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { PaginationApi } from "../../service/postApi";
import { Link } from "react-router-dom";


export default function PaginationNews() {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  let renderTotalPage = [];
  useEffect(() => {
    const getListPost = async () => {
      const res = await PaginationApi(currentPage);
      setCurrentPage(res.data.items);
      setTotalPage(res.data.meta);
      console.log("check data and total ", res.data);
    };

    getListPost();
  }, [currentPage]);


  for (let number = 1; number <= totalPage; number++) {
    renderTotalPage.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={handlePageChange}>
        {number}
      </Pagination.Item>,
    );
  }

  const handlePageChange = (currentPage) =>{
     console.log("check currentpage :",currentPage)
  }


    return(
      <div className="list-user-container">
              
      <div className="list-user-content">
          {currentPage.length > 0 &&
              currentPage.map((item) => {
                  return (

                  <div className="post">
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
                      <div className="postTitle">
                        <Link to="/post/abc" className="link">
                          {item.title}
                        </Link>
                        <br/>
                          <span className="postDate">1 hour ago</span>            
                      </div>
                    </div>
                  </div>
                  )
              })
          }

      </div>

      
     <div>
     <Pagination>(renderTotalPage)</Pagination>
    </div>

  </div>



     

    )

    

}

// const [listPost, setListPost] = useState([]);

// useEffect(() => {
//   const getListPost = async () => {
//     try {
//       const params = {
//         page: 1,
//         limit: 4,

//       };
//       const res = await postApi.getAll(params);

//       setListPost(res.data.items);
//       console.log("check four post :" , res.data);

//     } catch (error) {
//       console.log('Failed to fetch list post: ', error);
//     }
//   }

//   getListPost();
// }, []);
