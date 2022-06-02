import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Camille Fogg | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Camille Fogg',
  subtitle: 'Developer | Engineer | Learner',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_pic.jpg',
  paragraphOne: "Ever since I was little, I've loved to learn.  Back then, it exhibited itself through things like reading avidly (which holds true to this day), taking an enthusiastic approach to school, and woodworking in my family's garage. As an adult, I've been able to dive even deeper into that curiosity.",
  paragraphTwo: 'This is all to say that I am very passionate about engineering. It gives me an outlet to practically apply learning to contribute to making society a better place. Software engineering is a fast-moving field, thereby encouraging development of new ways to tackle existing challenges. There are constantly new methods to construct and refine designs created by mechanical engineers.',
  paragraphThree: "Recently, I've been working on a webapp called Volunteerist, which connects willing participants with grassroots volunteering opportunities. It uses React, Express.js, Node.js, MongoDB, Javascript's Google Maps API, and Socket.IO for instant messaging.",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'feed.jpg',
    title: 'Brava',
    info: "Brava is a webapp formed as a Strava clone which enables users to log their physical exercise in a variety of ways. Through Brava, users are able to create commonly followed routes for running or biking and create completed activities to keep track of their progress.",
    info2: '',
    url: 'https://brava-1.herokuapp.com/#/',
    repo: 'https://github.com/camillemonet/Brava', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'js_home.jpg',
    title: 'Nurses vs Nonsense',
    info: 'A strategy-based game which encourages players to stop individuals from shopping in stores without masks (built in 2020).',
    info2: '',
    url: 'https://camillemonet.github.io/Nurses-vs-Nonsense/',
    repo: 'https://github.com/camillemonet/Nurses-vs-Nonsense', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'splash-thumb.jpg',
    title: 'Volunteerist',
    info: 'A team-built MERN app for people to find local volunteer opportunities which serve individuals and small businesses.',
    info2: '',
    url: 'https://volunteerist.herokuapp.com/#/',
    repo: 'https://github.com/solomondove/Volunteerist', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "I'd be happy to speak with you.",
  btn: '',
  email: 'camille.m.fogg@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/camille-fogg-2b29a7173/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/camillemonet',
    },
    {
      id: nanoid(),
      name: 'angellist',
      url: 'https://angel.co/u/camille-fogg'
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
