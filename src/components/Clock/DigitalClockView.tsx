import React from "react";
import {ClockViewPropsType} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {

  const get2digitsStr = (num: number) => {
    return num < 10
      ? "0" + num
      : num
  }

  const hoursStr = get2digitsStr(date.getHours());
  const minutesStr = get2digitsStr(date.getMinutes());
  const secondsStr = get2digitsStr(date.getSeconds());

  return (
    <div>
      <span>{hoursStr}</span>:
      <span>{minutesStr}</span>:
      <span>{secondsStr}</span>
    </div>
  )
}
