import type { SimpleIcon } from 'simple-icons';

export type SocialLink = {
  href: string;
  label: string;
  icon: SimpleIcon | string;
  color: string;
  type: 'simple-icon' | 'lucide';
};
