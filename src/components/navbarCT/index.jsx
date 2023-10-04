import { Collapse, Dropdown, Space } from "antd";
import styles from "./index.module.css";
import DropdownQLHS from "../Dropdown/dropdownQLHS";
import DropdownQLTS from "../Dropdown/dropdownQLTS";

const NavBarCT = () => {
  const items = [
    {
      key: "1",
      label: "Đăng việc theo dự án",
    },
    {
      key: "2",
      label: "Đăng việc bán thời gian",
    },
  ];

  return (
    <div className={styles.cover_content}>
      <div className={styles.container_main_container}>
        <div className={styles.left_container}>
          <div className={styles.user_menu_block_mobi}>
            <img
              src="https://freelancer.timviec365.vn/thumb/2023/09/29//job-1695950247.png"
              alt="avt"
            />
            <p>Nguyen The Anh</p>
          </div>
          <div className={styles.p_left_container}>
            <p>Số điểm còn lại: 5</p>
          </div>
          <ul className={styles.menu_left_container}>
            <li className={styles.item_menu_left}>
              <a className={styles.a_item_menu_ic_menu_ntd01_active}>
                Quản lý chung
              </a>
            </li>
            <li className={styles.item_menu_left}>
              <Dropdown
                trigger="click"
                menu={{
                  items,
                }}
              >
                <p
                  onClick={(e) => e.preventDefault()}
                  className={styles.a_item_menu_ic_menu_ntd02}
                >
                  Tuyển dụng freelancer
                </p>
              </Dropdown>
            </li>
            <li className={styles.item_menu_left}>
              <a className={styles.a_item_menu_ic_menu_ntd04}>
                Tìm kiếm Freelancer
              </a>
            </li>
            <li className={styles.item_menu_left}>
              <DropdownQLHS />
            </li>
            <li className={styles.item_menu_left}>
              <DropdownQLTS />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarCT;
