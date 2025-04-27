import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Room() {
  const [data, setData] = useState({ room: [] });

  useEffect(() => {
    fetch("http://localhost:8000/api/list-room")
      .then((res) => res.json())
      .then((json) => {
        console.log(json); // Kiểm tra dữ liệu
        // Kiểm tra định dạng dữ liệu
        if (Array.isArray(json.room)) {
          setData({ room: json.room });
        } else {
          setData({ room: [] });
        }
      })
      .catch((err) => console.error("Lỗi fetch:", err));
  }, []);

  const roomList = (
    <div className="room-list">
      {data.room.length === 0 ? (
        <div>Không có phòng nào để hiển thị.</div>
      ) : (
        data.room.map((room) => (
          <div className="room-card" key={room.id}>
            <div className="gdlr-item gdlr-room-item gdlr-classic-room">
              <div className="gdlr-ux gdlr-classic-room-ux">
                <div className="gdlr-room-thumbnail">
                <Link to={`/room/${room.id}`}>
                  <img src={room.image || ""} alt={room.room_name} width={700} height={400} />
                  </Link>
                </div>
                <h3 className="gdlr-room-title">
                  <a href="#">{room.room_name}</a>
                </h3>
                <div className="gdlr-hotel-room-info">
                  <div className="gdlr-room-info">
                    <i className="fa fa-check-square-o icon-check" />
                    <span className="gdlr-tail">1 giường đôi / 2 giường đơn</span>
                  </div>
                  <div className="gdlr-room-info">
                    <i className="fa fa-check-square-o icon-check" />
                    <span className="gdlr-head">Người tối đa</span>
                    <span className="gdlr-tail">3</span>
                  </div>
                  <div className="gdlr-room-info">
                    <i className="fa fa-check-square-o icon-check" />
                    <span className="gdlr-head">View</span>
                    <span className="gdlr-tail">Thành phố</span>
                  </div>
                  <div className="gdlr-room-info">
                    <i className="fa fa-check-square-o icon-check" />
                    <span className="gdlr-head">Wifi</span>
                    <span className="gdlr-tail">Có</span>
                  </div>
                  <div className="gdlr-room-price">
                    <span className="gdlr-head">Giá từ</span>
                    <span className="gdlr-tail">
                      {room.price.toLocaleString("vi-VN")} VNĐ / Đêm
                    </span>
                  </div>
                  <div className="clear" />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div>
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
            Tất cả đều có tại đây
          </span>
        </div>
      </div>
      <div id="gdlr-header-substitute"></div>
      {roomList}
    </div>
  );
}

export default Room;