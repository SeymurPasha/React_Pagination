import React from 'react'
import {useState, useEffect} from 'react';

export default function Context() {

    const [data, setData] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [i, setI] = useState(0);
 
    useEffect(() => {
      console.log('data fetched');
    fetch('https://jsonplaceholder.typicode.com/comments/')
  .then(response => response.json())
  .then(json => setData(json))
  }, [])

  useEffect(() => {
    setCurrentList(data.slice(i,i+25))
    console.log(currentList);
    console.log(i);
  },[data,i])
    return (
        <div>
        {currentList.map(comment => <div key = {comment.id}>{comment.id}</div>)}
        <button onClick = {() => setI(prev => prev-25)}>Prev Page</button>
        <button onClick = {() => setI(prev => prev+25)}>Next Page</button>
        </div>
    )
}
