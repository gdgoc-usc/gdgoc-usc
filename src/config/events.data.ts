export interface EventType {
  title: string;
  date: Date;
  location: string;
  description: string;
  link: string;
  category: string;
}

export const EVENTS_DATA: Record<string, EventType[]> = {
  aug: [
    {
      title: 'Affinity Week 2025',
      date: new Date('2025-08-05T18:00:00'),
      location: 'USC-TC SMED AVR',
      description:
        "Kick off the semester with our exciting Affinity Week! Join us for a series of events designed to connect you with like-minded individuals and explore your interests in tech. Don't miss out on this opportunity to network, learn, and have fun!",
      link: 'https://gdg.community.dev/events/details/google-gdg-usc-infosession-2025/',
      category: 'org',
    },
  ],
  sep: [
    {
      title: 'Infosession 2025',
      date: new Date('2025-09-05T18:00:00'),
      location: 'USC-TC SMED AVR',
      description:
        'Join us for an exciting infosession to learn more about our club, upcoming events, and how you can get involved!',
      link: 'https://gdg.community.dev/events/details/google-gdg-usc-infosession-2025/',
      category: 'org',
    },
    {
      title: 'Booting Up: Navigating Tech Without Burning Out',
      date: new Date('2025-09-13T17:00:00'),
      location: 'USC-TC SMED AVR',
      description:
        'Join us for an engaging discussion on how to navigate the tech industry without burning out. Our expert panel will share their insights and strategies for maintaining a healthy work-life balance.',
      link: 'https://gdg.community.dev/events/details/google-gdg-usc-booting-up-navigating-tech-without-burning-out/',
      category: 'tech',
    },
    {
      title: 'Orbiting the Web: Foundations of Web Development',
      date: new Date('2025-09-27T17:00:00'),
      location: 'USC-TC SMED AVR',
      description:
        'Join us for an engaging discussion on the foundations of web development. Our expert panel will share their insights and strategies for building modern web applications.',
      link: 'https://gdg.community.dev/events/details/google-gdg-usc-orbiting-the-web-foundations-of-web-development/',
      category: 'web',
    },
  ],
  oct: [
    {
      title: 'Git Ready, Blastoff: Collaboration at Light Speed',
      date: new Date('2025-10-16T17:00:00'),
      location: 'USC-TC SMED AVR',
      description:
        'Join us for an engaging discussion on collaboration in tech. Our expert panel will share their insights and strategies for working effectively in teams.',
      link: 'https://gdg.community.dev/events/details/google-gdg-usc-git-ready-blastoff-collaboration-at-light-speed/',
      category: 'tech',
    },
    {
      title: 'DevJam: Build Together, Ship Together',
      date: new Date('2025-10-20T17:00:00'),
      location: 'USC-TC SMED AVR',
      description:
        'Join us for an exciting DevJam event where you can collaborate with fellow developers to build and ship projects together. Whether you are a beginner or an experienced coder, this is a great opportunity to learn, share ideas, and create something amazing!',
      link: 'https://gdg.community.dev/events/details/google-gdg-usc-devjam-build-together-ship-together/',
      category: 'tech',
    },
    {
      title: 'AI and Data Science for Everyone',
      date: new Date('2025-10-24T17:00:00'),
      location: 'USC-TC SMED AVR',
      description:
        "Join us for an exciting event focused on AI and Data Science! Our expert speakers will share their insights and experiences, and you'll have the opportunity to participate in hands-on workshops and discussions.",
      link: 'https://gdg.community.dev/events/details/google-gdg-usc-ai-and-data-science-for-everyone/',
      category: 'ai/ml',
    },
  ],
  nov: [],
  dec: [],
  jan: [],
  feb: [],
  mar: [],
  apr: [],
  may: [],
  jun: [],
  jul: [],
};
