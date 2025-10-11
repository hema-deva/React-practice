import { useEffect, useState } from "react";

export const LocalStorage = () => {
    const data = {
        name : 'hema',
        age: 30,
        plans : ['playing','dancing']
    }

    const [humanData, setHumanData] = useState(() => {
    // On first run, set data if not present
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(data));
    }
    return JSON.parse(localStorage.getItem("data"));
  });
    
    return <>
    <h1>{humanData.name}</h1>
    <h3>{humanData.age}</h3>
    </>
}