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
  TUTION,
  ADDRESS,
  GENDER,
  AGE,
  TARGET,
  LEVEL,
} from "../../constants/common";
import { teacherList } from "../../data/teacherList";

const cx = classNames.bind(styles);

function Search() {
  // const [teachers, setTeachers] = useState(teacherList);
  const [teachers, setTeachers] = useState([]);
  const [teacherSearch, setTeacherSearch] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    tution: "",
    age: "",
    available_day: "",
    level: "",
    address: "",
    sex: "",
    target_id: "",
  });
  useEffect(() => {
    getTeachers();
  }, []);

  const getTeachers = async () => {
    let res = await teacherApi.getTeachers();
    console.log("res:", res);
    setTeachers(res);
  };

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

      if (filters.tution !== "") {
        setTeacherSearch(
          teachers?.filter(
            (teacher) => teacher.tution === Number(selectedOption.tution)
          )
        );
      }

      if (filters.available_day !== "") {
        setTeacherSearch(
          teachers?.filter(
            (teacher) =>
              teacher.available_day === Number(selectedOption.available_day)
          )
        );
      }
      if (filters.level !== "") {
        setTeacherSearch(
          teachers?.filter(
            (teacher) => teacher.level === Number(selectedOption.level)
          )
        );
      }

      if (filters.address !== "") {
        setTeacherSearch(
          teachers?.filter(
            (teacher) => teacher.address === selectedOption.address
          )
        );
      }
      if (filters.sex !== "") {
        setTeacherSearch(
          teachers?.filter((teacher) => teacher.sex === selectedOption.sex)
        );
      }
      if (filters.target_id !== "") {
        setTeacherSearch(
          teachers?.filter(
            (teacher) => teacher.target_id === Number(selectedOption.target_id)
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
              <select
                name=""
                className={cx("chung")}
                onChange={(e) => {
                  setSelectedOption({
                    ...selectedOption,
                    available_day: e.target.value,
                  });
                }}
              >
                <option value="" className={cx("option-header")}>
                  {DAY}
                </option>
                <option value="2">月曜日</option>
                <option value="3">火曜日</option>
                <option value="4">水曜日</option>
                <option value="5">木曜日</option>
                <option value="6">金曜日</option>
                <option value="7">土曜日</option>
                <option value="8">日曜日</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="" className={cx("option-header")}>
                  {TIME}
                </option>
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
                    tution: e.target.value,
                  });
                }}
              >
                <option value="" className={cx("option-header")}>
                  {TUTION}{" "}
                </option>
                <option value="100">100円から</option>
                <option value="200">200円から</option>
                <option value="300">300円から</option>
                <option value="400">400円から</option>
                <option value="500">500円から</option>
              </select>
            </div>
            <div>
              <select
                name=""
                className={cx("chung")}
                onChange={(e) => {
                  setSelectedOption({
                    ...selectedOption,
                    address: e.target.value,
                  });
                }}
              >
                <option value="" className={cx("option-header")}>
                  {ADDRESS}
                </option>
                <option value="Ha Noi">Ha Noi</option>
                <option value="Ho Chi Minh">Ho Chi Minh</option>
              </select>
            </div>
            <div>
              <select
                name=""
                className={cx("chung")}
                onChange={(e) => {
                  setSelectedOption({
                    ...selectedOption,
                    sex: e.target.value,
                  });
                }}
              >
                <option value="" className={cx("option-header")}>
                  {GENDER}
                </option>
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
                <option value="" className={cx("option-header")}>
                  {AGE}
                </option>
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
              <select
                name=""
                className={cx("chung")}
                onChange={(e) => {
                  setSelectedOption({
                    ...selectedOption,
                    target_id: e.target.value,
                  });
                }}
              >
                <option value="" className={cx("option-header")}>
                  {TARGET}
                </option>
                <option value="1">日常会話</option>
                <option value="2">ビジネス</option>
                <option value="3">ベトナム語能力の試験</option>
              </select>
            </div>
            <div>
              <select
                name=""
                className={cx("chung")}
                onChange={(e) => {
                  setSelectedOption({
                    ...selectedOption,
                    level: e.target.value,
                  });
                }}
              >
                <option value="" className={cx("option-header")}>
                  {LEVEL}
                </option>
                <option value="1">ビギナー</option>
                <option value="2">初級</option>
                <option value="3">中級</option>
                <option value="4">上級</option>
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
