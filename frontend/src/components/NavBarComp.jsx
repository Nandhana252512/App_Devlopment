// src/components/NavBarComp.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { removeFromCart } from '../redux/actions/action';

const NavBarComp = () => {
    const getData = useSelector((state) => state.cartReducer.carts);
    const dispatch = useDispatch();

    const remove = (id) => {
        dispatch(removeFromCart(id));
    };

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Your Cart</Popover.Header>
            <Popover.Body>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">Image</th>
                            <th className="text-center">Item</th>
                            <th className="text-center">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getData.length > 0 ? (
                            getData.map((item) => (
                                <tr key={item.id}>
                                    <td className="text-center">
                                        <img
                                            src={item.image}
                                            style={{ width: '5rem', height: '5rem', margin: '15px' }}
                                            alt={item.name}
                                        />
                                    </td>
                                    <td>
                                        <div className="text-center">
                                            <p className="mb-0 fw-bold">{item.name}</p>
                                            <p className="mb-0">Price: ${item.price.toFixed(2)}</p>
                                            <Button variant="link" onClick={() => remove(item.id)}>
                                                <i className="fa fa-trash fs-4 text-danger" aria-hidden="true"></i>
                                            </Button>
                                        </div>
                                    </td>
                                    <td className="text-center">${item.price.toFixed(2)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center">No items in cart</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="text-center mt-3">
                    <Link to="/cart">
                        <Button variant="outline-primary">View Cart</Button>
                    </Link>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <Navbar bg="light" variant="light" className="shadow-sm bg-white py-4">
            <Container>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Navbar.Brand className="fw-bold fs-2">ShopSee</Navbar.Brand>
                </Link>
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link style={{ textDecoration: 'none' }} to="/">
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{ textDecoration: 'none' }} to="/products">
                            Products
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{ textDecoration: 'none' }} to="/swap">
                            Swap Items
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{ textDecoration: 'none' }} to="/login">
                            Login
                        </Link>
                    </Nav.Link>
                    
                    <Nav.Link>
                        <Link style={{ textDecoration: 'none' }} to="/about">
                            About Us
                        </Link>
                    </Nav.Link>
                </Nav>
                <div className="ms-auto">
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                        <Button variant="outline-dark">
                            <i className="fa fa-shopping-cart me-2"></i>
                            {getData.length}
                        </Button>
                    </OverlayTrigger>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavBarComp;
