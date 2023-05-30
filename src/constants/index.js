import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  cgcj,
  d4,
  cluboard,
  cash_flow,
  freadom,
  bank,
  gdsc,
  iris,
  ecell,
  genesis,
  graphql,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  techshow,
  how,
  cc,
  jd,
  zymo,
  hotstar,
  youtube,
  w,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGoogle,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMaterialui,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  // SiFirebase,
  // SiNode,
} from "react-icons/si";

import {
  FaHardHat
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import { DiCss3, DiMsqlServer, DiRuby } from "react-icons/di";
import { ExtraCurricular } from "../components";

export const resumeLink = "https://drive.google.com/file/d/1ccobQ0jlc_aUNBkbuXpPAK_o_6qIQg1c/view?usp=share_link";
export const repoLink = "https://github.com/itasyu/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/ayush-kumar-432801206";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: cgcj,
    title: "Chandigarh Group of Colleges, Jhanjeri",
    degree: "Bachelor of Technology",
    duration: "Sep 2020 - Jun 2024",
    content1: "Major: Computer Science and Engineering",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-4",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      // {
      //   id: "f-3",
      //   icon: SiNode,
      //   name: "NodeJS",
      // },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
      // {
      //   id: "f-7",
      //   icon: SiFirebase,
      //   name: "Firebase",
      // },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-8",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "HOWTOEDGE",
    logo: how,
    link: "https://howtoedge.com",
    positions: [
      {
        title: "Windows Author",
        duration: "Mov 2020 - Mar 2022",
        content: [
          {
            text: "I specialize in creating informative content focused on troubleshooting Windows errors and keeping readers up-to-date with the latest advancements in technology. This company consistently delivers timely updates on emerging technologies.",
            link: "",
          },
        ],
      },
      
    ],
  },
  {
    organisation: "CodersCanteen",
    logo: cc,
    link: "https://coderscanteen.com",
    positions: [
      {
        title: "Co-Founder, & Content Writer",
        duration: "Mar 2022 - Present",
        content: [
          {
            text: "Our platform serves as a hub for a variety of computer science courses and blogs. Operated entirely by students, our community strives to establish itself as a prominent coding platform, providing valuable resources and fostering learning opportunities.",
            link: "",
          },
          // {
          //   text: "Setup an admin interface for dynamic content management by different stakeholders.",
          //   link: "",
          // },
        ],
      },
    ],
  },

  {
    organisation: "jDesign",
    logo: jd,
    link: "https://jdesigntechnologies.com/",
    positions: [
      {
        title: "Team Lead Software & Business Development",
        duration: "Jul 2022 - Dec 2022",
        content: [
          {
            text: "I have been actively bidding on a range of projects and subsequently taking the lead in managing them alongside a team of developers. As an IT consultancy firm, we handle numerous clients and their diverse needs.",
            link: "",
          },
        ],
      },
      
    ],
  },

  {
    organisation: "Zymo",
    logo: zymo,
    link: "https://zymo.app",
    positions: [
      {
        title: "Web Development Intern",
        duration: "Mar 2023 - May 2023",
        content: [
          {
            text: "I have been tasked with developing websites for a company that specializes in renting out four-wheelers. The websites will be built using ReactJS, a popular JavaScript library for building user interfaces.",
            link: "",
          },
        ],
      },
      
    ],
  },
];


