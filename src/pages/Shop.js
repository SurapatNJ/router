import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Shop = () => {
  
  const [items,setItems]=useState([])

  const fetchData = async () => {
    await axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
      console.log(res.data)
      setItems(items => res.data)
    })
  }

  useEffect(()=> {
    fetchData()
  },[])
  

  return(
    <div>
      <h1>Shop</h1>
      {items.map(item => (
        <p key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.title}</Link>
        </p>
      ))}
    </div>
  )
}

export default Shop