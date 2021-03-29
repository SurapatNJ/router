import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Item = ({match}) => {
  
  const [item,setItem]=useState({})

  const fetchData = async () => {
    await axios.get(`https://fakestoreapi.com/products/${match.params.id}`)
    .then(res => {
      console.log(res.data)
      setItem(item => res.data)
    })
  }

  useEffect(()=> {
    fetchData()
    console.log(match)
  },[])
  

  return(
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt=""/>
    </div>
  )
}

export default Item