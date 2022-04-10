import { Link } from "react-router-dom";
import "./ban.css";

export default function Bdn() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/273434149_4865954933518984_5347990475025840690_n.png?_nc_cat=109&ccb=1-5&_nc_sid=0debeb&_nc_ohc=NCyK_erbWTUAX9EVOBy&_nc_ht=scontent.fhan3-5.fna&oh=00_AT8zVZenBTQrcPCUaqoz8N3iz9axgvqP1Ht-PVr27OVKRg&oe=624F8CC0"
          alt=""
        />
        <h1 className="singlePostTitle">
          Ban Đối Ngoại
          {/* <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div> */}
        </h1>
        {/* <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div> */}
        <p className="singlePostDesc">
        🤝 Để đảm bảo được chất lượng các sản phẩm cũng như mối quan hệ của JS, chúng ta phải kể đến công sức vô cùng to lớn của các thành viên ban Đối ngoại.<br/>
        <br/>

🤝 “Khéo léo”, “nhanh nhạy” và “hoạt bát” là những tính từ khi nhắc đến con người của Đối ngoại. Nếu ban Văn hóa là sợi dây gắn kết thành viên trong JS thì Đối ngoại chính là cầu nối JS với các CLB cũng như tổ chức trong và ngoài phạm vi FPT. Chính vì vậy, đây cũng là phân ban hội tụ rất nhiều những gương mặt sáng giá với visual cực đỉnh của JS. <br/>
<br/>
🤝Hãy cùng chúng mình điểm qua một số giá trị vô cùng hữu ích mà các bạn sẽ nhận được với vai trò của người Đối Ngoại nhé:<br/>
▪️ Nâng cao kỹ năng giao tiếp cũng như khả năng thuyết phục, đàm phán.<br/>
▪️ Gặp gỡ, tham gia các sự kiện trong và ngoài JS.<br/>
▪️ Học cách quản lý chi tiêu và kỹ năng viết mail.<br/>
▪️ Đại diện trực tiếp kết nối và làm việc với các doanh nghiệp, công ty lớn trong khu vực.<br/>


        </p>
      </div>
    </div>
  );
}
