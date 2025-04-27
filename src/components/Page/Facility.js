// import { Link } from "react-router-dom";

function Facility() {
  return (
    <div>
      <div className="gdlr-page-title-wrapper"
        style={{
          backgroundImage: 'url(/frontend/anh/bgrTitle.png)',
          backgroundSize: '1518px 226px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: 'rgba(34, 34, 34, 0.5)', zIndex: 0, }} />
        <div className="gdlr-page-title-overlay" />
        <div className="gdlr-page-title-container container">
          <h1 className="gdlr-page-title" >
            Kỳ nghỉ dưỡng giữa thiên nhiên tươi đẹp của Đà Nẵng
          </h1>
          <span className="gdlr-page-caption">
            Đắm mình trong bể bơi thư giãn, thưởng thức một vài ly cocktail nhẹ
            nhàng với khung cảnh biển xanh bất tận mở ra trước mắt.
          </span>
          <span className="gdlr-page-caption">
            Khởi đầu ngày mới tràn đầy sức sống tại phòng tập gym và tái tạo
            năng lượng tại khu spa, xông hơi.
          </span>
        </div>
      </div>
      {/* is search */}
      <div className="content-wrapper">
        <div className="gdlr-content">
          <div className="with-sidebar-wrapper">
            <section style={{ background: "#000", padding: "50px 0" }}>
              <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
                {/* Cột 1 */}
                <div className="facility-box" style={{ width: "30%", color: "#fff",marginRight:"100px" }}>
                  <h3 style={{ textTransform: "uppercase" }}>Vườn trị liệu</h3>
                  <hr style={{ borderColor: "#fff", width: "50px", marginLeft: 0 }} />
                  <p>Thoải mái dưới bóng mát của rừng tre.</p>
                </div>

                {/* Cột 2 */}
                <div className="facility-box" style={{ width: "32%", color: "#fff" }}>
                  <h3 style={{ textTransform: "uppercase" }}>Cabana</h3>
                  <hr style={{ borderColor: "#fff", width: "50px", marginLeft: 0 }} />
                  <p>Khoảnh khắc ấm cúng bên cạnh người thân yêu.</p>
                  
                </div>

                {/* Cột 3 */}
                <div className="facility-box" style={{ width: "30%", color: "#fff" }}>
                  <h3 style={{ textTransform: "uppercase" }}>Phòng họp</h3>
                  <hr style={{ borderColor: "#fff", width: "50px", marginLeft: 0 }} />
                  <p>Đẳng cấp, sang trọng cho tổ chức họp và sự kiện.</p>
                
                </div>
              </div>
            </section>

            <section id="content-section-2" style={{ marginTop: "0px", paddingTop: "0px" }}>
              <div
                className="gdlr-parallax-wrapper gdlr-background-image gdlr-show-all gdlr-skin-dark-skin"
                id="gdlr-parallax-wrapper-1"
                data-bgspeed="0.2"
                style={{
                  backgroundImage: 'url("frontend/anhcsvc.png")',
                  paddingTop: "0px",    
                  paddingBottom: "0px"   
                }}
              >
                <div>
                  <img src="frontend/anh/csvc.png" style={{ width: "100%" }} />
                </div>
                <div className="clear" />
              </div>
            </section>

          </div>
          <div className="clear" />
          <section id="content-section-3" style={{ marginTop: "0px", paddingTop: "0px" }}>
            <div className="gdlr-color-wrapper  gdlr-show-all no-skin pt115 pb65 bgf4">
              <div className="container">
                <div className="two-fifth columns">
                  <div className="gdlr-item gdlr-content-item mb0" />
                  <div className="gdlr-image-frame-item gdlr-item">
                    <div className="gdlr-frame frame-type-none">
                      <div className="gdlr-image-link-shortcode">
                        <img
                          src="frontend\anh\nvu.png"
                          alt=""
                          width={250}
                          height={625}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="three-fifth columns">
                  <div className="gdlr-item gdlr-icon-with-list-item">
                    <div className="list-with-icon-ux gdlr-ux">
                      <div className="list-with-icon gdlr-left">
                        <div className="list-with-icon-title gdlr-skin-title">
                          Tòa nhà chính
                          <i className="fa fa-heart-o" />
                        </div>
                        <div className="list-with-icon-caption">
                          <p>
                            Tầng B1 : Dining M, Phòng xông hơi,Phòng giải trí.
                          </p>
                          <p>
                            Tầng 1: Lobby, Bar M, Pavilion, Monogram Lounge,
                            Phòng gym, Phòng họp, Business Corner.
                          </p>
                          <p>Tầng 2~10: Phòng.</p>
                        </div>
                      </div>
                    </div>
                    <div className="list-with-icon-ux gdlr-ux">
                      <div className="list-with-icon gdlr-left">
                        <div className="list-with-icon-title gdlr-skin-title">
                          Tòa nhà Residence
                          <i className="fa fa-heart-o" />
                        </div>
                        <div className="list-with-icon-caption">
                          <p>
                            Tầng 1: Bể bơi ngoài trời (Bể bơi Gia đình, Bể bơi
                            Người lớn, Bể bơi Trẻ em), Bistro M, Little
                            Monogram, Pool Bar, Vườn trị liệu.
                          </p>
                          <p>Tầng 2~3: Căn hộ.</p>
                        </div>
                      </div>
                    </div>
                    <div className="list-with-icon-ux gdlr-ux">
                      <div className="list-with-icon gdlr-left">
                        <div className="list-with-icon-title gdlr-skin-title">
                          Biệt thự
                          <i className="fa fa-heart-o" />
                        </div>
                        <div className="list-with-icon-caption">
                          <p>Tầng 1~3: Biệt thự.</p>
                        </div>
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
          <section id="content-section-4" style={{ marginTop: "0px", paddingTop: "0px" }}>
            <div
              className="gdlr-color-wrapper  gdlr-show-all gdlr-skin-dark-skin"
              style={{
                backgroundColor: "#80bac3",
                paddingTop: "90px",
                paddingBottom: "60px"
              }}
            >
              <div className="container">
                <div className="one-fifth column">
                  <div className="gdlr-item gdlr-content-item">
                    <div
                      style={{
                        textAlign: "right",
                        marginRight: "30px",
                        marginTop: "33px"
                      }}
                    >
                      <i
                        className="gdlr-icon fa fa-bell"
                        style={{ color: "#ffffff", fontSize: "58px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="four-fifth columns">
                  <div className="gdlr-stunning-text-ux gdlr-ux">
                    <div className="gdlr-item gdlr-stunning-text-item type-normal">
                      <h2 className="stunning-text-title">
                        Quý khách có thể tận hưởng kỳ nghỉ thư giãn, hòa mình
                        với thiên nhiên bên bờ biển tuyệt đẹp của Đà Nẵng.
                      </h2>
                      <div className="stunning-text-caption gdlr-skin-content">
                        <p>
                          Shilla Monogram Quảng Nam Đà Nẵng nằm bên bãi biển Non
                          Nước thuộc bờ biển phía Đông của thành phố Đà Nẵng,
                          tỉnh Quảng Nam, Việt Nam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
            <div className="clear" />
          </section>
        </div>
      </div>
      <div className="clear" />
    </div>
  );
}
export default Facility;
