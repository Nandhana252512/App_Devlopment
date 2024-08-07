import React from 'react';
import { Link } from 'react-router-dom';
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,  BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'
 
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> TRANSPOMASTER
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                    <BsGrid1X2Fill className='icon'/> <Link to="/admin">Dashboard</Link>
            </li>
            <li className='sidebar-list-item'>
                    <BsFillArchiveFill className='icon'/><Link to="/admin-products">Products</Link>
            </li>
            <li className='sidebar-list-item'>
                
                    <BsFillGrid3X3GapFill className='icon'/><Link to="/categories"> Categories</Link>
               
            </li>
            <li className='sidebar-list-item'>
               
                    <BsPeopleFill className='icon'/> <Link to="/admin/customers">Customers</Link>

            </li>
            <li className='sidebar-list-item'>
                
                    <BsListCheck className='icon'/> <Link to="/inventories">Inventory</Link>
                
            </li>
            <li className='sidebar-list-item'>
                
                    <BsMenuButtonWideFill className='icon'/><Link to="/reports"> Reports</Link>
               
            </li>
            <li className='sidebar-list-item'>
                
                    <BsFillGearFill className='icon'/><Link to="/settings"> Setting</Link>
                
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar