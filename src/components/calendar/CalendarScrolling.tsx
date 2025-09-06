import CalendarItem from './CalendarItem';

import { EVENTS_DATA } from '@/config/events.data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mouse } from 'lucide-react';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const CalendarScrolling = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;
    if (!container || !timeline) return;

    const totalScrollWidth = EVENTS_DATA.length * 360;

    const horizontalScroll = gsap.to(timeline, {
      x: () => -totalScrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => '+=' + totalScrollWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: true,
      },
    });

    const cards = timeline.querySelectorAll('.timeline-card');
    cards.forEach(card => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.85, rotationY: 15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'left 80%',
            end: 'left 20%',
            containerAnimation: horizontalScroll,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Refresh once everything (including images) has loaded
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section
      id='events'
      className='relative flex min-h-screen w-full flex-col overflow-hidden bg-[#F8FAFD] py-12 dark:bg-[#1B1B1B]'
      ref={containerRef}
    >
      <div className='container mx-auto mt-16 flex h-screen flex-col px-4'>
        <div className='container mx-auto flex flex-col items-center px-4'>
          <div className='flex justify-center sm:md:lg:xl:mb-4'>
            <img
              src='/gdgoc_logo.svg'
              alt='GDGoC Logo'
              width={80}
              height={80}
              className='h-24 w-24 md:h-20 md:w-20'
            />
          </div>
          <div className='text-center'>
            <h1 className='mb-4 text-4xl font-bold tracking-tighter text-black md:text-6xl dark:text-white'>
              Events Calendar
            </h1>
            <p className='mx-auto mb-4 max-w-4xl text-xl leading-relaxed text-gray-700 sm:text-2xl md:text-3xl dark:text-gray-200'>
              Stay tuned for our exciting upcoming events and activities!
            </p>
          </div>
        </div>
        <div className='w-full pl-[500px]'>
          <div
            ref={timelineRef}
            className='flex h-full gap-2'
            style={{ width: `${EVENTS_DATA.length * 360 + 20}px` }}
          >
            {EVENTS_DATA.map((event, index) => (
              <CalendarItem key={index} {...event} />
            ))}
          </div>
        </div>
        <span className='mt-8 flex w-full items-center justify-center gap-2 text-center text-gray-500'>
          <Mouse className='size-4' />
          <span>Continue scrolling for more events!</span>
        </span>
      </div>
    </section>
  );
};

export default CalendarScrolling;
