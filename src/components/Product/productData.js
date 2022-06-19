import React, { useState, useEffect } from "react";
import axios from 'axios';
const url = 'http://localhost:3001/product/collection'


export default function ProductData() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                getProductsInCategoryList(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    const getProductsInCategoryList = (categoryList) => {
        let productList = []
        for (let i = 0; i < categoryList.length; i++) {
            const currentProductList = categoryList[i].product;
            for (let j = 0; j < currentProductList.length; j++) {
                productList.push(currentProductList[j])
            }
        }
        console.log(productList)
        setProduct(productList)
    }


    return (
        <section className="container">
            {product.map((prod) =>
                <div className="card">
                    <h1 className="id" >{prod.productId}</h1>
                    <div className="warpper">
                        <div className="card_img" /*style={{ "backgroundImage": bg_img }}*/></div>
                        <div className="cardInfo">
                            <h1>{prod.name}</h1>
                            <div className="action">
                                <div className="refGroup">
                                    <p className="ref">{prod.ref}</p>
                                </div>
                                <div className="cart">
                                    <svg className="outCart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                        <path d="M2 6h10l10 40h32l8-24H16"></path>
                                        <circle cx="23" cy="54" r="4"></circle>
                                        <circle cx="49" cy="54" r="4"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section >
    )
}