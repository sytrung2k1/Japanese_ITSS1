import classNames from "classnames/bind";
import styles from "./signup.module.scss";

const cx = classNames.bind(styles);

function SignUp() {
    return (
        <>
            {/* <h1 className={cx("header")}> SignUp </h1>  */}
            <section>
                <div className={cx("content")}>
                    <div className={cx("form")}>
                        <h2>登録</h2>
                        <form action="">
                            <div className={cx("input-form")}>
                                <label for="name">ユーザー名</label><br />
                                <input type="text" id="name" />
                            </div>
                            <div className={cx("input-form")}>
                                <label for="pass">パスワード</label><br />
                                <input type="password" id="pass" />
                            </div>
                            <div className={cx("input-form")}>
                                <label for="repass">パスワードを認証する</label><br />
                                <input type="password" id="repass" />
                            </div>
                            <div className={cx("input-form")}>
                                <label for="mail">メール</label><br />
                                <input type="text" id="mail" />
                            </div><br />
                            <div className={cx("input-form")}>
                                <label for="doituong">役割      :   </label>
                                <select name="doituong" className={cx("doituong")}>
                                    <option value="vai">役割を選択する</option>
                                    <option value="giaovien"> 教師</option>
                                    <option value="hocsinh"> 学生</option>
                                </select>
                            </div>
                            <br /><br /><div className={cx("input-form")}>
                                <input type="submit" value="登録" />
                            </div>
                        </form>
                    </div>
                </div>
            </section></>
    )
};

export default SignUp;