import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        product_name: "",
        price: "",
        discount_price: "",
        image_url: "",
        description: "",
        category: "Category1", // Default value
        status: "Available",   // Default value
    });

    const {
        product_name,
        price,
        discount_price,
        image_url,
        description,
        category,
        status,
    } = product;

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = async () => {
        const result = await axios.get(`http://localhost:9192/products/${id}`);
        setProduct(result.data);
    };

    const handleInputChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9192/products/${id}`, product);
        navigate("/view-products");
    };

    return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5">Edit Product</h2>
            <form onSubmit={(e) => updateProduct(e)}>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="product_name">
                        Product Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="product_name"
                        id="product_name"
                        required
                        value={product_name}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="number"
                        step="0.01"
                        name="price"
                        id="price"
                        required
                        value={price}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="discount_price">
                        Discount Price
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="number"
                        step="0.01"
                        name="discount_price"
                        id="discount_price"
                        value={discount_price}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="image_url">
                        Image URL
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="image_url"
                        id="image_url"
                        value={image_url}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="form-control col-sm-6"
                        name="description"
                        id="description"
                        rows="4"
                        value={description}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="category">
                        Category
                    </label>
                    <select
                        className="form-control col-sm-6"
                        name="category"
                        id="category"
                        value={category}
                        onChange={(e) => handleInputChange(e)}
                    >
                        <option value="Category1">Category1</option>
                        <option value="Category2">Category2</option>
                        <option value="Category3">Category3</option>
                    </select>
                </div>

                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="status">
                        Status
                    </label>
                    <select
                        className="form-control col-sm-6"
                        name="status"
                        id="status"
                        value={status}
                        onChange={(e) => handleInputChange(e)}
                    >
                        <option value="Available">Available</option>
                        <option value="Unavailable">Unavailable</option>
                    </select>
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-outline-success btn-lg">
                            Save
                        </button>
                    </div>

                    <div className="col-sm-2">
                        <Link to={"/view-products"} className="btn btn-outline-warning btn-lg">
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;
