import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchData = async()=>{
        setLoading(true);
        try{
            const res = await fetch(url);
            if(!res.ok){
                throw new Error(`Error: ${res.status}`)
            }
            const result = await res.json();
            setData(result)
        }catch(err){
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }
    fetchData()
  },[url])

  return {data, loading, error};
}
