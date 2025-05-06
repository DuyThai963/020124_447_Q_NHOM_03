import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../Style/booking.css";
import useRoomStore from '../../store/useRoomStore';
import moment from 'moment'
import tw from 'twin.macro';


function Booking() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [roomNumber, setRoomNumber] = useState(1);
    const [adultNumber, setAdultNumber] = useState(2);
    const [childrenNumber, setChildrenNumber] = useState(0);
    const navigate = useNavigate();
    const [roomList, setRoomList] = useState([])

    const monthNames = ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"];
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [selectedDay, setSelectedDay] = useState(null);
    const { rooms, fetchRooms, paramsFilter } = useRoomStore();

    const [wifiSelected, setWifiSelected] = useState(false);
    const [carParkSelected, setCarParkSelected] = useState(false);
    const [carParkAmount, setCarParkAmount] = useState(1);



    const Button = tw.button`bg-yellow-500 text-white mt-[20px] px-6 py-2 rounded hover:bg-blue-600`;

    useEffect(() => {
        console.log({ aaaaaa: paramsFilter })
        // if (moment(paramsFilter?.DueDate).isValid()) {
        //     setCheckOutDate(paramsFilter?.DueDate)
        // }
        // if (moment((paramsFilter?.adult).isValid())) {
        //     setCheckInDate(paramsFilter?.IssueDate)
        // }
        // if (location.state?.selectedRoom) {
        //     setSelectedRoomName(location.state.selectedRoom);
        //   }
        setAdultNumber(paramsFilter?.adult)
        setChildrenNumber(paramsFilter?.children)
        setRoomNumber(paramsFilter?.quantity)
        setRoomList(rooms.length > 0 ? rooms[0] : [])
    }, [rooms, paramsFilter])

    const handleDateChange = (date, field) =>{
        if (field === 'checkIn'){
            setCheckInDate(date);
            if (checkOutDate && date >= checkOutDate) {
                setCheckOutDate(null);
            }
        } else {
            setCheckOutDate(date);
        }
    };

    const handleCalendarDayClick = (day, monthOffset = 0) => {
        const selectedMonth = monthOffset === 0 ? currentMonth : currentMonth + 1;
        const selectedYear = monthOffset === 0 ? currentYear :
            (currentMonth === 11 ? currentYear + 1 : currentYear);

        const selectedDate = new Date(selectedYear, selectedMonth, day);

        if (!checkInDate || (checkInDate && checkOutDate)) {
            setCheckInDate(selectedDate);
            setCheckOutDate(null);
        } else if (checkInDate && !checkOutDate) {
            if (selectedDate > checkInDate) {
                setCheckOutDate(selectedDate);
            }
        }

        setSelectedDay({ day, month: selectedMonth, year: selectedYear });
    };

    const changeMonth = (direction) => {
        let newMonth = currentMonth;
        let newYear = currentYear;

        if (direction === 'next') {
            newMonth += 1;
            if (newMonth > 11) {
                newMonth = 0;
                newYear += 1;
            }
        } else if (direction === 'prev') {
            newMonth -= 1;
            if (newMonth < 0) {
                newMonth = 11;
                newYear -= 1;
            }
        }

        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };

    const getNextMonthName = () => {
        const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        return `${monthNames[nextMonth]} ${nextYear}`;
    };

    const handleBooking = async (e) => {
        e.preventDefault();
        const bookingData = {
            quantity: roomNumber,
            IssueDate: moment(checkInDate),
            DueDate: moment(checkOutDate),
            data: 1,
            adult: adultNumber,
            children: childrenNumber,
            roomType: 'Doi',
        };
        console.log({ bookingData })
        try {
            const response = await fetchRooms(bookingData)
            console.log({ response })
            navigate('/chooseRoom');
        } catch (error) {
            console.error('Lỗi kết nối', error);
        }
    };

    const renderCalendarDays = (monthOffset = 0) => {
        const month = monthOffset === 0 ? currentMonth : currentMonth + 1;
        const year = monthOffset === 0 ? currentYear : (currentMonth === 11 ? currentYear + 1 : currentYear);

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(<td key={`empty-${i}`} className="ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected = selectedDay && selectedDay.day === day &&
                selectedDay.month === month && selectedDay.year === year;

            days.push(
                <td
                    key={day}
                    className={isSelected ? 'ui-datepicker-current-day' : ''}
                    onClick={() => handleCalendarDayClick(day, monthOffset)}
                    style={{
                        cursor: 'pointer',
                        backgroundColor: isSelected ? '#f0f0f0' : 'transparent',
                        fontWeight: isSelected ? 'bold' : 'normal'
                    }}
                >
                    <a>{day}</a>
                </td>
            );
        }

        const rows = [];
        let cells = [];
        days.forEach((day, i) => {
            if (i % 7 !== 0 || i === 0) {
                cells.push(day);
            } else {
                rows.push(<tr key={`row-${i}`}>{cells}</tr>);
                cells = [day];
            }
        });

        if (cells.length > 0) {
            rows.push(<tr key={`row-last`}>{cells}</tr>);
        }

        return rows;
    };

    return (
        <div>

            <div id="gdlr-header-substitute" />
            <div className="gdlr-page-title-wrapper">
                <div className="gdlr-page-title-overlay" />
                <div className="gdlr-page-title-container container">
                    <h1 className="gdlr-page-title">Booking</h1>
                </div>
            </div>
            {/* is search */}	<div className="content-wrapper">
                <div className="gdlr-content">
                <div className="with-sidebar-wrapper">
                    <div className="with-sidebar-container container gdlr-class-no-sidebar">
                        <div className="with-sidebar-left twelve columns">
                            <div className="with-sidebar-content twelve columns">
                                <div className="gdlr-item gdlr-item-start-content" id="gdlr-single-booking-content" data-ajax="https://demo.goodlayers.com/hotelmaster/dark/wp-admin/admin-ajax.php">
                                    <form class="gdlr-reservation-bar" id="gdlr-reservation-bar" data-action="gdlr_hotel_booking">
                                        <div class="gdlr-reservation-bar-title">
                                            Your Reservation
                                        </div>
                                        <div class="gdlr-reservation-bar-summary-form gdlr-active" id="gdlr-reservation-bar-summary-form" style="display: block;">
                                            <div class="gdlr-price-summary-wrapper">
                                                <div class="gdlr-price-summary-head">
                                                    Price Breakdown
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="gdlr-booking-content">
                                        <div className="gdlr-booking-process-bar" id="gdlr-booking-process-bar" data-state={1}><div data-process={1} className="gdlr-booking-process gdlr-active">1. Choose Date</div><div data-process={2} className="gdlr-booking-process ">2. Choose Room</div><div data-process={3} className="gdlr-booking-process ">3. Make a Reservation</div><div data-process={4} className="gdlr-booking-process ">4. Confirmation</div></div>
                                        <div className="gdlr-booking-content-wrapper">
                                            <div className="gdlr-booking-content-inner" id="gdlr-booking-content-inner">
                                                <div className="gdlr-datepicker-range-wrapper">
                                                    <div className="gdlr-datepicker-range" data-current-date="2025-05-05" id="gdlr-datepicker-range" data-dfm="d M yy" data-block="[]" />
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
                            <p><i className="gdlr-icon fa fa-envelope-o" style={{ color: '#fff', fontSize: '16px' }} /> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d2a1b3beb7a192babda6b7bebfb3a1a6b7a0a6fcb1bdbf">[email&nbsp;protected]</a></p>
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
    );
}

export default Booking;