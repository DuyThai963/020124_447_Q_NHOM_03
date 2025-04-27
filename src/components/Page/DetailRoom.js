import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailRoom() {
  const { id } = useParams();
  const [listRoom, setListRoom] = useState({});
  const fetchDataRoomNew = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/create-rental-detail/${id}`,
        {
          headers: {
            Accept: "application/json"
          }
        }
      );
      console.log(response.data[0]);
      setListRoom(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDataRoomNew();
  }, []);
  return (
    <>
      <div>
        <div id="gdlr-header-substitute" />
        <div className="gdlr-page-title-wrapper">
          <div className="gdlr-page-title-wrapper" style={{ marginTop: "0px", paddingTop: "0px" }}>
            <div
              className="gdlr-page-title-container"
              style={{
                width: '100%',
                backgroundColor: 'rgba(34, 34, 34, 0.7)',
                padding: '60px 20px',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <h1
                className="gdlr-page-title"
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  margin: 0
                }}
              >
                PHÒNG
              </h1>
              <span
                className="gdlr-page-caption"
                style={{
                  display: 'block',
                  fontSize: '16px',
                  fontStyle: 'italic',
                  color: '#caa87d',
                  marginTop: '10px'
                }}
              >
                Superior Room – Two Double Beds
              </span>
            </div>
          </div>
          <div className="gdlr-page-title-container container">
            <h3 className="gdlr-page-title">{listRoom.room_name}</h3>
          </div>
        </div>
        {/* is search */}
        <div className="content-wrapper">
          <div className="gdlr-content">
            <div className="with-sidebar-wrapper">
              <div className="with-sidebar-container container gdlr-class-no-sidebar">
                <div className="with-sidebar-left twelve columns">
                  <div className="with-sidebar-content twelve columns">
                    <div className="gdlr-item gdlr-item-start-content ">
                      <div
                        id="room-3596"
                        className="post-3596 room type-room status-publish has-post-thumbnail hentry room_category-room room_tag-luxury room_tag-room room_tag-standard"
                      >
                        <form
                          className="gdlr-reservation-bar"
                          id="gdlr-reservation-bar"
                          data-action="gdlr_hotel_booking"
                          method="post"
                          action="https://demo.goodlayers.com/hotelmaster/dark/?booking"
                        >
                          <div className="gdlr-reservation-bar-title">
                            Chọn phòng của bạn
                          </div>
                          <div
                            className="gdlr-reservation-bar-summary-form"
                            id="gdlr-reservation-bar-summary-form"
                          />
                          <div
                            className="gdlr-reservation-bar-room-form"
                            id="gdlr-reservation-bar-room-form"
                          />
                          <div
                            className="gdlr-reservation-bar-date-form"
                            id="gdlr-reservation-bar-date-form"
                          >
                            <div className="gdlr-reservation-field gdlr-resv-datepicker">
                              <span className="gdlr-reservation-field-title">
                                Check In
                              </span>
                              <div className="gdlr-datepicker-wrapper">
                                <input
                                  type="text"
                                  id="gdlr-check-in"
                                  className="gdlr-datepicker"
                                  data-current-date="2024-05-30"
                                  autoComplete="off"
                                  data-dfm="d M yy"
                                  data-block="[]"
                                  defaultValue="30 May 2024"
                                />
                                <input
                                  type="hidden"
                                  className="gdlr-datepicker-alt"
                                  name="gdlr-check-in"
                                  autoComplete="off"
                                  defaultValue="2024-05-30"
                                />
                              </div>
                            </div>
                            <div className="gdlr-reservation-field gdlr-resv-combobox gdlr-resv-night">
                              <span className="gdlr-reservation-field-title">
                                Đêm
                              </span>
                              <div className="gdlr-combobox-wrapper">
                                <select name="gdlr-night" id="gdlr-night">
                                  <option value={1} selected>
                                    1
                                  </option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                  <option value={5}>5</option>
                                  <option value={6}>6</option>
                                  <option value={7}>7</option>
                                  <option value={8}>8</option>
                                  <option value={9}>9</option>
                                </select>
                              </div>
                            </div>
                            <div className="clear" />
                            <div className="gdlr-reservation-field gdlr-resv-datepicker">
                              <span className="gdlr-reservation-field-title">
                                Check Out
                              </span>
                              <div className="gdlr-datepicker-wrapper">
                                <input
                                  type="text"
                                  id="gdlr-check-out"
                                  className="gdlr-datepicker"
                                  data-current-date="2024-05-30"
                                  autoComplete="off"
                                  data-min-night={1}
                                  data-dfm="d M yy"
                                  data-block="[]"
                                  defaultValue="31 May 2024"
                                />
                                <input
                                  type="hidden"
                                  className="gdlr-datepicker-alt"
                                  name="gdlr-check-out"
                                  autoComplete="off"
                                  defaultValue="31 May 2024"
                                />
                              </div>
                            </div>
                            <div className="clear" />
                            <div className="gdlr-reservation-field gdlr-resv-combobox gdlr-reservation-bar-room-number">
                              <span className="gdlr-reservation-field-title">
                                Số lượng phòng
                              </span>
                              <div className="gdlr-combobox-wrapper">
                                <select
                                  name="gdlr-room-number"
                                  id="gdlr-room-number"
                                >
                                  <option value={1} selected>
                                    1
                                  </option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                  <option value={5}>5</option>
                                  <option value={6}>6</option>
                                  <option value={7}>7</option>
                                  <option value={8}>8</option>
                                  <option value={9}>9</option>
                                </select>
                              </div>
                            </div>
                            <div className="clear" />
                            <div
                              className="gdlr-reservation-people-amount-wrapper"
                              id="gdlr-reservation-people-amount-wrapper"
                            >
                              <div className="gdlr-reservation-people-amount">
                                <div className="gdlr-reservation-people-title">
                                  Phòng <span>1</span>
                                </div>
                                <div className="gdlr-reservation-field gdlr-resv-combobox ">
                                  <span className="gdlr-reservation-field-title">
                                    Người lớn
                                  </span>
                                  <div className="gdlr-combobox-wrapper">
                                    <select name="gdlr-adult-number[]">
                                      <option value={1}>1</option>
                                      <option value={2} selected>
                                        2
                                      </option>
                                      <option value={3}>3</option>
                                      <option value={4}>4</option>
                                      <option value={5}>5</option>
                                      <option value={6}>6</option>
                                      <option value={7}>7</option>
                                      <option value={8}>8</option>
                                      <option value={9}>9</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="gdlr-reservation-field gdlr-resv-combobox ">
                                  <span className="gdlr-reservation-field-title">
                                    Trẻ em
                                  </span>
                                  <div className="gdlr-combobox-wrapper">
                                    <select name="gdlr-children-number[]">
                                      <option value={0}>0</option>
                                      <option value={1}>1</option>
                                      <option value={2}>2</option>
                                      <option value={3}>3</option>
                                      <option value={4}>4</option>
                                      <option value={5}>5</option>
                                      <option value={6}>6</option>
                                      <option value={7}>7</option>
                                      <option value={8}>8</option>
                                      <option value={9}>9</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="clear" />
                              </div>
                            </div>
                            <div className="clear" />
                            <input
                              type="hidden"
                              name="hotel_data"
                              defaultValue={1}
                            />
                            <a
                              className="gdlr-reservation-bar-button gdlr-button with-border"
                              href="{{route('choose2')}}"
                            >
                              Kiểm tra
                            </a>
                            <div className="clear" />
                          </div>
                          <div
                            className="gdlr-reservation-bar-service-form"
                            id="gdlr-reservation-bar-service-form"
                          />
                          <input
                            type="hidden"
                            name="single-room"
                            defaultValue={3596}
                          />
                        </form>
                        <div className="gdlr-room-main-content ">
                          <div className="gdlr-room-thumbnail gdlr-single-room-thumbnail">
                            <img
                              decoding="async"
                              src="/frontend/anh/1doi.png"
                              alt=""
                              width={750}
                              height={330}
                            />
                          </div>
                          <div className="gdlr-room-title-wrapper">
                            <h3 className="gdlr-room-title">
                              {listRoom.room_name}
                            </h3>
                            <div className="gdlr-room-price">
                              <span className="gdlr-head">Giá chỉ từ </span>
                              <span
                                className="gdlr-tail"
                                style={{ color: "#74b7d3" }}
                              >
                                {" "}
                                $90.00 / Đêm
                              </span>
                            </div>
                            <div className="clear" />
                          </div>
                          <br />
                          <br />
                          <div className="amenities-table">
                            <table id="customer">
                              <tbody>
                                <tr>
                                  <td>
                                    <div>
                                      <i className="fa fa-check-square-o icon-check" />
                                      <span className="gdlr-head">Giường </span>
                                      <span className="gdlr-tail">1 Giường vua</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div>
                                      <i className="fa fa-check-square-o icon-check" />
                                      <span className="gdlr-head">Tối đa </span>
                                      <span className="gdlr-tail">3 Người</span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div>
                                      <i className="fa fa-check-square-o icon-check" />
                                      <span className="gdlr-head">Phong cảnh </span>
                                      <span className="gdlr-tail">Biển</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div>
                                      <i className="fa fa-check-square-o icon-check" />
                                      <span className="gdlr-head">Kích thước phòng </span>
                                      <span className="gdlr-tail">1000 m²</span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div>
                                      <i className="fa fa-check-square-o icon-check" />
                                      <span className="gdlr-head">Wifi </span>
                                      <span className="gdlr-tail">Có</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div>
                                      <i className="fa fa-check-square-o icon-check" />
                                      <span className="gdlr-head">Phục vụ ăn sáng </span>
                                      <span className="gdlr-tail">Có</span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div>
                                      <i className="fa fa-check-square-o icon-check" />
                                      <span className="gdlr-head">Dịch vụ phòng </span>
                                      <span className="gdlr-tail">Có</span>
                                    </div>
                                  </td>
                                  <td>
                                    <div>
                                      <i className="fa fa-check-square-o icon-check" />
                                      <span className="gdlr-head">Dịch vụ đón tận nơi </span>
                                      <span className="gdlr-tail">$20/Lượt</span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <br />
                          <br />
                          <div className="gdlr-room-content">
                            <p>
                              Hãy để chúng tôi biến kỳ nghỉ của bạn thành một trải nghiệm không thể quên, với những tiện nghi hiện đại và dịch vụ chuyên nghiệp ngay giữa lòng thành phố Đà Nẵng!
                            </p>
                            <p>
                              "Tìm kiếm một nơi nghỉ dưỡng hoàn hảo tại Đà Nẵng? Hãy đến với chúng tôi để tận hưởng sự thư giãn tuyệt đối và khám phá vẻ đẹp văn hóa độc đáo của vùng biển này!"
                              "Khách sạn của chúng tôi là điểm dừng chân lý tưởng cho những ai yêu thích sự khám phá và muốn trải nghiệm những điều tuyệt vời nhất của Đà Nẵng!
                            </p>
                            <div className="clear" />
                            <div
                              className="gdlr-space"
                              style={{ marginTop: "35px" }}
                            />
                            <div className="gdlr-shortcode-wrapper">
                              <div className="gdlr-gallery-item gdlr-item">
                                <div className="gallery-column one-fifth column">
                                  <div className="gallery-item">
                                    <img
                                      decoding="async"
                                      src="/frontend/anh/1doi.png"
                                      alt=""
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                </div>
                                <div className="gallery-column one-fifth column">
                                  <div className="gallery-item">
                                    <img
                                      decoding="async"
                                      src="/frontend/anh/1doi.png"
                                      alt=""
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                </div>
                                <div className="gallery-column one-fifth column">
                                  <div className="gallery-item">
                                    <img
                                      decoding="async"
                                      src="/frontend/anh/1doi.png"
                                      alt=""
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                </div>
                                <div className="gallery-column one-fifth column">
                                  <div className="gallery-item">
                                    <img
                                      decoding="async"
                                      src="/frontend/anh/1doi.png"
                                      alt=""
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                </div>
                                <div className="gallery-column one-fifth column">
                                  <div className="gallery-item">
                                    <img
                                      decoding="async"
                                      src="/frontend/anh/1doi.png"
                                      alt=""
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                </div>
                                <div className="clear" />
                                <div className="gallery-column one-fifth column">
                                  <div className="gallery-item">
                                    <img
                                      decoding="async"
                                      src="/frontend/anh/1doi.png"
                                      alt=""
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                </div>
                                <div className="gallery-column one-fifth column">
                                  <div className="gallery-item">
                                    <img
                                      decoding="async"
                                      src="/frontend/anh/1doi.png"
                                      alt=""
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                </div>
                                <div className="gallery-column one-fifth column">
                                  <div className="gallery-item">
                                    <img
                                      decoding="async"
                                      src="/frontend/anh/1doi.png"
                                      alt=""
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                </div>
                                <div className="gallery-column one-fifth column">
                                  <div className="gallery-item">
                                    <img
                                      decoding="async"
                                      src="/frontend/anh/1doi.png"
                                      alt=""
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                </div>
                                <div className="gallery-column one-fifth column">
                                  <div className="gallery-item">
                                    <img
                                      decoding="async"
                                      src="/frontend/anh/1doi.png"
                                      alt=""
                                      width={150}
                                      height={150}
                                    />
                                  </div>
                                </div>
                                <div className="clear" />
                              </div>
                            </div>
                            <p>
                            Trải nghiệm sự sang trọng và thoải mái bên bờ biển tuyệt đẹp Đà Nẵng, nơi mà mỗi khoảnh khắc đều trở thành kỷ niệm đáng nhớ!
                            </p>
                            <p>
                            Trải nghiệm sự sang trọng và thư giãn tuyệt đối bên bờ biển tuyệt đẹp Đà Nẵng, nơi mỗi khoảnh khắc đều được chăm sóc tỉ mỉ để mang đến cho bạn những kỷ niệm khó quên trong cuộc đời!
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* #room */}
                      <div className="clear" />
                    </div>
                  </div>
                  <div className="clear" />
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
          {/* gdlr-content */}
          <div className="clear" />
        </div>
        {/* content wrapper */}
      </div>
    </>
  );
}
export default DetailRoom;
