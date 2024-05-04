import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Products data based on category
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://rymo-shop-api.onrender.com/api/v1/products?category=${cat}`
            : "https://rymo-shop-api.onrender.com/api/v1/products"
        );
        if (Array.isArray(res.data.data)) {
          setProducts(res.data.data);
        } else {
          throw new Error("Received data is not an array");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  // Products data based on filters and sort
  useEffect(() => {
    if (products.length > 0) {
      let filtered = [...products];
      // console.log(...products);
      if (filters) {
        filtered = filtered.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        );
      }
      if (filtered.length === 0) {
        alert("Oops! Products Not Found");
      }

      if (sort === "newest") {
        filtered.sort((a, b) => a.createdAt - b.createdAt);
      } else if (sort === "asc") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sort === "desc") {
        filtered.sort((a, b) => b.price - a.price);
      }

      setFilteredProducts(filtered);
    }
  }, [products, filters, sort]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
