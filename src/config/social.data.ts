import { siFacebook, siInstagram, siGithub } from 'simple-icons';
// import { siLinkedin, siTwitter, siYoutube, siDiscord, siTelegram } from 'simple-icons';
import type { SocialLink } from './social.types';

export const socialLinks: SocialLink[] = [
  {
    href: 'https://www.facebook.com/gdgoc.sancarlos',
    label: 'Visit our Facebook page',
    icon: siFacebook,
    color: 'text-gdgoc-primary-blue',
    type: 'simple-icon',
  },
  {
    href: 'https://www.instagram.com/gdgoc.sancarlos',
    label: 'Visit our Instagram page',
    icon: siInstagram,
    color: 'text-gdgoc-primary-red',
    type: 'simple-icon',
  },
  {
    href: 'https://github.com/gdgoc-usc',
    label: 'Visit our GitHub repository',
    icon: siGithub,
    color: 'text-gray-800 dark:text-white',
    type: 'simple-icon',
  },
  {
    href: 'https://gdg.community.dev/gdg-on-campus-university-of-san-carlos-cebu-philippines/',
    label: 'Visit our website',
    icon: 'globe',
    color: 'text-gdgoc-primary-green group-hover:text-gdgoc-secondary-green',
    type: 'lucide',
  },
  // Uncomment and update URLs as needed:
  // {
  //   href: 'https://www.linkedin.com/company/gdgoc-usc',
  //   label: 'Connect with us on LinkedIn',
  //   icon: siLinkedin,
  //   color: 'text-blue-600 group-hover:text-blue-700',
  //   type: 'simple-icon',
  // },
  // {
  //   href: 'https://twitter.com/gdgoc_usc',
  //   label: 'Follow us on Twitter',
  //   icon: siTwitter,
  //   color: 'text-blue-400 group-hover:text-blue-500',
  //   type: 'simple-icon',
  // },
  // {
  //   href: 'https://www.youtube.com/@gdgocusc',
  //   label: 'Subscribe to our YouTube channel',
  //   icon: siYoutube,
  //   color: 'text-red-600 group-hover:text-red-700',
  //   type: 'simple-icon',
  // },
  // {
  //   href: 'https://discord.gg/gdgocusc',
  //   label: 'Join our Discord server',
  //   icon: siDiscord,
  //   color: 'text-indigo-600 group-hover:text-indigo-700',
  //   type: 'simple-icon',
  // },
  // {
  //   href: 'https://t.me/gdgocusc',
  //   label: 'Join our Telegram group',
  //   icon: siTelegram,
  //   color: 'text-blue-500 group-hover:text-blue-600',
  //   type: 'simple-icon',
  // },
];
