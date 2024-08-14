import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductInformation = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({
        product_name: "",
        price: "",
        discount_price: "",
        image_url: "",
        description: "",
        category: "",
        status: "",
    });

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:9192/products/${id}`);
        setProduct(result.data);
    };

    return (
        <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img
                                    src={product.image_url || "https://via.placeholder.com/150"}
                                    alt="Product"
                                    className="rounded-circle img-fluid"
                                    style={{ width: 150 }}
                                />
                                <h5 className="my-3">{product.product_name}</h5>
                                <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-outline-primary">
                                        Buy Now
                                    </button>
                                    <button type="button" className="btn btn-outline-warning ms-1">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="card mb-4">
                            <div className="card-body">
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Price</h5>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">${product.price}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Discount Price</h5>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                            ${product.discount_price || "N/A"}
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Category</h5>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{product.category}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Status</h5>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{product.status}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h5 className="mb-0">Description</h5>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductInformation;
