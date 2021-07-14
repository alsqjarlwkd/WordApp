import {Link}  from 'react-router-dom'
import React from 'react'
import useFetch from '../hooks/useFetch'
const DayList = () => {
    const days = useFetch('http://localhost:3001/days')
    
    // const[days,setdays]=useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:3001/days')
    //     .then(res=>{
    //         return res.json()
    //     })
    //     .then(data=>{
    //         setdays(data)
    //     })
    // },[])
        return (
        <div>
            <ul className="list_day">
                {days.map((data,index)=>{
                    return(
                        <li key={index}>
                            <Link to={`/day/${data.day}`}>Days{data.day}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DayList
