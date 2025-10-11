import React, { useEffect } from "react";
// https://jsonplaceholder.typicode.com/users

export const ApiFetch = ({url}) => {

    const fetchUsers = async() => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json).then(res => res.json)
        console.log(data);
    }
    // useEffect(() => {
        
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => res.json())
    //     .then(
    //         data => {
    //             if(data) {
    //                 const conatainer = document.getElementById("apidata");
                    
    //                 data.forEach((user) => {
    //                     const div = document.createElement('div');
    //                     div.innerText=user.name
    //                     conatainer.appendChild(div);
    //                 })
    //             }
    //         }

    //      )
    // })

      fetch(url)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("apidata");
      if (data && container && container.children.length === 0) {
        data.forEach(user => {
          const div = document.createElement("div");
          div.innerText = user.name;
          container.appendChild(div);
        });
      }
    })
    .catch(err => console.error("API Error:", err));
    return (
        <div>
            <h3>AAPi data</h3>
            <div id ="apidata"></div>
        </div>

    );
}