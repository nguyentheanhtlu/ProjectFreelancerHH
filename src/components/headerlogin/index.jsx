import { Dropdown, Space } from "antd";
import styles from "./index.module.css";
const HeaderLogin = () => {
  const items = [
    {
      key: "1",
      label: "Việc làm freelancer bán thời gian",
    },
    {
      key: "2",
      label: "Việc làm freelancer theo dự án",
    },
  ];
  return (
    <div className={styles.main_header}>
      <div className={styles.container_container_header}>
        <div className={styles.block_pc_pc}>
          <div className={styles.logo}>
            <a>
              <img src="/logo.png" alt="logo" />
            </a>
          </div>
          <div className={styles.header_right}>
            <div className={styles.menu}>
              <ul className={styles.list_menu}>
                <li className={styles.item_menu_it_header_list}>
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()} className={styles.a}>
                      <Space>
                        Việc làm Freelancer mới nhất
                        <img
                          className={styles.img}
                          src="/ic_down02.png"
                          alt="icon"
                        ></img>
                      </Space>
                    </a>
                  </Dropdown>
                </li>
                <li className={styles.item_menu}>
                  <a>Danh sách Freelancer</a>
                </li>
                <li className={styles.item_menu}>
                  <a>Kinh nghiệm</a>
                </li>
                <li className={styles.item_menu}>
                  <a>Hướng dẫn</a>
                </li>
              </ul>
            </div>
            <button className={styles.btn_dangviec}>
              <a>+ Đăng việc</a>
            </button>
            <div className={styles.icon_notifi}>
              <img src="/icon_notifi.png" alt="icon" />
            </div>
            <div className={styles.border}></div>
            <div className={styles.img_avata}>
              <img src="https://freelancer.timviec365.vn/thumb/2023/09/29//job-1695950247.png" alt="avt"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
