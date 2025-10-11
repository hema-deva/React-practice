import React from 'react';

export const Searchbar = () => {
    let valueItem;
    let items =['banana','apple','graphes','pibj','yellow'];

    function handleChange(e) {
        valueItem=e.target.value;


    }

    const onFilter = () => {
        const name = document.querySelectorAll('.names');
        name.forEach((na) => {
            na.innerHTML='';
        }
        )

        const filteredData = items.filter((item) => {
            return item.toLowerCase().includes(valueItem.toLowerCase())
        }) 
        items = filteredData;

        const listval = document.querySelector('.list');

        items.forEach(val => {
        const p = document.createElement('p');
        p.className = 'names';
        p.textContent = val;
        listval.appendChild(p);
        });

    }
  
    return <>
    <input type='text' onChange={handleChange}/>
    <button onClick={onFilter}>search</button>
    <div className='list'>
        {
        items && items.map((val) => (
            <p className='names'>{val}</p>
        ))
    }
    </div>
    </>
}