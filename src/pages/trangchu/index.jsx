import { Select } from "antd";
import styles from "./index.module.css";
import TheoNghe from "./theonghe";
import { useEffect, useState } from "react";
import axios from "axios";
import TheoDuAn from "./theoduan";
const TrangChu = () => {
  const option = [
    {
      value: 1,
      label: "IT & Lập trình",
    },
    { value: 2, label: "Thiết kế" },
    { value: 3, label: "Video" },
    { value: 4, label: "Xây dựng" },
    { value: 5, label: "Viết lách" },
    { value: 6, label: "Kinh doanh" },
    { value: 7, label: "Dịch thuật" },
  ];

  return (
    <div className={styles.body}>
      <div className={styles.cover_container_cover_background}>
        <div className={styles.container_container_relative}>
          <div className={styles.banner_home}>
            <h1>Tìm việc làm freelancer mới nhất</h1>
            <form className={styles.cover_search}>
              <div className={styles.main_search}>
                <div className={styles.cover_input_search_autocomplete}>
                  <input
                    type="text"
                    placeholder="Nhập từ khóa"
                    className={styles.input_abc}
                  />
                </div>
                <div className={styles.line}></div>
                <div className={styles.cover_select_search}>
                  <Select
                    className={styles.select_search}
                    showSearch
                    placeholder="Chọn ngành nghề"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={option}
                  />
                </div>
                <div className={styles.line1}></div>
                <div className={styles.cover_select_search}>
                  <Select
                    className={styles.select_search}
                    showSearch
                    placeholder="Chọn tỉnh thành"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={option}
                  />
                </div>
                <div className={styles.btn_search}>
                  <button type="submit" className={styles.search}>
                    <img src="./ic_search.png" alt="search" />
                  </button>
                </div>
              </div>
            </form>
            <div className={styles.nghe_noi_bat}>
              <p>Ngành nghề nổi bật:</p>
              <div className={styles.list_nghe}>
                <div className={styles.it}>
                  <a className={styles.a_vip}>
                    <img src="./img_home01.png" alt="anh" />

                    <p className={styles.text}>Lập trình PHP</p>
                  </a>
                </div>
                <div className={styles.it}>
                  <a className={styles.a_vip}>
                    <img src="./img_home02.png" alt="anh" />

                    <p className={styles.text}>Thiết kế</p>
                  </a>
                </div>
                <div className={styles.it}>
                  <a className={styles.a_vip}>
                    <img src="./img_home03.png" alt="anh" />

                    <p className={styles.text}>Biên tập viên</p>
                  </a>
                </div>
                <div className={styles.it}>
                  <a className={styles.a_vip}>
                    <img src="./img_home04.png" alt="anh" />

                    <p className={styles.text}>Youtube</p>
                  </a>
                </div>
                <div className={styles.it}>
                  <a className={styles.a_vip}>
                    <img src="./img_home05.png" alt="anh" />

                    <p className={styles.text}>Dịch thuật</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TheoNghe />
      <TheoDuAn/>
    </div>
  );
};
export default TrangChu;
