import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../src/components/AdminProducts.css';

const Adminproducts = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const products = [
    { id: 1, name: 'WOOD', description: 'TranspoMaster ensures efficient tracking and management of wood materials for optimal inventory levels and timely distribution.', price: '$10.00', stock: 100 },
    { id: 2, name: 'METAL', description: 'TranspoMaster streamlines the management of metal materials, guaranteeing accurate stock levels and prompt distribution.', price: '$20.00', stock: 50 },
    { id: 3, name: 'COTTON', description: 'TranspoMaster efficiently manages cotton logistics, ensuring accurate inventory control and timely shipment.', price: '$30.00', stock: 30 },
    { id: 4, name: 'CONTAINERS', description: 'TranspoMaster optimizes container logistics, providing precise tracking and efficient distribution for seamless operations.', price: '$40.00', stock: 20 },
    { id: 5, name: 'STEEL', description: 'TranspoMaster streamlines steel logistics, guaranteeing accurate stock levels and prompt delivery to meet industry demands', price: '$50.00', stock: 10 },
  ];

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <main className="main-container">
        <div className="main-title">
          <h3>PRODUCTS</h3>
        </div>

        <div className="products-content">
          <table className="products-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                   
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Adminproducts;