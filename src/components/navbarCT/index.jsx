import { Button, Collapse, Dropdown, Modal, Space } from "antd";
import styles from "./index.module.css";
import DropdownQLHS from "../Dropdown/dropdownQLHS";
import DropdownQLTS from "../Dropdown/dropdownQLTS";
import { useState } from "react";

const NavBarCT = () => {
  const [event, setEvent] = useState(false);
  const [event1, setEvent1] = useState(false);
  const [event2, setEvent2] = useState(false);
  const setStausNavBar = (callback, state) => {
    callback(!state);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.left_container}>
      <div className={`${styles.user_menu} ${styles.block_mobi}`}>
        <img
          width="48px"
          height="48px"
          src="../thumb/2023/09/29//job-1695950247.png"
          className=""
          alt="avatar"
        />
        <p>Nguyen The Anh</p>
      </div>
      <div className={styles.p_left_container}>
        <p>Số điểm còn lại: 5</p>
      </div>
      <ul className={styles.menu_left_container}>
        <li className={`${styles.item_menu_left}`}>
          <a
            href="/thong-tin-nha-tuyen-dung.html"
            className={`${styles.a_item_menu} ${styles.ic_menu_ntd01} ${styles.active}`}
          >
            Quản lý chung
          </a>
        </li>
        <li className={`${styles.item_menu_left}`}>
          <p
            className={`${styles.a_item_menu} ${styles.ic_menu_ntd02}`}
            onClick={(e) => {
              setStausNavBar(setEvent1, event1);
            }}
          >
            Tuyển dụng freelancer
          </p>
          {event1 ? (
            <>
              <ul
                className={`${styles.sub_menu_left} ${styles.sub_ic_menu_ntd02}`}
              >
                <li className={`${styles.bam}`} data-bam="bam_du_an">
                  <a
                    href="/dang-viec-theo-du-an.html"
                    className={`${styles.it_sub_menu_left}`}
                  >
                    Đăng việc theo dự án
                  </a>
                </li>
                <li>
                  <a
                    href="/dang-viec-ban-thoi-gian.html"
                    className={`${styles.it_sub_menu_left}`}
                  >
                    Đăng việc bán thời gian
                  </a>
                </li>
              </ul>
            </>
          ) : null}
        </li>
        <li className={`${styles.item_menu_left}`}>
          <a
            href="/tin-da-dang.html"
            className={`${styles.a_item_menu} ${styles.ic_menu_ntd03}`}
          >
            Tin đã đăng
          </a>
        </li>
        <li className={`${styles.item_menu_left}`}>
          <a
            href="/ung-vien-freelancer.html"
            className={`${styles.a_item_menu} ${styles.ic_menu_ntd04}`}
          >
            Tìm kiếm Freelancer
          </a>
        </li>
        <li className={`${styles.item_menu_left}`}>
          <p
            className={`${styles.a_item_menu} ${styles.ic_menu_ntd05}`}
            onClick={(e) => {
              setStausNavBar(setEvent, event);
            }}
          >
            Quản lý hồ sơ
          </p>
          {event ? (
            <>
              <ul
                className={`${styles.sub_menu_left} ${styles.sub_ic_menu_ntd05}`}
              >
                <li>
                  <a
                    href="/freelancer-dat-gia.html"
                    className={`${styles.it_sub_menu_left}`}
                  >
                    Freelancer đặt giá
                  </a>
                </li>
                <li>
                  <a
                    href="/freelancer-dang-lam-viec.html"
                    className={`${styles.it_sub_menu_left}`}
                  >
                    Freelancer đang làm việc
                  </a>
                </li>
                <li>
                  <a
                    href="/freelancer-da-luu.html"
                    className={`${styles.it_sub_menu_left}`}
                  >
                    Freelancer đã lưu
                  </a>
                </li>
              </ul>
            </>
          ) : null}
        </li>
        <li className={`${styles.item_menu_left}`}>
          <p
            className={`${styles.a_item_menu} ${styles.ic_menu_ntd06}`}
            onClick={(e) => {
              setStausNavBar(setEvent2, event2);
            }}
          >
            Quản lý tài khoản
          </p>
          {event2 ? (
            <>
              <ul
                className={`${styles.sub_menu_left} ${styles.sub_ic_menu_ntd06}`}
              >
                <li>
                  <a
                    href="/cap-nhat-thong-tin.html"
                    className={`${styles.it_sub_menu_left}`}
                  >
                    Cập nhật thông tin
                  </a>
                </li>
                <li>
                  <p
                    className={`${styles.it_sub_menu_left} logout_click`}
                    onClick={showModal}
                  >
                    Đăng xuất
                  </p>
                </li>
              </ul>
            </>
          ) : null}
        </li>
      </ul>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
       footer={[
        <Button key="back" onClick={handleCancel}>
          Hủy bỏ
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Đồng ý
        </Button>,]}
      >
        <div className={`${styles.popup_logout} ${styles.main_popup}`}>
          <p className={`${styles.title_logout}`}>Đăng xuất</p>
          <p className={`${styles.content_logout}`}>
            Bạn muốn đăng xuất khỏi hệ thống ?
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default NavBarCT;
