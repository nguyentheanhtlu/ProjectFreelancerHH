import styles from "./index.module.css";
import MultipleItems from "./sclick";

const TheoDuAn = () => {  
  return (
    <div className={styles.cover_item02_home}>
      <div className={styles.container}>
        <div className={styles.cover_job}>
          <div className={styles.job}>
            <h2 className={styles.title_h2_job}>
              Việc làm Freelancer theo dự án
            </h2>
            <p>1110+ Việc làm theo dự án</p>
            <a>
              Xem tất cả
              <img src="./ic_right.png" alt="icon" />
            </a>
            <div>
              <MultipleItems/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoDuAn;
