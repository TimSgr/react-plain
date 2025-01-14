"use client";
import "../app/globals.css";
import { useState } from "react";

function SimpleCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return (day === 0 ? 6 : day - 1);
    };
    

    const getMonthName = (month: number) => {
        const months = [
            "January", "February", "March", "April", "May", 
            "June", "July", "August", "September", "October", 
            "November", "December"
        ];
        return months[month];
    };

    const generateCalendarDays = (): (null | number)[] => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInCurrentMonth = daysInMonth(month, year);
        const firstDay = getFirstDayOfMonth(currentDate);
    
        const calendarDays: (null | number)[] = Array.from({ length: firstDay }, () => null);
    
        for (let day = 1; day <= daysInCurrentMonth; day++) {
            calendarDays.push(day);
        }
    
        return calendarDays;
    };
    

    const handlePreviousMonth = () => {
        const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        setCurrentDate(prevDate);
    };

    const handleNextMonth = () => {
        const nextDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(nextDate);
    };

    const calendarDays = generateCalendarDays();

    return (
        <div className="calendar_wrapper text-center overflow-hidden w-full">
            <div className="calendar_header flex justify-between overflow-hidden w-full">
                <button onClick={handlePreviousMonth}>{"<"}</button>
                <h2>
                    {getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}
                </h2>
                <button onClick={handleNextMonth}>{">"}</button>
            </div>
            <div className="calendar_grid grid grid-cols-7 w-full overflow-hidden">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div className="weekday p-2" key={day}>
                        {day}
                    </div>
                ))}
                {calendarDays.map((day, index) => (
                    <div className={`day ${day ? "" : "empty"} p-2 border-solid	border-1`} key={index}>
                        {day || ""}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SimpleCalendar;
