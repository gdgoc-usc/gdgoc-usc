export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'announcement';
  actionText?: string;
  actionUrl?: string;
  imageUrl?: string;
  isActive: boolean;
  expiresAt?: Date;
}

export const announcements: Announcement[] = [
  {
    id: 'infosession-rsvp',
    title: 'InfoSession RSVP',
    message:
      'Join our launchpad event this year: InfoSession 2025! Grab your tickets and join us on this exciting event as we introduce to your our vision and events this year.',
    type: 'success',
    actionText: 'Register Now',
    actionUrl: 'https://gdgoc.tech/infosession-2025',
    imageUrl: '/announcements/Infosession2025.png',
    isActive: true,
  },
  {
    id: 'maintenance-notice',
    title: 'Under Construction',
    message:
      'Our website is still under construction, so you may notice unfinished features! Please bear with us. Thank you for your patience and support!',
    type: 'warning',
    isActive: true,
  },
];

export function getActiveAnnouncements(): Announcement[] {
  const now = new Date();

  return announcements.filter(announcement => {
    if (!announcement.isActive) return false;
    if (announcement.expiresAt && now > announcement.expiresAt) return false;
    return true;
  });
}

export function getAnnouncementById(id: string): Announcement | undefined {
  return announcements.find(announcement => announcement.id === id);
}
