import React, { useEffect, useState } from 'react'

export const Pagination = () => {
    const[apiData, setApidata] = useState([]);
    const[dataPerPage, setDataPerPage] = useState(10);
    const totalNoPages = Math.ceil(apiData.length/dataPerPage);
    // console.log(totalNoPages);
    const ArrayPages =[...Array(totalNoPages +1).keys()].slice(1); // converting number into array og numbers 2 to [0,1]
    // const ArrayPages = Array.from({length:totalNoPages},(_,i) => i+1); // second method
    // console.log(ArrayPages, ArrayPages2);
    const [currentPage, setCurrentPage] = useState(1);
    const lastIndexFind = currentPage * dataPerPage;
    const firstIndexFind = lastIndexFind - dataPerPage;
    // console.log(lastIndexFind,firstIndexFind);
    const DataToPrint = apiData.slice(firstIndexFind , lastIndexFind);
    // console.log(DataToPrint);
    
    const handlePrevChange = () => {
        if (currentPage !==1) {
            setCurrentPage(currentPage-1)
        }
    }

        const handleNextChange = () => {
        if (currentPage !== totalNoPages) {
            setCurrentPage(currentPage+1)
        }
    }
    

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(jsonData => setApidata(jsonData));
},[])

    return <>
    <h1>Pagination</h1>
    <select onChange={(e) => setDataPerPage(e.target.value)}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>

    </select>
    {
        DataToPrint.map((data) => (
            <p key={data.id}>{data.title}</p>
        ))
    }
    <span onClick={handlePrevChange}>Prev</span>
    {
        ArrayPages.map((page) => 
                <span key={page} onClick={() => setCurrentPage(page)} className={`${currentPage === page ? 'active' : ''}`}>{` ${page} | `}</span>
        )
    }
    <span onClick={handleNextChange}>Next</span>

    </>
}