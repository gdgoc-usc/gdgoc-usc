import React from 'react';
import { Globe } from 'lucide-react';
import type { SocialLink } from '../config/social.types';

interface SocialLinkCardProps {
  social: SocialLink;
}

export default function SocialLinkCard({ social }: SocialLinkCardProps) {
  const getSocialName = () => {
    if (
      social.type === 'simple-icon' &&
      typeof social.icon === 'object' &&
      social.icon.title
    ) {
      return social.icon.title;
    }

    if (social.href.includes('facebook')) return 'Facebook';
    if (social.href.includes('instagram')) return 'Instagram';
    if (social.href.includes('github')) return 'GitHub';
    if (social.href.includes('gdg.community.dev')) return 'GDG Community';
    return 'Visit Link';
  };

  const getCleanUrl = () => {
    return social.href.replace(/^https?:\/\//, '').replace(/^www\./, '');
  };

  return (
    <a
      href={social.href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={social.label}
      className='group block w-full rounded-2xl border border-black bg-white p-4 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[4px_5px_0_0] active:scale-[0.98] dark:border-neutral-800 dark:bg-black'
    >
      <div className='flex items-center space-x-4'>
        <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border-2 border-transparent bg-gray-100 bg-gradient-to-br transition-all duration-300 group-hover:border-black dark:bg-neutral-800'>
          {social.type === 'simple-icon' && typeof social.icon === 'object' ? (
            <svg
              className={`h-6 w-6 ${social.color} transition-colors duration-300`}
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d={social.icon.path} />
            </svg>
          ) : (
            <Globe
              className={`h-6 w-6 ${social.color} transition-colors duration-300`}
            />
          )}
        </div>

        <div className='min-w-0 flex-1'>
          <h3 className='text-lg font-semibold text-gray-900 transition-colors duration-300 dark:text-white'>
            {getSocialName()}
          </h3>
          <p className='truncate text-sm text-gray-500 dark:text-gray-400'>
            {getCleanUrl()}
          </p>
        </div>

        <div className='flex-shrink-0'>
          <svg
            className='h-5 w-5 text-black transition-all duration-300 group-hover:translate-x-2 dark:text-gray-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
