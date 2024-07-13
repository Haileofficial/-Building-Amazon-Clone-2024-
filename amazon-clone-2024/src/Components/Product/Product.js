import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from "./Product.module.css"

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
      <section className={classes.products_container}>
        {products.map((singleProduct) => (
          <ProductCard product={singleProduct} key={singleProduct.id} />
        ))}
      </section>
  );
}

export default Product;