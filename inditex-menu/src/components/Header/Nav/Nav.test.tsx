import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Nav from './Nav';

describe('Nav Component', () => {
  it('renders navigation items', () => {
    render(<Nav />);
    const navItems = screen.getAllByRole('link');
    expect(navItems).toHaveLength(6); // 6 main nav items
    expect(screen.getByText('Grupo')).toBeInTheDocument();
    expect(screen.getByText('Marcas')).toBeInTheDocument();
    expect(screen.getByText('Sostenibilidad')).toBeInTheDocument();
    expect(screen.getByText('Inversores')).toBeInTheDocument();
    expect(screen.getByText('Talento')).toBeInTheDocument();
    expect(screen.getByText('Prensa')).toBeInTheDocument();
  });

  it('shows submenu on hover', () => {
    render(<Nav />);
    const marcasNavItem = screen.getByText('Marcas');

    fireEvent.mouseEnter(marcasNavItem);

    expect(screen.getByText('Zara')).toBeInTheDocument();
    expect(screen.getByText('Pull&Bear')).toBeInTheDocument();
    expect(screen.getByText('Massimo Dutti')).toBeInTheDocument();
    expect(screen.getByText('Bershka')).toBeInTheDocument();
    expect(screen.getByText('Stradivarius')).toBeInTheDocument();
    expect(screen.getByText('Oysho')).toBeInTheDocument();
    expect(screen.getByText('Zara Home')).toBeInTheDocument();
  });

  it('hides submenu on mouse leave', () => {
    render(<Nav />);
    const marcasNavItem = screen.getByText('Marcas');

    fireEvent.mouseEnter(marcasNavItem);
    fireEvent.mouseLeave(marcasNavItem);

    expect(screen.queryByText('Zara')).not.toBeInTheDocument();
  });
});