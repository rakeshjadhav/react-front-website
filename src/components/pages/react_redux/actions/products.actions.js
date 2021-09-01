import { SET_PRODUCTS } from "./products.types";

export const fetchProducts = () => {
  return async function (dispatch) {
    const res = await fetch(
      "http://localhost:5000/api/users/products",
      {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
      }
    );
    const data = await res.json();
    console.log("API get data here....")
    console.log(data.products);
    // will be called by redux thunk middleware
    dispatch(setProducts(data.products)); 
  };
};

export const setProducts = (products = null) => {

  console.log("setProducts....")
    console.log(products);

  if (products) {
    return {
      type: SET_PRODUCTS,
      payload: products,
    };
  }

  return {
    type: SET_PRODUCTS,
    payload: [],
  };
};