import React, { useState, useEffect } from 'react';
import { X, Info, AlertCircle, CheckCircle, Bell } from 'lucide-react';
import {
  getActiveAnnouncements,
  type Announcement,
} from '@/config/announcements.data';

const AnnouncementModal: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [availableAnnouncements, setAvailableAnnouncements] = useState<
    Announcement[]
  >([]);

  useEffect(() => {
    const activeAnnouncements = getActiveAnnouncements();

    // Filter out announcements that user has permanently dismissed
    const nonDismissedAnnouncements = activeAnnouncements.filter(
      announcement => {
        const dismissed = localStorage.getItem(
          `announcement-dismissed-${announcement.id}`
        );
        return !dismissed;
      }
    );

    if (nonDismissedAnnouncements.length === 0) {
      setIsVisible(false);
      return;
    }

    setAvailableAnnouncements(nonDismissedAnnouncements);
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    const newAnnouncements = availableAnnouncements.filter(
      (_: Announcement, index: number) => index !== currentIndex
    );

    if (newAnnouncements.length === 0) {
      setIsVisible(false);
      return;
    }

    setAvailableAnnouncements(newAnnouncements);

    if (currentIndex >= newAnnouncements.length) {
      setCurrentIndex(0);
    }
  };

  const handleDismissForever = () => {
    if (availableAnnouncements.length > 0) {
      localStorage.setItem(
        `announcement-dismissed-${availableAnnouncements[currentIndex].id}`,
        'true'
      );
    }
    handleClose();
  };

  const nextAnnouncement = () => {
    if (currentIndex < availableAnnouncements.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'warning':
        return {
          bg: 'bg-gdgoc-primary-yellow',
          text: 'text-black',
          border: 'border-gdgoc-primary-yellow',
          icon: AlertCircle,
        };
      case 'success':
        return {
          bg: 'bg-gdgoc-primary-green',
          text: 'text-white',
          border: 'border-gdgoc-primary-green',
          icon: CheckCircle,
        };
      case 'announcement':
        return {
          bg: 'bg-gdgoc-primary-blue',
          text: 'text-white',
          border: 'border-gdgoc-primary-blue',
          icon: Bell,
        };
      default:
        return {
          bg: 'bg-gray-100 dark:bg-gray-800/90',
          text: 'text-gray-900 dark:text-gray-100',
          border: 'border-gray-200 dark:border-gray-700',
          icon: Info,
        };
    }
  };

  if (!isVisible || availableAnnouncements.length === 0) {
    return null;
  }

  const announcement = availableAnnouncements[currentIndex];
  const typeStyles = getTypeStyles(announcement.type);
  const IconComponent = typeStyles.icon;

  return (
    <div className='fixed bottom-10 left-6 z-50 w-72 max-w-sm sm:w-80'>
      <div
        className={`${typeStyles.bg} ${typeStyles.text} transform overflow-hidden rounded-lg border-2 border-black shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out`}
      >
        {announcement.imageUrl && (
          <div className='relative aspect-square w-full'>
            <img
              src={announcement.imageUrl}
              alt={announcement.title}
              className='h-full w-full object-cover'
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <button
              onClick={handleClose}
              className='absolute top-2 right-2 flex-shrink-0 rounded-full bg-black/50 p-1 text-white transition-colors hover:bg-black/70'
              aria-label='Close announcement'
            >
              <X className='h-4 w-4' />
            </button>
          </div>
        )}

        <div className='border-t-2 border-t-black p-4'>
          {!announcement.imageUrl && (
            <div className='mb-3 flex items-start justify-between'>
              <div className='flex items-center gap-2'>
                <IconComponent className='h-5 w-5 flex-shrink-0' />
                <h3 className='text-sm font-semibold'>{announcement.title}</h3>
              </div>
              <button
                onClick={handleClose}
                className='flex-shrink-0 rounded-full p-1 transition-colors hover:bg-black/10 dark:hover:bg-white/10'
                aria-label='Close announcement'
              >
                <X className='h-4 w-4' />
              </button>
            </div>
          )}

          {announcement.imageUrl && (
            <div className='mb-3 flex items-center gap-2'>
              <IconComponent className='h-5 w-5 flex-shrink-0' />
              <h3 className='text-sm font-semibold'>{announcement.title}</h3>
            </div>
          )}

          <p className='mb-4 text-sm leading-relaxed'>{announcement.message}</p>

          <div className='flex items-center justify-between'>
            {announcement.actionText && announcement.actionUrl && (
              <a
                href={announcement.actionUrl}
                className='inline-flex items-center rounded-full bg-black/20 px-3 py-1 text-xs font-medium transition-colors hover:bg-black/30 dark:bg-white/20 dark:hover:bg-white/30'
                target={
                  announcement.actionUrl.startsWith('http') ? '_blank' : '_self'
                }
                rel={
                  announcement.actionUrl.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                {announcement.actionText}
              </a>
            )}

            {availableAnnouncements.length > 1 && (
              <div className='flex items-center gap-2'>
                <div className='flex gap-1'>
                  {availableAnnouncements.map(
                    (_: Announcement, index: number) => (
                      <div
                        key={index}
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${
                          index === currentIndex
                            ? 'bg-current'
                            : 'bg-current/30'
                        }`}
                      />
                    )
                  )}
                </div>
                <button
                  onClick={nextAnnouncement}
                  className='rounded px-2 py-1 text-xs transition-colors hover:bg-black/10 dark:hover:bg-white/10'
                >
                  Next
                </button>
              </div>
            )}
          </div>

          <div className='mt-3'>
            <button
              onClick={handleDismissForever}
              className='text-xs text-current/70 transition-colors hover:text-current/90'
            >
              Don't show again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
