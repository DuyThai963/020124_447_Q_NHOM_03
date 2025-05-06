import Section1 from "./components/Content/Section1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';

function Home() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        style={{ width: "100%" }} // Đảm bảo swiper bao phủ toàn bộ chiều ngang
      >
        <SwiperSlide>
          <img src="/frontend/anh/hoboi.png" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/frontend/anh/nhahang.png" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/frontend/anh/out.png" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      <div className="container" style={{ maxWidth: "1170px", margin: "0 auto" }}>
        <div className="gdlr-hotel-availability-wrapper" style={{ marginBottom: "20px" }}>
          <form
            className="gdlr-hotel-availability gdlr-item"
            id="gdlr-hotel-availability"
            method="post"
            action="https://demo.goodlayers.com/hotelmaster/dark/?booking"
          >
            <div
              className="gdlr-hotel-availability-fields"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '1px'
              }}
            >
              {/* Thời gian vào */}
              <div className="gdlr-reservation-field gdlr-resv-combobox" style={{ flex: '1 1 15%', fontFamily: 'Times New Roman' }}>
                <span className="gdlr-reservation-field-title">Thời gian vào</span>
                <div className="gdlr-combobox-wrapper">
                  <input
                    type="text"
                    id="gdlr-check-in"
                    className="gdlr-datepicker"
                    autoComplete="off"
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: '#5d4c3b',
                      border: 'none',
                      color: '#fff',
                      borderRadius: '4px',
                      fontFamily: 'Times New Roman'
                    }}
                  />
                </div>
              </div>

              {/* Đêm */}
              <div className="gdlr-reservation-field gdlr-resv-combobox" style={{ flex: '1 1 13%', fontFamily: 'Times New Roman' }}>
                <span className="gdlr-reservation-field-title">Đêm</span>
                <div className="gdlr-combobox-wrapper">
                  <select name="gdlr-night" id="gdlr-night" defaultValue="1" style={{ fontFamily: 'Times New Roman' }}>
                    {[...Array(9)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Thời gian ra */}
              <div className="gdlr-reservation-field gdlr-resv-combobox" style={{ flex: '1 1 15%', fontFamily: 'Times New Roman' }}>
                <span className="gdlr-reservation-field-title">Thời gian ra</span>
                <div className="gdlr-combobox-wrapper">
                  <input
                    type="text"
                    id="gdlr-check-out"
                    className="gdlr-datepicker"
                    autoComplete="off"
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: '#5d4c3b',
                      border: 'none',
                      color: '#fff',
                      borderRadius: '4px',
                      fontFamily: 'Times New Roman'
                    }}
                  />
                </div>
              </div>

              {/* Số người lớn */}
              <div className="gdlr-reservation-field gdlr-resv-combobox" style={{ flex: '1 1 15%', fontFamily: 'Times New Roman' }}>
                <span className="gdlr-reservation-field-title">Số người lớn</span>
                <div className="gdlr-combobox-wrapper">
                  <select name="gdlr-adult-number[]" defaultValue="2" style={{ fontFamily: 'Times New Roman' }}>
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Số trẻ em */}
              <div className="gdlr-reservation-field gdlr-resv-combobox" style={{ flex: '1 1 15%', fontFamily: 'Times New Roman' }}>
                <span className="gdlr-reservation-field-title">Số trẻ em</span>
                <div className="gdlr-combobox-wrapper">
                  <select name="gdlr-children-number[]" defaultValue="0" style={{ fontFamily: 'Times New Roman' }}>
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Nút kiểm tra */}
              <div
                className="gdlr-hotel-availability-submit"
                style={{
                  flex: '1 1 10%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  fontFamily: 'Times New Roman'
                }}
              >
                <input
                  type="submit"
                  className="gdlr-reservation-bar-button gdlr-button with-border"
                  value="Kiểm tra"
                  style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    fontFamily: 'Times New Roman'
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Section 3 */}
      <section id="content-section-3" style={{ margin: 0, padding: 0, width: "100%", backgroundColor: "#0a0a0a", color: "white" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "20px 0" }}>

          {/* Dịch vụ lễ tân */}
          <div style={{ flex: "1 1 300px", textAlign: "center", margin: "10px" }}>
            <img
              src="/frontend/anh/letan.png"
              alt="Dịch vụ lễ tân"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ margin: "0 0 15px 0", fontSize: "20px", fontWeight: "bold", textTransform: "uppercase" }}>
                DỊCH VỤ LỄ TÂN CHU ĐÁO CHUYÊN NGHIỆP
              </h3>
              <p style={{ margin: 0, lineHeight: 1.6, fontSize: "16px" }}>
                Nhân viên được đào tạo với hơn 5 năm kinh nghiệm và sự thấu hiểu khách hàng mang đến các lựa chọn hoàn hảo.
              </p>
            </div>
          </div>

          {/* Phòng spa */}
          <div style={{ flex: "1 1 300px", textAlign: "center", margin: "10px" }}>
            <img
              src="/frontend/anh/spa.png"
              alt="Phòng spa"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ margin: "0 0 15px 0", fontSize: "20px", fontWeight: "bold", textTransform: "uppercase" }}>
                PHÒNG SPA THƯ GIÃN MỖI CUỐI NGÀY
              </h3>
              <p style={{ margin: 0, lineHeight: 1.6, fontSize: "16px" }}>
                Phòng được trang bị các thiết bị tiện ích giúp khách hàng thư giãn khi được tận hưởng.
              </p>
            </div>
          </div>

          {/* Phòng gym */}
          <div style={{ flex: "1 1 300px", textAlign: "center", margin: "10px" }}>
            <img
              src="/frontend/anh/gym.png"
              alt="Phòng gym"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ margin: "0 0 15px 0", fontSize: "20px", fontWeight: "bold", textTransform: "uppercase" }}>
                PHÒNG TẬP GYM ĐẦY ĐỦ HIỆN ĐẠI
              </h3>
              <p style={{ margin: 0, lineHeight: 1.6, fontSize: "16px" }}>
                Phòng được trang bị các thiết bị hiện đại và đầy đủ giúp mọi người nâng cao sức khỏe.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* //section 4  */}
      
      <section id="content-section-4">
        <div className="gdlr-parallax-wrapper gdlr-background-image gdlr-show-all gdlr-skin-light-grey"
          id="gdlr-parallax-wrapper-1" data-bgspeed="0.1"
          style={{ backgroundImage: 'url("anh/duoi1.png")', paddingTop: '80px', paddingBottom: '10px' }}>
          <div className="container">
            <div className="gdlr-item-title-wrapper gdlr-item pos-center gdlr-nav-container">
              <div className="gdlr-item-title-head">
                <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border">SHILLA MONOGR</h3>
                <div className="gdlr-item-subtitle">Xem tất cả phòng ta</div>
                <div className="gdlr-item-title-carousel">
                  <i className="icon-angle-left gdlr-flex-prev" />
                  <i className="icon-angle-right gdlr-flex-next" />
                </div>
                <div className="clear" />
              </div>
            </div>

            <div className="room-item-wrapper type-modern">
              <div className="room-item-holder">
                <div className="gdlr-room-carousel-item gdlr-item">
                  <div className="flexslider" data-type="carousel" data-nav-container="room-item-wrapper" data-columns={3}>
                    <ul className="slides">
                      <li className="gdlr-item gdlr-modern-room">
                        <div className="gdlr-room-thumbnail">
                          <img src="/frontend/anh/dacbiet.png" alt="" width={700} height={400} />
                        </div>
                        <h3 className="gdlr-room-title">DELUXE ROOM - PHÒNG TỔNG THỐNG</h3>
                      </li>

                      <li className="gdlr-item gdlr-modern-room">
                        <div className="gdlr-room-thumbnail">
                          <img src="anh/giadinh.png" alt="Family Special" width={700} height={400} />
                        </div>
                        <h3 className="gdlr-room-title">FAMILY SPECIAL - PHÒNG GIA ĐÌNH</h3>
                      </li>

                      <li className="gdlr-item gdlr-modern-room">
                        <div className="gdlr-room-thumbnail">
                          <img src="anh/dacbiet.png" alt="Super Premium" width={700} height={400} />
                        </div>
                        <h3 className="gdlr-room-title">SUPER PREMIUM - PHÒNG ĐẶC BIỆT</h3>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* //section 5 */}

      <section id="content-section-5" style={{ width: "100%", margin: 0, padding: 0 }}>
        <div
          className="gdlr-parallax-wrapper gdlr-background-image gdlr-show-all gdlr-skin-dark-skin"
          id="gdlr-parallax-wrapper-2"
          data-bgspeed="0.1"
          style={{
            backgroundImage: 'url("/frontend/anh/duoi2.png")',
            paddingTop: "160px",
            paddingBottom: "110px",
            width: "100%",
            height: "auto",
            fontFamily: "Times New Roman, serif" // Thay đổi phong chữ ở đây
          }}
        >
          <div className="container" style={{ maxWidth: "none", padding: 0 }}>
            <div className="six columns">
              <div className="gdlr-title-item">
                <div className="gdlr-item-title-wrapper gdlr-item pos-center pos-center-divider">
                  <div className="gdlr-item-title-head">
                    <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border">
                      Thông tin về chúng tôi
                    </h3>
                    <div className="clear" />
                  </div>
                  <div className="gdlr-item-title-divider" />
                  <div className="gdlr-item-title-caption gdlr-title-font gdlr-skin-info">
                    Cảm hứng có thể được tìm thấy ở khắp mọi nơi
                  </div>
                </div>
              </div>
            </div>
            <div className="six columns">
              <div className="gdlr-item gdlr-content-item">
                <p style={{ textAlign: "center", fontFamily: "Times New Roman, serif" }}>
                  Khách sạn Đà Năng là khách sạn đầu tiên được ra mắt của
                  Shilla Monogram, mang đến truyền thống yêu thích phong
                  cảnh thiên nhiên vốn có của Hàn Quốc, chứa đựng trong tự
                  nhiên và văn hóa Việt Nam cùng thiết kế đặc trưng. Quý
                  khách có thể bắt gặp các tác phẩm nghệ thuật của họa sĩ
                  nổi tiếng Việt Nam Hà Mạnh Thắng, với cách trưu tượng
                  hóa cành biên Đà Năng thay đổi theo mùa, tại khắp nơi
                  trong khách sạn, truyền tải đến quý khách nét hấp dẫn
                  tại địa phương được chúng tôi chọn lọc kỹ lưỡng và tái
                  hiện lại. Hy vọng quý khách có thể tận hưởng những
                  khoảnh khắc như kỹ nghi mỗi ngày cùng các hoạt động đa
                  dạng tại khu vui chơi dành cho trẻ em Little Monogram,
                  không gian trãi nghiêm giải trí Activity Studio, các bề
                  bơi ngoài trời đa dạng hãp dẫn của Shilla Monogram Đà
                  Nẵng.&nbsp;
                </p>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="clear" />
      </section>

      {/* //section 6 */}

      <section id="content-section-6" style={{ width: "100%", margin: 0, padding: 0 }}>
        <div
          className="gdlr-color-wrapper gdlr-show-all no-skin"
          style={{
            backgroundColor: "#292929",
            paddingTop: "70px",
            width: "100%",
            margin: 0,
            paddingLeft: 0,
            paddingRight: 0,
            fontFamily: "Times New Roman, serif",
          }}
        >
          <div className="container">
            <div className="six columns">
              <div className="gdlr-item-title-wrapper gdlr-item pos-left pos-left-divider ">
                <div className="gdlr-item-title-head">
                  <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border">
                    Các cấp thành viên
                  </h3>
                  <div className="clear" />
                </div>
                <div className="gdlr-item-title-divider" />
              </div>
              <div className="blog-item-wrapper">
                <div className="blog-item-holder">
                  <div className="gdlr-item gdlr-blog-widget">
                    <div className="gdlr-ux gdlr-blog-widget-ux">
                      <article
                        id="post-862"
                        className="post-862 post type-post status-publish format-standard has-post-thumbnail hentry category-blog category-fit-row tag-blog tag-link tag-news"
                      >
                        <div className="gdlr-standard-style">
                          <div className="blog-date-wrapper gdlr-title-font">
                            <span className="blog-date-day">Lần</span>
                            <span className="blog-date-month">Đầu</span>
                          </div>
                          <header className="post-header">
                            <h3 className="gdlr-blog-title">
                              <a href="magna-pars-studiorum\index.html">
                                Hạng đồng
                              </a>
                            </h3>
                            <div className="gdlr-blog-excerpt">
                              Quà lần đầu, điểm(3% giá trị phòng),...
                              <div className="clear" />
                              <a
                                href="magna-pars-studiorum\index.html"
                                className="excerpt-read-more"
                              >
                                Continue Reading
                                <i className="fa fa-long-arrow-right icon-long-arrow-right" />
                              </a>
                            </div>
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
                      <article
                        id="post-859"
                        className="post-859 post type-post status-publish format-standard has-post-thumbnail hentry category-blog category-fit-row"
                      >
                        <div className="gdlr-standard-style">
                          <div className="blog-date-wrapper gdlr-title-font">
                            <span className="blog-date-day">1 ngày</span>
                            <span className="blog-date-month">
                              100 điểm
                            </span>
                          </div>
                          <header className="post-header">
                            <h3 className="gdlr-blog-title">
                              <a href="sedial-eiusmod-tempor\index.html">
                                Hạng bạc
                              </a>
                            </h3>
                            <div className="gdlr-blog-excerpt">
                              Quà thành viên, điểm (1000+3%), phiếu giảm
                              giá 10%,...
                              <div className="clear" />
                              <a
                                href="sedial-eiusmod-tempor\index.html"
                                className="excerpt-read-more"
                              >
                                Continue Reading
                                <i className="fa fa-long-arrow-right icon-long-arrow-right" />
                              </a>
                            </div>
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
                      <article
                        id="post-2211"
                        className="post-2211 post type-post status-publish format-gallery has-post-thumbnail hentry category-blog category-life-style category-news-article tag-blog tag-gallery-thumbnail tag-life-style tag-news post_format-post-format-gallery"
                      >
                        <div className="gdlr-standard-style">
                          <div className="blog-date-wrapper gdlr-title-font">
                            <span className="blog-date-day">10 ngày</span>
                            <span className="blog-date-month">
                              1000 điểm
                            </span>
                          </div>
                          <header className="post-header">
                            <h3 className="gdlr-blog-title">
                              <a href="gallery-post-format-title\index.html">
                                Hạng Vàng
                              </a>
                            </h3>
                            <div className="gdlr-blog-excerpt">
                              Quà thành viên, điểm(3000+5%), phiếu giảm
                              giá 20%, quà khác...
                              <div className="clear" />
                              <a
                                href="gallery-post-format-title\index.html"
                                className="excerpt-read-more"
                              >
                                Continue Reading
                                <i className="fa fa-long-arrow-right icon-long-arrow-right" />
                              </a>
                            </div>
                            <div className="clear" />
                          </header>
                          {/* entry-header */}
                          <div className="clear" />
                        </div>
                      </article>
                      {/* #post */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="six columns">
              <div className="gdlr-item-title-wrapper gdlr-item pos-left pos-left-divider ">
                <div className="gdlr-item-title-head">
                  <h3 className="gdlr-item-title gdlr-skin-title gdlr-skin-border">
                    Trưng bày
                  </h3>
                  <div className="clear" />
                </div>
                <div className="gdlr-item-title-divider" />
              </div>
              <div className="gdlr-gallery-item gdlr-item">
                <div className="gallery-column six columns">
                  <div className="gallery-item">
                    <img
                      src="frontend\anh\tb1.png"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="gallery-column three columns">
                  <div className="gallery-item">
                    <img
                      src="frontend\anh\tb2.png"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="gallery-column three columns">
                  <div className="gallery-item">
                    <img
                      src="frontend\anh\tb3.png"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="gallery-column three columns">
                  <div className="gallery-item">
                    <img
                      src="frontend\anh\tb4.png"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="gallery-column three columns">
                  <div className="gallery-item">
                    <img
                      src="frontend\anh\tb5.png"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="clear" />
                <div className="gallery-column three columns">
                  <div className="gallery-item">
                    <img
                      src="frontend\anh\tb6.png"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="gallery-column three columns">
                  <div className="gallery-item">
                    <img
                      src="frontend\anh\tb7.png"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="gallery-column three columns">
                  <div className="gallery-item">
                    <img
                      src="frontend\anh\tb8.png"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="gallery-column three columns">
                  <div className="gallery-item">
                    <img
                      src="frontend\anh\tb9.png"
                      alt=""
                      width={400}
                      height={400}
                    />
                  </div>
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

       <section id="content-section-7" style={{ width: "100%", margin: 0, padding: 0 }}>
        <div className="gdlr-color-wrapper  gdlr-show-all gdlr-skin-dark-testimonial" style={{ backgroundColor: '#1e1e1e', paddingTop: '80px', paddingBottom: '45px', display: 'flex' }}>
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
                  <div className="flexslider" data-type="carousel" data-nav-container="gdlr-testimonial-item" data-columns={1}>
                    <ul className="slides">
                      <li className="testimonial-item">
                        <div className="testimonial-content gdlr-skin-content">
                          <p>Shilla Rewards là dịch vụ tổng hợp hoàn toàn mới dành cho hội viên, cung cấp các ưu đãi và lợi ích điểm thường tại Seoul/Jeju Shilla Hotel, Shilla Monogram, Shilla Stay và các khách sạn liên kết.</p>
                        </div>
                        <div className="testimonial-info"><span className="testimonial-author gdlr-skin-link-color">Co-op</span><span className="testimonial-position gdlr-skin-info"><span>, </span>Shilla Stay</span>
                        </div>
                      </li>
                      <li className="testimonial-item">
                        <div className="testimonial-content gdlr-skin-content">
                          <p>Tận hưởng kỳ nghi dưỡng của bạn tại Đà Năng.
                            Việt Nam với nhiều hoạt động bao gồm các sự kiện và các môn thể thao giải trí.</p>
                        </div>
                        <div className="testimonial-info"><span className="testimonial-author gdlr-skin-link-color">Phòng giải trí</span><span className="testimonial-position gdlr-skin-info"><span>, </span>Shilla Monogram</span>
                        </div>
                      </li>
                      <li className="testimonial-item">
                        <div className="testimonial-content gdlr-skin-content">Tại Little Monogram, các khách hàng nhỏ tuổi có thể thoả sức vui chơi với các hoạt động như leo núi nhân tạo, nhà bóng, cầu trượt và cửa hàng cho các bạn nhỏ mặc thử nhiều loại trang phục khác nhau.<p />
                        </div>
                        <div className="testimonial-info"><span className="testimonial-author gdlr-skin-link-color">Không gian mở</span><span className="testimonial-position gdlr-skin-info"><span>, </span>Dành cho khách nhí</span>
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
        <div className="clear"></div>  {/* Thay vì <div className="clear" /> */}

      </section>





      {/* Các sections khác */}
      {/* Section 4, Section 5, Section 6, Section 7... */}

    </>
  );
}

export default Home;
