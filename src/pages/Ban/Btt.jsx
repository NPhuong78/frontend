import { Link } from "react-router-dom";
import "./ban.css";

export default function Btt() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/273434149_4865954933518984_5347990475025840690_n.png?_nc_cat=109&ccb=1-5&_nc_sid=0debeb&_nc_ohc=NCyK_erbWTUAX9EVOBy&_nc_ht=scontent.fhan3-5.fna&oh=00_AT8zVZenBTQrcPCUaqoz8N3iz9axgvqP1Ht-PVr27OVKRg&oe=624F8CC0"
          alt=""
        />
        <h1 className="singlePostTitle">
          Ban Truyền Thông 
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
        🎨 Nắm giữ vai trò tạo nên “giao diện” và hình ảnh chính, ban Truyền thông đang ngày càng khẳng định được tầm quan trọng của mình ở JS.<br/>
        <br/>
️🎨 Vì đặc thù đòi hỏi sự sáng tạo, các thành viên ở ban Truyền thông luôn không ngừng tìm tòi và “liều lĩnh” thử sức với các concept khác nhau. Với 3 mảng chính: viết bài, thiết kế và media, bạn có thể tha hồ lựa chọn và nâng cao kiến thức của bản thân trong từng vị trí ở phân ban này.<br/>
<br/>
️🎨 Đặc biệt, ban Truyền thông còn có sự góp mặt của rất nhiều các bạn học chuyên ngành khác Công nghệ thông tin - điều làm nên sự đa dạng và chất riêng của ban Truyền thông JS. Đây cũng là cơ hội để bạn học hỏi từ những chuyên ngành khác đó!<br/>
<br/>
🎨 Đến với ban Truyền thông, bạn sẽ được:<br/>
▪️ Học hỏi những kỹ năng “chạy deadline” siêu đỉnh từ các anh chị và các bạn trong ban.<br/>
▪️ Thử những thứ mới lạ và nâng cao thẩm mỹ của bản thân.<br/>
▪️ Training thêm các kỹ năng viết bài, thiết kế, media.<br/>
▪️ Có thêm những chiến hữu sẵn sàng cùng bạn vượt qua deadline mọi lúc và mọi nơi.<br/>

        </p>
      </div>
    </div>
  );
}
