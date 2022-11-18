import { CurrentDate } from "./date";
import { ClockParagraph } from "./styled";

const displayDate = (date) =>
  date.toLocaleTimeString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "numeric",
  });

const Clock = () => {
  const date = CurrentDate();

  return <ClockParagraph> Dzisiaj jest {displayDate(date)} </ClockParagraph>;
};

export default Clock;
