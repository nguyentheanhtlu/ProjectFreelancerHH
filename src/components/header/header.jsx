import { useState } from "react";
import styles from "./index.module.css";
export default function Header() {
  return (
    <div className={`${styles.header_freelancer}`}>
      <div className={`${styles.container} ${styles.cover_header_freelancer}`}>
        <div className={`${styles.block_pc}`}>
          <div className={`${styles.logo_365}`}>
            <a href="/" className={`${styles.cover_logo_365}`}>
              <img
                className={styles.img}
                src="/logo_mobi.png"
                alt="logo timviec365.vn"
              />
            </a>
          </div>
          <div className={`${styles.header_freelancer_right}`}>
            <ul className={`${styles.item_header}`}>
              <li className={`${styles.it_header} ${styles.it_header_list}`}>
                <a
                  href="/tim-viec-lam-freelancer.html"
                  className={`${styles.text_it_header}`}
                >
                  <span className={`${styles.inline_block}`}>
                    Việc làm Freelancer mới nhất
                  </span>{" "}
                  <img
                    src="/ic_down.png"
                    data-src="/ic_down.png"
                    alt="ic_down"
                    className={`${styles.ic_down} ${styles.inline_block} ${styles.lazyloaded}`}
                  />{" "}
                </a>
                <ul className={`${styles.list_vieclam}`}>
                  <li className={`${styles.it_vieclam}`}>
                    <a href="/tim-viec-lam-freelancer-ban-thoi-gian.html">
                      Việc làm freelancer bán thời gian
                    </a>
                  </li>
                  <li className={`${styles.it_vieclam}`}>
                    <a href="/tim-viec-lam-freelancer-theo-du-an.html">
                      Việc làm freelancer theo dự án
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`${styles.it_header}`}>
                <a
                  href="/ung-vien-freelancer.html"
                  className={`${styles.text_it_header}`}
                >
                  Danh sách Freelancer
                </a>
              </li>
              <li className={`${styles.it_header}`}>
                <a href="" className={`${styles.text_it_header}`}>
                  Kinh nghiệm
                </a>
              </li>
              <li className={`${styles.it_header}`}>
                <a
                  href="/huong-dan.html"
                  className={`${styles.text_it_header}`}
                >
                  Hướng dẫn
                </a>
              </li>
              <li className={`${styles.it_header}`}>
                <span className={`${styles.cover_log_home}`}>
                  <a href="/dang-du-an.html" className={`${styles.a_dang_ki}`}>
                    <img
                      src="/ic_dang_tin.png"
                      data-src="/ic_dang_tin.png"
                      alt="ic_dang_tin"
                      className={`${styles.ic_dang_tin} ${styles.lazyloaded}`}
                    />
                    <span className={`${styles.inline_block}`}>Đăng việc</span>
                  </a>
                </span>
              </li>
              <li className={`${styles.it_header}`}>
                <div className={`${styles.cover_img_ntd}`}>
                  <img
                    src="/job-1695950247.png"
                    className={`${styles.img_ntd}`}
                    alt="avatar"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.block_mobi} ${styles.mobi}`}>
          <div className={`${styles.cover_menu_home_mobi}`}>
            <a
              href="#"
              className={`${styles.d_block} ${styles.menu_home_mobi}`}
            >
              <img
                src="https://freelancer.timviec365.vn/images/load.gif"
                data-src="/menu_mobi.png"
                alt="menu-ic"
                className={`${styles.lazyload}`}
              />
            </a>
          </div>
          <div className={`${styles.cover_logo_home_mobi}`}>
            <a
              href="/"
              className={`${styles.d_block} ${styles.logo_home_mobi}`}
            >
              <img
                src="https://freelancer.timviec365.vn/images/load.gif"
                data-src="/logo_mobi.png"
                alt="logo"
                className={`${styles.lazyload}`}
              />
            </a>
          </div>
          <div
            className={`${styles.cover_img_ntd} ${styles.cover_avt_home_mobi}`}
          >
            <img
              src="/job-1695950247.png"
              className={`${styles.img_ntd} `}
              alt="avatar"
            />
          </div>
          <ul className={`${styles.item_header} ${styles.menu_mobi}`}>
            <li className={`${styles.it_header}`}>
              <a
                href="/tim-viec-lam-freelancer.html"
                className={`${styles.text_it_header} ${styles.header_hover}`}
              >
                Việc Freelancer
              </a>
            </li>
            <li className={`${styles.it_header}`}>
              <a
                href="/tim-viec-lam-freelancer-theo-du-an.html"
                className={`${styles.text_it_header} ${styles.header_hover}`}
              >
                Việc làm freelancer theo dự án
              </a>
            </li>
            <li className={`${styles.it_header}`}>
              <a
                href="/tim-viec-lam-freelancer-ban-thoi-gian.html"
                className={`${styles.text_it_header} ${styles.header_hover}`}
              >
                Việc làm freelancer bán thời gian
              </a>
            </li>
            <li className={`${styles.it_header}`}>
              <a
                href="/ung-vien-freelancer.html"
                className={`${styles.text_it_header} ${styles.header_hover}`}
              >
                Danh sách Freelancer
              </a>
            </li>
            <li className={`${styles.it_header}`}>
              <a
                href=""
                className={`${styles.text_it_header} ${styles.header_hover}`}
              >
                Kinh nghiệm
              </a>
            </li>
            <li className={`${styles.it_header}`}>
              <a
                href="/huong-dan.html"
                className={`${styles.text_it_header} ${styles.header_hover}`}
              >
                Hướng dẫn
              </a>
            </li>
            <li className={`${styles.it_header}`}>
              <span className={`${styles.cover_log_home}`}>
                <a href="/dang-du-an.html" className={`${styles.a_dang_ki}`}>
                  <span className={`${styles.inline_block}`}>Đăng tin</span>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
