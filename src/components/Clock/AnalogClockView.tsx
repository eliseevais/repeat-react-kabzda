import React, { useEffect, useRef } from "react";
import { ClockViewPropsType } from "./Clock";
import s from "./AnalogClockView.module.css";

export const AnalogClockView: React.FC<ClockViewPropsType> = ({ date }) => {
  const clockRef = useRef<HTMLDivElement>(null);
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hourRef.current || !minuteRef.current || !secondRef.current || !dateRef.current || !dayRef.current) {
        return;
      }

      const h = date.getHours();
      const m = date.getMinutes();
      const s = date.getSeconds();

      const hDeg = h * 30 + m * (360 / 720);
      const mDeg = m * 6 + s * (360 / 3600);
      const sDeg = s * 6;

      hourRef.current.style.transform = `rotate(${hDeg}deg)`;
      minuteRef.current.style.transform = `rotate(${mDeg}deg)`;
      secondRef.current.style.transform = `rotate(${sDeg}deg)`;

      const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const day = weekday[date.getDay()];
      const dateStr = `${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;

      dateRef.current.innerHTML = dateStr;
      dayRef.current.innerHTML = day;
    }, 100);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div className={s.clock} ref={clockRef}>
      <div>
        <div ref={dateRef} className={`${s.info} ${s.date}`}></div>
        <div ref={dayRef} className={`${s.info} ${s.day}`}></div>
      </div>
      <div className={s.dot}></div>
      <div>
        <div ref={hourRef} className={s.hourHand}></div>
        <div ref={minuteRef} className={s.minuteHand}></div>
        <div ref={secondRef} className={s.secondHand}></div>
      </div>
      <div>
        <span className={s.h3}>3</span>
        <span className={s.h6}>6</span>
        <span className={s.h9}>9</span>
        <span className={s.h12}>12</span>
      </div>
      {Array.from({ length: 60 }, (_, i) => (
        <div
          key={i}
          className={s.diallines}
          style={{ transform: `rotate(${6 * i}deg)` }}
        />
      ))}
    </div>
  );
};
