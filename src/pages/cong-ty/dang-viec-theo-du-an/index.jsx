import React, {useState} from 'react';
import styles from './index.module.css';
import { UploadOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Upload,
    Row,
    Col,
  } from 'antd';

  const onChange = (value) => {
    console.log('changed', value);
  };
const index = () => {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = (size) => {
        setComponentSize(size);
      };
    // const inputRender = (inputProps) => {
    // const { value, ...rest } = inputProps;
    // return (
    //     <input {...rest} value={value} readOnly />
    // );
    // };
  return (
    <div className={`${styles.right_container } ${styles.right_container_styles}`}>
        {/* <!-- start --> */}
        <div className={styles.cate}>
            <span>Việc làm tự do / </span>
            <span><a href="" className="">Tuyển dụng freelancer / </a></span>
            <span><a href="" className="">Đăng việc theo dự án</a></span>
        </div>

        <div className="cover_dang_viec" data="1">
        </div>
        <div className={`${styles.form_cover} ${styles.main_right_container}`}>
        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        style={{ width: '100%' }}
        // style={{ maxWidth: 600 }}
        >
        <Row >
            <Col span={24}>
                    <p className={styles.title_main_right}>Việc cần tuyển freelancer</p>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Form.Item>
                    <div className={styles.cover_choose_img}>
                        <img src="/logo.png" alt="Ảnh" id="ghost"/>
                        <div className={styles.choose_img}>
                            <p>Logo công ty</p>
                            <Upload action="/upload.do" listType="picture" >
                                <Button className={styles.custom_file_upload} >
                                   Chọn ảnh
                                </Button>
                            </Upload>
                        </div>
                    </div>
                </Form.Item>
            </Col>
        </Row>
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={24} >
                <Form.Item 
                    label={
                        <div>
                            <p className={styles.title_input} style={{width:'100%'}}>Đặt tên cụ thể cho công việc cần tuyển *</p> 
                        </div>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Input 
                        span={24}
                        className={styles.input_style} placeholder="VD: Thiết kế web bán hàng cao cấp"/>
                </Form.Item>
            </Col>
        </Row>
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={24}>
                <Form.Item
                    label={
                        <p className={styles.title_input}>Nơi làm việc *</p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        defaultValue={'1'}
                        options={[
                            {
                                value: '1',
                                label: 'Chọn tỉnh / thành phố',
                            },
                            {
                              value: 'HY',
                              label: 'Hưng Yên',
                            },
                            {
                              value: 'HN',
                              label: 'Hà Nội',
                            },
                            {
                              value: 'ND',
                              label: 'Nam Định',
                            },
                          ]}

                    
                    />
                </Form.Item>
            </Col>
        </Row>
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={24}>
                <Form.Item
                    label={
                        <p className={styles.title_input}>Chọn lĩnh vực cần tuyển *</p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        defaultValue={'1'}
                        options={[
                            {
                                value: '1',
                                label: 'Chọn lĩnh vực',
                            },
                            {
                              value: 'HY',
                              label: 'Hưng Yên',
                            },
                            {
                              value: 'HN',
                              label: 'Hà Nội',
                            },
                            {
                              value: 'ND',
                              label: 'Nam Định',
                            },
                          ]}
                    />
                </Form.Item>
            </Col>
        </Row>
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={24}>
                <Form.Item

                    label={
                        <p className={styles.title_input}>Kỹ năng yêu cầu Freelancer phải có *</p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        defaultValue={'1'}
                        options={[
                            {
                                value: '1',
                                label: 'Chọn kỹ năng'

                            },
                            {
                              value: 'HY',
                              label: 'Hưng Yên',
                            },
                            {
                              value: 'HN',
                              label: 'Hà Nội',
                            },
                            {
                              value: 'ND',
                              label: 'Nam Định',
                            },
                          ]}
                    />
                </Form.Item>
            </Col>
        </Row>
        <Row >
            <Col span={24}>
                    <p className={styles.title_main_right}>Thông Tin Đầy Đủ Về Yêu Cầu Tuyển Dụng</p>
            </Col>
        </Row>
        <Row gutter={27} className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={12}>
                <Form.Item
                    label={
                        <p className={styles.title_input}>Hình thức làm việc *</p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        defaultValue={'1'}
                        options={[
                            {
                                value: '1',
                                label: 'Chọn hình thức',
                            },
                            {
                              value: 'HY',
                              label: 'Hưng Yên',
                            },
                            {
                              value: 'HN',
                              label: 'Hà Nội',
                            },
                            {
                              value: 'ND',
                              label: 'Nam Định',
                            },
                          ]}
                    />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                    label={
                        <p className={styles.title_input}>Yêu cầu kinh nghiệm *</p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        defaultValue={'1'}
                        options={[
                            {
                                value:'1',
                                label:'Chọn kinh nghiệm',
                            },
                            {
                              value: 'HY',
                              label: 'Hưng Yên',
                            },
                            {
                              value: 'HN',
                              label: 'Hà Nội',
                            },
                            {
                              value: 'ND',
                              label: 'Nam Định',
                            },
                          ]}
                    />
                </Form.Item>

            </Col>
        </Row>
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={24} >
                <Form.Item 
                    label={
                        <div className={styles.title_input_label}>
                            Nội dung chi tiết, và các đầu việc cần Freelancer thực hiện * <p></p>
                            (càng chi tiết, freelancer càng có đầy đủ thông tin để gửi báo giá chính xác hơn).
                        </div>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <Input 
                        span={24}
                        
                        className={`${styles.input_style} ${styles.text_style}`} placeholder="VD: Thiết kế các giao diện website cần thiết như: Trang chủ, xem hàng, thanh toán..."/>
                </Form.Item>
            </Col>
        </Row>
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={24}>
            <Form.Item
                label={
                    <div>
                        <p className={styles.title_input} style={{width:'100%'}}>Thêm tài kiệu đính kèm</p> 
                    </div>
                }
                wrapperCol={{ span: 24 }}
                labelCol={{ span: 24 }}
            >
                <Upload span={24} >
                    <Button className={`${styles.upload_style} ${styles.input_style}`} >
                        <img  className={styles.icon_upload}  src='/icon_upload.png' alt="icon_upload.png" />
                        <p className={styles.p_input}>Tải lên bất kỳ hình ảnh hoặc tài liệu mô tả ngắn gọn công việc (Kích thước tệp tối đa: 25 MB).</p>
                    </Button>
                </Upload>
            </Form.Item>
            </Col>
        </Row>
        <Row >
            <Col span={24}>
                    <p className={styles.title_main_right}>Chi Phí Và Thời Gian</p>
            </Col>
        </Row>
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col>
            <Form.Item 
                label={
                    <p className={styles.title_input_label}>Ngân sách dự kiến cho công việc này *</p>
                } 
                wrapperCol={{span:24}}
                labelCol={{span:15}}
            >
                <Radio.Group>
                    <Row>
                        <Col>
                            <Radio.Button className={`${styles.tab.active} ${styles.tab}`} value>Cố định</Radio.Button>
                        </Col>
                        <Col>
                            <Radio.Button className={styles.tab} value="optional">Ước lượng</Radio.Button>
                        </Col>
                    </Row>
                </Radio.Group>
            </Form.Item>
            </Col>
        </Row>
        <Row gutter={27} className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={12}>
                <Form.Item
                     wrapperCol={{ span: 24 }}
                >
                    <InputNumber 
                        placeholder= "Nhập mức lương (VNĐ)"
                        className={styles.input_style} style={{width:'100%'}} min={1} max={10} onChange={onChange} />
                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item
                    wrapperCol={{ span: 24 }}
                >
                    <Select
                        showSearch
                        size='large'
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        defaultValue={'1'}
                        options={[
                            {
                                value:'1',
                                label:'Chọn hình thức trả lương',
                            },
                            {
                              value: 'HY',
                              label: 'Hưng Yên',
                            },
                            {
                              value: 'HN',
                              label: 'Hà Nội',
                            },
                            {
                              value: 'ND',
                              label: 'Nam Định',
                            },
                          ]}
                    />
                </Form.Item>
            </Col>
        </Row>
        <Row gutter={27} className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={12}>
            <Form.Item 
                label={
                    <p>Ngày bắt đầu đặt giá *</p>
                }
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <DatePicker format="DD/MM/YYYY" placeholder='dd/mm/yyyy' className={styles.title_input_label} />
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item 
                label={
                    <p>Ngày đặt giá kết thúc *</p>
                }
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <DatePicker  format="DD/MM/YYYY" placeholder='dd/mm/yyyy' className={styles.title_input_label}/>
            </Form.Item>
            </Col>
        </Row>
        <Row gutter={27} className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={12}>
                <Form.Item 
                    label={
                        <p>Ngày bắt đầu làm việc *</p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <DatePicker format="DD/MM/YYYY" placeholder='dd/mm/yyyy' className={styles.title_input_label}/>
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item
                     label={
                        <p>Thời hạn làm việc *</p>
                    }
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                >
                    <InputNumber placeholder="VD: 1 tháng" className={styles.input_style} min={1} max={10} onChange={onChange} />
                </Form.Item>
            </Col>
        </Row>
        <Row className={`${styles.cover_input} ${styles.position_r}`}>
            <Col span={24}>
                <Form.Item wrapperCol={{span:24}} className={styles.buton_item}>
                    {/* <Col span={4}>col-4</Col> */}
                    <Button className={styles.btn_post} type="primary">ĐĂNG VIỆC</Button>
                </Form.Item>
            </Col>
        </Row>
        </Form>

        </div>
    </div>                
  )
}

export default index
