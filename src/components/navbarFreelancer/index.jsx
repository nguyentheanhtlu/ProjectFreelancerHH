import { useState } from "react";
import styles from "./index.module.css";
const NavBarFLC = () => {
  const [event, setEvent] = useState(false);
  const setStausNavBar = (callback, state) => {
    callback(!state);
  };
  return (
    <div className={`${styles.left_container} ${styles.block_pc}`}>
      <div className={`${styles.user_menu} ${styles.block_mobi}`}>
        {/* <div class="main_user"> */}
        <img
          width="48px"
          height="48px"
          src="../thumb/2023/10/02/job-1696232048.png"
          onerror='this.onerror=null;this.src="/images/img_uv_2.png";'
          className=""
          alt="avatar"
        />
        <p>Khanh</p>
        {/* </div> */}
      </div>
      <div className={`${styles.p_left_container}`}></div>
      <div className={`${styles.refresh}`}>
        <p className={`${styles.p_refresh}`}>
          <span>Làm mới hồ sơ</span>
        </p>
      </div>
      <div className={`${styles.isset_search}`}>
        <p>Cho phép NTD tìm kiếm</p>
        <label className={`${styles.switch}`}>
          <input type="checkbox" defaultChecked="" />
          <span
            className={`${styles.slider} ${styles.checkbox_toggle_swich}`}
          />
        </label>
      </div>
      <ul className={`${styles.menu_left_container}`}>
        <li className={`${styles.item_menu_left}`}>
          <p
            className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv01a}`}
            onClick={(e) => {
              setStausNavBar(setEvent, event);
            }}
          >
            Quản lý chung
          </p>
          {/* hoàn thiện hồ sơ */}
          {/* tất cả việc làm */}
          {event ? (
            <ul
              className={`${styles.sub_menu_left} ${styles.sub_ic_menu_uv01a}`}
            >
              <li>
                <a
                  href="/thong-tin-ung-vien.html"
                  className={`${styles.it_sub_menu_left} ${styles.bg_gray}`}
                >
                  Hoàn thiện hồ sơ
                </a>
              </li>
              <li>
                <a
                  href="/tim-viec-lam-freelancer.html"
                  className={`${styles.it_sub_menu_left}`}
                >
                  Tất cả việc làm
                </a>
              </li>
            </ul>
          ) : null}
        </li>
        <li className={`${styles.item_menu_left}`}>
          <a
            href="/du-an-dang-thuc-hien.html"
            className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv01b} `}
          >
            Dự án đang thực hiện
          </a>
        </li>
        <li className={`${styles.item_menu_left}`}>
          <a
            href="/du-an-da-luu.html"
            className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv01}`}
          >
            Dự án đã lưu
          </a>
        </li>
        <li className={`${styles.item_menu_left}`}>
          <a
            href=""
            className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv02}`}
          >
            Kinh nghiệm Freelancer
          </a>
        </li>
        <li className={`${styles.item_menu_left}`}>
          <a
            href="/doi-mat-khau-uv.html"
            className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv03}`}
          >
            Đổi mật khẩu
          </a>
        </li>
        <li className={`${styles.item_menu_left}`}>
          <p
            className={`${styles.a_item_menu_uv} ${styles.ic_menu_uv04} ${styles.logout_click}`}
          >
            Đăng xuất
          </p>
        </li>
      </ul>
    </div>
  );
};

export default NavBarFLC;
