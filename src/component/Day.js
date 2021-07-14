import React from 'react'
import { useParams } from 'react-router'
import Word from './Word'
import useFetch from '../hooks/useFetch'
const Day = () => {
    const{day}=useParams();// 동적 라우팅 값으로 걸어둔 이름으로 객체를 가져올 수 있다.
    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    // console.log(day);
    // const [words,setwords]=useState([]);
    // useEffect(()=>{
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res=>{
    //         return res.json()
    //     })
    //     .then(data=>{
    //         setwords(data)
    //     })
    // },[day])
    return (
        <div>
            <h2>Day{day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map((word)=>{
                return(
                <Word word={word} key={word.id}></Word>
                )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Day
