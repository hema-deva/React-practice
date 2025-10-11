import { useState } from "react";

const options = ["cricket", "football", "hockey"];
const days = ["weekday", "weekends"];

export function Checkboxes() {
  const [checkboxData, setCheckboxData] = useState("");
  console.log(checkboxData);

  function handleChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      setCheckboxData([...checkboxData, value]);
    } else {
      setCheckboxData(checkboxData.filter((item) => item !== value));
    }
  }
  
  function handleDelete(item) {
    console.log(item);
    const index = options.indexOf(item);
    options.splice(index, 1);
    console.log(options);
  }

  return (
    <>
      {options.map((item, i) => (
        <label key={i}>
          <input type="checkbox" value={item} onChange={handleChange} />
          {item}
          {checkboxData.includes(item) && (
            <span onClick={() => handleDelete(item)}>{` Delete `}</span>
          )}
        </label>
      ))}
    </>
  );
}
