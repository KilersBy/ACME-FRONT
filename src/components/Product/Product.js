import React from "react";
import Navbar from '../Navbar/Navbar';
import ProductData from "./ProductData";
import "../../styles/Product.css";

function Product() {
    return (
        <section>
            <Navbar />
            <div className="row">
                <ProductData />
            </div>
        </section>
    );
}
export default Product;