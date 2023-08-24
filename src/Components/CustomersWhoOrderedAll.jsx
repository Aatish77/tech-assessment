import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomersWhoOrderedAll = () => {
    const [customerIDs, setCustomerIDs] = useState([]);

    useEffect(() => {
        async function fetchCustomersOrderedAllProducts() {
            try {
                const response = await fetch('http://localhost:3007/customers-ordered-all-products'); // Replace with your backend URL
                const data = await response.json();
                setCustomerIDs(data);
            } catch (error) {
                console.error('Error fetching customer IDs:', error);
            }
        }

        fetchCustomersOrderedAllProducts();
    }, []);

    return (
        <div>
            <h4>2. Customers who have ordered all products :</h4>
            <ul>
                {customerIDs.map(customerID => (
                    <li key={customerID}><h5>{customerID}</h5></li>
                ))}
            </ul>
        </div>
    );
}


export default CustomersWhoOrderedAll;
