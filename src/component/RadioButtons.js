import { useState } from "react";


const options = ["cricket", "football", "hockey"];
const days = ["weekday", "weekends"];

export const RadioButtons = () => {
  const [selectedval, setSelectedval] = useState("");
  const [dayval, setDayval] = useState("");

  console.log(selectedval);
  return (
    <>
      {options &&
        options.map((item, index) => (
          <label key={index}>
            <input
              type="radio"
              value={item}
              checked={selectedval === item}
              onChange={(e) => setSelectedval(e.target.value)}
            />
            {item}
          </label>
        ))}
      <br />
      {options &&
        days.map((day, index) => (
          <label key={index}>
            <input
              type="radio"
              value={day}
              checked={dayval === day}
              onChange={(e) => setDayval(e.target.value)}
            />
            {day}
          </label>
        ))}
      {selectedval && dayval && (
        <p>{`I will pplay ${selectedval} in ${dayval}`}</p>
      )}
    </>
  );
}
