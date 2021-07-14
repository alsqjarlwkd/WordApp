import React,{useRef,useState} from 'react'
import { useHistory } from 'react-router';
import useFetch from './../hooks/useFetch'
const CreateWord = () => {
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();
    const[isLoading,setisLoading]=useState(false);
    const onSubmit=(e)=>
    {
        if(isLoading===false)
        {
        setisLoading(true);
        e.preventDefault();
        fetch(`http://localhost:3001/words/`,{
        method:"POST",
        headers:{
            'content-Type':'application/json',
        },
        body:JSON.stringify({
        day:dayRef.current.value,
        eng:engRef.current.value,
        kor:korRef.current.value,
        isDone:false
        }),
    })
    .then(res=>{
        if(res.ok)
        {
            alert("생성이 완료 되었습니다.")
            history.push(`/day/${dayRef.current.value}`)
            setisLoading(false);
        }
    })
    }
    }
    const engRef = useRef(null)
    const korRef = useRef(null)
    const dayRef = useRef(null)
    return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="ex)computer" ref={engRef}></input>
        </div>
        <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="ex)컴퓨터" ref={korRef}></input>
        </div>
        <div className="input_area">
            <select ref={dayRef}>
                {days.map((day)=>{
                    return(
                    <option key={day.id} value={day.day}>
                    Days:{day.day}
                    </option>
                ) 
                })}
            </select>
        </div>
        <button>{isLoading ? "Saving...":"저장"}</button>
    </form>
    )
}

export default CreateWord
