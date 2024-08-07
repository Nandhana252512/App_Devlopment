import React, {useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import'../../src/components/Inventories.css';
 

const Inventories = () => {


    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle);
    };
  
    const inventories = [
      { id: 1, name: 'Item A', category: 'Category 1', quantity: 100, status: 'In Stock' },
      { id: 2, name: 'Item B', category: 'Category 2', quantity: 50, status: 'Low Stock' },
      { id: 3, name: 'Item C', category: 'Category 3', quantity: 200, status: 'In Stock' },
      { id: 4, name: 'Item D', category: 'Category 1', quantity: 0, status: 'Out of Stock' },
      { id: 5, name: 'Item E', category: 'Category 2', quantity: 120, status: 'In Stock' },
    ];
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
  
        <main className='main-container'>
          <div className='main-title'>
            <h3>INVENTORIES</h3>
          </div>
  
          <div className='inventories-container'>
            <div className='content'>
              <table className="inventories-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventories.map(inventory => (
                    <tr key={inventory.id}>
                      <td>{inventory.id}</td>
                      <td>{inventory.name}</td>
                      <td>{inventory.category}</td>
                      <td>{inventory.quantity}</td>
                      <td>{inventory.status}</td>
                      <td>
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    );
  };
  
  export default Inventories;