export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Disney + Hotstar Clone",
    github: "https://github.com/Itsayu/Disney-Hotstar",
    link: "https://itsayu.github.io/Disney-Hotstar/",
    image: hotstar,
    content:
    "Introducing Disney-Hotstar clone, a premier streaming platform that brings together the magic of Disney and the excitement of Hotstar, offering a vast library of captivating movies, shows, and live sports for endless entertainment.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML5",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      
    ],
  },
  {
    id: "project-2",
    title: "YouTube Clone",
    github: "https://github.com/Itsayu/Youtube",
    link: "https://itsayu.github.io/Youtube/",
    image: youtube,
    content:
      "Introducing a YouTube clone: A user-friendly platform that allows you to upload, watch, and share videos with a global audience, just like the original YouTube.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML5",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-3",
    title: "D4 Community Website",
    github: "https://github.com/Itsayu/D4Community_Website",
    link: "https://itsayu.github.io/D4Community_Website/",
    image: recruitment,
    content:
      "D4 Community is a dynamic student-driven platform, designed by students, for students. It fosters a supportive and engaging environment where students can connect, collaborate, and thrive together.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML5",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-4",
    title: "Certificate Generator",
    github: "https://github.com/Itsayu/certificate_generator",
    link: "https://itsayu.github.io/certificate_generator/",
    image: cc,
    content:
      "Create professional certificates effortlessly with our user-friendly website. Whether you're in web development, app development, or competitive programming, our certificate generator simplifies the process for you.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML5",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-5",
    title: "GPT3 Landing Page",
    github: "https://github.com/Itsayu/GPT3",
    link: "",
    image: cluboard,
    content:
      "Welcome to GPT-3: The Next Generation of AI. Experience unparalleled language understanding and generation capabilities, powering applications across various industries.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "ReactJS"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
    ],
  },
  {
    id: "project-6",
    title: "Cash Flow Minimiser",
    github: "https://github.com/itsayu/Cash-Flow-Minmiser",
    link: "https://minimise-cash.netlify.app/",
    image: cash_flow,
    content:
      "A React application to help users visualise and minimise cash flow among multiple transactions.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiMaterialui,
        name: "Material UI"
      },
    ],
  },
  {
    id: "project-7",
    title: "Portfolio",
    github: "https://github.com/itsayu/personal-portfolio",
    link: "https://itsayu.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
  {
    id: "project-8",
    title: "Bank Landing Page",
    github: "https://github.com/itsayu/bank-landing-page-react",
    link: "https://bank-landing-page.netlify.app/",
    image: bank,
    content:
      "A landing page for a bank with modern UI/UX using React and Tailwind.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-4",
        icon: SiMaterialui,
        name: "Material UI"
      },
      {
        id: "icon-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
    ],
  },
  {
    id: "project-9",
    title: "Geet",
    github: "https://github.com/Itsayu/Geet",
    link: "https://geet-sunte-raho.netlify.app/",
    image: freadom,
    content:
      "Geet is a cutting-edge music web app that delivers a seamless and personalized listening experience, offering an extensive collection of songs from various genres and artists.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
    ],
  },
  {
    id: "project-10",
    title: "Drawing App",
    github: "https://github.com/Itsayu/Drawing-App",
    link: "https://itsayu.github.io/Drawing-App/",
    image: graphql,
    content:
      "An innovative drawing web app that unleashes your creativity with a user-friendly interface, providing a seamless experience for creating stunning digital artworks.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML5",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-11",
    title: "Portfolio",
    github: "https://github.com/Itsayu/Portfolio",
    link: "https://itsayu.github.io/Portfolio/",
    image: portfolio,
    content: "Personal portfolio website with HTML5, CSS, and JavaScript.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML5",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-12",
    title: "Car Rental",
    github: "https://github.com/Itsayu/Car-Rental",
    link: "https://itsayu.github.io/Car-Rental/",
    image: portfolio,
    content: "Explore the freedom of the open road with our car rental service, offering a wide range of vehicles to suit your every adventure and travel need.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML5",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-13",
    title: "Second Portfolio",
    github: "https://github.com/Itsayu/PortfolioTwo",
    link: "https://itsayu.github.io/PortfolioTwo/",
    image: portfolio,
    content: "Personal portfolio website with HTML5, CSS, and JavaScript.",
    stack: [
      {
        id: "icon-1",
        icon: AiFillHtml5,
        name: "HTML5",
      },
      {
        id: "icon-2",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "icon-3",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
    ],
  },
  {
    id: "project-14",
    title: "AI Article Extractor and Summarizer",
    github: "https://github.com/Itsayu/AI-Article-Extractor-And-Summarizer",
    link: "https://al-summerizer-articles.netlify.app/",
    image: freadom,
    content:
      "The AI Article Extractor and Summarizer is a powerful tool that uses artificial intelligence to extract relevant information from articles and generate concise summaries, aiding in efficient information retrieval and comprehension.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
    ],
  },
  {
    id: "project-15",
    title: "WEARITIE FASHION",
    github: "https://github.com/Itsayu/WEARITI-FASHION-main",
    link: "https://weariti.netlify.app/",
    image: w,
    content:
      "The AI Article Extractor and Summarizer is a powerful tool that uses artificial intelligence to extract relevant information from articles and generate concise summaries, aiding in efficient information retrieval and comprehension.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// ExtraCurricular

export const extraCurricular = [
  {
    organisation: "Google Developer Group, Chandigarh",
    title: "Executive Member",
    duration: "May 2023 - Present",
    content: [
      {
        text: "Event Orginizer, GDG Chandigarh",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    organisation: "GDG TechShow, CGCJ",
    title: "Orgainizing Member",
    duration: " 18th FEb 2023",
    content: [
      {
        text: "Organized the Tech Event in college With the collaboration of GDG Chandigarh and D4 Community",
        link: "",
      },
      {
        text: "GDG TechShow",
        link: "",
      },
    ],
    logo: techshow,
  },
  {
    organisation: "D4 Community",
    title: "Co-Founder",
    duration: "Sep 2022 - Present",
    content: [
      {
        text: "co-Founder of a Student Driven Community, at CGCJ",
        link: "https://github.com/d4community",
      },
    ],
    logo: d4,
  },
];

// socialMedia

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/ayush-kumar-432801206",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/itsayu",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:ayushk99762@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/its_akt_",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/ita_a.k.t",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const aboutMe = {
    name: "Ayush Kumar Tiwari",
    tagLine: "Frontend Dev | Building- @D4Community | Content Writer | Freelancer",
    intro: "Student web-developer from India who is either busy improving his craft or pondering over the next big idea."
}
