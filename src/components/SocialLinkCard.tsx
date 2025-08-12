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
      className='group block w-full p-4 rounded-2xl bg-white dark:bg-black backdrop-blur-sm border border-black dark:border-neutral-800 hover:shadow-[4px_5px_0_0] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]'
    >
      <div className='flex items-center space-x-4'>
        <div className='flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br bg-gray-100 dark:bg-neutral-800 flex items-center justify-center border-2 border-transparent group-hover:border-black transition-all duration-300'>
          {social.type === 'simple-icon' && typeof social.icon === 'object' ? (
            <svg
              className={`w-6 h-6 ${social.color} transition-colors duration-300`}
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d={social.icon.path} />
            </svg>
          ) : (
            <Globe
              className={`w-6 h-6 ${social.color} transition-colors duration-300`}
            />
          )}
        </div>

        <div className='flex-1 min-w-0'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300'>
            {getSocialName()}
          </h3>
          <p className='text-sm text-gray-500 dark:text-gray-400 truncate'>
            {getCleanUrl()}
          </p>
        </div>

        <div className='flex-shrink-0'>
          <svg
            className='w-5 h-5 text-black dark:text-gray-500 group-hover:translate-x-2 transition-all duration-300'
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
