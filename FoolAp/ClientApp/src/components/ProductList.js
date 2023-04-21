import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthService from "../services/AuthService";
import Login from "./Login";

function ProductList() {
    // const [products, setProducts] = useState([]);
    //
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const result = await axios.get('/api/products/1');
    //         setProducts(result.data);
    //     };
    //
    //     fetchProducts();
    // }, []);

    return (
      
            <Login/>
    );
}

export default ProductList;
