import React from "react";
import Navbar from "../../Navbar/Navbar";
import Card from "./Card";
import "./Product.css";

function Product() {
    return (
        <section>
            <Navbar />
            <div className="container">

                <div className="row">
                    <Card
                        title="Nike OP"
                        images={process.env.PUBLIC_URL + '/Images/nikeop.png'}
                        prix="150"
                        alt="product"
                    />
                    <Card
                        title="Geox CARS"
                        images={process.env.PUBLIC_URL + 'Images/geox.png'}
                        prix="280"
                        alt="product"
                    />
                </div>
            </div>
        </section>
    );
}
export default Product;