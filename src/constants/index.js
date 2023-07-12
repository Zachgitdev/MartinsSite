import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mysql,
  php,
  vagrant,
  docker,
  aecom,
  cepr,
  aenetworks,
  brightsites,
  ceprsite,
  historysite,
  gamejamgame,
  threejs,
  drupal,
  galleryPhoto1,
  galleryPhoto2,
  galleryPhoto3,
  galleryPhoto4,
  galleryPhoto5,
  galleryPhoto6,
  galleryPhoto7,
  galleryPhoto8,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "PolishedPlaster",
    title: "Bathrooms",
  },
  {
    id: "DecorativeWalls",
    title: "Kitchens",
  },
  {
    id: "Plastering",
    title: "Plastering",
  },
  {
    id: "Gallery",
    title: "Gallery",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Drupal Developer",
    icon: web,
  },
  {
    title: "PHP Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "Three.js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Drupal",
    icon: drupal,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "SQL",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Vagrant",
    icon: vagrant,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Support",
    company_name: "AECOM",
    icon: aecom,
    iconBg: "#FFF",
    date: "June 2013 - June 2014",
    points: [
      "IT support, providing technical advice and solutions for people across the company.",
      "Used a ticket system amongst a team making and reviewing tickets.",
      "Had experience using Active Directory.",
    ],
  },
  {
    title: "Apprentice Web Developer",
    company_name: "BrightSites Consulting",
    icon: brightsites,
    iconBg: "#FFF",
    date: "July 2014 - May 2014",
    points: [
      "Developing and maintaining web applications using Drupal 7 and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews.",
    ],
  },
  {
    title: "Junior Developer/Contract Work",
    company_name: "A&E Networks",
    icon: aenetworks,
    iconBg: "#FFF",
    date: "June 2015 - May 2019",
    points: [
      "Introduction to javascript frameworks e.g. Vue.js, Angular to make and maintain a local site for the company.",
      "Tuning client-side performance for large sites with a lot of traffic.",
      "Implementing responsive design using Susy grids, flex grids and bootstrap to create responsive websites whilst ensuring cross-browser compatibility.",
      "Implementing local hosting solutions using Vagrant.",
    ],
  },
  {
    title: "Front-End Drupal Developer",
    company_name: "Centre for Economic Policy Research",
    icon: cepr,
    iconBg: "#FFF",
    date: "June 2020 - February 2023",
    points: [
      "Developing and maintaining web applications using Drupal 8 and other related technologies.",
      "Streamlining of business practices using a Customer Relationship Management system (Civicrm).",
      "Working with clients to produce new components for events to schedule.",
      "Participating in discussions and decisions about data architecture.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cepr.org",
    description:
      "A Drupal 9 website migrated from drupal 7 introducing new features such as a SSO and CRM. I was heavily involved in the making of the backend of this site interpolating user data using an api on a CRM system called CiviCRM.",
    tags: [
      {
        name: "Drupal 8",
        color: "blue-text-gradient",
      },
      {
        name: "CiviCRM",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Restapi",
        color: "blue-text-gradient",
      },
    ],
    image: ceprsite,
    source_code_link: "https://github.com/",
  },
  {
    name: "History.co.uk",
    description:
      "A website for a media company with a lot of traffic. I was involved in the creation of the frontend using SCSS, boostrap and javascript and also learned how to create local development environment with vagrant",
    tags: [
      {
        name: "Drupal 7",
        color: "blue-text-gradient",
      },
      {
        name: "Vagrant",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: historysite,
    source_code_link: "https://github.com/",
  },
  {
    name: "Game Jam Game",
    description:
      "A HTML5 game released for a Game Jam. A completely independant project for fun any feedback welcome :)",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javscript",
        color: "pink-text-gradient",
      },
    ],
    image: gamejamgame,
    source_code_link: "https://github.com/",
  },
];

const plastering = [
  {
    image: galleryPhoto1,
    title: 'polished plaster',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ipsum, aliquet a dolor id, elementum cursus tellus.'
  },
  {
    image: galleryPhoto2,
    title: 'decorative walls',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ipsum, aliquet a dolor id, elementum cursus tellus.'
  },
  {
    image: galleryPhoto3,
    title: 'Tadelakt',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ipsum, aliquet a dolor id, elementum cursus tellus.'
  },
  {
    image: galleryPhoto4,
    title: 'Rust Effects',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ipsum, aliquet a dolor id, elementum cursus tellus.'
  },
  {
    image: galleryPhoto5,
    title: 'Metallic Paint',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ipsum, aliquet a dolor id, elementum cursus tellus.'
  },
  {
    image: galleryPhoto6,
    title: 'Art Pieces',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ipsum, aliquet a dolor id, elementum cursus tellus.'
  }
];

const photos = [
  {
    src: galleryPhoto1,
    width: 4000,
    height: 1800
  },
  {
    src: galleryPhoto2,
    width: 683,
    height: 720
  },
  {
    src: galleryPhoto3,
    width: 576,
    height: 864
  },
  {
    src: galleryPhoto4,
    width: 600,
    height: 312
  },
  {
    src: galleryPhoto5,
    width: 720,
    height: 1102
  },
  {
    src: galleryPhoto6,
    width: 792,
    height: 961
  },
  {
    src: galleryPhoto7,
    width: 650,
    height: 650
  },
  {
    src: galleryPhoto8,
    width: 960,
    height: 640
  }
];

export { services, technologies, experiences, testimonials, projects, photos, plastering };