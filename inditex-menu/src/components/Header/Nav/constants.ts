import { NavItem } from "./types";

export const SUBMENU_WIDTH_PERCENTAGE = 33;
export const ACTIVE_CLASS_NAME = 'active';
export const INACTIVE_CLASS_NAME = 'inactive';

export const PAGE_STRUCTURE: NavItem[] = [
    {
      name: 'Grupo',
      href: '/group',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Nuestro Modelo', href: '/group#model' },
        { name: 'Liderazgo', href: '/group#leadership' },
        { name: 'Historia', href: '/group#history' },
        { name: 'Compromiso Ético', href: '/group#ethics' }
      ]
    },
    {
      name: 'Marcas',
      href: '/brands',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Zara', href: '/brands#zara' },
        { name: 'Pull&Bear', href: '/brands#pullbear' },
        { name: 'Massimo Dutti', href: '/brands#massimodutti' },
        { name: 'Bershka', href: '/brands#bershka' },
        { name: 'Stradivarius', href: '/brands#stradivarius' },
        { name: 'Oysho', href: '/brands#oysho' },
        { name: 'Zara Home', href: '/brands#zarahome' }
      ]
    },
    {
      name: 'Sostenibilidad',
      href: '/sustainability',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Visión General', href: '/sustainability#general' },
        { name: 'Hoja De Ruta', href: '/sustainability#roadmap' },
        { name: 'Un Nuevo Ciclo', href: '/sustainability#newcycle' },
        { name: 'Producción', href: '/sustainability#production' },
        { name: 'Distribución', href: '/sustainability#distribution' },
        { name: 'Más Allá', href: '/sustainability#beyond' },
        { name: 'Reporting', href: '/sustainability#reporting' }
      ]
    },
    {
      name: 'Inversores',
      href: '/investors',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Información Financiera', href: '/investors#financial' },
        { name: 'Registros Oficiales', href: '/investors#officialrecords' },
        { name: 'Gobierno Corporativo', href: '/investors#corporategovernance' },
        { name: 'Memoria Anual 2023', href: '/investors#annualreport' }
      ]
    },
    {
      name: 'Talento',
      href: '/talent',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Vida En Inditex', href: '/talent#life' },
        { name: 'Equipos', href: '/talent#teams' },
        { name: 'Únete A Nosotros', href: '/talent#joinus' }
      ]
    },
    {
      name: 'Prensa',
      href: '/press',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Noticias', href: '/press#news' },
        { name: 'Galería Multimedia', href: '/press#multimedia' }
      ]
    },
    {
      name: '',
      href: '/group',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Nuestro Modelo', href: '/group#model' },
        { name: 'Liderazgo', href: '/group#leadership' },
        { name: 'Historia', href: '/group#history' },
        { name: 'Compromiso Ético', href: '/group#ethics' }
      ]
    },
    {
      name: '',
      href: '/brands',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Zara', href: '/brands#zara' },
        { name: 'Pull&Bear', href: '/brands#pullbear' },
        { name: 'Massimo Dutti', href: '/brands#massimodutti' },
        { name: 'Bershka', href: '/brands#bershka' },
        { name: 'Stradivarius', href: '/brands#stradivarius' },
        { name: 'Oysho', href: '/brands#oysho' },
        { name: 'Zara Home', href: '/brands#zarahome' }
      ]
    },
    {
      name: '',
      href: '/sustainability',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Visión General', href: '/sustainability#general' },
        { name: 'Hoja De Ruta', href: '/sustainability#roadmap' },
        { name: 'Un Nuevo Ciclo', href: '/sustainability#newcycle' },
        { name: 'Producción', href: '/sustainability#production' },
        { name: 'Distribución', href: '/sustainability#distribution' },
        { name: 'Más Allá', href: '/sustainability#beyond' },
        { name: 'Reporting', href: '/sustainability#reporting' }
      ]
    },
    {
      name: '',
      href: '/investors',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Información Financiera', href: '/investors#financial' },
        { name: 'Registros Oficiales', href: '/investors#officialrecords' },
        { name: 'Gobierno Corporativo', href: '/investors#corporategovernance' },
        { name: 'Memoria Anual 2023', href: '/investors#annualreport' }
      ]
    },
    {
      name: '',
      href: '/talent',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Vida En Inditex', href: '/talent#life' },
        { name: 'Equipos', href: '/talent#teams' },
        { name: 'Únete A Nosotros', href: '/talent#joinus' }
      ]
    },
    {
      name: '',
      href: '/press',
      image: '/menu-image.jpg',
      submenu: [
        { name: 'Noticias', href: '/press#news' },
        { name: 'Galería Multimedia', href: '/press#multimedia' }
      ]
    },
  ];