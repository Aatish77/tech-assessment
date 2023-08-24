import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Orders = () => {
    const [data,setData]=useState([])
    useEffect(
        ()=>{
            getData();
        }
    )
    const getData=()=>{
        axios.get('http://localhost:3007/viewallorders')
        .then((res)=>{
            setData(res.data)
        })
        .catch()
    }
  return (
    <div>
        <h4>Orders</h4>
        <table class="table table-hover" >
  <thead>
    <tr>
      <th class="table-dark" scope="col">customer id</th>
      <th class="table-dark" scope="col">preference </th>
      <th class="table-dark" scope='col'>date</th>
      
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
            return <tr>
      <td class="table-light" >{value.customer_id}</td>
      <td class="table-light">{value.preference_id}</td>
      <td class="table-light">{value.date}</td>
      
    </tr>
        }
    )}
    
    
  </tbody>
</table>
    </div>
  )
}

export default Orders