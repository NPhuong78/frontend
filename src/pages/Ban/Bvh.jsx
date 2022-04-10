import { Link } from "react-router-dom";
import "./ban.css";

export default function Bvh() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/273578528_4865954953518982_3078599368691844347_n.png?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_ohc=vxV9JhVUNDgAX-a7s1n&tn=R3LBE1Ij-cQFd6ws&_nc_ht=scontent.fhan3-4.fna&oh=00_AT_iv0nq9h5zppWW2iUgG181_sUyzSiwtFmEG8DSB9L6Mg&oe=624EDD6C"
          alt=""
        />
        <h1 className="singlePostTitle">
          Ban Văn Hóa
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
        🎮 Một trong những nhân tố góp phần vô cùng to lớn trong quá trình hình thành và phát triển nên JS đó chính là ban Văn hóa. Vì vậy, chẳng phải tự nhiên mà Văn hóa được mệnh danh là “linh hồn” của JS.<br/>
        <br/>

🎮 Không có cuộc vui nào mà vắng mặt các thành viên phân ban này. Đặc biệt, họ còn là người rất đa tài, đủ các yếu tố cầm - kỳ - thi - họa, hứa hẹn sẽ tiếp lửa và mang đến sự tích cực cho các JSers.<br/>
<br/>
🎮 Nếu bạn nghĩ rằng: “Vào Văn hóa chỉ ăn chơi thôi chứ có làm gì đâu” thì không hề, chúng mình còn học hỏi được rất nhiều điều bổ ích đó! Bật mí nhỏ với bạn, danh hiệu “Cóc vàng” của JS cũng có sự góp mặt đáng kể của người Văn hóa đó nha.<br/>
<br/>
🎮 Tham gia ban Văn hóa bạn sẽ có cơ hội:<br/>
▪️ Thỏa sức sáng tạo qua các hoạt động sinh hoạt.<br/>
▪️ Trở thành ban tổ chức và trực tiếp chạy các sự kiện của JS.<br/>
▪️ Mở rộng mối quan hệ, gắn kết và giao lưu với mọi người.<br/>
▪️ Nâng cao kỹ năng làm việc nhóm.<br/>
        </p>
      </div>
    </div>
  );
}
