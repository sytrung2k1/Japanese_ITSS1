import classNames from "classnames/bind";
import styles from "./feedback.module.scss";
const cx = classNames.bind(styles);

function FeedbackStudent() {
  return (
    <>
      <head>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <div className={cx("feedback")}>
        <div className={cx("feedback_detail")}>
          <img src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg" alt="avatar"
            className={cx("fb_avatar")} />
          <div className={cx("fb_detail")}>
            <span className={cx("fb_name")}>Namee</span><br />
            <span className={cx("fb_voting")}>
              <i className={cx("fa fa-star style_left")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star  style_right")}></i>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum
              odit nam autem ipsa
              voluptatum sed aliquid sequi quas aperiam maxime obcaecati eos consequatur quis consectetur
              repellendus, ea velit. Minima.</p>
          </div>
        </div>
        <div className={cx("feedback_detail")}>
          <img src="https://znews-photo.zingcdn.me/w1200/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" alt="avatar"
            className={cx("fb_avatar")} />
          <div className={cx("fb_detail")}>
            <span className={cx("fb_name")}>Namee</span><br />
            <span className={cx("fb_voting")}>
              <i className={cx("fa fa-star  style_left")}></i>
              <i className={cx("fa fa-star ")}></i>
              <i className={cx("fa fa-star ")}></i>
              <i className={cx("fa fa-star ")}></i>
              <i className={cx("fa fa-star  style_right")}></i>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum
              odit nam autem ipsa
              voluptatum sed aliquid sequi quas aperiam maxime obcaecati eos consequatur quis consectetur
              repellendus, ea velit. Minima.</p>
          </div>
        </div>
        <div className={cx("feedback_detail")}>
          <img src="https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg" alt="avatar"
            className={cx("fb_avatar")} />
          <div className={cx("fb_detail")}>
            <span className={cx("fb_name")}>Namee</span><br />
            <span className={cx("fb_voting")}>
              <i className={cx("fa fa-star  style_left")}></i>
              <i className={cx("fa fa-star ")}></i>
              <i className={cx("fa fa-star ")}></i>
              <i className={cx("fa fa-star ")}></i>
              <i className={cx("fa fa-star style_right")}></i>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum
              odit nam autem ipsa
              voluptatum sed aliquid sequi quas aperiam maxime obcaecati eos consequatur quis consectetur
              repellendus, ea velit. Minima.</p>
          </div>
        </div>
      </div>

      <script src="https://kit.fontawesome.com/f1f646c5e0.js" crossorigin="anonymous"></script>
    </>
  )
};
export default FeedbackStudent;
