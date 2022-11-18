// import { CurrentDate } from "./date";
import { ClockParagraph } from "./styled";
import { useEffect, useState } from "react";

const displayDate = (date) =>
  date.toLocaleTimeString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "numeric",
  });

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <ClockParagraph> Dzisiaj jest {displayDate(date)} </ClockParagraph>;
};

export default Clock;
