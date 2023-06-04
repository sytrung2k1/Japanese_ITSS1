// import classNames from "classnames/bind";
// import styles from "./Profile.module.scss";
// const cx = classNames.bind(styles);
import { teacherApi } from "../../../services/teacher-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Profile() {
  const params = useParams();

  const [teacher, setTeacher] = useState({});
  useEffect(() => {
    getTeacher();
  }, []);

  const getTeacher = async () => {
    let res = await teacherApi.getTeacher(params.id);
    console.log("res:", res);
    setTeacher(res);
  };

  return <h1>Profilee</h1>;
}
export default Profile;
