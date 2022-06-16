import React from "react";
import Navbar from '../Navbar/Navbar';
import ProductData from "./productData";
import "../../styles/Product.css";

function Product() {

    return (
        <section>
            <Navbar />
            <div className="container">
                <div className="row">
                    <ProductData />
                </div>
            </div>
        </section>
    );
}
export default Product;