import React from 'react'
import styles from './index.module.css'
import { Space, Table, Tag } from 'antd';

const freelancerdatgia = () => {
  return (
    <div class={styles.right_container}>
                {/* <!-- start --> */}
                <div class={styles.cate}>
                    <a href="/"><span>Việc làm tự do / </span></a>
                    <span><a href="" class="">Quản lý hồ sơ / </a></span>
                    <span><a href="" class="">Freelancer đang làm việc </a></span>
                </div>
                {/* <!-- end --> */}

                {/* <!-- start Tin đã đăng --> */}
                <div class={styles.job_new}>
                    <p class={styles.text_p_job}>Danh sách freelancer đang làm việc</p>
                    <div class={styles.main_table_job}>
                    <Table columns={columns} dataSource={data} />
                    </div>
                </div>
            <div class={styles.see_more}>
        </div>
    </div>
  )
}

export default freelancerdatgia
