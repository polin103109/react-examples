import { useEffect, useState } from "react";
import './Entries.css';

export default function Entries(){
    const[entries,setEntries]= useState([]);
    useEffect(()=>{
        fetch('https://api.publicapis.org/entries')
        .then((res)=>res.json())
        .then((data)=>{
            setEntries(data.entries.slice(0,10));
            console.log(data.entries.slice(0,10));
        })
        .catch(err=>{
            alert('failed to load data');
            console.error(err);
    });
    },[])
    return <div className="entries">
        <ul>{entries.map((entry,index)=>(
            <li key={index}>{entry.Category}</li>
        ))}</ul>
    </div>
}