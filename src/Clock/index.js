import { useCurrentDate } from "./date";
import { ClockParagraph } from "./styled";

const displayDate = (date) =>
  date.toLocaleTimeString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "numeric",
  });

const Clock = () => {
  return <ClockParagraph> Dzisiaj jest {displayDate(useCurrentDate())} </ClockParagraph>;
};

export default Clock;
