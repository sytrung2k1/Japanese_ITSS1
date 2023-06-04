import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Avatar, Button } from "@mui/material";
import styles from "./Search.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { teacherApi } from "../../services/teacher-api";
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
const cx = classNames.bind(styles);
function Search() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    getTeachers();
  }, []);

  const getTeachers = async () => {
    let res = await teacherApi.getTeachers();
    console.log("res:", res);
    setTeachers(res);
  };
  return (
    <>
      <div className={cx("content0")}>
        <div className={cx("content1")}>
          <h1>自分を合う教師を探しましょう ~</h1>
          <div className={cx("loc")}>
            <div>
              <select name="" className={cx("chung")}>
                <option value="thu">{DAY}</option>
                <option value="thu2">月曜日</option>
                <option value="thu3">火曜日</option>
                <option value="thu4">水曜日</option>
                <option value="thu5">木曜日</option>
                <option value="thu6">金曜日</option>
                <option value="thu7">土曜日</option>
                <option value="chunhat">日曜日</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{TIME}</option>
                <option value="">朝</option>
                <option value="">昼</option>
                <option value="">夕方</option>
                <option value="">夜</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{SALARY}</option>
                <option value="">100円から</option>
                <option value="">200円から</option>
                <option value="">300円から</option>
                <option value="">400円から</option>
                <option value="">500円から</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{ADDRESS}</option>
                <option value="">HaNoi</option>
                <option value="">Ho Chi Minh</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{GENDER}</option>
                <option value="">男の人</option>
                <option value="">女の人</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{AGE}</option>
                <option value="">18</option>
                <option value="">19</option>
                <option value="">20</option>
                <option value="">21</option>
                <option value="">22</option>
                <option value="">23</option>
                <option value="">24</option>
                <option value="">25</option>
                <option value="">26</option>
                <option value="">27</option>
                <option value="">28</option>
                <option value="">29</option>
                <option value="">30</option>
                <option value="">31</option>
                <option value="">32</option>
                <option value="">33</option>
                <option value="">34</option>
                <option value="">35</option>
                <option value="">36</option>
                <option value="">37</option>
                <option value="">38</option>
                <option value="">39</option>
                <option value="">40</option>
                <option value="">41</option>
                <option value="">42</option>
                <option value="">43</option>
                <option value="">44</option>
                <option value="">45</option>
                <option value="">46</option>
                <option value="">47</option>
                <option value="">48</option>
                <option value="">49</option>
                <option value="">50</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{PURPOSE}</option>
                <option value="">日常会話</option>
                <option value="">ビジネス</option>
                <option value="">ベトナム語能力の試験</option>
              </select>
            </div>
            <div>
              <select name="" className={cx("chung")}>
                <option value="">{LEVER}</option>
                <option value="">ビギナー</option>
                <option value="">初級</option>
                <option value="">中級</option>
                <option value="">上級</option>
              </select>
            </div>

            <div>
              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                size="large"
              ></Button>
            </div>
          </div>
        </div>
        <div className={cx("content2")}>
          <div className={cx("giaovien")}>
            <div className={cx("cot1")}>
              <Avatar
                alt="Remy Sharp"
                src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg"
                sx={{ width: 112, height: 112 }}
              />
            </div>
            <div className={cx("cot2")}>
              <h4>Thang</h4>
              <div className={cx("rating")}>
                <i className={cx("fa fa-star")}></i>
                <i className={cx("fa fa-star")}></i>
                <i className={cx("fa fa-star")}></i>
                <i className={cx("fa fa-star")}></i>
                <i className={cx("fa fa-star")}></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisic elit. Tempora
                aperiam fuga dolorem consequa, sunt, reiciendis quo neque
                dolores
              </p>
            </div>
            <div className={cx("cot3")}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "var(--primary)",
                  color: "black",
                  fontSize: 16,
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "var(--primary-hover)",
                  },
                }}
              >
                もっと詳しく
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Search;
