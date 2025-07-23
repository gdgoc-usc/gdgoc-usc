export interface Brand {
  name: string;
  logo: string;
  alt: string;
  width?: number;
  height?: number;
}

export const brands: Brand[] = [
  {
    name: 'Globe',
    logo: '/logos/globe.svg',
    alt: 'Globe Logo',
    width: 64,
    height: 64,
  },
  {
    name: 'Computer Engineering Council',
    logo: '/logos/cpec.svg',
    alt: 'Computer Engineering Council',
    width: 64,
    height: 64,
  },
];
