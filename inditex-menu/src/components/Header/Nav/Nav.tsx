import React, { useState } from 'react';
import './Nav.scss';
import SubMenu from './SubMenu/SubMenu';
import { NavItem } from './types';
import { PAGE_STRUCTURE } from './constants';

const navItems: NavItem[] = PAGE_STRUCTURE;

const Nav: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (e.clientY < 10 || e.clientY > 260) { // 10px from top or below submenu height

      setActiveItem(null);
    }
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <nav className="nav">
        <ul>
          {navItems.map(item => (
            <li
              key={item.name}
              className={activeItem === item.name ? 'active' : ''}
              onMouseEnter={() => setActiveItem(item.name)}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        {activeItem && <SubMenu navItems={navItems} activeItem={activeItem} />}
      </nav>
    </div>
  );
};

export default Nav;