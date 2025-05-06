import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
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

  const monthNames = ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"];
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState(null);
  const { rooms, fetchRooms } = useRoomStore();

  const Button = tw.button`bg-yellow-500 text-black px-6 py-2 rounded hover:bg-blue-600`;


  const handleDateChange = (date, field) => {
    if (field === 'checkIn') {
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
      <div className="gdlr-page-title-wrapper"
        style={{
          backgroundImage: 'url(/frontend/anh/bgrTitle.png)',
          backgroundSize: '1518px 200px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '226px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(16, 16, 16, 0.5)',
          zIndex: 0,
        }} />
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
                  <div className="gdlr-item gdlr-item-start-content"
                    id="gdlr-single-booking-content"
                    data-ajax="https://demo.goodlayers.com/hotelmaster/dark/wp-admin/admin-ajax.php"
                  >
                    <div className="content-wrapper">
                      <div className="gdlr-content">
                        <div className="with-sidebar-wrapper">
                          <div className="with-sidebar-container container gdlr-class-no-sidebar">
                            <div className="with-sidebar-left twelve columns">
                              <div className="with-sidebar-content twelve columns">
                                <div className="gdlr-item gdlr-item-start-content" id="gdlr-single-booking-content" data-ajax="https://demo.goodlayers.com/hotelmaster/wp-admin/admin-ajax.php">
                                  <form className="gdlr-reservation-bar" onSubmit={handleBooking}
                                        data-action="gdlr_hotel_booking">
                                    <div className="gdlr-reservation-bar-title">Đặt phòng của bạn</div>
                                    <div className="gdlr-reservation-bar-summary-form"/>
                                    <div className="gdlr-reservation-bar-room-form"/>
                                    <div className="gdlr-reservation-bar-date-form">
                                      <div className="gdlr-reservation-field gdlr-resv-datepicker">
                                        <span className="gdlr-reservation-field-title">Thời gian vào</span>
                                        <div className="gdlr-datepicker-wrapper">
                                          <DatePicker
                                              selected={checkInDate}
                                              onChange={(date) => handleDateChange(date, 'checkIn')}
                                              placeholderText="Chọn ngày"
                                              dateFormat="dd/MM/yyyy"
                                              className="gdlr-datepicker"
                                              minDate={new Date()}
                                          />
                                        </div>
                                      </div>
                                      <div className="gdlr-reservation-field gdlr-resv-combobox">
                                        <span className="gdlr-reservation-field-title">Đêm</span>
                                        <div className="gdlr-combobox-wrapper">
                                          <select name="gdlr-night" id="gdlr-night">
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                                                <option key={num} value={num}>{num}</option>
                                            ))}
                                          </select>
                                        </div>
                                      </div>

                                      <div className="clear"/>
                                      <div className="gdlr-reservation-field gdlr-resv-datepicker">
                                        <span className="gdlr-reservation-field-title">Thời gian ra</span>
                                        <div className="gdlr-datepicker-wrapper">
                                          <DatePicker
                                              selected={checkOutDate}
                                              onChange={(date) => handleDateChange(date, 'checkOut')}
                                              placeholderText="Chọn ngày"
                                              dateFormat="dd/MM/yyyy"
                                              className="gdlr-datepicker"
                                              minDate={checkInDate || new Date()}
                                          />
                                        </div>
                                      </div>

                                      <div className="clear"/>
                                      <div
                                          className="gdlr-reservation-field gdlr-resv-combobox gdlr-reservation-bar-room-number">
                                        <span className="gdlr-reservation-field-title">Số phòng</span>
                                        <div className="gdlr-combobox-wrapper">
                                          <select
                                              name="gdlr-room-number"
                                              id="gdlr-room-number"
                                              value={roomNumber}
                                              onChange={(e) => setRoomNumber(Number(e.target.value))}
                                          >
                                            <option value={1} selected>1</option>
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
                                      <div className="clear"/>
                                      <div className="gdlr-reservation-people-amount-wrapper"
                                           id="gdlr-reservation-people-amount-wrapper">
                                        <div className="gdlr-reservation-people-amount">
                                          <div className="gdlr-reservation-field-title">Phòng 1</div>
                                          <div className="gdlr-reservation-field gdlr-resv-combobox ">
                                            <span className="gdlr-reservation-field-title">Người lớn</span>
                                            <div className="gdlr-combobox-wrapper">
                                              <select
                                                  name="gdlr-adult-number[]"
                                                  className="gdlr-select-option"
                                                  value={adultNumber}
                                                  onChange={(e) => setAdultNumber(Number(e.target.value))}
                                              >
                                                <option value={1}>1</option>
                                                <option value={2} selected>2</option>
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
                                            <span className="gdlr-reservation-field-title">Trẻ em</span>
                                            <div className="gdlr-combobox-wrapper">
                                              <select
                                                  name="gdlr-children-number[]"
                                                  className="gdlr-select-option"
                                                  value={childrenNumber}
                                                  onChange={(e) => setChildrenNumber(Number(e.target.value))}
                                              >
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
                                          <div className="clear"/>
                                        </div>
                                      </div>
                                      <div className="clear"/>
                                    </div>
                                    <div className="gdlr-reservation-bar-service-form"
                                         id="gdlr-reservation-bar-service-form"/>
                                    <Button className="gdlr-reservation-bar-title">Check</Button>
                                  </form>

                                  <div className="gdlr-booking-content">
                                    <div className="gdlr-booking-process-bar" id="gdlr-booking-process-bar" data-state={1}>
                                      <div data-process={1} className="gdlr-booking-process gdlr-active">1. Chọn thời gian</div>
                                      <div data-process={2} className="gdlr-booking-process">2. Chọn phòng</div>
                                      <div data-process={3} className="gdlr-booking-process">3. Đặt phòng</div>
                                      <div data-process={4} className="gdlr-booking-process">4. Xác nhận</div>
                                    </div>
                                  </div>
                                  <div className="gdlr-booking-content-wrapper" style={{ fontSize: '0.8em' }}>
                                    <div className="gdlr-booking-content-inner" id="gdlr-booking-content-inner">
                                      <div className="gdlr-datepicker-range-wrapper">
                                        <div className="gdlr-datepicker-range hasDatepicker" id="gdlr-datepicker-range" data-dfm="d M yy" data-block="[&quot;2018-02-14&quot;,&quot;2018-02-15&quot;]">
                                          <div className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi" style={{ display: 'flex', width: '34em' }}>
                                            <div className="ui-datepicker-group ui-datepicker-group-first">
                                              <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-left">
                                                <a className="ui-datepicker-prev ui-corner-all" onClick={() => changeMonth('prev')} title="Prev">
                                                  <span className="ui-icon ui-icon-circle-triangle-w">Prev</span>
                                                </a>
                                                <div className="ui-datepicker-title">
                                                  <span className="ui-datepicker-month">{monthNames[currentMonth]}</span>
                                                  <span className="ui-datepicker-year"> {currentYear}</span>
                                                </div>
                                              </div>
                                              <table className="ui-datepicker-calendar">
                                                <thead>
                                                  <tr>
                                                    {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(day => (
                                                      <th key={day} scope="col"><span title={day}>{day}</span>
                                                      </th>
                                                    ))}
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  {renderCalendarDays(0)}
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;