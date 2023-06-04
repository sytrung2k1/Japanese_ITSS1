import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import styles from "./Search.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { teacherApi } from "../../services/teacher-api";
import Info from "../Teacher/Info";
import _ from "lodash";
import {
  DAY,
  TIME,
  SALARY,
  ADDRESS,
  GENDER,
  AGE,
  PURPOSE,
  LEVER,
} from "../../constants/common";
import { teacherList } from "../../data/teacherList";

const cx = classNames.bind(styles);

function Search() {
  const [teachers, setTeachers] = useState(teacherList);
  const [teacherSearch, setTeacherSearch] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    salary: "",
    age: "",
  });
  // useEffect(() => {
  //   getTeachers();
  // }, []);

  // const getTeachers = async () => {
  //   let res = await teacherApi.getTeachers();
  //   console.log("res:", res);
  //   setTeachers(res);
  // };

  const handleSearch = () => {
    console.log("value: ", selectedOption);
    const filters = selectedOption;
    const appliedFilters = _.pickBy(filters, (value) => value !== "");
    // apply your filter logic here based on the selected values of city, district and ward
    if (_.isEmpty(appliedFilters)) {
      // no values selected, do not apply any filters
      setTeacherSearch(teachers);
    } else {
      // filter data based on selected values
      setTeacherSearch(teachers);
      if (filters.age !== "") {
        setTeacherSearch(
          teachers?.filter(
            (teacher) => teacher.age === Number(selectedOption.age)
          )
        );
      }

      if (filters.salary !== "") {
        setTeacherSearch(
          teachers?.filter(
            (teacher) => teacher.salary === Number(selectedOption.salary)
          )
        );
      }
    }

    // setTeacherSearch();
  };
  return (
    <>
      <div className={cx("content0")}>
        <div className={cx("content1")}>
          <p className={cx("tittle")}>自分を合う教師を探しましょう ~</p>
          <div className={cx("loc")}>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{DAY}</option>
                <option value="Monday">月曜日</option>
                <option value="tuesday">火曜日</option>
                <option value="Wednesday">水曜日</option>
                <option value="Thursday">木曜日</option>
                <option value="Friday">金曜日</option>
                <option value="Saturday">土曜日</option>
                <option value="Sunday">日曜日</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{TIME}</option>
                <option value="Morning">朝</option>
                <option value="Noon">昼</option>
                <option value="Evening">夕方</option>
                <option value="Night">夜</option>
              </select>
            </div>
            <div>
              <select
                name=""
                className={cx("chung")}
                onChange={(e) => {
                  setSelectedOption({
                    ...selectedOption,
                    salary: e.target.value,
                  });
                }}
              >
                <option value="">{SALARY} </option>
                <option value="100">100円から</option>
                <option value="200">200円から</option>
                <option value="300">300円から</option>
                <option value="400">400円から</option>
                <option value="500">500円から</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{ADDRESS}</option>
                <option value="Ha Noi">Ha Noi</option>
                <option value="Ho Chi Minh">Ho Chi Minh</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{GENDER}</option>
                <option value="Male">男の人</option>
                <option value="Famale">女の人</option>
              </select>
            </div>
            <div>
              <select
                name=""
                className={cx("chung")}
                onChange={(e) => {
                  setSelectedOption({
                    ...selectedOption,
                    age: e.target.value,
                  });
                }}
              >
                <option value="">{AGE}</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{PURPOSE}</option>
                <option value="Communicate">日常会話</option>
                <option value="Business">ビジネス</option>
                <option value="Exam">ベトナム語能力の試験</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{LEVER}</option>
                <option value="">ビギナー</option>
                <option value="Beginner">初級</option>
                <option value="Intermediate">中級</option>
                <option value="Advanced">上級</option>
              </select>
            </div>

            <div>
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                size="large"
                onClick={handleSearch}
              ></Button>
            </div>
          </div>
        </div>
        <div className={cx("content2")}>
          {teacherSearch.map((teacher, i) => (
            <Info key={i} teacher={teacher} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Search;
