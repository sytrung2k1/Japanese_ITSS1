import classNames from "classnames/bind";
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

function Search() {
  return (
    <>
     <head>
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
</head>
      <div className={cx("content0")}>
        <div className={cx("content1")}>
          <h2>自分を合う教師を探しましょう ~</h2>
          <div className={cx("loc")}>
            <div className={cx("dong1")}> <select name="" className={cx("chung")}>
              <option value="thu">曜日</option>
              <option value="thu2">月曜日</option>
              <option value="thu3">火曜日</option>
              <option value="thu4">水曜日</option>
              <option value="thu5">木曜日</option>
              <option value="thu6">金曜日</option>
              <option value="thu7">土曜日</option>
              <option value="chunhat">日曜日</option>
            </select>
            </div>
            <div className={cx("dong2")}><select name="" className={cx("chung")}>
              <option value="">時間</option>
              <option value="">朝</option>
              <option value="">昼</option>
              <option value="">夕方</option>
              <option value="">夜</option>
            </select>
            </div>
            <div className={cx("dong3")}><select name="" className={cx("chung")}>
              <option value="">料金</option>
              <option value="">100円から</option>
              <option value="">200円から</option>
              <option value="">300円から</option>
              <option value="">400円から</option>
              <option value="">500円から</option>
            </select>
            </div>
            <div className={cx("dong4")}>
              <select name="" className={cx("chung")}>
                <option value="">場所</option>
                <option value="">HaNoi</option>
                <option value="">Ho Chi Minh</option>
              </select>
            </div>
            <div className={cx("dong5")}>
              <select name="" className={cx("chung")}>
                <option value="">性別</option>
                <option value="">男の人</option>
                <option value="">女の人</option>
              </select>
            </div>
            <div className={cx("dong6")}>
              <select name="" className={cx("chung")}>
                <option value="">年齢</option>
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

            <div className={cx("dong7")}>
              <select name="" className={cx("chung")}>
                <option value="">目的</option>
                <option value="">日常会話</option>
                <option value="">ビジネス</option>
                <option value="">ベトナム語能力の試験</option>
              </select>
            </div>
            <div className={cx("dong8")}><select name="" className={cx("chung")}>
              <option value="">レベル</option>
              <option value="">ビギナー</option>
              <option value="">初級</option>
              <option value="">中級</option>
              <option value="">上級</option>
            </select></div>
            <div className={cx("dong9")}>
              <button type="submit"><i className={cx("fa fa-search")}></i></button>
            </div>

          </div>
        </div>
        <div className={cx("content2")}>
          <div className={cx("giaovien")}>
            <div className={cx("cot1")}> <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg" alt="Thang" className={cx("search_image")} /></div>
            <div className={cx("cot2")}>
              <h4>Thang</h4>
              <div className={cx("rating")}>              
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              </div>
              <p className={cx("mota")}>Lorem ipsum dolor sit amet consectetur adipisic elit. Tempora aperiam fuga dolorem
                consequa, sunt, reiciendis quo neque dolores</p>
            </div>
            <div className={cx("cot3")}><input className={cx("chitiet")} type="button" value="もっと詳しく" />
            </div>
          </div>
          <div className={cx("giaovien")}>
            <div className={cx("cot1")}> <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg" alt="Thang" className={cx("search_image")} /></div>
            <div className={cx("cot2")}>
              <h4>Thang</h4>
              <div className={cx("rating")}>              
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              </div>
              <p className={cx("mota")}>Lorem ipsum dolor sit amet consectetur adipisic elit. Tempora aperiam fuga dolorem
                consequa, sunt, reiciendis quo neque dolores</p>
            </div>
            <div className={cx("cot3")}><input className={cx("chitiet")} type="button" value="もっと詳しく" />
            </div>
          </div>
          <div className={cx("giaovien")}>
            <div className={cx("cot1")}> <img src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/anh-meo-cute.jpg" alt="Thang" className={cx("search_image")} /></div>
            <div className={cx("cot2")}>
              <h4>Thang</h4>
              <div className={cx("rating")}>              
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              <i className={cx("fa fa-star")}></i>
              </div>
              <p className={cx("mota")}>Lorem ipsum dolor sit amet consectetur adipisic elit. Tempora aperiam fuga dolorem
                consequa, sunt, reiciendis quo neque dolores</p>
            </div>
            <div className={cx("cot3")}><input className={cx("chitiet")} type="button" value="もっと詳しく" />
            </div>
          </div>
        </div>
        </div>
      {/* <script src="https://kit.fontawesome.com/e107859d53.js" crossorigin="anonymous"></script> */}
    </>
   
  );
}
export default Search;
