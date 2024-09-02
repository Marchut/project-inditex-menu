import React from 'react';
import './SubMenu.scss';
import { NavItem } from '../types';
import SubMenuItem from './SubMenuItem';
import { SUBMENU_WIDTH_PERCENTAGE, ACTIVE_CLASS_NAME, INACTIVE_CLASS_NAME } from '../constants'

interface SubMenuProps {
  navItems: NavItem[];
  activeItem: string | null;
}

const SubMenu: React.FC<SubMenuProps> = ({ navItems, activeItem }) => {
  if (!activeItem) return null;

  const activeIndex = navItems.findIndex(item => item.name === activeItem);
  const transformValue = `translateX(-${activeIndex * SUBMENU_WIDTH_PERCENTAGE}vw)`;

  return (
    <div className="submenu" style={{ transform: transformValue }}>
      {navItems.map((navItem, index) => (
        <div
          className={`submenu-container ${index === activeIndex ? ACTIVE_CLASS_NAME : INACTIVE_CLASS_NAME}`}
          key={navItem.name}
        >
          <SubMenuItem navItem={navItem} />
        </div>
      ))}
    </div>
  );
};

export default SubMenu;