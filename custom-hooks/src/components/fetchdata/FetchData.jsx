import React from 'react'
import useFetch from './useFetch'

const FetchData = () => {
    const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/comments/1");
    if(isLoading) return<p>Loading</p>
    if(error) return <p style={{color: "red"}}>{error}</p>
  return (
    <div>
      <h1>Data</h1>
      {JSON.stringify(data)}
    </div>
  )
}

export default FetchData
