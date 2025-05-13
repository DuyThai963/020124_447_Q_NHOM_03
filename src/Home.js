import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Home() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  return (
    <>
      <section id="content-section-1">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          className="mySwiper"
        >
          <SwiperSlide>
            <div style={{ position: 'relative' }}>
              <img src="/frontend/anh/slide1.jpg" alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
              <div className="intro-text">
                <p className="line line-1">WELCOME TO</p>
                <p className="line line-2">____</p>
                <p className="line line-3">Shilla Monogram</p>
                <p className="line line-4">Khách sạn số 1 Việt Nam</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frontend/anh/hoboi.png" alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/frontend/anh/nhahang.png" alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
          </SwiperSlide>
        </Swiper>
      </section>

      <section id="content-section-2">
    <div className="gdlr-color-wrapper  gdlr-show-all gdlr-skin-dark-brown" style={{backgroundColor: '#322b23', paddingTop: '48px', paddingBottom: '27px'}}>
      <div className="container">
        <div className="gdlr-hotel-availability-wrapper" style={{marginBottom: '20px'}}>
          <form className="gdlr-hotel-availability gdlr-item" id="gdlr-hotel-availability" method="post" action="https://demo.goodlayers.com/hotelmaster/dark/?booking">
            <div className="gdlr-reservation-field gdlr-resv-datepicker">
              <span className="gdlr-reservation-field-title">Thời gian vào</span>
              <div className="gdlr-datepicker-wrapper" >
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  className="gdlr-datepicker"
                />
              </div>
            </div>
            <div className="gdlr-reservation-field gdlr-resv-combobox "><span className="gdlr-reservation-field-title">Đêm</span>
              <div className="gdlr-combobox-wrapper"><select name="gdlr-night" id="gdlr-night"><option value={1} selected>1</option><option value={2}>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option><option value={6}>6</option><option value={7}>7</option><option value={8}>8</option><option value={9}>9</option></select></div>
            </div>
            <div className="gdlr-reservation-field gdlr-resv-datepicker"style={{  flex: '1',  minWidth: '200px',}}>
              <span className="gdlr-reservation-field-title" >Thời gian ra</span>
              <div className="gdlr-datepicker-wrapper"  style={{ width: '100%' }}>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  dateFormat="dd/MM/yyyy"
                  minDate={checkInDate}
                  className="gdlr-datepicker"
                  style={{ 
                    width: '100%',
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    backgroundColor: '#fff',
                  }}
                />
              </div>
            </div>
            <div className="gdlr-reservation-field gdlr-resv-combobox "><span className="gdlr-reservation-field-title">Số người lớn</span>
              <div className="gdlr-combobox-wrapper"><select name="gdlr-adult-number[]"><option value={0}>0</option><option value={1}>1</option><option value={2} selected>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option><option value={6}>6</option><option value={7}>7</option><option value={8}>8</option><option value={9}>9</option></select></div>
            </div>
            <div className="gdlr-reservation-field gdlr-resv-combobox "><span className="gdlr-reservation-field-title">Số trẻ em</span>
              <div className="gdlr-combobox-wrapper"><select name="gdlr-children-number[]"><option value={0}>0</option><option value={1}>1</option><option value={2}>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option><option value={6}>6</option><option value={7}>7</option><option value={8}>8</option><option value={9}>9</option></select></div>
            </div>
            <div className="gdlr-hotel-availability-submit"><input type="hidden" name="hotel_data" defaultValue={1} /><input type="hidden" name="gdlr-room-number" defaultValue={1} /><input type="submit" className="gdlr-reservation-bar-button gdlr-button with-border" defaultValue="Kiểm tra" /></div>
            <div className="clear" />
          </form>
        </div>
        <div className="clear" />
        <div className="clear" />
      </div>
    </div>
    <div className="clear" />
  </section>  

      {/* Section 3 */}
      <section id="content-section-3">
    <div className="gdlr-color-wrapper  gdlr-show-all no-skin" style={{backgroundColor: '#0a0a0a', paddingTop: '60px'}}>
      <div className="container">
        <div className="four columns">
          <div className="gdlr-ux column-service-ux">
            <div className="gdlr-item gdlr-column-service-item gdlr-type-2">
              <div className="column-service-image"><img src="frontend/anh/letan.png" alt="" width={500} height={257} /></div>
              <div className="column-service-content-wrapper">
                <h3 className="column-service-title">Dịch vụ lễ tân chu đáo chuyên nghiệp</h3>
                <div className="column-service-divider" />
                <div className="column-service-content gdlr-skin-content">
                  <p>Nhân viên được đào tạo với hơn 5 năm kinh nghiệm và sự thấu hiểu khách hàng mang đến các lựa chọn hoàn hảo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="four columns">
          <div className="gdlr-ux column-service-ux">
            <div className="gdlr-item gdlr-column-service-item gdlr-type-2">
              <div className="column-service-image"><img src="frontend/anh/spa.png" alt="" width={500} height={257} /></div>
              <div className="column-service-content-wrapper">
                <h3 className="column-service-title">Phòng spa thư giãn mỗi cuối ngày</h3>
                <div className="column-service-divider" />
                <div className="column-service-content gdlr-skin-content">
                  <p>Phòng được trang bị các thiết bị tiện ích giúp khách hàng thư giãn khi được tận hưởng.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="four columns">
          <div className="gdlr-ux column-service-ux">
            <div className="gdlr-item gdlr-column-service-item gdlr-type-2">
              <div className="column-service-image"><img src="frontend/anh/gym.png" alt="" width={500} height={257} /></div>
              <div className="column-service-content-wrapper">
                <h3 className="column-service-title">Phòng tập gym đầy đủ hiện đại</h3>
                <div className="column-service-divider" />
                <div className="column-service-content gdlr-skin-content">
                  <p>Phòng được trang bị các thiết bị hiện đại và đầy đủ giúp mọi người nâng cao sức khỏe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
    <div className="clear" />
  </section>
  

      {/* //section 4  */}

      <section id="content-section-4">
    <div className="gdlr-parallax-wrapper gdlr-background-image gdlr-show-all gdlr-skin-light-grey" id="gdlr-parallax-wrapper-1" data-bgspeed="0.1" style={{backgroundImage: 'url("frontend/anh/duoi1.png")', paddingTop: '80px', paddingBottom: '10px'}}>
      <div className="container">
        <div className="gdlr-item-title-wrapper gdlr-item pos-center gdlr-nav-container ">
          <div className="gdlr-item-title-head">
            <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border">Shilla Monogram Rooms</h3>
            <div className="gdlr-item-title-carousel"><i className="icon-angle-left gdlr-flex-prev" /><i className="icon-angle-right gdlr-flex-next" /></div>
            <div className="clear" />
          </div><a className="gdlr-item-title-link" href="http://demo.goodlayers.com/hotelmaster/room-classic-3-columns/">Xem tất cả phòng tại đây<i className="fa fa-long-arrow-right icon-long-arrow-right" /></a></div>
        <div className="room-item-wrapper type-modern">
          <div className="room-item-holder ">
            <div className="gdlr-room-carousel-item gdlr-item">
              <div className="" data-type="carousel" data-nav-container="room-item-wrapper" data-columns={3}>
                <ul className="slides">
                  <li className="gdlr-item gdlr-modern-room">
                    <div className="gdlr-room-thumbnail"><a href="room\standard-room-one-king-bed\index.html"><img src="frontend/anh/1doi.png" alt="" width={700} height={400} /></a></div>
                    <h3 className="gdlr-room-title"><a href="room\standard-room-one-king-bed\index.html">Standard Room – Một giường đôi</a></h3>
                    <Link to="room\standard-room-one-king-bed\index.html" className="gdlr-room-detail" /></li>
                  <li className="gdlr-item gdlr-modern-room">
                    <div className="gdlr-room-thumbnail"><a href="room\superior-room-two-double-beds\index.html"><img src="frontend/anh/1doi2don.png" alt="" width={700} height={400} /></a></div>
                    <h3 className="gdlr-room-title"><a href="room\superior-room-two-double-beds\index.html">Superior Room – 1 giường đôi hoặc 2 giường đơn</a></h3>
                    <Link to="room\superior-room-two-double-beds\index.html" className="gdlr-room-detail" /></li>
                  <li className="gdlr-item gdlr-modern-room">
                    <div className="gdlr-room-thumbnail"><a href="room\junior-suite-one-single-bed\index.html"><img src="frontend/anh/2don.png" alt="" width={700} height={400} /></a></div>
                    <h3 className="gdlr-room-title"><a href="room\junior-suite-one-single-bed\index.html">Junior Suite – 2 giường đơn</a></h3>
                    <Link to="room\junior-suite-one-single-bed\index.html" className="gdlr-room-detail" /></li>
                  {/* <li className="gdlr-item gdlr-modern-room">
                    <div className="gdlr-room-thumbnail"><a href="room\grand-superior-room-two-king-beds\index.html"><img src="frontend/anh/2doi.png" alt="" width={700} height={400} /></a></div>
                    <h3 className="gdlr-room-title"><a href="room\grand-superior-room-two-king-beds\index.html">Grand Superior Room – 2 giường đôi</a></h3>
                    <Link to="room\grand-superior-room-two-king-beds\index.html" className="gdlr-room-detail" /></li>
                  <li className="gdlr-item gdlr-modern-room">
                    <div className="gdlr-room-thumbnail"><a href="room\superior-room-one-king-bed\index.html"><img src="frontend/anh/luxury.png" alt="" width={700} height={400} /></a></div>
                    <h3 className="gdlr-room-title"><a href="room\superior-room-one-king-bed\index.html">Superior Room – Phòng sang trọng</a></h3>
                    <Link to="room\superior-room-one-king-bed\index.html" className="gdlr-room-detail" /></li>
                  <li className="gdlr-item gdlr-modern-room">
                    <div className="gdlr-room-thumbnail"><a href="room\deluxe-room-one-king-bed\index.html"><img src="frontend/anh/vua.png" alt="" width={700} height={400} /></a></div>
                    <h3 className="gdlr-room-title"><a href="room\deluxe-room-one-king-bed\index.html">Deluxe Room – Phòng tổng thống</a></h3>
                    <Link to="room\deluxe-room-one-king-bed\index.html" className="gdlr-room-detail" /></li>
                  <li className="gdlr-item gdlr-modern-room">
                    <div className="gdlr-room-thumbnail"><a href="room\family-special-three-double-beds\index.html"><img src="frontend/anh/giadinh.png" alt="" width={700} height={400} /></a></div>
                    <h3 className="gdlr-room-title"><a href="room\family-special-three-double-beds\index.html">Family Special – Phòng gia đình</a></h3>
                    <Link to="room\family-special-three-double-beds\index.html" className="gdlr-room-detail" /></li>
                  <li className="gdlr-item gdlr-modern-room">
                    <div className="gdlr-room-thumbnail"><a href="room\premium-room-two-single-beds\index.html"><img src="frontend/anh/dacbiet.png" alt="" width={700} height={400} /></a></div>
                    <h3 className="gdlr-room-title"><a href="room\premium-room-two-single-beds\index.html">Super Premium – Phòng đặc biệt</a></h3>
                    <Link to="room\premium-room-two-single-beds\index.html" className="gdlr-room-detail" /></li> */}
                </ul>
                <div className="clear" />
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="clear" />
        <div className="clear" />
      </div>
    </div>
    <div className="clear" />
  </section>

      {/* //section 5 */}

      <section id="content-section-5">
    <div className="gdlr-parallax-wrapper gdlr-background-image gdlr-show-all gdlr-skin-dark-skin" id="gdlr-parallax-wrapper-2" data-bgspeed="0.1" 
    style={{backgroundImage: 'url("frontend/anh/duoi2.png")', paddingTop: '160px', paddingBottom: '110px'}}>
      <div className="container">
        <div className="six columns">
          <div className="gdlr-title-item">
            <div className="gdlr-item-title-wrapper gdlr-item pos-center pos-center-divider ">
              <div className="gdlr-item-title-head">
                <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border">Thông tin về chúng tôi</h3>
                <div className="clear" />
              </div>
              <div className="gdlr-item-title-divider" />
              <div className="gdlr-item-title-caption gdlr-title-font gdlr-skin-info">Cảm hứng có thể được tìm thấy ở khắp mọi nơi</div>
            </div>
          </div>
        </div>
        <div className="six columns">
          <div className="gdlr-item gdlr-content-item">
            <p style={{textAlign: 'center'}}>Khách sạn Đà Năng là khách sạn đầu tiên được ra mắt của Shilla Monogram, mang đến truyền thống yêu thích phong cảnh thiên nhiên vốn có của Hàn Quốc, chứa đựng trong tự nhiên và văn hóa Việt Nam cùng thiết kế đặc trưng.
              Quý khách có thể bắt gặp các tác phẩm nghệ thuật của họa sĩ nổi tiếng Việt Nam Hà Mạnh Thắng, với cách trưu tượng hóa cành biên Đà Năng thay đổi theo mùa, tại khắp nơi trong khách sạn, truyền tải đến quý khách nét hấp dẫn tại địa phương được chúng tôi chọn lọc kỹ lưỡng và tái hiện lại.
              Hy vọng quý khách có thể tận hưởng những khoảnh khắc như kỹ nghi mỗi ngày cùng các hoạt động đa dạng tại khu vui chơi dành cho trẻ em Little Monogram, không gian trãi nghiêm giải trí Activity Studio, các bề bơi ngoài trời đa dạng hãp dẫn của Shilla Monogram Đà Nẵng.&nbsp;</p>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
    <div className="clear" />
  </section>
  

      {/* //section 6 */}

      <section id="content-section-6">
    <div className="gdlr-color-wrapper  gdlr-show-all no-skin" style={{backgroundColor: '#292929', paddingTop: '70px'}}>
      <div className="container">
        <div className="six columns">
          <div className="gdlr-item-title-wrapper gdlr-item pos-left pos-left-divider ">
            <div className="gdlr-item-title-head">
              <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border">Các cấp thành viên</h3>
              <div className="clear" />
            </div>
            <div className="gdlr-item-title-divider" />
          </div>
          <div className="blog-item-wrapper">
            <div className="blog-item-holder">
              <div className="gdlr-item gdlr-blog-widget">
                <div className="gdlr-ux gdlr-blog-widget-ux">
                  <article id="post-862" className="post-862 post type-post status-publish format-standard has-post-thumbnail hentry category-blog category-fit-row tag-blog tag-link tag-news">
                    <div className="gdlr-standard-style">
                      <div className="blog-date-wrapper gdlr-title-font">
                        <span className="blog-date-day">Lần</span>
                        <span className="blog-date-month">Đầu</span>
                      </div>
                      <header className="post-header">
                        <h3 className="gdlr-blog-title"><a href="magna-pars-studiorum\index.html">Hạng đồng</a></h3>
                        <div className="gdlr-blog-excerpt">Quà lần đầu, điểm(3% giá trị phòng),...
                          <div className="clear" /><a href="magna-pars-studiorum\index.html" className="excerpt-read-more">Continue Reading<i className="fa fa-long-arrow-right icon-long-arrow-right" /></a></div>
                        <div className="clear" />
                      </header>
                      {/* entry-header */}
                      <div className="clear" />
                    </div>
                  </article>
                  {/* #post */}
                </div>
              </div>
              <div className="gdlr-item gdlr-blog-widget">
                <div className="gdlr-ux gdlr-blog-widget-ux">
                  <article id="post-859" className="post-859 post type-post status-publish format-standard has-post-thumbnail hentry category-blog category-fit-row">
                    <div className="gdlr-standard-style">
                      <div className="blog-date-wrapper gdlr-title-font">
                        <span className="blog-date-day">1 ngày</span>
                        <span className="blog-date-month">100 điểm</span>
                      </div>
                      <header className="post-header">
                        <h3 className="gdlr-blog-title"><a href="sedial-eiusmod-tempor\index.html">Hạng bạc</a></h3>
                        <div className="gdlr-blog-excerpt">Quà thành viên, điểm (1000+3%), phiếu giảm giá 10%,...
                          <div className="clear" /><a href="sedial-eiusmod-tempor\index.html" className="excerpt-read-more">Continue Reading<i className="fa fa-long-arrow-right icon-long-arrow-right" /></a></div>
                        <div className="clear" />
                      </header>
                      {/* entry-header */}
                      <div className="clear" />
                    </div>
                  </article>
                  {/* #post */}
                </div>
              </div>
              <div className="gdlr-item gdlr-blog-widget">
                <div className="gdlr-ux gdlr-blog-widget-ux">
                  <article id="post-2211" className="post-2211 post type-post status-publish format-gallery has-post-thumbnail hentry category-blog category-life-style category-news-article tag-blog tag-gallery-thumbnail tag-life-style tag-news post_format-post-format-gallery">
                    <div className="gdlr-standard-style">
                      <div className="blog-date-wrapper gdlr-title-font">
                        <span className="blog-date-day">10 ngày</span>
                        <span className="blog-date-month">1000 điểm</span>
                      </div>
                      <header className="post-header">
                        <h3 className="gdlr-blog-title"><a href="gallery-post-format-title\index.html">Hạng Vàng</a></h3>
                        <div className="gdlr-blog-excerpt">Quà thành viên, điểm(3000+5%), phiếu giảm giá 20%, quà khác...
                          <div className="clear" /><a href="gallery-post-format-title\index.html" className="excerpt-read-more">Continue Reading<i className="fa fa-long-arrow-right icon-long-arrow-right" /></a></div>
                        <div className="clear" />
                      </header>
                      {/* entry-header */}
                      <div className="clear" />
                    </div>
                  </article>
                  {/* #post */}
                </div>
              </div></div>
          </div>
        </div>
        <div className="six columns">
          <div className="gdlr-item-title-wrapper gdlr-item pos-left pos-left-divider ">
            <div className="gdlr-item-title-head">
              <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border">Trưng bày</h3>
              <div className="clear" />
            </div>
            <div className="gdlr-item-title-divider" />
          </div>
          <div className="gdlr-gallery-item gdlr-item">
            <div className="gallery-column six columns">
              <div className="gallery-item"><img src="frontend/anh/tb1.png" alt="" width={400} height={400} /></div>
            </div>
            <div className="gallery-column three columns">
              <div className="gallery-item"><img src="frontend/anh/tb2.png" alt="" width={400} height={400} /></div>
            </div>
            <div className="gallery-column three columns">
              <div className="gallery-item"><img src="frontend/anh/tb3.png" alt="" width={400} height={400} /></div>
            </div>
            <div className="gallery-column three columns">
              <div className="gallery-item"><img src="frontend/anh/tb4.png" alt="" width={400} height={400} /></div>
            </div>
            <div className="gallery-column three columns">
              <div className="gallery-item"><img src="frontend/anh/tb5.png" alt="" width={400} height={400} /></div>
            </div>
            <div className="clear" />
            <div className="gallery-column three columns">
              <div className="gallery-item"><img src="frontend/anh/tb6.png" alt="" width={400} height={400} /></div>
            </div>
            <div className="gallery-column three columns">
              <div className="gallery-item"><img src="frontend/anh/tb7.png" alt="" width={400} height={400} /></div>
            </div>
            <div className="gallery-column three columns">
              <div className="gallery-item"><img src="frontend/anh/tb8.png" alt="" width={400} height={400} /></div>
            </div>
            <div className="gallery-column three columns">
              <div className="gallery-item"><img src="frontend/anh/tb9.png" alt="" width={400} height={400} /></div>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
    <div className="clear" />
  </section>
  

      {/* //section 7 */}

      <section id="content-section-7">
    <div className="gdlr-color-wrapper  gdlr-show-all gdlr-skin-dark-testimonial" style={{backgroundColor: '#1e1e1e', paddingTop: '80px', paddingBottom: '45px'}}>
      <div className="container">
        <div className="gdlr-testimonial-item-wrapper">
          <div className="gdlr-item-title-wrapper gdlr-item pos-center gdlr-nav-container ">
            <div className="gdlr-item-title-head">
              <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border">SHILLA REWARDS</h3>
              <div className="gdlr-item-title-carousel"><i className="icon-angle-left gdlr-flex-prev" /><i className="icon-angle-right gdlr-flex-next" /></div>
              <div className="clear" />
            </div>
          </div>
          <div className="gdlr-item gdlr-testimonial-item carousel large plain-style">
            <div className="gdlr-ux gdlr-testimonial-ux">
              <div className="" data-type="carousel" data-nav-container="gdlr-testimonial-item" data-columns={1}>
                <ul className="slides">
                  <li className="testimonial-item">
                    <div className="testimonial-content gdlr-skin-content">
                      <p>Shilla Rewards là dịch vụ tổng hợp hoàn toàn mới dành cho hội viên, cung cấp các ưu đãi và lợi ích điểm thường tại Seoul/Jeju Shilla Hotel, Shilla Monogram, Shilla Stay và các khách sạn liên kết.</p>
                    </div>
                    <div className="testimonial-info"><span className="testimonial-author gdlr-skin-link-color">Co-op</span><span className="testimonial-position gdlr-skin-info"><span>, </span>Shilla Stay</span>
                    </div>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        <div className="clear" />
      </div>
    </div>
    <div className="clear" />
  </section>
  





      {/* Các sections khác */}
      {/* Section 4, Section 5, Section 6, Section 7... */}

    </>
  );
}

export default Home;
