import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
function ChooseRoom() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const navigate = useNavigate(); // Dùng navigate để chuyển trang
  
    // Gọi API để lấy danh sách phòng khi component được render
    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/choose-room')  // Đảm bảo URL này đúng với API của bạn
        .then((response) => {
          if (!response.ok) {
            throw new Error('Không thể lấy dữ liệu phòng');
          }
          return response.json();
        })
        .then((data) => {
          setRooms(data);  // Lưu dữ liệu vào state
          setLoading(false);  // Đặt trạng thái loading là false
        })
        .catch((error) => {
          setError(error.message);  // Xử lý lỗi nếu có
          setLoading(false);  // Đặt trạng thái loading là false
        });
    }, []); // Chỉ gọi API một lần khi component được render
  
    // Nếu đang tải dữ liệu, hiển thị spinner hoặc thông báo
    if (loading) {
      return <div>Đang tải dữ liệu phòng...</div>;
    }
  
    // Nếu có lỗi, hiển thị thông báo lỗi
    if (error) {
      return <div>Lỗi: {error}</div>;
    }
  
    // Hàm xử lý khi người dùng nhấn nút "Đặt phòng"
    function handleBookRoom(room) {
      // Chuyển hướng tới trang khác, ví dụ đến trang chi tiết phòng
      console.log('Đặt phòng:', room);
      navigate(`/room-details/${room.id}`);  // Giả sử đường dẫn tới chi tiết phòng
    }
    return(
    <div>
        <div className="gdlr-header-inner">
            <div className="gdlr-header-container container">
                {/* logo */}
                <div className="gdlr-logo">
                    <div className="gdlr-logo-inner">
                        <a href="https://demo.goodlayers.com/hotelmaster/dark">
                            <img src="https://demo.goodlayers.com/hotelmaster/dark/wp-content/uploads/2015/04/logo-dark.png" alt="" width={499} height={163} />						</a>
                        <div className="gdlr-responsive-navigation dl-menuwrapper" id="gdlr-responsive-navigation"><button className="dl-trigger">Open Menu</button><ul id="menu-main-menu" className="dl-menu gdlr-main-mobile-menu"><li id="menu-item-4149" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3720 current_page_item menu-item-4149"><a href="https://demo.goodlayers.com/hotelmaster/dark/" aria-current="page">Home</a></li>
                            <li id="menu-item-4128" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4128"><a href="https://demo.goodlayers.com/hotelmaster/dark/about-us/">Pages</a>
                                <ul className="dl-submenu">
                                    <li id="menu-item-4151" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4151"><a href="https://demo.goodlayers.com/hotelmaster/dark/booking-management/">Booking Management</a></li>
                                    <li id="menu-item-4055" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4055"><a href="https://demo.goodlayers.com/hotelmaster/dark/about-us/">About Us</a></li>
                                    <li id="menu-item-4106" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4106"><a href="https://demo.goodlayers.com/hotelmaster/dark/contact-page/">Contact Page 1</a></li>
                                    <li id="menu-item-4105" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4105"><a href="https://demo.goodlayers.com/hotelmaster/dark/contact-page-2/">Contact Page 2</a></li>
                                    <li id="menu-item-4121" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4121"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-3-columns-no-space/">Portfolio</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4008" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4008"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-3-columns/">Portfolio Classic</a>
                                                <ul className="dl-submenu">
                                                    <li id="menu-item-4042" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4042"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-1-column/">Portfolio Grid 1 Column (Both Sidebar)</a></li>
                                                    <li id="menu-item-4044" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4044"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-2-columns/">Portfolio Grid 2 Columns (Right Sidebar)</a></li>
                                                    <li id="menu-item-4029" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4029"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-3-columns/">Portfolio Grid 3 Columns</a></li>
                                                    <li id="menu-item-4043" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4043"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-4-columns/">Portfolio Grid 4 Columns</a></li>
                                                    <li id="menu-item-4114" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4114"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-2-columns-no-space/">Portfolio Grid 2 Columns, No Space</a></li>
                                                    <li id="menu-item-4113" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4113"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-3-columns-no-space/">Portfolio Grid 3 Columns, No Space</a></li>
                                                    <li id="menu-item-4112" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4112"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-4-columns-no-space/">Portfolio Grid 4 Columns, No Space</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-4126" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4126"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-3-columns/">Portfolio Modern</a>
                                                <ul className="dl-submenu">
                                                    <li id="menu-item-4041" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4041"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-3-columns/">Portfolio Modern 3 Columns</a></li>
                                                    <li id="menu-item-4040" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4040"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-4-columns/">Portfolio Modern 4 Columns</a></li>
                                                    <li id="menu-item-4116" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4116"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-3-columns-no-space/">Portfolio Modern 3 Columns, No Space</a></li>
                                                    <li id="menu-item-4115" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4115"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-4-columns-no-space/">Portfolio Modern 4 Columns, No Space</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-4127" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4127"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-3-columns-with-filter/">Portfolio With Filter</a>
                                                <ul className="dl-submenu">
                                                    <li id="menu-item-4045" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4045"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-1-columns-with-filter/">Portfolio Grid 1 Col With Filter</a></li>
                                                    <li id="menu-item-4046" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4046"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-2-columns-with-filter/">Portfolio Grid 2 Cols With Filter</a></li>
                                                    <li id="menu-item-4047" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4047"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-3-columns-with-filter/">Portfolio Grid 3 Cols With Filter</a></li>
                                                    <li id="menu-item-4048" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4048"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-4-columns-with-filter/">Portfolio Grid 4 Cols With Filter</a></li>
                                                    <li id="menu-item-4049" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4049"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-3-columns-with-filter/">Portfolio Modern 3 Cols With Filter</a></li>
                                                    <li id="menu-item-4050" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4050"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-4-columns-with-filter/">Portfolio Modern 4 Cols With Filter</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-4000" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4000"><a href="https://demo.goodlayers.com/hotelmaster/dark/404error">404 Page</a></li>
                                    <li id="menu-item-4056" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4056"><a href="https://demo.goodlayers.com/hotelmaster/dark/testimonial/">Testimonial</a></li>
                                    <li id="menu-item-4148" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4148"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-3-columns-with-caption/">Gallery</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4147" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4147"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-2-columns-without-caption/">Gallery 2 Columns Without Caption</a></li>
                                            <li id="menu-item-4125" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4125"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-2-columns-with-caption/">Gallery 2 Columns With Caption</a></li>
                                            <li id="menu-item-4146" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4146"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-3-columns-without-caption/">Gallery 3 Columns Without Caption</a></li>
                                            <li id="menu-item-4145" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4145"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-3-columns-with-caption/">Gallery 3 Columns With Caption</a></li>
                                            <li id="menu-item-4143" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4143"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-4-columns-without-caption/">Gallery 4 Columns Without Caption</a></li>
                                            <li id="menu-item-4144" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4144"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-4-columns-with-caption/">Gallery 4 Columns With Caption</a></li>
                                            <li id="menu-item-4142" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4142"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-5-columns-without-caption/">Gallery 5 Columns Without Caption</a></li>
                                            <li id="menu-item-4141" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4141"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-5-columns-with-caption/">Gallery 5 Columns With Caption</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-4001" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4001"><a href="#">Video Tutorial</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4111" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4111"><a href="https://demo.goodlayers.com/hotelmaster/dark/installing-theme-and-setting-as-demo-site/">Installing theme and Setting as demo site</a></li>
                                            <li id="menu-item-4110" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4110"><a href="https://demo.goodlayers.com/hotelmaster/dark/creating-portfolio-filterer/">Creating Portfolio &amp; Filterer</a></li>
                                            <li id="menu-item-4109" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4109"><a href="https://demo.goodlayers.com/hotelmaster/dark/creating-blog/">Creating Blog</a></li>
                                            <li id="menu-item-4107" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4107"><a href="https://demo.goodlayers.com/hotelmaster/dark/thumbnail-management/">Thumbnail Management</a></li>
                                            <li id="menu-item-4108" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4108"><a href="https://demo.goodlayers.com/hotelmaster/dark/creating-gallery/">Creating Gallery</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-4139" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4139"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-3-columns/">Rooms</a>
                                <ul className="dl-submenu">
                                    <li id="menu-item-4130" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4130"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-3-columns/">Room Modern</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4132" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4132"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-1-column/">Room Modern 1 Column</a></li>
                                            <li id="menu-item-4131" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4131"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-2-columns/">Room Modern 2 Columns</a></li>
                                            <li id="menu-item-4137" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4137"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-3-columns/">Room Modern 3 Columns</a></li>
                                            <li id="menu-item-4140" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4140"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-4-columns-2/">Room Modern 4 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-4138" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4138"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-3-columns/">Room Classic 3 Columns</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4134" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4134"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-1-column/">Room Classic 1 Column</a></li>
                                            <li id="menu-item-4135" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4135"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-2-columns/">Room Classic 2 Columns</a></li>
                                            <li id="menu-item-4136" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4136"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-3-columns/">Room Classic 3 Columns</a></li>
                                            <li id="menu-item-4133" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4133"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-4-columns/">Room Classic 4 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-4129" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4129"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-4-columns/">Room Medium Thumbnail</a></li>
                                    <li id="menu-item-4152" className="menu-item menu-item-type-post_type menu-item-object-room menu-item-4152"><a href="https://demo.goodlayers.com/hotelmaster/dark/room/superior-room-two-double-beds/">Rooms Single</a></li>
                                    <li id="menu-item-4150" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4150"><a href="https://demo.goodlayers.com/hotelmaster/dark/booking-management/">Booking Management</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-4004" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-4004"><a href="https://demo.goodlayers.com/hotelmaster/dark/?booking" aria-current="page">Reservation</a></li>
                            <li id="menu-item-4003" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4003"><a href="#">Features</a>
                                <ul className="dl-submenu">
                                    <li id="menu-item-4092" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4092"><a href="https://demo.goodlayers.com/hotelmaster/dark/custom-skin/">Custom Skin</a></li>
                                    <li id="menu-item-4091" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4091"><a href="https://demo.goodlayers.com/hotelmaster/dark/sidebar-size-customizable/">Sidebar Size Customizable</a></li>
                                    <li id="menu-item-4104" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4104"><a href="https://demo.goodlayers.com/hotelmaster/dark/scalable-container/">Scalable Container</a></li>
                                    <li id="menu-item-4085" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4085"><a href="https://demo.goodlayers.com/hotelmaster/dark/post-format/">Post Format</a></li>
                                    <li id="menu-item-4086" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4086"><a href="https://demo.goodlayers.com/hotelmaster/dark/google-font/">Google Font</a></li>
                                    <li id="menu-item-4087" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4087"><a href="https://demo.goodlayers.com/hotelmaster/dark/unlimited-sidebar/">Unlimited Sidebar</a></li>
                                    <li id="menu-item-4088" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4088"><a href="https://demo.goodlayers.com/hotelmaster/dark/font-uploader/">Font Uploader</a></li>
                                    <li id="menu-item-4084" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4084"><a href="https://demo.goodlayers.com/hotelmaster/dark/layer-slider-2/">Master Slider</a></li>
                                    <li id="menu-item-4090" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4090"><a href="https://demo.goodlayers.com/hotelmaster/dark/font-awesome/">Font Awesome</a></li>
                                    <li id="menu-item-4083" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4083"><a href="https://demo.goodlayers.com/hotelmaster/dark/optimized-code-seo/">Optimized Code &amp; SEO</a></li>
                                    <li id="menu-item-4089" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4089"><a href="https://demo.goodlayers.com/hotelmaster/dark/shortcode-generator/">Shortcode Generator</a></li>
                                    <li id="menu-item-4124" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4124"><a href="https://demo.goodlayers.com/hotelmaster/dark/visual-editor-in-page-builder-2/">Visual Editor in Page Builder</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-4007" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4007"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-full-with-right-sidebar/">Blog</a>
                                <ul className="dl-submenu">
                                    <li id="menu-item-3747" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3747"><a href="#">Blog Full</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4039" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4039"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-full-with-right-sidebar/">Blog Full With Right Sidebar</a></li>
                                            <li id="menu-item-4038" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4038"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-full-with-left-sidebar/">Blog Full With Left Sidebar</a></li>
                                            <li id="menu-item-4037" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4037"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-full-with-both-sidebar/">Blog Full With Both Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-3748" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3748"><a href="#">Blog Column</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4030" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4030"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-1-column/">Blog 1 Column (Right Sidebar)</a></li>
                                            <li id="menu-item-4031" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4031"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-2-columns/">Blog 2 Columns (Right Sidebar)</a></li>
                                            <li id="menu-item-4033" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4033"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-3-columns/">Blog 3 Columns</a></li>
                                            <li id="menu-item-4035" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4035"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-4-columns/">Blog 4 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-3995" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3995"><a href="#">Blog Masonry</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4032" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4032"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-2-columns-masonry/">Blog 2 Columns – Masonry (Right Sidebar)</a></li>
                                            <li id="menu-item-4034" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4034"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-3-columns-masonry/">Blog 3 Columns – Masonry</a></li>
                                            <li id="menu-item-4036" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4036"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-4-columns-masonry/">Blog 4 Columns – Masonry</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-4002" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4002"><a href="#">Blog Medium</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4120" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4120"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-medium-with-right-sidebar/">Blog Medium With Right Sidebar</a></li>
                                            <li id="menu-item-4119" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4119"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-medium-with-left-sidebar/">Blog Medium With Left Sidebar</a></li>
                                            <li id="menu-item-4118" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4118"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-medium-with-both-sidebar/">Blog Medium With Both Sidebar</a></li>
                                            <li id="menu-item-4117" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4117"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-medium-without-sidebar/">Blog Medium Without Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-4103" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4103"><a href="https://demo.goodlayers.com/hotelmaster/dark/typography/">Shortcodes</a>
                                <ul className="dl-submenu">
                                    <li id="menu-item-3996" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3996"><a href="#">Shortcode Set 1</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4009" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4009"><a href="https://demo.goodlayers.com/hotelmaster/dark/accordiontoggle-box/">Accordion/Toggle Box</a></li>
                                            <li id="menu-item-4028" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4028"><a href="https://demo.goodlayers.com/hotelmaster/dark/audio-shortcode/">Audio Shortcode</a></li>
                                            <li id="menu-item-4010" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4010"><a href="https://demo.goodlayers.com/hotelmaster/dark/button/">Button</a></li>
                                            <li id="menu-item-4053" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4053"><a href="https://demo.goodlayers.com/hotelmaster/dark/column-shortcode/">Column Shortcode</a></li>
                                            <li id="menu-item-4013" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4013"><a href="https://demo.goodlayers.com/hotelmaster/dark/divider/">Divider</a></li>
                                            <li id="menu-item-4024" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4024"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-shortcode/">Gallery Shortcode</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-3997" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3997"><a href="#">Shortcode Set 2</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4021" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4021"><a href="https://demo.goodlayers.com/hotelmaster/dark/heading-tag/">Heading Tag</a></li>
                                            <li id="menu-item-4023" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4023"><a href="https://demo.goodlayers.com/hotelmaster/dark/icons-icon-boxes/">icons &amp; icon boxes</a></li>
                                            <li id="menu-item-4026" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4026"><a href="https://demo.goodlayers.com/hotelmaster/dark/lightbox-frames/">Lightbox &amp; Frames</a></li>
                                            <li id="menu-item-4017" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4017"><a href="https://demo.goodlayers.com/hotelmaster/dark/notification-boxes/">Notification Boxes</a></li>
                                            <li id="menu-item-4014" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4014"><a href="https://demo.goodlayers.com/hotelmaster/dark/personnel/">Personnel</a></li>
                                            <li id="menu-item-4052" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4052"><a href="https://demo.goodlayers.com/hotelmaster/dark/post-slider/">Post Slider</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-3998" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3998"><a href="#">Shortcode Set 3</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4057" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4057"><a href="https://demo.goodlayers.com/hotelmaster/dark/price-table/">Price Table</a></li>
                                            <li id="menu-item-4054" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4054"><a href="https://demo.goodlayers.com/hotelmaster/dark/process/">Process</a></li>
                                            <li id="menu-item-4018" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4018"><a href="https://demo.goodlayers.com/hotelmaster/dark/progress-circle/">Progress Circle</a></li>
                                            <li id="menu-item-4019" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4019"><a href="https://demo.goodlayers.com/hotelmaster/dark/skills/">Skills</a></li>
                                            <li id="menu-item-4051" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4051"><a href="https://demo.goodlayers.com/hotelmaster/dark/slider-shortcode/">Slider Shortcode</a></li>
                                            <li id="menu-item-4022" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4022"><a href="https://demo.goodlayers.com/hotelmaster/dark/space/">Space</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-3999" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3999"><a href="#">Shortcode Set 4</a>
                                        <ul className="dl-submenu">
                                            <li id="menu-item-4011" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4011"><a href="https://demo.goodlayers.com/hotelmaster/dark/styled-box/">Styled Box</a></li>
                                            <li id="menu-item-4020" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4020"><a href="https://demo.goodlayers.com/hotelmaster/dark/stunning-text/">Stunning Text</a></li>
                                            <li id="menu-item-4025" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4025"><a href="https://demo.goodlayers.com/hotelmaster/dark/table/">Table</a></li>
                                            <li id="menu-item-4016" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4016"><a href="https://demo.goodlayers.com/hotelmaster/dark/tabs/">Tabs</a></li>
                                            <li id="menu-item-4015" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4015"><a href="https://demo.goodlayers.com/hotelmaster/dark/testimonial-2/">Testimonial &amp; Quote</a></li>
                                            <li id="menu-item-4012" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4012"><a href="https://demo.goodlayers.com/hotelmaster/dark/typography/">Typography</a></li>
                                            <li id="menu-item-4027" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4027"><a href="https://demo.goodlayers.com/hotelmaster/dark/video/">Video</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul></div>					</div>
                </div>
                {/* navigation */}
                <div className="gdlr-navigation-wrapper"><nav className="gdlr-navigation" id="gdlr-main-navigation" role="navigation"><ul id="menu-main-menu-1" className="sf-menu gdlr-main-menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3720 current_page_item menu-item-4149menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-3720 current_page_item menu-item-4149 gdlr-normal-menu"><a href="https://demo.goodlayers.com/hotelmaster/dark/">Home</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4128menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4128 gdlr-normal-menu"><a href="https://demo.goodlayers.com/hotelmaster/dark/about-us/" className="sf-with-ul-pre">Pages</a>
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4151"><a href="https://demo.goodlayers.com/hotelmaster/dark/booking-management/">Booking Management</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4055"><a href="https://demo.goodlayers.com/hotelmaster/dark/about-us/">About Us</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4106"><a href="https://demo.goodlayers.com/hotelmaster/dark/contact-page/">Contact Page 1</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4105"><a href="https://demo.goodlayers.com/hotelmaster/dark/contact-page-2/">Contact Page 2</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4121"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-3-columns-no-space/" className="sf-with-ul-pre">Portfolio</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4008"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-3-columns/" className="sf-with-ul-pre">Portfolio Classic</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4042"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-1-column/">Portfolio Grid 1 Column (Both Sidebar)</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4044"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-2-columns/">Portfolio Grid 2 Columns (Right Sidebar)</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4029"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-3-columns/">Portfolio Grid 3 Columns</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4043"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-4-columns/">Portfolio Grid 4 Columns</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4114"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-2-columns-no-space/">Portfolio Grid 2 Columns, No Space</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4113"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-3-columns-no-space/">Portfolio Grid 3 Columns, No Space</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4112"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-4-columns-no-space/">Portfolio Grid 4 Columns, No Space</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4126"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-3-columns/" className="sf-with-ul-pre">Portfolio Modern</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4041"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-3-columns/">Portfolio Modern 3 Columns</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4040"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-4-columns/">Portfolio Modern 4 Columns</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4116"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-3-columns-no-space/">Portfolio Modern 3 Columns, No Space</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4115"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-4-columns-no-space/">Portfolio Modern 4 Columns, No Space</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4127"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-3-columns-with-filter/" className="sf-with-ul-pre">Portfolio With Filter</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4045"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-1-columns-with-filter/">Portfolio Grid 1 Col With Filter</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4046"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-2-columns-with-filter/">Portfolio Grid 2 Cols With Filter</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4047"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-3-columns-with-filter/">Portfolio Grid 3 Cols With Filter</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4048"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-grid-4-columns-with-filter/">Portfolio Grid 4 Cols With Filter</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4049"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-3-columns-with-filter/">Portfolio Modern 3 Cols With Filter</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4050"><a href="https://demo.goodlayers.com/hotelmaster/dark/portfolio-modern-4-columns-with-filter/">Portfolio Modern 4 Cols With Filter</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4000"><a href="https://demo.goodlayers.com/hotelmaster/dark/404error">404 Page</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4056"><a href="https://demo.goodlayers.com/hotelmaster/dark/testimonial/">Testimonial</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4148"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-3-columns-with-caption/" className="sf-with-ul-pre">Gallery</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4147"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-2-columns-without-caption/">Gallery 2 Columns Without Caption</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4125"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-2-columns-with-caption/">Gallery 2 Columns With Caption</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4146"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-3-columns-without-caption/">Gallery 3 Columns Without Caption</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4145"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-3-columns-with-caption/">Gallery 3 Columns With Caption</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4143"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-4-columns-without-caption/">Gallery 4 Columns Without Caption</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4144"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-4-columns-with-caption/">Gallery 4 Columns With Caption</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4142"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-5-columns-without-caption/">Gallery 5 Columns Without Caption</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4141"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-5-columns-with-caption/">Gallery 5 Columns With Caption</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4001"><a href="#" className="sf-with-ul-pre">Video Tutorial</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4111"><a href="https://demo.goodlayers.com/hotelmaster/dark/installing-theme-and-setting-as-demo-site/">Installing theme and Setting as demo site</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4110"><a href="https://demo.goodlayers.com/hotelmaster/dark/creating-portfolio-filterer/">Creating Portfolio &amp; Filterer</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4109"><a href="https://demo.goodlayers.com/hotelmaster/dark/creating-blog/">Creating Blog</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4107"><a href="https://demo.goodlayers.com/hotelmaster/dark/thumbnail-management/">Thumbnail Management</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4108"><a href="https://demo.goodlayers.com/hotelmaster/dark/creating-gallery/">Creating Gallery</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4139menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4139 gdlr-normal-menu"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-3-columns/" className="sf-with-ul-pre">Rooms</a>
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4130"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-3-columns/" className="sf-with-ul-pre">Room Modern</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4132"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-1-column/">Room Modern 1 Column</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4131"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-2-columns/">Room Modern 2 Columns</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4137"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-3-columns/">Room Modern 3 Columns</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4140"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-4-columns-2/">Room Modern 4 Columns</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4138"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-3-columns/" className="sf-with-ul-pre">Room Classic 3 Columns</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4134"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-1-column/">Room Classic 1 Column</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4135"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-2-columns/">Room Classic 2 Columns</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4136"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-3-columns/">Room Classic 3 Columns</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4133"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-classic-4-columns/">Room Classic 4 Columns</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4129"><a href="https://demo.goodlayers.com/hotelmaster/dark/room-modern-4-columns/">Room Medium Thumbnail</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-room menu-item-4152"><a href="https://demo.goodlayers.com/hotelmaster/dark/room/superior-room-two-double-beds/">Rooms Single</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4150"><a href="https://demo.goodlayers.com/hotelmaster/dark/booking-management/">Booking Management</a></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-4004menu-item menu-item-type-custom menu-item-object-custom current-menu-item menu-item-4004 gdlr-normal-menu"><a href="https://demo.goodlayers.com/hotelmaster/dark/?booking">Reservation</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4003menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4003 gdlr-normal-menu"><a href="#" className="sf-with-ul-pre">Features</a>
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4092"><a href="https://demo.goodlayers.com/hotelmaster/dark/custom-skin/">Custom Skin</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4091"><a href="https://demo.goodlayers.com/hotelmaster/dark/sidebar-size-customizable/">Sidebar Size Customizable</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4104"><a href="https://demo.goodlayers.com/hotelmaster/dark/scalable-container/">Scalable Container</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4085"><a href="https://demo.goodlayers.com/hotelmaster/dark/post-format/">Post Format</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4086"><a href="https://demo.goodlayers.com/hotelmaster/dark/google-font/">Google Font</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4087"><a href="https://demo.goodlayers.com/hotelmaster/dark/unlimited-sidebar/">Unlimited Sidebar</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4088"><a href="https://demo.goodlayers.com/hotelmaster/dark/font-uploader/">Font Uploader</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4084"><a href="https://demo.goodlayers.com/hotelmaster/dark/layer-slider-2/">Master Slider</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4090"><a href="https://demo.goodlayers.com/hotelmaster/dark/font-awesome/">Font Awesome</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4083"><a href="https://demo.goodlayers.com/hotelmaster/dark/optimized-code-seo/">Optimized Code &amp; SEO</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4089"><a href="https://demo.goodlayers.com/hotelmaster/dark/shortcode-generator/">Shortcode Generator</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4124"><a href="https://demo.goodlayers.com/hotelmaster/dark/visual-editor-in-page-builder-2/">Visual Editor in Page Builder</a></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4007menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4007 gdlr-normal-menu"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-full-with-right-sidebar/" className="sf-with-ul-pre">Blog</a>
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3747"><a href="#" className="sf-with-ul-pre">Blog Full</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4039"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-full-with-right-sidebar/">Blog Full With Right Sidebar</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4038"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-full-with-left-sidebar/">Blog Full With Left Sidebar</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4037"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-full-with-both-sidebar/">Blog Full With Both Sidebar</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3748"><a href="#" className="sf-with-ul-pre">Blog Column</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4030"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-1-column/">Blog 1 Column (Right Sidebar)</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4031"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-2-columns/">Blog 2 Columns (Right Sidebar)</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4033"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-3-columns/">Blog 3 Columns</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4035"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-4-columns/">Blog 4 Columns</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3995"><a href="#" className="sf-with-ul-pre">Blog Masonry</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4032"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-2-columns-masonry/">Blog 2 Columns – Masonry (Right Sidebar)</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4034"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-3-columns-masonry/">Blog 3 Columns – Masonry</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4036"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-4-columns-masonry/">Blog 4 Columns – Masonry</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4002"><a href="#" className="sf-with-ul-pre">Blog Medium</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4120"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-medium-with-right-sidebar/">Blog Medium With Right Sidebar</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4119"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-medium-with-left-sidebar/">Blog Medium With Left Sidebar</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4118"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-medium-with-both-sidebar/">Blog Medium With Both Sidebar</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4117"><a href="https://demo.goodlayers.com/hotelmaster/dark/blog-medium-without-sidebar/">Blog Medium Without Sidebar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4103menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4103 gdlr-mega-menu"><a href="https://demo.goodlayers.com/hotelmaster/dark/typography/" className="sf-with-ul-pre">Shortcodes</a><div className="sf-mega">
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3996" data-column="three columns" data-size="1/4"><a href="#" className="sf-with-ul-pre">Shortcode Set 1</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4009"><a href="https://demo.goodlayers.com/hotelmaster/dark/accordiontoggle-box/">Accordion/Toggle Box</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4028"><a href="https://demo.goodlayers.com/hotelmaster/dark/audio-shortcode/">Audio Shortcode</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4010"><a href="https://demo.goodlayers.com/hotelmaster/dark/button/">Button</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4053"><a href="https://demo.goodlayers.com/hotelmaster/dark/column-shortcode/">Column Shortcode</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4013"><a href="https://demo.goodlayers.com/hotelmaster/dark/divider/">Divider</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4024"><a href="https://demo.goodlayers.com/hotelmaster/dark/gallery-shortcode/">Gallery Shortcode</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3997" data-column="three columns" data-size="1/4"><a href="#" className="sf-with-ul-pre">Shortcode Set 2</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4021"><a href="https://demo.goodlayers.com/hotelmaster/dark/heading-tag/">Heading Tag</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4023"><a href="https://demo.goodlayers.com/hotelmaster/dark/icons-icon-boxes/">icons &amp; icon boxes</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4026"><a href="https://demo.goodlayers.com/hotelmaster/dark/lightbox-frames/">Lightbox &amp; Frames</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4017"><a href="https://demo.goodlayers.com/hotelmaster/dark/notification-boxes/">Notification Boxes</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4014"><a href="https://demo.goodlayers.com/hotelmaster/dark/personnel/">Personnel</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4052"><a href="https://demo.goodlayers.com/hotelmaster/dark/post-slider/">Post Slider</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3998" data-column="three columns" data-size="1/4"><a href="#" className="sf-with-ul-pre">Shortcode Set 3</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4057"><a href="https://demo.goodlayers.com/hotelmaster/dark/price-table/">Price Table</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4054"><a href="https://demo.goodlayers.com/hotelmaster/dark/process/">Process</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4018"><a href="https://demo.goodlayers.com/hotelmaster/dark/progress-circle/">Progress Circle</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4019"><a href="https://demo.goodlayers.com/hotelmaster/dark/skills/">Skills</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4051"><a href="https://demo.goodlayers.com/hotelmaster/dark/slider-shortcode/">Slider Shortcode</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4022"><a href="https://demo.goodlayers.com/hotelmaster/dark/space/">Space</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3999" data-column="three columns" data-size="1/4"><a href="#" className="sf-with-ul-pre">Shortcode Set 4</a>
                                <ul className="sub-menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4011"><a href="https://demo.goodlayers.com/hotelmaster/dark/styled-box/">Styled Box</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4020"><a href="https://demo.goodlayers.com/hotelmaster/dark/stunning-text/">Stunning Text</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4025"><a href="https://demo.goodlayers.com/hotelmaster/dark/table/">Table</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4016"><a href="https://demo.goodlayers.com/hotelmaster/dark/tabs/">Tabs</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4015"><a href="https://demo.goodlayers.com/hotelmaster/dark/testimonial-2/">Testimonial &amp; Quote</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4012"><a href="https://demo.goodlayers.com/hotelmaster/dark/typography/">Typography</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4027"><a href="https://demo.goodlayers.com/hotelmaster/dark/video/">Video</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div></li>
                </ul></nav>
                    <span className="gdlr-menu-search-button-sep">•</span>
                    <i className="fa fa-search icon-search gdlr-menu-search-button" id="gdlr-menu-search-button" />
                    <div className="gdlr-menu-search-wrap">
                        <div className="gdlr-menu-search" id="gdlr-menu-search">
                            <form method="POST" id="searchform" action="">
                                <div className="search-text">
                                    <input type="text" defaultValue="Type Keywords" name="s" autoComplete="off" data-default="Type Keywords" />
                                </div>
                                <input type="submit" defaultValue />
                                <div className="clear" />
                            </form>
                        </div>
                    </div>
                    <div className="gdlr-navigation-gimmick " id="gdlr-navigation-gimmick" /><div className="clear" /></div>
                <div className="clear" />
            </div>
        </div>
        <div id="gdlr-header-substitute" />
        <div className="gdlr-page-title-wrapper">
            <div className="gdlr-page-title-overlay" />
            <div className="gdlr-page-title-container container">
                <h1 className="gdlr-page-title">Booking</h1>
            </div>
        </div>
        {/* is search */}	<div className="content-wrapper"><div className="gdlr-content">
            <div className="with-sidebar-wrapper">
                <div className="with-sidebar-container container gdlr-class-no-sidebar">
                    <div className="with-sidebar-left twelve columns">
                        <div className="with-sidebar-content twelve columns">
                            <div className="gdlr-item gdlr-item-start-content" id="gdlr-single-booking-content" data-ajax="https://demo.goodlayers.com/hotelmaster/dark/wp-admin/admin-ajax.php">
                                <form className="gdlr-reservation-bar" id="gdlr-reservation-bar" data-action="gdlr_hotel_booking"><div className="gdlr-reservation-bar-title">Your Reservation</div><div className="gdlr-reservation-bar-summary-form" id="gdlr-reservation-bar-summary-form" /><div className="gdlr-reservation-bar-room-form" id="gdlr-reservation-bar-room-form" /><div className="gdlr-reservation-bar-date-form" id="gdlr-reservation-bar-date-form"><div className="gdlr-reservation-field gdlr-resv-datepicker"><span className="gdlr-reservation-field-title">Check In</span><div className="gdlr-datepicker-wrapper"><input type="text" id="gdlr-check-in" className="gdlr-datepicker" data-current-date="2025-04-26" autoComplete="off" data-dfm="d M yy" data-block="[]" defaultValue="2025-04-26" /><input type="hidden" className="gdlr-datepicker-alt" name="gdlr-check-in" autoComplete="off" defaultValue="2025-04-26" /></div></div><div className="gdlr-reservation-field gdlr-resv-combobox gdlr-resv-night"><span className="gdlr-reservation-field-title">Nights</span><div className="gdlr-combobox-wrapper"><select name="gdlr-night" id="gdlr-night"><option value={1} selected>1</option><option value={2}>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option><option value={6}>6</option><option value={7}>7</option><option value={8}>8</option><option value={9}>9</option></select></div></div><div className="clear" /><div className="gdlr-reservation-field gdlr-resv-datepicker"><span className="gdlr-reservation-field-title">Check Out</span><div className="gdlr-datepicker-wrapper"><input type="text" id="gdlr-check-out" className="gdlr-datepicker" data-current-date="2025-04-26" autoComplete="off" data-min-night={1} data-dfm="d M yy" data-block="[]" defaultValue="2025-04-27" /><input type="hidden" className="gdlr-datepicker-alt" name="gdlr-check-out" autoComplete="off" defaultValue="2025-04-27" /></div></div><div className="clear" /><div className="gdlr-reservation-field gdlr-resv-combobox gdlr-reservation-bar-room-number"><span className="gdlr-reservation-field-title">Rooms</span><div className="gdlr-combobox-wrapper"><select name="gdlr-room-number" id="gdlr-room-number"><option value={1} selected>1</option><option value={2}>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option><option value={6}>6</option><option value={7}>7</option><option value={8}>8</option><option value={9}>9</option></select></div></div><div className="clear" /><div className="gdlr-reservation-people-amount-wrapper" id="gdlr-reservation-people-amount-wrapper"><div className="gdlr-reservation-people-amount"><div className="gdlr-reservation-people-title">Room <span>1</span></div><div className="gdlr-reservation-field gdlr-resv-combobox "><span className="gdlr-reservation-field-title">Adults</span><div className="gdlr-combobox-wrapper"><select name="gdlr-adult-number[]"><option value={1}>1</option><option value={2} selected>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option><option value={6}>6</option><option value={7}>7</option><option value={8}>8</option><option value={9}>9</option></select></div></div><div className="gdlr-reservation-field gdlr-resv-combobox "><span className="gdlr-reservation-field-title">Children</span><div className="gdlr-combobox-wrapper"><select name="gdlr-children-number[]"><option value={0}>0</option><option value={1}>1</option><option value={2}>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option><option value={6}>6</option><option value={7}>7</option><option value={8}>8</option><option value={9}>9</option></select></div></div><div className="clear" /></div></div><div className="clear" /><a id="gdlr-reservation-bar-button" className="gdlr-reservation-bar-button gdlr-button with-border" href="#">Check Availability</a><div className="clear" /></div><div className="gdlr-reservation-bar-service-form" id="gdlr-reservation-bar-service-form" /></form>
                                <div className="gdlr-booking-content">
                                    <div className="gdlr-booking-process-bar" id="gdlr-booking-process-bar" data-state={1}><div data-process={1} className="gdlr-booking-process gdlr-active">1. Choose Date</div><div data-process={2} className="gdlr-booking-process ">2. Choose Room</div><div data-process={3} className="gdlr-booking-process ">3. Make a Reservation</div><div data-process={4} className="gdlr-booking-process ">4. Confirmation</div></div>
                                    <div className="gdlr-booking-content-wrapper">
                                        <div className="gdlr-booking-content-inner" id="gdlr-booking-content-inner">
                                            <div className="gdlr-datepicker-range-wrapper">
                                                <div className="gdlr-datepicker-range" data-current-date="2025-04-26" id="gdlr-datepicker-range" data-dfm="d M yy" data-block="[]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear" />
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                        <div className="clear" />
                    </div>
                    <div className="clear" />
                </div>
            </div>
        </div>{/* gdlr-content */}
            <div className="clear" />
        </div>{/* content wrapper */}
        <footer className="footer-wrapper">
            <div className="footer-container container">
                <div className="footer-column three columns" id="footer-widget-1">
                    <div id="text-5" className="widget widget_text gdlr-item gdlr-widget"><h3 className="gdlr-widget-title">Book Now!</h3><div className="clear" />			<div className="textwidget"><p><i className="gdlr-icon fa fa-phone" style={{ color: '#fff', fontSize: '16px' }} /> +1800-222-3333</p>
                        <div className="clear" />
                        <div className="gdlr-space" style={{ marginTop: '-15px' }} />
                        <p><i className="gdlr-icon fa fa-envelope-o" style={{ color: '#fff', fontSize: '16px' }} /> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f784969b9284b79f9883929b9a968483928583d994989a">[email&nbsp;protected]</a></p>
                        <div className="clear" />
                        <div className="gdlr-space" style={{ marginTop: '25px' }} />
                        <p><a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-facebook-square" style={{ color: '#fff', fontSize: '24px' }} /></a> <a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-twitter-square" style={{ color: '#fff', fontSize: '24px' }} /></a> <a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-linkedin-square" style={{ color: '#fff', fontSize: '24px' }} /></a> <a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-google-plus-square" style={{ color: '#fff', fontSize: '24px' }} /></a> <a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-pinterest-square" style={{ color: '#fff', fontSize: '24px' }} /></a> <a href="http://themeforest.net/user/goodlayers/" target="_blank"><i className="gdlr-icon fa fa-flickr" style={{ color: '#fff', fontSize: '24px' }} /></a></p>
                    </div>
                    </div>				</div>
                <div className="footer-column three columns" id="footer-widget-2">
                    <div id="recent-posts-5" className="widget widget_recent_entries gdlr-item gdlr-widget">
                        <h3 className="gdlr-widget-title">Recent News</h3><div className="clear" />
                        <ul>
                            <li>
                                <a href="https://demo.goodlayers.com/hotelmaster/dark/2014/03/21/sem-porta-mollis-parturient/">Sem Porta Mollis Parturient</a>
                            </li>
                            <li>
                                <a href="https://demo.goodlayers.com/hotelmaster/dark/2014/03/21/nullam-lorem-mattis-purus/">Nullam Lorem Mattis Purus</a>
                            </li>
                            <li>
                                <a href="https://demo.goodlayers.com/hotelmaster/dark/2014/03/21/nibh-sem-sit-ullamcorper/">Nibh Sem Sit Ullamcorper</a>
                            </li>
                            <li>
                                <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/donec-luctus-imperdiet/">Donec luctus imperdiet</a>
                            </li>
                            <li>
                                <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/magna-pars-studiorum/">Magna pars studiorum</a>
                            </li>
                            <li>
                                <a href="https://demo.goodlayers.com/hotelmaster/dark/2013/12/03/sedial-eiusmod-tempor/">Sedial eiusmod tempor</a>
                            </li>
                        </ul>
                    </div>				</div>
                <div className="footer-column six columns" id="footer-widget-3">
                    <div id="text-10" className="widget widget_text gdlr-item gdlr-widget"><h3 className="gdlr-widget-title">Our Awards</h3><div className="clear" />			<div className="textwidget"><img src="https://demo.goodlayers.com/hotelmaster/dark/wp-content/uploads/2017/12/awards-logo-dark.jpg" alt="" />
                        <div className="clear" /><div className="gdlr-space" style={{ marginTop: '20px' }} />
                        Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum.</div>
                    </div>				</div>
                <div className="clear" />
            </div>
            <div className="copyright-wrapper">
                <div className="copyright-container container">
                    <div className="copyright-left">
                        <a href="https://demo.goodlayers.com/hotelmaster/dark" style={{ marginRight: '10px' }}>Home</a>|<a href="https://demo.goodlayers.com/hotelmaster/dark/?booking" style={{ marginRight: '10px', marginLeft: '10px' }}>Booking</a> | <a href="https://demo.goodlayers.com/hotelmaster/dark/about-us/" style={{ marginRight: '10px', marginLeft: '10px' }}>About</a> | <a href="https://demo.goodlayers.com/hotelmaster/dark/contact-page/" style={{ marginRight: '10px', marginLeft: '10px' }}>Contact</a>				</div>
                    <div className="copyright-right">
                        Copyright 2015 All Right Reserved				</div>
                    <div className="clear" />
                </div>
            </div>
        </footer>
        {/* body-wrapper */}
    </div>
    )
}

export default ChooseRoom;