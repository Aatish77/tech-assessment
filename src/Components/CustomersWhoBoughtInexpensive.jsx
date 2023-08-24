import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomersWhoBoughtInexpensive = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function fetchCustomers() {
            try {
                const response = await axios.get("http://localhost:3007/customersWhoBoughtInexpensiveItems");
                setCustomers(response.data.matchingCustomers);
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        }

        fetchCustomers();
    }, []);

    return (
        <div>
            <h4>3. Customers who have ordered inexpensive items :</h4>
            {customers.length === 0 ? (
                <p>No matching customers found.</p>
            ) : (
                <ul>
                    {customers.map((customerId, index) => (
                        <li key={index}> <h5>{customerId}</h5></li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default CustomersWhoBoughtInexpensive;
