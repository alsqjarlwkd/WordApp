import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
    const [resdata,setData]=useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(resdata=>{
            setData(resdata)
        })
    },[url])
    return resdata;
}


export default useFetch
