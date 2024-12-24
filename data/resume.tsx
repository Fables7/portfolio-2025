import { HomeIcon, NotebookIcon } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

export const DATA = {
  name: "Fabien",
  initials: "FL",
  url: "https://github.com/Fables7",
  location: "London",
  locationLink: "",
  description:
    "Passionate Software Developer who enjoys building impactful, innovative, and user-centric digital solutions.",
  summary:
    "I’m a dedicated Software Developer with a strong focus on creating scalable, efficient, and user-friendly applications. My expertise spans both front-end and back-end development, allowing me to build seamless experiences and tackle complex technical challenges. I thrive on crafting robust systems, collaborating with diverse teams, and continuously learning about emerging technologies. Beyond coding, I enjoy exploring creative solutions to problems and staying at the forefront of the ever-evolving tech landscape.",
  avatarUrl: "/profilePic.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Node.js",
    "Python",
    "MySQL",
    "MongoDB",
    "Docker",
    "Solidity",
    "Express.js",
    "Smart Contracts",
    "Web3.js",
    "React Native",
    "M.E.R.N",
    "Firebase",
    "Neon",
    "Jest",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mailto:fabien.a.lestrat@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Fables7",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fabien-lestrat-1ab41b1b1/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:fabien.a.lestrat@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "",
      start: "November 2024",
      end: "Current",
      description: "",
    },
    {
      company: "Devomon",
      href: "https://www.devomon.io/",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/devomonLogo.jpeg",
      start: "August 2024",
      end: "October 2024",
      description:
        "Designed and built a Telegram Web App Game from the ground up, owning both front-end and back-end development with Next.js, React, TypeScript, Tailwind CSS, MySQL, and Prisma in under a month; integrated Telegram APIs for seamless user interaction—attracting over 80,000 active users in the first month—while optimizing performance and UI to reduce latency by 30% and boost engagement, and implementing a modular codebase for easy updates and future scalability.",
    },
    {
      company: "Vision Direct",
      badges: [],
      href: "https://www.visiondirect.co.uk/",
      location: "London, UK",
      title: "Marketing Web Developer",
      logoUrl: "/visionDirect.webp",
      start: "February 2021",
      end: "August 2021",
      description:
        "Utilized CoreMedia CMS to manage and update content across multiple domains—delivering content 30% faster—while collaborating with the design team to integrate visual elements for a consistent brand presence, optimizing pages to reflect modern design principles that reduced load time by 20% and improved SEO rankings, and leading the implementation of A/B testing that drove a 15% increase in user engagement.",
    },
    {
      company: "Lifehash",
      href: "https://www.crunchbase.com/organization/lifehash",
      badges: [],
      location: "Remote",
      title: "Junior Developer",
      logoUrl: "/lifehashLogo.jpeg",
      start: "September 2021",
      end: "November 2023",
      description:
        "Developed over 20 front-end features with HTML5, CSS3, and JavaScript (ES6), built cross-platform mobile apps in React Native for iOS and Android—leveraging native features for a 30% performance boost—and created responsive web applications in React.js using Redux to achieve a 25% reduction in loading times; launched the Zinnia Block Explorer website to display blockchain data for 10,000+ users via RESTful APIs, integrated third-party libraries such as React Navigation, Firebase, and Google Maps APIs, collaborated with UI/UX designers to deliver user-friendly interfaces that improved usability by 40%, and built reusable React components that cut future development time by 20%.",
    },
  ],
  education: [
    {
      school: "Cisco CCNA 200-301 – The Complete Guide to Getting Certified",
      href: "https://www.udemy.com/course/ccna-complete/",
      degree: "CCNA",
      logoUrl: "/courses/ccna.webp",
    },
    {
      school: "LangChain- Develop LLM powered applications with LangChain",
      href: "https://www.udemy.com/course/langchain/",
      degree: "Eden Marco | LLM Specialist",
      logoUrl: "/courses/edenMarco.jpeg",
    },
    {
      school: "Ultimate AWS Certified Solutions Architect Associate 2025",
      href: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/",
      degree:
        "Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer",
      logoUrl: "/courses/stephaneMaarek.webp",
    },
    {
      school: "Ethereum and Solidity: The Complete Developer's Guide",
      href: "https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/",
      degree: "Stephen Grider | Engineering Architect",
      logoUrl: "/courses/stephenGrider.jpeg",
    },
    {
      school: "Artificial Intelligence A-Z 2024: Build 7 AI + LLM & ChatGPT",
      href: "https://www.udemy.com/course/artificial-intelligence-az/",
      degree: "Hadelin de Ponteves | AI Instructor",
      logoUrl: "/courses/hadelin.jpeg",
    },
    {
      school: "The Modern Python 3 Bootcamp",
      href: "https://www.udemy.com/course/the-modern-python3-bootcamp/",
      degree: "Colt Steele | Developer and Bootcamp Instructor",
      logoUrl: "/courses/coltSteele.webp",
    },
    {
      school: "C# Basics for Beginners: Learn C# Fundamentals by Coding",
      href: "https://www.udemy.com/course/csharp-tutorial-for-beginners/",
      degree: "Mosh Hamedani",
      logoUrl: "/courses/mosh.webp",
    },
    {
      school: "C# Intermediate: Classes, Interfaces and OOP",
      href: "https://www.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop/",
      degree: "Mosh Hamedani",
      logoUrl: "/courses/mosh.webp",
    },
    {
      school: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
      href: "https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/",
      degree: "Colt Steele | Developer and Bootcamp Instructor",
      logoUrl: "/courses/coltSteele.webp",
    },
    {
      school: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
      href: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/",
      degree: "Jonas Schmedtmann | Web Developer, Designer, and Teacher",
      logoUrl: "/courses/jonas.jpeg",
    },
    {
      school: "The Complete React Native + Hooks Course",
      href: "https://www.udemy.com/course/the-complete-react-native-and-redux-course/",
      degree: "Stephen Grider | Engineering Architect",
      logoUrl: "/courses/stephenGrider.jpeg",
    },
    {
      school: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
      href: "https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/",
      degree: "Maximilian Schwarzmüller | Academind",
      logoUrl: "/courses/max.jpeg",
    },
    {
      school: "The Complete JavaScript Course 2025: From Zero to Expert!",
      href: "https://www.udemy.com/course/the-complete-javascript-course/",
      degree: "Jonas Schmedtmann | Web Developer, Designer, and Teacher",
      logoUrl: "/courses/jonas.jpeg",
    },
  ],
  projects: [
    {
      title: "Whack-A-Mon!",
      href: "https://t.me/whackamon_bot/play",
      dates: "August 2024 - October 2024",
      active: true,
      description: `Whack-a-Mon is a popular Telegram web game with over 80,000 users. Players compete in various modes to "whack" monsters and earn rewards. Built with Next.js, it offers seamless and engaging gameplay for all.`,
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Telegram",
        "TON",
      ],
      links: [
        {
          type: "Website",
          href: "https://t.me/whackamon_bot/play",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/whack-a-mon.jpeg",
      video: "",
    },
    {
      title: "Vision Direct",
      href: "https://www.visiondirect.co.uk/",
      dates: "February 2024 - August 2024",
      active: true,
      description:
        "Vision Direct provides a seamless online platform for purchasing contact lenses, glasses, and eye care essentials. With user-friendly navigation, detailed product information, and fast delivery options, it simplifies the way users care for their vision.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "CMS",
        "CoreMedia",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.visiondirect.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/visionDirect.png",
      video: "",
    },
    {
      title: "E-Commerce Admin",
      href: "https://fab-ecommerce-admin.vercel.app/",
      dates: "",
      active: true,
      description:
        "E-commerce Admin is a powerful dashboard that allows administrators to create and manage online shops effortlessly. It provides tools to handle product listings, track purchases, and oversee all shop activities in one intuitive interface. Perfect for streamlining e-commerce management.",
      technologies: [
        "Next.js",
        "Typescript",
        "Clerk",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "MySQL",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://fab-ecommerce-admin.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/ecommerce-admin",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/e-commerce-admin.png",
      video: "",
    },
    {
      title: "E-Commerce Store",
      href: "https://fab-ecommerce-store.vercel.app/",
      dates: "",
      active: true,
      description:
        "E-commerce Store is the user-facing counterpart to the E-commerce Admin dashboard. It allows users to browse shops, explore products, and make purchases with ease. Seamlessly connected to the admin system, it delivers a smooth and enjoyable shopping experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Clerk",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://fab-ecommerce-store.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/ecommerce-store",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/e-commerce-store.png",
      video: "",
    },
    {
      title: "Learning Management System",
      href: "https://lms-fab.vercel.app/",
      dates: "",
      active: true,
      description:
        "LMS is a robust platform akin to Udemy, enabling teachers to upload courses with videos and attachments while managing their content. Students can enroll, purchase courses, and track their progress, creating an interactive and engaging learning experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://lms-fab.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/lms-fab",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/lms.png",
      video: "",
    },
    {
      title: "Discord Clone",
      href: "https://fab-discord-clone.up.railway.app/",
      dates: "",
      active: true,
      description:
        "A feature-rich Discord clone that replicates the core functionalities of real-time messaging, voice, and video communication. Designed for seamless interaction, it offers a familiar and intuitive user experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
        "Websockets",
      ],
      links: [
        {
          type: "Website",
          href: "https://fab-discord-clone.up.railway.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/discord-clone",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/discord.jpeg",
      video: "",
    },
    {
      title: "Figma Clone",
      href: "https://figma-clone-ruby.vercel.app/",
      dates: "",
      active: true,
      description:
        "A Figma-inspired platform that enables real-time collaboration on design projects. With features for creating, editing, and sharing designs, it delivers a smooth and intuitive experience for teams and individuals.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Liveblocks",
      ],
      links: [
        {
          type: "Website",
          href: "https://figma-clone-ruby.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/figma-clone",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/figma.avif",
      video: "",
    },
    {
      title: "AI Saas",
      href: "https://fab-ai-saas.vercel.app/",
      dates: "",
      active: true,
      description:
        "An AI-powered SaaS platform offering a wide range of services, including chat, code generation, video editing, image creation, and audio processing. Users can explore features with a free tier or upgrade to a subscription tier for enhanced capabilities.",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
        "Stripe",
        "Crisp",
      ],
      links: [
        {
          type: "Website",
          href: "https://fab-ai-saas.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/ai-saas",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/ai-saas.png",
      video: "",
    },
    {
      title: "Crowd funding app (WIP)",
      href: "https://fab-crowd-funding.netlify.app/",
      dates: "",
      active: true,
      description:
        "A GoFundMe-inspired platform where users can post projects and receive donations via smart contracts. Built with Solidity and integrated with MetaMask, it ensures secure and transparent funding through blockchain technology.",
      technologies: [
        "Vite",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
        "Metamask",
        "Solidity",
      ],
      links: [
        {
          type: "Website",
          href: "https://fab-crowd-funding.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/crowdfunding",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/crowdfunding.png",
      video: "",
    },
    {
      title: "Evently",
      href: "https://fab-event-platform.vercel.app/",
      dates: "",
      active: true,
      description:
        "Evently allows users to create and manage events while enabling others to purchase tickets and join. It streamlines event organization and participation, making it simple and enjoyable for everyone involved.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://fab-event-platform.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/evently",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/evently.png",
      video: "",
    },
    {
      title: "Threads app",
      href: "https://threads-app-snowy-beta.vercel.app/",
      dates: "",
      active: true,
      description:
        "A Threads-inspired platform for sharing updates, engaging in conversations, and connecting with others. Designed for a smooth and familiar microblogging experience.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://threads-app-snowy-beta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/threads_app",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/Threads.webp",
      video: "",
    },
    {
      title: "Issue Tracker",
      href: "https://issue-tracker-delta-sage.vercel.app/",
      dates: "",
      active: true,
      description:
        "A simple and efficient issue tracker designed to help teams log, track, and resolve tasks or bugs. It provides an intuitive interface for managing workflows and ensuring smooth project progress.",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://issue-tracker-delta-sage.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/issue-tracker",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/issue-tracker.svg",
      video: "",
    },
    {
      title: "GitHub Search",
      href: "https://fables7-github-search-user.netlify.app/",
      dates: "",
      active: true,
      description:
        "A simple GitHub search tool that allows users to enter a GitHub account username and view basic information about the profile. An easy way to explore developer profiles and activity.",
      technologies: ["React", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://fables7-github-search-user.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/github-user-search-app",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/github-search-thumbnail.jpeg",
      video: "",
    },
    {
      title: "Travel app (Frontend)",
      href: "https://travel-app-ui-ux.netlify.app/",
      dates: "",
      active: true,
      description:
        "A visually stunning travel app designed to highlight frontend and design skills. With an engaging interface and responsive layouts, it offers an inspiring user experience for exploring travel destinations.",
      technologies: ["Vite", "Javascript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://travel-app-ui-ux.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/travel_app",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/travel-app.png",
      video: "",
    },
    {
      title: "Nike site (Frontend)",
      href: "https://fab-nike-site.netlify.app/",
      dates: "",
      active: true,
      description:
        "A sleek and modern Nike website clone created to demonstrate frontend and design expertise. Featuring responsive layouts and polished visuals, it captures the essence of the Nike brand.",
      technologies: ["Vite", "Javascript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://fab-nike-site.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/nike-site",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/nike-site.png",
      video: "",
    },
    {
      title: "Memory Game",
      href: "https://fables7-memory-game.netlify.app/",
      dates: "",
      active: true,
      description:
        "A classic memory card game with a twist! Players match pairs on a grid, choosing between numbers or icons for a customizable challenge. Fun and interactive, it sharpens memory and focus.",
      technologies: ["React", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://fables7-memory-game.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Fables7/memory-game",
          icon: <Icons.github className="size-4" />,
        },
      ],
      image: "/memory-game-thumbnail.webp",
      video: "",
    },
  ],
} as const;
