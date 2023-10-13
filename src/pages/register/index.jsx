import React from 'react'
import styles from './index.module.css'

const register = () => {
  return (
    <div>
      <div className={styles.banner}>
          <div className={`${styles.container} ${styles.relative_banner}`}>
              {/* <!__ <img src="../images/banner.png" alt=""> __> */}
              <div className={styles.cover_content_banner_both}>
                  <div className={styles.content_banner}>
                      <a href="/"><span>Trang chủ / </span></a>
                      <span>Đăng ký</span>
                  </div>
              </div>
          </div>
      </div>
      <div className={styles.cover_container}>
        <div className={`${styles.container} ${styles.main_container}`}>
            <div className={styles.main_cover_container}>
                <div className={styles.cover_register_both}>
                    <div className={styles.register_top}>
                        <div className={`${styles.it_rgt_top} ${styles.rgt_ntd}`} data_register="nha_tuyen_dung">
                            <p className={styles.text_it_bold}>Nhà tuyển dụng</p>
                            <p className={styles.text_it_normal}>Đăng ký để tìm freelancer</p>
                        </div>
                        <div className={`${styles.it_rgt_top} ${styles.rgt_uv} ${styles.active}`} data_register="ung_vien">
                            <p className={styles.text_it_bold}>Freelancer</p>
                            <p className={styles.text_it_normal}>Đăng ký để tìm việc làm</p>
                        </div>

                    </div>
                    {/* <!__ đăng kí nhà tuyển dụng __> */}
                    <div className={`${styles.register_bottom} ${styles.d_none}`} id="nha_tuyen_dung">
                        <div className={styles.title_rgt_bt}>
                            <img src="/ic_lock.png" alt="ntd_info" className={styles.ic_lock}/>
                            <p className={styles.text_title_rgt_bt}>Thông tin nhà tuyển dụng</p>
                        </div>

                        <form action="/dang_ky_buoc_2_nha_tuyen_dung.html" className={styles.form_cover} id="form_register_ntd" method="POST" onsubmit="validate_form()" novalidate="novalidate">
                            <div className={styles.cover_input}>
                                <label for="dk_email_ntd" className={styles.label_style}>
                                    <p className={styles.title_input}>Email <span>*</span></p>
                                </label>
                                {/* <!__ <input name="dk_email_ntd" type="email" id="dk_email_ntd" placeholder="Nhập địa chỉ email" className={styles.input_style} onkeyup="check_mail()"/> __> */}
                                <input name="dk_email_ntd" type="email" id="dk_email_ntd" placeholder="Nhập địa chỉ email" className={styles.input_style}/>
                                {/* <!__ <span id="error6_mail" style="color: red;" className={styles.error}></span> __> */}
                            </div>

                            <div className={styles.cover_input}>
                                <div className={`${styles.item_input} ${styles.f_left}`}>
                                    <label for="dk_mk_ntd" className={styles.label_style}>
                                        <p className={styles.title_input}>Mật khẩu <span>*</span></p>
                                    </label>
                                    <input name="dk_mk_ntd" type="password" id="dk_mk_ntd" placeholder="Nhập mật khẩu" className={styles.input_style}/>
                                </div>

                                <div className={`${styles.item_input} ${styles.f_right}`}>
                                    <label for="dk_nhap_lai_mk_ntd" className={styles.label_style}>
                                        <p className={styles.title_input}>Nhập lại mật khẩu <span>*</span></p>
                                    </label>
                                    <input name="dk_nhap_lai_mk_ntd" type="password" id="dk_nhap_lai_mk_ntd" placeholder="Nhập lại mật khẩu" className={styles.input_style}/>
                                </div>
                            </div>

                            <div className={styles.cover_input}>
                                <label for="dk_hoten_ntd" className={styles.label_style}>
                                    <p className={styles.title_input}>Họ và tên <span>*</span></p>
                                </label>
                                <input name="dk_hoten_ntd" type="text" id="dk_hoten_ntd" placeholder="Nhập họ và tên" className={styles.input_style}/>
                            </div>
                            <div className={styles.cover_input}>
                                <label for="dk_hoten_ntd" className={styles.label_style}>
                                    <p className={styles.title_input}>Số điện thoại <span>*</span></p>
                                </label>
                                <input name="dk_sdt_ntd" type="text" id="dk_sdt_ntd" placeholder="Nhập số điện thoại" className={styles.input_style}/>
                            </div>
                            <div className={styles.cover_input}>
                                <div className={`${styles.item_input} ${styles.f_left}`}>
                                    <label for="dk_ngaysinh_ntd" className={styles.label_style}>
                                        <p className={styles.title_input}>Ngày sinh <span>*</span></p>
                                    </label>
                                    <input name="dk_ngaysinh_ntd" type="text" id="dk_ngaysinh_ntd" placeholder="Chọn ngày sinh" className={styles.input_style} onfocusin="(this.type='date')" onfocusout="(this.type='text')"/>
                                </div>

                                <div className={`${styles.item_input} ${styles.f_right}`}>
                                    <label for="dk_gioitinh_ntd" className={styles.label_style}>
                                        <p className={styles.title_input}>Giới tính <span>*</span></p>
                                    </label>
                                    <select name="dk_gioitinh_ntd" id="dk_gioitinh_ntd" className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`} onchange="valid_sl2('dk_gioitinh_ntd')" data_select2_id="select2_data_dk_gioitinh_ntd" tabindex="_1" aria_hidden="true">
                                        <option value="" data_select2_id="select2_data_2_3wak">Chọn giới tính</option>
                                        <option value="0">Nam</option>
                                        <option value="1">Nữ</option>
                                        <option value="2">Khác</option>
                                    </select><span className={`${styles.select2} ${styles.select2_container} ${styles.select2_container__default}`} dir="ltr" data_select2_id="select2_data_1_iu7y" style={{ width: 'auto' }}><span className={styles.selection}><span className={`${styles.select2_selection} ${styles.select2_selection__single}`} role="combobox" aria_haspopup="true" aria_expanded="false" tabindex="0" aria_disabled="false" aria_labelledby="select2_dk_gioitinh_ntd_container" aria_controls="select2_dk_gioitinh_ntd_container"><span className={styles.select2_selection__rendered} id="select2_dk_gioitinh_ntd_container" role="textbox" aria_readonly="true" title="Chọn giới tính">Chọn giới tính</span><span className={styles.select2_selection__arrow} role="presentation"><b role="presentation"></b></span></span></span><span className={styles.dropdown_wrapper} aria_hidden="true"></span></span>
                                </div>

                                <div className={`${styles.item_input} ${styles.f_left}`} style={{ clear: 'both' }}>
                                    <label for="dk_thanhpho_ntd" className={styles.label_style}>
                                        <p className={styles.title_input}>Tỉnh/Thành phố <span>*</span></p>
                                    </label>
                                    <select name="dk_thanhpho_ntd" id="dk_thanhpho_ntd" className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`} onchange="showqh(this)" data_select2_id="select2_data_dk_thanhpho_ntd" tabindex="_1" aria_hidden="true">
                                        <option value="" data_select2_id="select2_data_4_pnyd">Chọn Tỉnh/Thành phố</option>
                                                                                    <option value="1">Hà Nội</option>;
                                                                                    <option value="2">Hải Phòng</option>;
                                                                                    <option value="3">Bắc Giang</option>;
                                                                                    <option value="4">Bắc Kạn</option>;
                                                                                    <option value="5">Bắc Ninh</option>;
                                                                                    <option value="6">Cao Bằng</option>;
                                                                                    <option value="7">Điện Biên</option>;
                                                                                    <option value="8">Hòa Bình</option>;
                                                                                    <option value="9">Hải Dương</option>;
                                                                                    <option value="10">Hà Giang</option>;
                                                                                    <option value="11">Hà Nam</option>;
                                                                                    <option value="12">Hưng Yên</option>;
                                                                                    <option value="13">Lào Cai</option>;
                                                                                    <option value="14">Lai Châu</option>;
                                                                                    <option value="15">Lạng Sơn</option>;
                                                                                    <option value="16">Ninh Bình</option>;
                                                                                    <option value="17">Nam Định</option>;
                                                                                    <option value="18">Phú Thọ</option>;
                                                                                    <option value="19">Quảng Ninh</option>;
                                                                                    <option value="20">Sơn La</option>;
                                                                                    <option value="21">Thái Bình</option>;
                                                                                    <option value="22">Thái Nguyên</option>;
                                                                                    <option value="23">Tuyên Quang</option>;
                                                                                    <option value="24">Vĩnh Phúc</option>;
                                                                                    <option value="25">Yên Bái</option>;
                                                                                    <option value="26">Đà Nẵng</option>;
                                                                                    <option value="27">Thừa Thiên Huế</option>;
                                                                                    <option value="28">Khánh Hòa</option>;
                                                                                    <option value="29">Lâm Đồng</option>;
                                                                                    <option value="30">Bình Định</option>;
                                                                                    <option value="31">Bình Thuận</option>;
                                                                                    <option value="32">Đắk Lắk</option>;
                                                                                    <option value="33">Đắk Nông</option>;
                                                                                    <option value="34">Gia Lai</option>;
                                                                                    <option value="35">Hà Tĩnh</option>;
                                                                                    <option value="36">Kon Tum</option>;
                                                                                    <option value="37">Nghệ An</option>;
                                                                                    <option value="38">Ninh Thuận</option>;
                                                                                    <option value="39">Phú Yên</option>;
                                                                                    <option value="40">Quảng Bình</option>;
                                                                                    <option value="41">Quảng Nam</option>;
                                                                                    <option value="42">Quảng Ngãi</option>;
                                                                                    <option value="43">Quảng Trị</option>;
                                                                                    <option value="44">Thanh Hóa</option>;
                                                                                    <option value="45">Hồ Chí Minh</option>;
                                                                                    <option value="46">Bình Dương</option>;
                                                                                    <option value="47">Bà Rịa Vũng Tàu</option>;
                                                                                    <option value="48">Cần Thơ</option>;
                                                                                    <option value="49">An Giang</option>;
                                                                                    <option value="50">Bạc Liêu</option>;
                                                                                    <option value="51">Bình Phước</option>;
                                                                                    <option value="52">Bến Tre</option>;
                                                                                    <option value="53">Cà Mau</option>;
                                                                                    <option value="54">Đồng Tháp</option>;
                                                                                    <option value="55">Đồng Nai</option>;
                                                                                    <option value="56">Hậu Giang</option>;
                                                                                    <option value="57">Kiên Giang</option>;
                                                                                    <option value="58">Long An</option>;
                                                                                    <option value="59">Sóc Trăng</option>;
                                                                                    <option value="60">Tiền Giang</option>;
                                                                                    <option value="61">Tây Ninh</option>;
                                                                                    <option value="62">Trà Vinh</option>;
                                                                                    <option value="63">Vĩnh Long</option>;
                                                                            </select><span className={`${styles.select2} ${styles.select2_container} ${styles.select2_container__default}`} dir="ltr" data_select2_id="select2_data_3_wq5r" style={{ width: 'auto' }}><span className={styles.selection}><span className={`${styles.select2_selection} ${styles.select2_selection__single}`} role="combobox" aria_haspopup="true" aria_expanded="false" tabindex="0" aria_disabled="false" aria_labelledby="select2_dk_thanhpho_ntd_container" aria_controls="select2_dk_thanhpho_ntd_container"><span className={styles.select2_selection__rendered} id="select2_dk_thanhpho_ntd_container" role="textbox" aria_readonly="true" title="Chọn Tỉnh/Thành phố">Chọn Tỉnh/Thành phố</span><span className={styles.select2_selection__arrow} role="presentation"><b role="presentation"></b></span></span></span><span className={styles.dropdown_wrapper} aria_hidden="true"></span></span>
                                </div>
                                <div className={`${styles.item_input} ${styles.f_right}`}>
                                    <label for="dk_quanhuyen_ntd" className={styles.label_style}>
                                        <p className={styles.title_input}>Quận/ Huyện <span>*</span></p>
                                    </label>
                                    <select name="dk_quanhuyen_ntd" id="dk_quanhuyen_ntd" className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`} onchange="valid_sl2('dk_quanhuyen_ntd')" data_select2_id="select2_data_dk_quanhuyen_ntd" tabindex="_1" aria_hidden="true">
                                        <option value="" data_select2_id="select2_data_6_dfd3">Chọn quận/huyện</option>

                                    </select><span className={`${styles.select2} ${styles.select2_container} ${styles.select2_container__default}`} dir="ltr" data_select2_id="select2_data_5_alpg" style={{ width: 'auto' }}><span className={styles.selection}><span className={`${styles.select2_selection} ${styles.select2_selection__single}`} role="combobox" aria_haspopup="true" aria_expanded="false" tabindex="0" aria_disabled="false" aria_labelledby="select2_dk_quanhuyen_ntd_container" aria_controls="select2_dk_quanhuyen_ntd_container"><span className={styles.select2_selection__rendered} id="select2_dk_quanhuyen_ntd_container" role="textbox" aria_readonly="true" title="Chọn quận/huyện">Chọn quận/huyện</span><span className={styles.select2_selection__arrow} role="presentation"><b role="presentation"></b></span></span></span><span className={styles.dropdown_wrapper} aria_hidden="true"></span></span>
                                </div>

                            </div>

                            <div className={styles.cover_btn_continue}>
                                {/* <!__ <button className={styles.btn_continue}><a href="/dang_ki_b2.html" className="d_block">Tiếp tục</a></button> __> */}
                                <button type="submit" className={styles.btn_continue} name="dk_ntd" id="dk_ntd">Tiếp tục</button>

                            </div>
                        </form>
                    </div>

                    {/* <!__ đăng kí ứng viên __> */}
                    <div className={`${styles.register_bottom} ${styles.d_none} ${styles.active}`} id="ung_vien">
                        <div className={styles.title_rgt_bt}>
                            <img src="/ic_lock.png" alt="user_info" className={styles.ic_lock}/>
                            <p className={styles.text_title_rgt_bt}>Thông tin Freelancer</p>
                        </div>

                        <form action="/dang_ky_buoc_2_ung_vien.html" className={styles.form_cover} id="form_register_uv" method="POST" onsubmit="validate_form_uv()" novalidate="novalidate">
                            <div className={styles.cover_input}>
                                <label for="dk_email_uv" className={styles.label_style}>
                                    <p className={styles.title_input}>Email <span>*</span></p>
                                </label>
                                {/* <!__ <input name="dk_email_uv" type="email" id="dk_email_uv" placeholder="Nhập địa chỉ email" className={styles.input_style} onkeyup="check_mail_uv()"> __> */}
                                <input name="dk_email_uv" type="email" id="dk_email_uv" placeholder="Nhập địa chỉ email" className={`${styles.input_style} ${styles.valid}`} aria_invalid="false" fdprocessedid="8tb4q8"/>
                                {/* <!__ <span id="error7_mail" style="color: red;" className={styles.error}></span> __> */}

                            </div>

                            <div className={styles.cover_input}>
                                <div className={`${styles.item_input} ${styles.f_left}`}>
                                    <label for="dk_mk_uv" className={styles.label_style}>
                                        <p className={styles.title_input}>Mật khẩu <span>*</span></p>
                                    </label>
                                    <input name="dk_mk_uv" type="password" id="dk_mk_uv" placeholder="Nhập mật khẩu" className={`${styles.input_style} ${styles.valid}`} aria_invalid="false" fdprocessedid="gq2cno"/>
                                </div>

                                <div className={`${styles.item_input} ${styles.f_right}`}>
                                    <label for="dk_nhap_lai_mk_uv" className={styles.label_style}>
                                        <p className={styles.title_input}>Nhập lại mật khẩu <span>*</span></p>
                                    </label>
                                    <input name="dk_nhap_lai_mk_uv" type="password" id="dk_nhap_lai_mk_uv" placeholder="Nhập lại mật khẩu" className={styles.input_style} fdprocessedid="6alalm"/>
                                </div>
                            </div>

                            <div className={styles.cover_input}>
                                <label for="dk_hoten_uv" className={styles.label_style}>
                                    <p className={styles.title_input}>Họ và tên <span>*</span></p>
                                </label>
                                <input name="dk_hoten_uv" type="text" id="dk_hoten_uv" placeholder="Nhập họ và tên" className={styles.input_style} fdprocessedid="f4v1l2"/>
                            </div>

                            <div className={styles.cover_input}>
                                <label for="dk_hoten_uv" className={styles.label_style}>
                                    <p className={styles.title_input}>Số điện thoại <span>*</span></p>
                                </label>
                                <input name="dk_sdt_uv" type="text" id="dk_sdt_uv" placeholder="Nhập số điện thoại" className={styles.input_style} fdprocessedid="rrmdje"/>
                            </div>

                            <div className={styles.cover_input}>
                                <div className={`${styles.item_input} ${styles.f_left}`}>
                                    <label for="dk_ngaysinh_uv" className={styles.label_style}>
                                        <p className={styles.title_input}>Ngày sinh <span>*</span></p>
                                    </label>
                                    <input name="dk_ngaysinh_uv" type="text" id="dk_ngaysinh_uv" placeholder="Chọn ngày sinh" className={styles.input_style} onfocusin="(this.type='date')" onfocusout="(this.type='text')" fdprocessedid="0g1fj"/>
                                </div>

                                <div className={`${styles.item_input} ${styles.f_right}`}>
                                    <label for="dk_giotinh_uv" className={styles.label_style}>
                                        <p className={styles.title_input}>Giới tính <span>*</span></p>
                                    </label>
                                    <select name="dk_giotinh_uv" id="dk_giotinh_uv" className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`} onchange="valid_sl2('dk_giotinh_uv')" data_select2_id="select2_data_dk_giotinh_uv" tabindex="_1" aria_hidden="true">
                                        <option value="" data_select2_id="select2_data_8_pbc8">Chọn giới tính</option>
                                        <option value="0">Nam</option>
                                        <option value="1">Nữ</option>
                                        <option value="2">Khác</option>
                                    </select><span className={`${styles.select2} ${styles.select2_container} ${styles.select2_container__default}`} dir="ltr" data_select2_id="select2_data_7_wwu4" style={{ width: '318.812px' }}><span className={styles.selection}><span className={`${styles.select2_selection} ${styles.select2_selection__single}`} role="combobox" aria_haspopup="true" aria_expanded="false" tabindex="0" aria_disabled="false" aria_labelledby="select2_dk_giotinh_uv_container" aria_controls="select2_dk_giotinh_uv_container"><span className={styles.select2_selection__rendered} id="select2_dk_giotinh_uv_container" role="textbox" aria_readonly="true" title="Chọn giới tính">Chọn giới tính</span><span className={styles.select2_selection__arrow} role="presentation"><b role="presentation"></b></span></span></span><span className={styles.dropdown_wrapper} aria_hidden="true"></span></span>
                                </div>
                                <div className={`${styles.item_input} ${styles.f_right}`} style={{ clear: 'both' }}>
                                    <label for="dk_quanhuyen_uv" className={styles.label_style}>
                                        <p className={styles.title_input}>Quận/ Huyện <span>*</span></p>
                                    </label>
                                    <select name="dk_quanhuyen_uv" id="dk_quanhuyen_uv" className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`} onchange="valid_sl2('dk_quanhuyen_uv')" data_select2_id="select2_data_dk_quanhuyen_uv" tabindex="_1" aria_hidden="true">
                                        <option value="" data_select2_id="select2_data_10_vic6">Chọn quận/huyện</option>
                                    </select><span className={`${styles.select2} ${styles.select2_container} ${styles.select2_container__default}`} dir="ltr" data_select2_id="select2_data_9_v0m9" style={{ width: '318.812px' }}><span className={styles.selection}><span className={`${styles.select2_selection} ${styles.select2_selection__single}`} role="combobox" aria_haspopup="true" aria_expanded="false" tabindex="0" aria_disabled="false" aria_labelledby="select2_dk_quanhuyen_uv_container" aria_controls="select2_dk_quanhuyen_uv_container"><span className={styles.select2_selection__rendered} id="select2_dk_quanhuyen_uv_container" role="textbox" aria_readonly="true" title="Chọn quận/huyện">Chọn quận/huyện</span><span className={styles.select2_selection__arrow} role="presentation"><b role="presentation"></b></span></span></span><span className={styles.dropdown_wrapper} aria_hidden="true"></span></span>
                                </div>

                                <div className={`${styles.tem_input} ${styles.f_left}`}>
                                    <label for="dk_tinhthanhpho_uv" className={styles.label_style}>
                                        <p className={styles.title_input}>Tỉnh/Thành phố <span>*</span></p>
                                    </label>
                                    <select name="dk_tinhthanhpho_uv" id="dk_tinhthanhpho_uv" className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`} onchange="showqhtt(this)" data_select2_id="select2_data_dk_tinhthanhpho_uv" tabindex="_1" aria_hidden="true">
                                        <option value="" data_select2_id="select2_data_12_cufr">Chọn Tỉnh/Thành phố</option>
                                                                                    <option value="1">Hà Nội</option>;
                                                                                    <option value="2">Hải Phòng</option>;
                                                                                    <option value="3">Bắc Giang</option>;
                                                                                    <option value="4">Bắc Kạn</option>;
                                                                                    <option value="5">Bắc Ninh</option>;
                                                                                    <option value="6">Cao Bằng</option>;
                                                                                    <option value="7">Điện Biên</option>;
                                                                                    <option value="8">Hòa Bình</option>;
                                                                                    <option value="9">Hải Dương</option>;
                                                                                    <option value="10">Hà Giang</option>;
                                                                                    <option value="11">Hà Nam</option>;
                                                                                    <option value="12">Hưng Yên</option>;
                                                                                    <option value="13">Lào Cai</option>;
                                                                                    <option value="14">Lai Châu</option>;
                                                                                    <option value="15">Lạng Sơn</option>;
                                                                                    <option value="16">Ninh Bình</option>;
                                                                                    <option value="17">Nam Định</option>;
                                                                                    <option value="18">Phú Thọ</option>;
                                                                                    <option value="19">Quảng Ninh</option>;
                                                                                    <option value="20">Sơn La</option>;
                                                                                    <option value="21">Thái Bình</option>;
                                                                                    <option value="22">Thái Nguyên</option>;
                                                                                    <option value="23">Tuyên Quang</option>;
                                                                                    <option value="24">Vĩnh Phúc</option>;
                                                                                    <option value="25">Yên Bái</option>;
                                                                                    <option value="26">Đà Nẵng</option>;
                                                                                    <option value="27">Thừa Thiên Huế</option>;
                                                                                    <option value="28">Khánh Hòa</option>;
                                                                                    <option value="29">Lâm Đồng</option>;
                                                                                    <option value="30">Bình Định</option>;
                                                                                    <option value="31">Bình Thuận</option>;
                                                                                    <option value="32">Đắk Lắk</option>;
                                                                                    <option value="33">Đắk Nông</option>;
                                                                                    <option value="34">Gia Lai</option>;
                                                                                    <option value="35">Hà Tĩnh</option>;
                                                                                    <option value="36">Kon Tum</option>;
                                                                                    <option value="37">Nghệ An</option>;
                                                                                    <option value="38">Ninh Thuận</option>;
                                                                                    <option value="39">Phú Yên</option>;
                                                                                    <option value="40">Quảng Bình</option>;
                                                                                    <option value="41">Quảng Nam</option>;
                                                                                    <option value="42">Quảng Ngãi</option>;
                                                                                    <option value="43">Quảng Trị</option>;
                                                                                    <option value="44">Thanh Hóa</option>;
                                                                                    <option value="45">Hồ Chí Minh</option>;
                                                                                    <option value="46">Bình Dương</option>;
                                                                                    <option value="47">Bà Rịa Vũng Tàu</option>;
                                                                                    <option value="48">Cần Thơ</option>;
                                                                                    <option value="49">An Giang</option>;
                                                                                    <option value="50">Bạc Liêu</option>;
                                                                                    <option value="51">Bình Phước</option>;
                                                                                    <option value="52">Bến Tre</option>;
                                                                                    <option value="53">Cà Mau</option>;
                                                                                    <option value="54">Đồng Tháp</option>;
                                                                                    <option value="55">Đồng Nai</option>;
                                                                                    <option value="56">Hậu Giang</option>;
                                                                                    <option value="57">Kiên Giang</option>;
                                                                                    <option value="58">Long An</option>;
                                                                                    <option value="59">Sóc Trăng</option>;
                                                                                    <option value="60">Tiền Giang</option>;
                                                                                    <option value="61">Tây Ninh</option>;
                                                                                    <option value="62">Trà Vinh</option>;
                                                                                    <option value="63">Vĩnh Long</option>;
                                    </select><span className={`${styles.select2} ${styles.select2_container} ${styles.select2_container__default}`} dir="ltr" data_select2_id="select2_data_11_sahv" style={{ width: '318.812px' }}><span className={styles.selection}><span className={`${styles.select2_selection} ${styles.select2_selection__single}`} role="combobox" aria_haspopup="true" aria_expanded="false" tabindex="0" aria_disabled="false" aria_labelledby="select2_dk_tinhthanhpho_uv_container" aria_controls="select2_dk_tinhthanhpho_uv_container"><span className={styles.select2_selection__rendered} id="select2_dk_tinhthanhpho_uv_container" role="textbox" aria_readonly="true" title="Chọn Tỉnh/Thành phố">Chọn Tỉnh/Thành phố</span><span className={styles.select2_selection__arrow} role="presentation"><b role="presentation"></b></span></span></span><span className={styles.dropdown_wrapper} aria_hidden="true"></span></span>
                                </div>
                            </div>

                            <p className={styles.title_input}>Mức lương <span>*</span></p>
                            <div className={styles.cover_tab}>
                                <div className={styles.ht_luong_tong}>
                                    <p className={`${styles.it_tab} ${styles.active} ${styles.codinh}`} data_tabluong="co_dinh">Cố định</p>
                                    <input type="radio" name="ht_luong" className={styles.loai_luong} checked="" value="1"/>
                                </div>
                                <div className={`${styles.ht_luong_tong} ${styles.uocluong}`}>
                                    <p className={styles.it_tab} data_tabluong="uoc_luong">Ước lượng</p>
                                    <input type="radio" name="ht_luong" className={styles.loai_luong} value="2"/>
                                </div>


                            </div>
                            <div className={styles.cover_input}>
                                <div className={`${styles.item_input} ${styles.f_left} ${styles.custom_price}`}>
                                    <div className={`${styles.tab_input_both} ${styles.d_none} ${styles.active}`} id="co_dinh">
                                        <input name="dk_luongcodinh_uv" type="number" className={styles.input_style} placeholder="Nhập mức lương (VNĐ)" min="1" fdprocessedid="flmbum"/>
                                    </div>
                                    <label id="dk_uocluong_error" className={styles.error}></label>
                                    <div className={`${styles.tab_input_both} ${styles.cover_input_tab} ${styles.d_none}`} id="uoc_luong">
                                        <div className={`${styles.position_r} ${styles.w_50}`}>
                                            <input name="dk_uocluong_uv_1" type="number" id="price_start" className={`${styles.input_style} ${styles.validLuong}`} placeholder="Từ ... (VNĐ)" min="1"/>
                                            {/* <!__ <div className="dash">_</div> __> */}
                                        </div>
                                        <div className={`${styles.position_r} ${styles.w_50}`}>
                                            <input name="dk_uocluong_uv_2" type="number" id="price_end" className={`${styles.input_style} ${styles.validLuong}`} placeholder="Đến ... (VNĐ)" min="1"/>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.item_input} ${styles.f_right} ${styles.custom_price_type}`}>
                                    <select name="dk_thoigian_uv" id="dk_thoigian_uv" className={`${styles.input_style} ${styles.style_select} ${styles.select2_hidden_accessible}`} onchange="valid_sl2('dk_thoigian_uv')" data_select2_id="select2_data_dk_thoigian_uv" tabindex="_1" aria_hidden="true">
                                        <option value="" data_select2_id="select2_data_14_o34y">Chọn thời gian</option>
                                        <option value="1">Ngày</option>
                                        <option value="2">Tuần</option>
                                        <option value="3">Tháng</option>
                                        <option value="4">Năm</option>
                                    </select><span className={`${styles.select2} ${styles.select2_container} ${styles.select2_container__default}`} dir="ltr" data_select2_id="select2_data_13_856h" style={{ width: '318.812px' }}><span className={styles.selection}><span className={`${styles.select2_selection} ${styles.select2_selection__single}`} role="combobox" aria_haspopup="true" aria_expanded="false" tabindex="0" aria_disabled="false" aria_labelledby="select2_dk_thoigian_uv_container" aria_controls="select2_dk_thoigian_uv_container"><span className={styles.select2_selection__rendered} id="select2_dk_thoigian_uv_container" role="textbox" aria_readonly="true" title="Chọn thời gian">Chọn thời gian</span><span className={styles.select2_selection__arrow} role="presentation"><b role="presentation"></b></span></span></span><span className={styles.dropdown_wrapper} aria_hidden="true"></span></span>
                                </div>
                            </div>

                            {/* <!__ <label for=""> __> */}
                            <div className={styles.cover_input}>
                                <p className={styles.title_input}>Lĩnh vực làm việc <span>*</span></p>
                                <p className={styles.title_input02}>(Bạn chỉ có thể chọn 1 lĩnh vực)</p>
                                <input name="dk_checkbox_uv[]" type="checkbox" className={styles.checkbox_style} value="" style={{ float: 'left', width: '0.1px', height: '0.1px' }}/>
                            </div>
                            {/* <!__ </label> __> */}
                            <div className={styles.cover_input}>
                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="1"/>
                                    <label for="" className={styles.label_checkbox}>IT &amp; Lập trình</label>
                                </div>

                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="2"/>
                                    <label for="" className={styles.label_checkbox}>Thiết kế</label>
                                </div>

                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="3"/>
                                    <label for="" className={styles.label_checkbox}>Video</label>
                                </div>

                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="12"/>
                                    <label for="" className={styles.label_checkbox}>Lĩnh vực khác</label>
                                </div>

                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="5"/>
                                    <label for="" className={styles.label_checkbox}>Viết lách</label>
                                </div>

                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="6"/>
                                    <label for="" className={styles.label_checkbox}>Dịch thuật</label>
                                </div>

                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="7"/>
                                    <label for="" className={styles.label_checkbox}>Kinh doanh</label>
                                </div>

                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="8"/>
                                    <label for="" className={styles.label_checkbox}>Nhập liệu</label>
                                </div>
                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="9"/>
                                    <label for="" className={styles.label_checkbox}>Kế toán</label>
                                </div>
                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="10"/>
                                    <label for="" className={styles.label_checkbox}>Luật</label>
                                </div>
                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="11"/>
                                    <label for="" className={styles.label_checkbox}>Kiến trúc</label>
                                </div>
                                <div className={styles.cover_checkbox_style}>
                                    <input name="dk_checkbox_uv[]" type="checkbox" className={`${styles.checkbox_style} ${styles.check_lv}`} value="4"/>
                                    <label for="" className={styles.label_checkbox}>Xây dựng</label>
                                </div>
                            </div>
                            <div className={styles.cover_input_2}>

                            </div>
                            <div className={styles.cover_btn_continue}>
                                {/* <!__ <button className={styles.btn_continue}><a href="/dang_ki_b2.html" className="d_block">Tiếp tục</a></button> __> */}
                                <button type="submit" className={styles.btn_continue} name="dk_uv" id="dk_uv" fdprocessedid="h0e1vg">Tiếp tục</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
    
  )
}

export default register
