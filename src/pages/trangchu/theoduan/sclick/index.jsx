import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "../index.module.css"

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className={styles.div}>
        <Slider {...settings}>
          <div className={styles.content_it_duan}>
            <div className={styles.content_it_top}>
                <img src="./img_demo02.png" alt="duan"/>
                <div className={styles.bg_img}>
                </div>
                <div className={styles.cover_user}>
                    <img src="https://freelancer.timviec365.vn/thumb/2023/09/07//job-1694050506.jpg" alt="avt" />
                    <a>
                        <p className={styles.name_user}>
                        Cty Dũng
                        </p>
                    </a>

                </div>

            </div>
            <div className={styles.content_it_bottom}>

            </div>
            
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
