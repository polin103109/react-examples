import { useEffect, useState } from "react";
import './Entries.css';

export default function Entries(){
    const[entries,setEntries]= useState([]);
    const[isLoading,setIsLoading]=useState(false);
    useEffect(()=>{
    const fetchData = async() => {
      try{
        setIsLoading(true);
        const res = await fetch('https://api.publicapis.org/entries');
        const data =await res.json();
        setEntries(data.entries.slice(0,10));
    } catch(err){
        alert('failed to load data');
        console.error(err);
    }
    finally{
        setIsLoading(false);
    }
    };
    fetchData();
    },[])
    if(isLoading){
        return <div>Loading......</div>
    }
    return <div className="entries">
        <ul>{entries.map((entry,index)=>(
            <li key={index}>
                <a href={entry.Link}>{entry.Category}</a></li>
        ))}</ul>
    </div>
}