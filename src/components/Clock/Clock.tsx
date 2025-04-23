import {useEffect, useState} from "react";

type Props = {};

const get2digitsStr = (num: number) => {
  return num < 10
    ? "0" + num
    : num
}

export const Clock = (props: Props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => {
      clearInterval(intervalId)
    };
  }, [])

  const hoursStr = get2digitsStr(date.getHours());
  const minutesStr = get2digitsStr(date.getMinutes());
  const secondsStr = get2digitsStr(date.getSeconds());

  return (
    <div>
      <span>{hoursStr}</span>
      :
      <span>{minutesStr}</span>
      :
      <span>{secondsStr}</span>
    </div>
  )
}
