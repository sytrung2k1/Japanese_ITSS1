import classNames from "classnames/bind";
import styles from "./feedback.module.scss";
import Feedback from "../../Feedback";
const cx = classNames.bind(styles);

function FeedbackStudent() {
  return (
    <>
      <Feedback />
      <Feedback />
    </>
  );
}
export default FeedbackStudent;
