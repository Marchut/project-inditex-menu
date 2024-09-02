export interface NavItem {
  name: string;
  href: string;
  image: string;
  submenu?: { name: string; href: string }[];
}

export interface SubMenuItems {
  items: { name: string; href: string }[];
}