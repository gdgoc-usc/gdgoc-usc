export interface EventType {
  title: string;
  slug: string;
  date: Date;
  location: string;
  description: string;
  link?: string;
  category: string;
  pubmat: string;
  alt: string;
}

export const categoryColors: Record<string, string> = {
  web: 'bg-blue-400 dark:bg-blue-500',
  ds: 'bg-green-400 dark:bg-green-500',
  'ai/ml': 'bg-red-400 dark:bg-red-500',
  org: 'bg-yellow-400 dark:bg-yellow-500',
  tech: 'bg-indigo-400 dark:bg-indigo-500',
  default: 'bg-gray-400 dark:bg-gray-500',
};

export const EVENTS_DATA: Record<string, EventType[]> = {
  aug: [
    {
      title: 'Affinity Week 2025',
      slug: 'affinity-week-2025',
      date: new Date('2025-08-05'),
      location: 'USC-TC BCT',
      description:
        "Psst… Freshie. You didn't hear this from us but...🤫 Something's going on, and intel says it's too good to keep quiet. Swing by our booth and find out what the buzz is all about. Don't be late. 🕶️ ",
      link: 'https://www.facebook.com/share/v/1CXRK8xvJw/',
      category: 'org',
      pubmat: '/events/affinity-week-2025.jpg',
      alt: 'Affinity Week 2025',
    },
  ],
  sep: [
    {
      title: 'Infosession 2025',
      slug: 'infosession-2025',
      date: new Date('2025-09-05'),
      location: 'USC-TC SMED AVR',
      description:
        'A new dawn needs new defenders. Uncover the mission ahead this Infosession 2025: our lineup of events, workshops, and initiatives—and meet the core team leading the charge.',
      link: 'https://www.facebook.com/share/p/1BKaAR9pPo/',
      category: 'org',
      pubmat: '/events/infosession-2025.png',
      alt: 'Infosession 2025',
    },
    {
      title: 'Orbiting the Web: Foundations of Web Development',
      slug: 'orbiting-the-web-foundations-of-web-development',
      date: new Date('2025-09-26'),
      location: 'Gmeet',
      description:
        "This workshop is designed to equip students with essential skills needed for academic projects, portfolios, and personal websites. You'll walk away with your live mini-site, a deeper understanding of web development, and confidence to explore further.",
      category: 'web',
      pubmat: '/events/orbitingtheweb.png',
      alt: 'Orbiting the Web: Foundations of Web Development',
    },
  ],
  oct: [
    // {
    //   title: 'Git Ready, Blastoff: Collaboration at Light Speed',
    //   slug: 'git-ready-blastoff-collaboration-at-light-speed',
    //   date: new Date('2025-10-18'),
    //   location: 'TBA',
    //   description:
    //     "This workshop is a crash course on GitHub, basic Git workflows, and collaborative project-building, specifically tailored to how actual Development Team flows. Expect less of a lecture and more of a survival guide—built around the kinds of projects you'll face in Web Dev I and Info Management I and II. The audience will also get into Project Management Tips and Tools.",
    //   category: 'tech',
    //   pubmat: '/events/not-aired.png', // Placeholder image
    //   alt: 'Git Ready, Blastoff: Collaboration at Light Speed',
    // },
    // {
    //   title: 'DevJam: Build Together, Ship Together',
    //   slug: 'devjam-build-together-ship-together',
    //   date: new Date('2025-10-23'),
    //   location: 'TBA',
    //   description:
    //     "DevJam is the culminating event of the Headstart series—a two-day coding sprint designed to simulate a real-world team development cycle. It's not just about applying what participants learned in HTML, CSS, and JS—it's about working with other people, solving problems under constraints, and pushing through from idea to something that displays on screen.",
    //   category: 'tech',
    //   pubmat: '/events/not-aired.png', // Placeholder image
    //   alt: 'DevJam: Build Together, Ship Together',
    // },
  ],
  nov: [
    {
      title:
        'CODE FOR A CAUSE: Empowering Through Knowledge, Standing in Solidarity',
      slug: 'code-for-a-cause-empowering-through-knowledge-standing-in-solidarity',
      date: new Date('2025-11-15'),
      location: 'Gmeet',
      description:
        'In times of adversity, every act of compassion counts. As communities continue to recover from the impact of Typhoon Tino, we believe support can come in many forms—including the gift of learning. In partnership with Google Developers Group on Campus – University of San Carlos, USC-Pathways, Innovare: USC Competition Guild, USC Computer and Information Sciences Council, and DOST Scholars Association in USC, we aim to create opportunities for growth and connection. Collective action, no matter how small, can spark meaningful change.',
      category: 'tech',
      pubmat: '/events/CodeForACause.jpg',
      alt: 'CODE FOR A CAUSE: Empowering Through Knowledge, Standing in Solidarity',
    },
  ],
  dec: [],
  jan: [],
  feb: [],
  mar: [],
  apr: [],
  may: [],
  jun: [],
  jul: [],
};
