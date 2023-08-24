import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        fetchPopularProducts();
    }, []);

    const fetchPopularProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3007/popularproducts'); // Adjust the URL based on your server setup
            console.log(response.data);
            setPopularProducts(response.data);
        } catch (error) {
            console.error('Error fetching popular products:', error);
        }
    };

    return (
        <div>
            <h4>1. The most popular product among customers :</h4>
            <ul>
                {popularProducts.map((product, index) => (
                    <li key={index}>
                        <h5>{product.name}</h5> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularProducts;
