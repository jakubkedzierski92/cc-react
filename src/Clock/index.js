import { CurrentDate } from "./date"

const displayDate = (date) => date.toLocaleTimeString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "numeric",
})

const Clock = () => {

   const date = CurrentDate();
   
   return(
   <p>Dzisiaj jest {displayDate(date)} </p>
   )
}

export default Clock

