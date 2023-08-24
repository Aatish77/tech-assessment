import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Preferences = () => {
    const [data,setData]=useState([])
    useEffect
        (
        ()=>{
            getData();
        }
    )
    const getData=()=>{
        axios.get('http://localhost:3007/viewallpreferences')
        .then((res)=>{
            setData(res.data)
        })
        .catch()
    }
  return (
    <div>
    <h4>Customer preference</h4>
            <table class="table table-hover" >
      <thead>
        <tr>
          <th class="table-dark" scope="col">preference id</th>
          <th class="table-dark" scope="col">product id</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map(
            (value,index)=>{
                return <tr>
          <td class="table-light" >{value.preference_id}</td>
          <td class="table-light">{value.product_id}</td>
          
        </tr>
            }
        )}
        
        
      </tbody>
    </table></div>
  )
}

export default Preferences