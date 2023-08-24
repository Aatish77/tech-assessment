import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Preferences from './Preferences';
import Orders from './Orders';
import PopularProducts from './PopularProducts';
import CustomersWhoOrderedAll from './CustomersWhoOrderedAll';
import CustomersWhoBoughtInexpensive from './CustomersWhoBoughtInexpensive';
const Home = () => {
    const [data,setData]=useState([])
    useEffect(
        ()=>{
            getData();
        }
    )
    const getData=()=>{
        axios.get('http://localhost:3007/viewallproducts')
        .then((res)=>{
            setData(res.data)
        })
        .catch()
    }

    
  
    

  return (
    <div className="container">
    
        <h4>Products</h4>
        <table class="table table-hover" >
  <thead>
    <tr>
      <th class="table-dark" scope="col">product id</th>
      <th class="table-dark" scope="col">name</th>
      <th class="table-dark" scope="col">price</th>
      
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
            return <tr>
      <td class="table-light" >{value.product_id}</td>
      <td class="table-light">{value.name}</td>
      <td class="table-light">{value.price}</td>
      
    </tr>
        }
    )}
    
    
  </tbody>
</table>
<Preferences/>
<Orders/>
<PopularProducts/>
<CustomersWhoOrderedAll/>
<CustomersWhoBoughtInexpensive/>




      
</div>
    
  )
}

export default Home