import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useRoomStore from '../../store/useRoomStore';
function Booking() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [roomNumber, setRoomNumber] = useState(1);
    const [adultNumber, setAdultNumber] = useState(2);
     const [selectedRoomName, setSelectedRoomName] = useState('');
    const navigate = useNavigate();
    const [childrenNumber, setChildrenNumber] = useState(0);
    const { rooms, fetchRooms, paramsFilter } = useRoomStore();
    const [roomList, setRoomList] = useState([])
    
    const [user, setUser] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        note: "",
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const res = await fetch("http://127.0.0.1:8000/api/profile", {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (res.ok) {
                        const data = await res.json();
                        setUser(data.user);
                    } else {
                        console.error("Lỗi khi lấy thông tin người dùng:", await res.json());
                    }
                } catch (err) {
                    console.error("Lỗi mạng khi lấy thông tin người dùng:", err);
                }
            } else {
                console.log("Không tìm thấy token trong localStorage.");
            }
        };

        fetchUserProfile();
    }, []);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
                address: "",
                note: "",
            });
        }
    }, [user]);
    useEffect(() => {
        const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
        if (bookingInfo) {
            setAdultNumber(bookingInfo.adultNumber || 0);
            setChildrenNumber(bookingInfo.childrenNumber || 0);
            setSelectedRoomName(bookingInfo.name || '');
        }
    }, []);

    const handleBack = () => {
        navigate("/Booking/Choose-service");
    };
    useEffect(() => {
            console.log({aaaaaa: paramsFilter })
            // if (moment(paramsFilter?.DueDate).isValid()) {
            //     setCheckOutDate(paramsFilter?.DueDate)
            // }
            // if (moment((paramsFilter?.adult).isValid())) {
            //     setCheckInDate(paramsFilter?.IssueDate)
            // }
            setAdultNumber(paramsFilter?.adult)
            setChildrenNumber(paramsFilter?.children)
            setRoomNumber(paramsFilter?.quantity)
            setSelectedRoomName(paramsFilter?.name || '');
            setRoomList(rooms.length > 0 ? rooms[0] : [])
        }, [rooms, paramsFilter])
        //    const handleBooking = async (e) => {
        //         e.preventDefault();
        //         const bookingData = {
        //             quantity: roomNumber,
        //             IssueDate: moment(checkInDate),
        //             DueDate: moment(checkOutDate),
        //             data: 1,
        //             adult: adultNumber,
        //             children: childrenNumber,
        //             roomType: 'Doi',
        //         };
        //         console.log({ bookingData })
        //         try {
        //             const response = await fetchRooms(bookingData)
        //             console.log({ response })
        //             navigate('/chooseBooking');
        //         } catch (error) {
        //             console.error('Lỗi kết nối', error);
        //         }
        //     };

    const handleBookingSubmit = async () => {
        const bookingInfo = {
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            adultNumber: parseInt(document.getElementById("adult").value),
            childrenNumber: parseInt(document.getElementById("children").value)
        };
        localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
        if (!bookingInfo) {
            console.error("Không tìm thấy bookingInfo trong localStorage");
            return;
        }


        const parsedInfo = JSON.parse(bookingInfo);
        const token = localStorage.getItem("token");

        if (parsedInfo.IssueDate === parsedInfo.DueDate) {
            alert("Số ngày đặt phòng không hợp lệ. Ngày đến và ngày đi không được trùng nhau.");
            return;
        }

        const payload = {
            IssueDate: parsedInfo.IssueDate,
            DueDate: parsedInfo.DueDate,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            more_service: parsedInfo.more_service,
            id_room: parsedInfo.id_room,
            note: formData.note,
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/api/booking", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Phản hồi từ API:", data);
                localStorage.removeItem("bookingInfo");
                navigate("/Booking/Confirm");
            } else {
                console.error("Lỗi khi gửi dữ liệu:", await response.json());
            }
        } catch (error) {
            console.error("Lỗi mạng khi gửi dữ liệu:", error);
        }
    };

    const handlePaymentSubmit = () => { };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <div className="gdlr-page-title-wrapper">
                <div className="gdlr-page-title-overlay" />
                <div className="gdlr-page-title-container container">
                    <h1 className="gdlr-page-title">Đặt phòng</h1>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="gdlr-content">
                    <div className="with-sidebar-wrapper">
                        <div className="with-sidebar-container container gdlr-class-no-sidebar">
                            <div className="with-sidebar-left twelve columns">
                                <div className="with-sidebar-content twelve columns">
                                    <div
                                        className="gdlr-item gdlr-item-start-content"
                                        id="gdlr-single-booking-content"
                                    >
                                        <form className="gdlr-reservation-bar">
                                            <div className="gdlr-reservation-bar-title">
                                                Đặt phòng cho bạn
                                            </div>
                                            <div className="gdlr-price-summary-wrapper">
                                                <div className="gdlr-price-summary-head">Giá đặt phòng</div>
                                                <div className="gdlr-price-room-summary">
                                                    <div className="gdlr-price-room-summary-title">Room 1 :  {selectedRoomName} </div>
                                                    <div className="gdlr-price-room-summary-info gdlr-title-font">
                                                        <span>Adult : {adultNumber}</span>
                                                        <span>Children :  {childrenNumber} </span>
                                                        <span className="gdlr-price-room-summary-price" href="#">$90.00</span></div>
                                                </div>
                                                <div className="gdlr-price-summary-vat">
                                                    <div className="gdlr-price-summary-vat-total">
                                                        <span className="gdlr-head">Tổng</span><span className="gdlr-tail">$90.00</span>
                                                        <div className="clear" /></div>
                                                    <div className="gdlr-price-summary-vat-amount">
                                                        <span className="gdlr-head">Thuế 8%</span><span className="gdlr-tail">$7.50</span>
                                                        <div className="clear" /></div>
                                                </div>
                                                <div className="gdlr-price-summary-grand-total gdlr-active"><span className="gdlr-head">Giá tổng cộng</span><span className="gdlr-tail">$97.50</span></div>
                                            </div>
                                            <div className="gdlr-reservation-bar-date-form">
                                                <div className="clear" />
                                                <button
                                                    type="button"
                                                    id="gdlr-reservation-bar-button"
                                                    className="gdlr-reservation-bar-button gdlr-button with-border"
                                                    onClick={handleBack}
                                                >
                                                    Quay lại
                                                </button>
                                                <div className="clear" />
                                            </div>
                                            <div
                                                className="gdlr-reservation-bar-service-form"
                                                id="gdlr-reservation-bar-service-form"
                                            />
                                        </form>
                                        <div className="gdlr-booking-content">
                                            <div
                                                className="gdlr-booking-process-bar"
                                                id="gdlr-booking-process-bar"
                                                data-state={1}
                                            >
                                                <div
                                                    data-process={1}
                                                    className="gdlr-booking-process "
                                                >
                                                    1. Chọn ngày
                                                </div>
                                                <div
                                                    data-process={2}
                                                    className="gdlr-booking-process "
                                                >
                                                    2. Chọn phòng
                                                </div>
                                                <div
                                                    data-process={3}
                                                    className="gdlr-booking-process gdlr-active"
                                                >
                                                    3. Đặt chỗ
                                                </div>
                                                <div
                                                    data-process={4}
                                                    className="gdlr-booking-process "
                                                >
                                                    4. Xác nhận
                                                </div>
                                            </div>
                                            <div className="gdlr-booking-content-wrapper">
                                                <div className="gdlr-booking-content-inner" id="gdlr-booking-content-inner" style={{ opacity: 1, height: 'auto' }}>
                                                    <div className="gdlr-booking-contact-container">
                                                        <form className="gdlr-booking-contact-form" method="post" data-ajax="https://demo.goodlayers.com/hotelmaster/dark/wp-admin/admin-ajax.php">
                                                            <p className="gdlr-form-half-left">
                                                                <span>Tên *</span>
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    value={formData.name}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </p>

                                                            <div className="clear" />
                                                            <p className="gdlr-form-half-left">
                                                                <span>Email *</span>
                                                                <input
                                                                    type="text"
                                                                    name="email"
                                                                    value={formData.email}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </p>
                                                            <p className="gdlr-form-half-right">
                                                                <span>Số điện thoại *</span>
                                                                <input
                                                                    type="text"
                                                                    name="phone"
                                                                    value={formData.phone}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </p>
                                                            <div className="clear" />
                                                            <p className="gdlr-form-half-left">
                                                                <span>Địa chỉ</span>
                                                                <textarea
                                                                    name="address"
                                                                    value={formData.address}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </p>
                                                            <p className="gdlr-form-half-right">
                                                                <span>Ghi chú</span>
                                                                <textarea
                                                                    name="note"
                                                                    value={formData.note}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </p>
                                                            <div className="clear" />
                                                            {/* <p className="gdlr-form-coupon">
                            <span>Mã giảm giá</span>
                            <input type="text" name="coupon" id="gdlr-coupon-id" defaultValue data-action="gdlr_hotel_coupon_check" />
                        </p> */}
                                                            <div className="clear" />
                                                            <div className="gdlr-error-message" />
                                                            <Link
                                                                className="gdlr-button with-border gdlr-booking-contact-submit"
                                                                onClick={handleBookingSubmit}
                                                            >
                                                                Đặt chỗ ngay qua email và chúng tôi sẽ liên hệ lại với bạn.
                                                            </Link>
                                                            <div className="gdlr-booking-contact-or">
                                                                Hoặc
                                                                <div className="gdlr-booking-contact-or-divider gdlr-left" />
                                                                <div className="gdlr-booking-contact-or-divider gdlr-right" /></div>
                                                            <div className="gdlr-payment-method"><label className="gdlr-active"><input type="radio" name="payment-method" defaultValue="paypal" defaultChecked /><img src="https://demo.goodlayers.com/hotelmaster/dark/wp-content/plugins/gdlr-hotel/include/../images/paypal.png" alt="" /></label><label><input type="radio" name="payment-method" defaultValue="stripe" /><img src="https://demo.goodlayers.com/hotelmaster/dark/wp-content/plugins/gdlr-hotel/include/../images/stripe.png" alt="" /></label><label><input type="radio" name="payment-method" defaultValue="authorize" /><img src="https://demo.goodlayers.com/hotelmaster/dark/wp-content/plugins/gdlr-hotel/include/../images/authorize.png" alt="" /></label></div>
                                                            <Link
                                                                className="gdlr-button with-border gdlr-booking-payment-submit"
                                                                onClick={handlePaymentSubmit}
                                                            >
                                                                Thanh toán ngay
                                                            </Link>
                                                            <div style={{ marginBottom: '50px' }}></div>
                                                        </form>
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
                </div>
            </div>
        </div>
    );
}

export default Booking;