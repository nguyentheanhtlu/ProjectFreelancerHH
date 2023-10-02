import styles from "./index.module.css";

const TheoDiadiem = () => {
  return (
    <div className={styles.cover_item02_home}>
      <div className={styles.container}>
        <div className={styles.cover_job}>
          <div className={styles.job_job_fix}>
            <h2>Việc làm Freelancer theo địa điểm</h2>
            <p>Top nơi làm việc tại Việt Nam</p>
            <ul className={styles.list_diadiemviec}>
              <li className={styles.item_diadiem}>
                <a>
                  <img
                    src="https://freelancer.timviec365.vn/images/img_vieclam01.png"
                    alt="diadiem"
                  />
                </a>
                <div className={styles.text_vieclam}>
                  <p className={styles.text01_vieclam}>Hà Nội</p>
                  <p className={styles.text02_vieclam}>85371 Việc làm</p>
                </div>
              </li>
              <li className={styles.item_diadiem}>
                <a>
                  <img
                    src="https://freelancer.timviec365.vn/images/img_vieclam02.png"
                    alt="diadiem"
                  />
                </a>
                <div className={styles.text_vieclam}>
                  <p className={styles.text01_vieclam}>Tp. Hồ Chí Minh</p>
                  <p className={styles.text02_vieclam}>85371 Việc làm</p>
                </div>
              </li>
              <li className={styles.item_diadiem}>
                <a>
                  <img
                    src="https://freelancer.timviec365.vn/images/img_vieclam03.png"
                    alt="diadiem"
                  />
                </a>
                <div className={styles.text_vieclam}>
                  <p className={styles.text01_vieclam}>Huế</p>
                  <p className={styles.text02_vieclam}>85371 Việc làm</p>
                </div>
              </li>
              <li className={styles.item_diadiem}>
                <a>
                  <img
                    src="https://freelancer.timviec365.vn/images/img_vieclam04.png"
                    alt="diadiem"
                  />
                </a>
                <div className={styles.text_vieclam}>
                  <p className={styles.text01_vieclam}>Đà Nẵng</p>
                  <p className={styles.text02_vieclam}>85371 Việc làm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoDiadiem;
