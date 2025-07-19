import { siFacebook, siInstagram, siGithub } from 'simple-icons';
import type { SocialLink } from './social.types';

export const socialLinks: SocialLink[] = [
  {
    href: 'https://www.facebook.com/gdgoc.sancarlos',
    label: 'Visit our Facebook page',
    icon: siFacebook,
    color: 'text-gdgoc-primary-blue group-hover:text-gdgoc-secondary-blue',
    type: 'simple-icon',
  },
  {
    href: 'https://www.instagram.com/gdgoc.sancarlos',
    label: 'Visit our Instagram page',
    icon: siInstagram,
    color: 'text-gdgoc-primary-red group-hover:text-gdgoc-secondary-red',
    type: 'simple-icon',
  },
  {
    href: 'https://github.com/gdgoc-usc',
    label: 'Visit our GitHub repository',
    icon: siGithub,
    color: 'text-gray-800 dark:text-white group-hover:text-gdgoc-primary-green',
    type: 'simple-icon',
  },
  {
    href: 'https://gdg.community.dev/gdg-on-campus-university-of-san-carlos-cebu-philippines/',
    label: 'Visit our website',
    icon: 'globe',
    color: 'text-gdgoc-primary-green group-hover:text-gdgoc-secondary-green',
    type: 'lucide',
  },
];
