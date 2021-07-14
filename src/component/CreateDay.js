import React from 'react'
import { useHistory } from 'react-router'
import useFetch from '../hooks/useFetch'
const CreateDay = () => {
    const days = useFetch(`http://localhost:3001/days`)
    const history = useHistory();
    const addday =()=>
    {
        fetch(`http://localhost:3001/days/`,{
        method:"POST",
        headers:{
            'content-Type':'application/json',
        },
        body:JSON.stringify({
        day:days.length+1,
        isDone:false
        }),
    })
    .then(res=>{
        if(res.ok)
        {
            alert("생성이 완료 되었습니다.")
            history.push(`/`)
        }
    })
    }
    return (
        <div>
            <h1>{`현재일수:${days.length}일`}</h1>
            <button onClick={addday}>Day 추가</button>
        </div>
    )
}

export default CreateDay
