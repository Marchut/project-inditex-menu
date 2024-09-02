import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SubMenuItem from './SubMenuItem';
import { NavItem } from '../types';

const navItem: NavItem = {
  name: 'Grupo',
  href: '#group',
  image: '/menu-image.jpg',
  submenu: [
    { name: 'Nuestro Modelo', href: '#model' },
    { name: 'Liderazgo', href: '#leadership' },
    { name: 'Historia', href: '#history' },
    { name: 'Compromiso Ético', href: '#ethics' },
  ],
};

describe('SubMenuItem Component', () => {
  it('renders submenu items', () => {
    
  });

  it('renders image if provided', () => {
    render(<SubMenuItem navItem={navItem} />);

    const image = screen.getByAltText('Grupo image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/menu-image.jpg');
  });

  it('does not render image if not provided', () => {
    const navItemWithoutImage: NavItem = { ...navItem, image: '/menu-image.jpg' };
    render(<SubMenuItem navItem={navItemWithoutImage} />);

    const image = screen.queryByAltText('Grupo image');
    expect(image).not.toBeInTheDocument();
  });
});