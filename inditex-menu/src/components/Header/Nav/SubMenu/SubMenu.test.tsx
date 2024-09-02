import React from 'react';
import './SubMenu.scss';
import { NavItem } from '../types';

interface SubMenuProps {
  navItems: NavItem[];
}

const SubMenu: React.FC<SubMenuProps> = ({ navItems }) => {
  return (
    <div className="submenu">
      {navItems.map((navItem: NavItem) => (
        <div className="submenu-container" key={navItem.name}>
          {navItem.submenu ? navItem.submenu.map((item) => (
            <div key={item.name}>
              <a href={item.href}>{item.name}</a>
            </div>
          )) : null}
        </div>
      ))}
    </div>
  );
};

export default SubMenu;