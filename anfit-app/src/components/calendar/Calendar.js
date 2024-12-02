import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';

const eventsList = [
    {
        title: "PT",
        start: "2024-12-24T10:00:00"
    },
]

const Calendar = () => {
    const calendarRef = useRef(null);

  // 주 이동 핸들러
  const handleSwipe = (direction) => {
    const calendarApi = calendarRef.current.getApi();
    if (direction === 'left') {
      calendarApi.next(); // 다음 주로 이동
    } else if (direction === 'right') {
      calendarApi.prev(); // 이전 주로 이동
    }
  };

  // 스와이프 이벤트 추가 (예: touch 이벤트)
  const handleTouchStart = (e) => {
    window.touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (window.touchStartX - touchEndX > 50) {
      handleSwipe('left');
    } else if (touchEndX - window.touchStartX > 50) {
      handleSwipe('right');
    }
  };
    const handleDayCellContent = (arg) => {
        const dayNumber = arg.date.getDate();
        return dayNumber;
    };

    return (
        <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="calendar_wrap">
        <FullCalendar
            ref={calendarRef}
            initialView="dayGridWeek"
            locale="ko"
            plugins={[ dayGridPlugin, interactionPlugin ]}
            dayCellContent={handleDayCellContent}
            fixedWeekCount = {false}
            events={eventsList}
            headerToolbar={{
                left: "title",
                cetner: "",
                right: "prev next"
            }}
            titleFormat={{ year: "numeric", month: "long" }}
            dayHeaderFormat={{ weekday: "short" }}
        />
        </div>
    );
}

export default Calendar;