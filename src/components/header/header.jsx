import { useState } from "react";
import styles from "./index.module.css";
import { Dropdown, Space } from "antd";
export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
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
    <div className={styles.header_home} style={{ background: "#4c5bd4" }}>
      <div className={styles.header_freelancer}>
        <div className={styles.block_pc}>
          <div className={styles.logo}>
            <a href="https://timviec365.vn/" className={styles.cover_logo}>
              <img src="/logo_mobi.png" alt="logo" />
            </a>
          </div>
          <div className={styles.header_freelancer_right}>
            <ul className={styles.item_header}>
              <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space style={{ color: "#fff" }}>
                      Việc làm Freelancer mới nhất
                      <img
                        className={styles.img}
                        src="/ic_down.png"
                        alt="icon"
                      ></img>
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li>
                <a className={styles.text_it_header_hover}>
                  Danh sách Freelancer
                </a>
              </li>
              <li>
                <a className={styles.text_it_header_hover}>Kinh nghiệm</a>
              </li>
              <li>
                <a className={styles.text_it_header_hover}>Hướng dẫn</a>
              </li>
              <li>
                <span className={styles.cover_log_home}>
                  <a className={styles.a_dang_ki}>
                    <img src="/ic_dang_tin.png" alt="icon"></img>
                    <span
                      className={styles.inline_block}
                      style={{ marginRight: "3px" }}
                    >
                      Đăng tin
                    </span>
                  </a>
                </span>
              </li>
              <li>
                <span className={styles.cover_log_home}>
                  <a className={styles.a}>Đăng nhập /</a>
                  <a className={styles.a}>Đăng kí</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
