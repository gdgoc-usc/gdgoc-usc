export interface EventType {
  title: string;
  date: Date;
  location: string;
  description: string;
  link?: string;
  category: string;
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
      date: new Date('2025-08-05'),
      location: 'USC-TC BCT',
      description:
        "Psst… Freshie. You didn't hear this from us but...🤫 Something's going on, and intel says it's too good to keep quiet. Swing by our booth and find out what the buzz is all about. Don't be late. 🕶️ ",
      link: 'https://www.facebook.com/share/v/1CXRK8xvJw/',
      category: 'org',
    },
  ],
  sep: [
    {
      title: 'Infosession 2025',
      date: new Date('2025-09-05'),
      location: 'USC-TC SMED AVR',
      description:
        'A new dawn needs new defenders. Uncover the mission ahead this Infosession 2025: our lineup of events, workshops, and initiatives—and meet the core team leading the charge.',
      link: 'https://www.facebook.com/share/p/1BKaAR9pPo/',
      category: 'org',
    },
    {
      title: 'Orbiting the Web: Foundations of Web Development',
      date: new Date('2025-09-26'),
      location: 'TBA',
      description:
        "This workshop is designed to equip students with essential skills needed for academic projects, portfolios, and personal websites. You'll walk away with your live mini-site, a deeper understanding of web development, and confidence to explore further.",
      category: 'web',
    },
  ],
  oct: [
    {
      title: 'Git Ready, Blastoff: Collaboration at Light Speed',
      date: new Date('2025-10-18'),
      location: 'TBA',
      description:
        "This workshop is a crash course on GitHub, basic Git workflows, and collaborative project-building, specifically tailored to how actual Development Team flows. Expect less of a lecture and more of a survival guide—built around the kinds of projects you'll face in Web Dev I and Info Management I and II. The audience will also get into Project Management Tips and Tools.",
      category: 'tech',
    },
    {
      title: 'DevJam: Build Together, Ship Together',
      date: new Date('2025-10-23'),
      location: 'TBA',
      description:
        "DevJam is the culminating event of the Headstart series—a two-day coding sprint designed to simulate a real-world team development cycle. It's not just about applying what participants learned in HTML, CSS, and JS—it's about working with other people, solving problems under constraints, and pushing through from idea to something that displays on screen.",
      category: 'tech',
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
