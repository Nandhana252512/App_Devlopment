import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/action';

const Product = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        alert('Item added to cart successfully');
    };

    const handleGoToPayment = () => {
        navigate('/payment'); // Update this line to navigate to the payment page
    };

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-5">
                <h4 className="text-danger">Error: {error}</h4>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="text-center mt-5">
                <h4>No product found</h4>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                    />
                </div>
                <div className="col-lg-6 mb-4">
                    <h4 className="text-uppercase text-muted">{product.category}</h4>
                    <h1 className="display-4">{product.title}</h1>
                    <p className="fw-bolder">Rating: {product.rating?.rate} &#9733;</p>
                    <h3>${product.price.toFixed(2)}</h3>
                    <p>{product.description}</p>
                    <Button onClick={() => handleAddToCart(product)} variant="dark">
                        Add to Cart
                    </Button>
                   
                </div>
            </div>
        </div>
    );
};

export default Product;
