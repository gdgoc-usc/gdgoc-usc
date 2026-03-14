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
  cyber: 'bg-purple-900 dark:bg-purple-950',
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
      pubmat: '/events/OrbitingTheWeb.png',
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
        'Code for a Cause: Empowering Through Knowledge, Standing in Solidarity',
      slug: 'code-for-a-cause-empowering-through-knowledge-standing-in-solidarity',
      date: new Date('2025-11-15'),
      location: 'Gmeet',
      description:
        'In times of adversity, every act of compassion counts. As communities continue to recover from the impact of Typhoon Tino, we believe support can come in many forms—including the gift of learning. In partnership with Google Developers Group on Campus – University of San Carlos, USC-Pathways, Innovare: USC Competition Guild, USC Computer and Information Sciences Council, and DOST Scholars Association in USC, we aim to create opportunities for growth and connection. Collective action, no matter how small, can spark meaningful change.',
      category: 'tech',
      pubmat: '/events/CodeForACause.jpg',
      alt: 'CODE FOR A CAUSE: Empowering Through Knowledge, Standing in Solidarity',
    },
    {
      title: 'Git Ready, Blastoff: Collaboration at Light Speed',
      slug: 'git-ready-blastoff-collaboration-at-light-speed',
      date: new Date('2025-11-22'),
      location: 'Gmeet',
      description:
        'A hands-on workshop designed to help students and developers navigate the essentials of Git and GitHub. Say goodbye to lost files and messy group projects – learn practical version control skills, streamline collaboration, and build disciplined workflows you can apply in both academic and personal projects.',
      category: 'tech',
      pubmat: '/events/GitReady.jpg',
      alt: 'Git Ready, Blastoff: Collaboration at Light Speed',
    },
    {
      title: 'Chain of Thought: An AI and Blockchain Code Camp',
      slug: 'chain-of-thought-an-ai-an-blockchain-code-camp',
      date: new Date('2025-11-29'),
      location: 'DOST Region VII Office',
      description:
        "We're bringing together two of today's most disruptive technologies: Artificial Intelligence and Blockchain – in one unforgettable afternoon. From the cryptographic foundations that power decentralized systems to the neural networks driving intelligent machines - this November, we're going hands-on.",
      category: 'ai/ml',
      pubmat: '/events/ChainOfThought.jpg',
      alt: 'Chain of Thought: An AI and Blockchain Code Camp',
    },
  ],
  dec: [],
  jan: [],
  feb: [
    {
      title: 'Beyond Tutorials: Real-World Data Science in Practice',
      slug: 'boyond-tutorials-real-world-data-science-in-practice',
      date: new Date('2026-2-10'),
      location: 'Gmeet',
      description:
        "Explore a data analytics repository featuring causal inference, clustering, and target trial emulation in Python. Then dive into an independent flu vs. COVID-19 time-series analysis using public health datasets. See how data scientists frame problems, choose appropriate methods, and interpret results, with transparent reasoning about what worked, what didn't, and why. ",
      category: 'ds',
      pubmat: '/events/BeyondTutorials.jpg',
      alt: 'Beyond Tutorials: Real-World Data Science in Practice',
    },
    {
      title:
        'AI on the Cloud: Train Models without a GPU using AWS and Google Cloud',
      slug: 'ai-on-the-cloud-train-models-without-a-gpu-using-aws-and-google-cloud',
      date: new Date('2026-2-11'),
      location: 'Gmeet',
      description:
        'Local machines can only take you so far. This workshop introduces you to cloud-based machine learning workflows. Participants will gain hands-on experience with AWS SageMaker and Google Cloud Vertex AI, learning how to set up cloud notebooks, launch training jobs, and utilize managed ML infrastructure.',
      category: 'ai/ml',
      pubmat: '/events/AIOnTheCloud.jpg',
      alt: 'AI on the Cloud: Train Models without a GPU using AWS and Google Cloud',
    },
    {
      title: 'Beyond the Prompt: Be an MVP at MVPs',
      slug: 'beyond-the-prompt-be-an-mvp-at-mvps',
      date: new Date('2026-2-28'),
      location: 'USC-TC LB447',
      description:
        "Join us for an exciting hands-on workshop where you'll learn to turn your ideas into functional apps and software solutions using AI-powered workflows built for speed and execution. Say goodbye to mere vibe coding as you dive deep into structured prototyping and implementation with agent orchestration. Discover the best practices and principles for effective AI-assisted development. We will guide you on how to maximize your AI assistants within your IDEs to elevate your coding game. This workshop is perfect for hackathons and real-world MVPs—transforming days of work into hours and hours into minutes. Whether you're using Claude Code, Codex, or Antigravity, you’ll walk away with the skills to become an MVP at rapid-prototyping MVPs. ",
      category: 'ai/ml',
      pubmat: '/events/BeyondThePrompt.jpg',
      alt: 'Beyond the Prompt: Be an MVP at MVPs',
    },
  ],
  mar: [
    {
      title: 'GameJams: Capture The Flag',
      slug: 'gamejams-capture-the-flag',
      date: new Date('2026-03-9'),
      location: 'USC-TC LB447',
      description:
        "💻 𝗪𝗮𝗻𝘁 𝘁𝗼 𝘁𝗿𝘆 𝘆𝗼𝘂𝗿 𝗵𝗮𝗻𝗱 𝗮𝘁 𝗯𝗲𝗶𝗻𝗴 𝗮 𝗵𝗮𝗰𝗸𝗲𝗿? Well now you can, because GDGOC and CISCO present to you our first ever cybersecurity event in the form of 𝗖𝗮𝗽𝘁𝘂𝗿𝗲 𝘁𝗵𝗲 𝗙𝗹𝗮𝗴! The event will feature a seminar & workshop and a competition to apply your skills. Beginner or experienced, you're welcome to learn and see what it takes to get into cybersecurity!",
      category: 'cyber',
      pubmat: '/events/GameJams.jpg',
      alt: 'GameJams: Capture The Flag',
    },
    {
      title: 'RACCETCon 2026',
      slug: 'raccetcon-2026',
      date: new Date('2026-03-10'),
      location: 'USC-TC CN Lab | USC-TC Rigney Hall',
      description: `Cloud. Data. ML. IoT. Agentic development.
                    Ever wondered how they actually connect?
                    Over two days, we're running six back-to-back surprises — stepping back to see the full system, then stepping in to build it! 🛠️
                    In celebration of RACCETCon 2026, join us on March 10–11, 2026, for two days of insightful tech lectures and exciting hands-on sessions as part of their pre-conference workshops, covering a variety of topics coming from our GDG USC’s very own tech department (…and campus lead)!
                    Expect real provisioning in the cloud, structured data workflows, live device-to-cloud pipelines, and ML systems that go all the way from training to deployment 🤖 — plus a grounded look at agentic development beyond the buzzwords.
                    Whether in the computer lab or Rigney Hall, we're inviting you to be part of the build! ✨`,
      category: 'tech',
      pubmat: '/events/RACCETCon2026.jpg',
      alt: 'RACCETCon 2026',
    },
    {
      title: 'Catch Codey',
      slug: 'catch-codey',
      date: new Date('2026-03-13'),
      location: 'Ramon Duterte Memorial National High School',
      description: `𝐋𝐨𝐨𝐤𝐬 𝐥𝐢𝐤𝐞 𝐆𝐃𝐆 𝐎𝐧 𝐂𝐚𝐦𝐩𝐮𝐬 𝐔𝐒𝐂 𝐢𝐬 𝐠𝐨𝐢𝐧𝐠… 𝐨𝐟𝐟 𝐜𝐚𝐦𝐩𝐮𝐬?! 👀🏫
                    DEVCON Kids Cebu takes GDG USC along for a ride and is heading to Ramon Duterte Memorial National High School! Bringing the fun of Scratch coding to the students of Ramon Duterte Memorial National High School as they learn to create their own games, stories, and animations with Codey leading the way 🚀🤖
                    Will the students of RDMNHS finally catch Codey? 🏃‍♂️🐱`,
      category: 'tech',
      pubmat: '/events/CatchCodey.jpg',
      alt: 'Catch Codey',
    },
  ],
  apr: [],
  may: [],
  jun: [],
  jul: [],
};
