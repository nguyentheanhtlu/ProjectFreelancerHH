import { Dropdown, Space } from "antd";
import styles from "./index.module.css";
const HeaderLogin = () => {
  return (
    <div className={styles.main_header}>
      <div className={`${styles.container} ${styles.container_header}`}>
        <div className={`${styles.block_pc} ${styles.pc}`}>
          <div className={styles.logo}>
            <a href="/">
              <img className={styles.img_hd} src="/logo.png" alt="logo timviec365.vn" />
            </a>
          </div>
          <div className={styles.header_right}>
            <div className={styles.menu}>
              <ul className={styles.list_menu}>
                <li className={`${styles.item_menu} ${styles.it_header_list}`}>
                  <a href="/tim-viec-lam-freelancer.html">
                    <span className={styles.inline_block}>
                      Việc làm Freelancer mới nhất
                    </span>{" "}
                    <img
                      src="/ic_down02.png"
                      alt="ic_down02"
                      className={`${styles.ic_down02} ${styles.inline_block}`}
                    />
                  </a>
                  <ul className={styles.list_vieclam}>
                    <li className={styles.it_vieclam}>
                      <a href="/tim-viec-lam-freelancer-ban-thoi-gian.html">
                        Việc làm Freelancer bán thời gian
                      </a>
                    </li>
                    <li className={styles.it_vieclam}>
                      <a href="/tim-viec-lam-freelancer-theo-du-an.html">
                        Việc làm Freelancer theo dự án
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={styles.item_menu}>
                  <a href="/ung-vien-freelancer.html">Danh sách Freelancer</a>
                </li>
                <li className={styles.item_menu}>
                  <a href="">Kinh nghiệm</a>
                </li>
                <li className={styles.item_menu}>
                  <a href="/huong-dan.html">Hướng dẫn</a>
                </li>
              </ul>
            </div>
            <button className={styles.btn_dang_viec}>
              <a href="/dang-du-an.html"> + Đăng việc</a>
            </button>
            <div className={styles.icon_notifi}>
              <img className={styles.img_hd} src="/icon_notifi.png" alt="icon_notifi" />
            </div>
            <div className={styles.border} />
            <div className={styles.img_avata}>
              <img
              className={styles.img_hd}
                width="35px"
                height="35px"
                src="/job-1695950247.png"
                className=""
                alt="avatar"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.block_mobi} ${styles.mobi}`}>
          <div className={styles.cover_menu_mobi}>
            <img src="/menu_mobi.png" alt="menu_mobi" className="" />
          </div>
          <div className={styles.cover_logo_mobi}>
            <a
              href="/"
              className={`${styles.d_block} ${styles.logo_home_mobi}`}
            >
              <img src="/logo_mobi.png" alt="logo_mobi" className="" />
            </a>
          </div>
          <div className={styles.cover_notifi_mobi}>
            <img src="/icon_notifi_mobi.png" alt="icon_notifi_mobi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
