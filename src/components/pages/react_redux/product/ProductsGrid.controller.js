
import React from "react";
import { useSelector } from "react-redux";
import ProductsGrid from "./ProductsGrid";


export default function ProductsGridController() {

  const products = useSelector((state) => state.products);
  console.log("Products GridController  useSelect function");
  console.log(products);
  return <ProductsGrid products={products} />;
}