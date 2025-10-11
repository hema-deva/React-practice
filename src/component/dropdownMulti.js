import { useState } from "react";


const countries = [
  {
    name: "India",
    code: "IN",
    info: {
      population: 1400000000,
      region: "Asia",
      cities: ["Delhi", "Mumbai", "Bangalore", "Chennai"],
    },
  },
  {
    name: "United States",
    code: "US",
    info: {
      population: 331000000,
      region: "North America",
      cities: ["New York", "Los Angeles", "Chicago", "Houston"],
    },
  },
  {
    name: "Germany",
    code: "DE",
    info: {
      population: 83000000,
      region: "Europe",
      cities: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    },
  },
  {
    name: "Australia",
    code: "AU",
    info: {
      population: 25000000,
      region: "Oceania",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    },
  },
];

export const DropdownMulti = () => {
  const [country, setCountry] = useState("IN");
  const filteredCountry = countries.find((item) => item.code === country);
  console.log(filteredCountry.info.cities);
  return (
    <div className="App">
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        {countries &&
          countries.map((country, i) => (
            <option key={i} value={country.code}>
              {country.name}
            </option>
          ))}
      </select>
      <select>
        {filteredCountry.info.cities.map((ite) => (
          <option>{ite}</option>
        ))}
      </select>
    </div>
  );
}
