import React from 'react';
import { NavItem } from '../types';

interface SubMenuItemProps {
  navItem: NavItem;
}

const SubMenuItem: React.FC<SubMenuItemProps> = ({ navItem }) => (
  <div className="submenu-container">
    <div className="nav-item-list">
      {navItem.submenu && navItem.submenu.map(subItem => (
        <div key={subItem.name}>
          <a href={subItem.href}>{subItem.name}</a>
        </div>
      ))}
    </div>
    <div className="nav-item-image">
      <img src={navItem.image} alt={`${navItem.name}`}/>
    </div>
  </div>
);

export default SubMenuItem;