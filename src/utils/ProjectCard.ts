import budja from "../assets/project/Budja.png";
import superbull from "../assets/project/superbull.png";
import hornnies from "../assets/project/Hornnies.png";
import optionBox from "../assets/project/optionbox.png";
import epiko from "../assets/project/epiko.png";
import sushmita from "../assets/project/sushmita-Swain.png";
import racing from "../assets/project/racing.png";
import restautant from "../assets/project/restaurant.png";
import fitness from "../assets/project/fitness.png";
import gyde from "../assets/project/gyde.png";
import plan from "../assets/project/plan.png";
import ConnectUp from "../assets/project/ConnectUp.png";
import sustlabs from "../assets/project/sustLabs.png";
import ohmassistant from "../assets/project/ohmassistant.png";
import b2b from "../assets/project/b2b.png";
import rvm from "../assets/project/RVM.png";

// Icons
import nextjs from "../assets/skills/nextjs.png";
import figma from "../assets/skills/figma.png";
import angular from "../assets/skills/angular.png";
import html from "../assets/skills/html.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import tailwindcss from "../assets/skills/tailwindcss.png";
import redux from "../assets/skills/redux.png";
import javascript from "../assets/skills/js.png";
import typescript from "../assets/skills/typecript.png";
import bootstrap from "../assets/skills/bootstrap.png";
import firebase from "../assets/skills/firebase.png";
import materialUI from "../assets/skills/materialUI.png";
import nodejs from "../assets/skills/node.png";
import mqtt from "../assets/skills/mqtt.png";
import postgresql from "../assets/skills/postgresql.jpg";
import clerk from "../assets/skills/clerk.png";
import stripe from "../assets/skills/stripe.png";
import drizzle from "../assets/skills/drizzle.webp";
// project image
import budja1 from "../assets/project/Budja1.png";
import budja2 from "../assets/project/Budja2.png";
import superbull1 from "../assets/project/SuperBull1.png";
import superbull2 from "../assets/project/SuperBull2.png";
import superbull3 from "../assets/project/SuperBull3.png";
import superbull4 from "../assets/project/SuperBull4.png";
import hornnies1 from "../assets/project/Hornnies1.png";
import hornnies2 from "../assets/project/Hornnies2.png";
import hornnies3 from "../assets/project/Hornnies3.png";
import sushmita1 from "../assets/project/Sushmita-Swain1.png";
import sushmita2 from "../assets/project/Sushmita-Swain2.png";
import sushmita3 from "../assets/project/Sushmita-Swain3.png";
import racing1 from "../assets/project/racing1.png";
import racing2 from "../assets/project/racing2.png";
import epiko1 from "../assets/project/epiko1.png";
import epiko2 from "../assets/project/epiko2.png";
import optionBox1 from "../assets/project/tob1.png";
import optionBox2 from "../assets/project/tob3.png";
import restautant1 from "../assets/project/Restaurant1.png";
import restautant2 from "../assets/project/Restaurant2.png";
import restautant3 from "../assets/project/Restaurant3.png";
import fitness1 from "../assets/project/Fitness1.png";
import fitness2 from "../assets/project/Fitness2.png";
import fitness3 from "../assets/project/Fitness3.png";
import fitness4 from "../assets/project/Fitness4.png";
import gyde1 from "../assets/project/gyde1.png";
import gyde2 from "../assets/project/gyde2.png";
import plan1 from "../assets/project/Plan81.png";
import plan2 from "../assets/project/Plan82.png";
import ConnectUp1 from "../assets/project/ConnectUp1.png";
import ConnectUp2 from "../assets/project/ConnectUp2.png";
import sustlabs1 from "../assets/project/SustLabs-new1.png";
import ohmassistant1 from "../assets/project/ohmassistant1.png";
import ohmassistant2 from "../assets/project/ohmassistant2.png";
import rvm1 from "../assets/project/RVM1.png";
import rvm2 from "../assets/project/RVM2.png";
import duolingo1 from "../assets/project/Duolingo.png";
import duolingo2 from "../assets/project/Duolingo1.png";
import duolingo3 from "../assets/project/Duolingo2.png";

export const projectCard = [
  {
    url: "duolingo-clone",
    name: "Duolingo Clone With Nextjs",
    title: "Duolingo Clone",
    image: duolingo1,
    icon: nextjs,
    projectLink: "https://duolingo-clone-nextjs-smoky.vercel.app/",
    selected: "nextjs",
    description:
      "This is a repository for a 'Build a Duolingo Clone With Nextjs, React, Drizzle, Stripe (2024)'. Key Features: - 🌐 Next.js 14 & server actions - 🗣 AI Voices using Elevenlabs AI - 🎨 Beautiful component system using Shadcn UI - 🎭 Amazing characters thanks to KenneyNL - 🔐 Auth using Clerk - 🔊 Sound effects - ❤️ Hearts system - 🌟 Points / XP system - 💔 No hearts left popup - 🚪 Exit confirmation popup - 🔄 Practice old lessons to regain hearts - 🏆 Leaderboard - 🗺 Quests milestones - 🛍 Shop system to exchange points with hearts - 💳 Pro tier for unlimited hearts using Stripe - 🏠 Landing page - 📊 Admin dashboard React Admin - 🌧 ORM using DrizzleORM - 💾 PostgresDB using NeonDB - 🚀 Deployment on Vercel - 📱 Mobile responsiveness",
    useStack: [
      { name: "Next.js", icon: nextjs },
      { name: "React", icon: react },
      { name: "Drizzle", icon: drizzle },
      { name: "Stripe", icon: stripe },
      { name: "Clerk", icon: clerk },
      { name: "PostgreSQL", icon: postgresql },
    ],
    carousel: [
      { image: duolingo1 },
      { image: duolingo2 },
      { image: duolingo3 },
    ],
  },
  {
    url: "budja-nft",
    name: "Budja NFT",
    title: "NFT gallery website",
    image: budja,
    icon: nextjs,
    projectLink: "https://www.budja.io/",
    selected: "nextjs",
    description:
      "Welcome to the most exclusive fractionalized NFT drops on Cardano. Collect, own and enjoy a piece of art",
    useStack: [
      { name: "NextJs", icon: nextjs },
      { name: "Tailwind", icon: tailwindcss },
      { name: "Redux", icon: redux },
    ],
    carousel: [{ image: budja }, { image: budja1 }, { image: budja2 }],
  },
  {
    url: "superbull",
    name: "SuperBull",
    title: "NFT Web-Application",
    image: superbull,
    icon: nextjs,
    projectLink: "https://superbull.io/",
    selected: "nextjs",
    description:
      "SuperBull is a gaming and utility focused project on the Cardano Blockchain.",
    useStack: [
      { name: "NextJs", icon: nextjs },
      { name: "Tailwind", icon: tailwindcss },
      { name: "Redux", icon: redux },
    ],
    carousel: [
      { image: superbull },
      { image: superbull1 },
      { image: superbull2 },
      { image: superbull3 },
      { image: superbull4 },
    ],
  },
  {
    url: "hornnies-nft",
    name: "Hornnies NFT",
    title: "NFT Web-Application",
    image: hornnies,
    icon: nextjs,
    projectLink: "https://hornnies-marketplace.vercel.app/",
    selected: "nextjs",
    description:
      "Hornnies are a collection of unique pixelated bull designs that come in all shapes and sizes, featuring their own strengths and hand drawn accessories, launching on the CARDANO BLOCKCHAIN.",
    useStack: [
      { name: "NextJs", icon: nextjs },
      { name: "Tailwind", icon: tailwindcss },
      { name: "Redux", icon: redux },
    ],
    carousel: [
      { image: hornnies },
      { image: hornnies1 },
      { image: hornnies2 },
      { image: hornnies3 },
    ],
  },

  {
    url: "sushmita-portfolio",
    name: "Sushmita Swain portfolio",
    title: "portfolio",
    image: sushmita,
    icon: react,
    projectLink: "https://sushmita-swain.web.app/",
    selected: "reactjs",
    description: "Designer portfolio showcasing enhanced skills in ReactJS.",
    useStack: [
      { name: "ReactJs", icon: react },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Typescript", icon: typescript },
    ],
    carousel: [
      { image: sushmita },
      { image: sushmita1 },
      { image: sushmita2 },
      { image: sushmita3 },
    ],
  },
  {
    url: "juggernaut-racing",
    name: "Juggernaut Racing",
    title: "Racing website",
    image: racing,
    icon: html,
    projectLink: "https://jr-website-36f71.web.app/",
    github: "https://github.com/SuchitraSwain/jr-website",
    selected: "html",
    description:
      "Team Juggernaut Racing is the official SAE BAJA Team of Kalinga Institute of Industrial Technology. The team is formed by 50 undergraduate students from Mechanical and Electronics Engineering.",
    useStack: [
      { name: "HTML", icon: html },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Javascript", icon: javascript },
      { name: "Firebase", icon: firebase },
    ],
    carousel: [{ image: racing }, { image: racing1 }, { image: racing2 }],
  },
  {
    url: "epiko-regal",
    name: "Epiko Regal",
    title: "Gamification website",
    image: epiko,
    icon: html,
    projectLink: "https://epiko-regal-website.web.app/",
    github: "https://github.com/SuchitraSwain/epiko-website",
    selected: "html",
    description:
      "Epiko is a blockchain and gaming-based project developed by Wharf Street Studios Limited, incorporated in London. It aims to introduce Games, NFTs and Metaverse.",
    useStack: [
      { name: "HTML", icon: html },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Javascript", icon: javascript },
      { name: "Firebase", icon: firebase },
    ],
    carousel: [{ image: epiko }, { image: epiko1 }, { image: epiko2 }],
  },
  {
    url: "the-option-box",
    name: "TheOptionBox",
    title: "Stock Market Web-Application",
    image: optionBox,
    icon: angular,
    projectLink: "https://app.theoptionbox.com/",
    selected: "angular",
    description:
      "TheOptionBox is a paper trading platform designed to help you become a master at trading. In just a few taps, you can trade thousands of stock, ETFs and options: risk:free",
    useStack: [
      { name: "Angular", icon: angular },
      { name: "Figma", icon: figma },
    ],
    carousel: [
      { image: optionBox },
      { image: optionBox1 },
      { image: optionBox2 },
    ],
  },
  {
    url: "restaurant",
    name: "Restaurant React Website",
    title: "Web-Application",
    image: restautant,
    icon: react,
    projectLink: "https://restaurant-react-website.vercel.app/",
    github: "https://github.com/SuchitraSwain/restaurant-react-website",
    selected: "reactjs",
    description:
      "Fully Responsive Restaurant Website with Modern UI and UX in ReactJS",
    useStack: [
      { name: "reactjs", icon: react },
      { name: "Redux", icon: redux },
      { name: "Material UI", icon: materialUI },
    ],
    carousel: [
      { image: restautant },
      { image: restautant1 },
      { image: restautant2 },
      { image: restautant3 },
    ],
  },
  {
    url: "fitness",
    name: "React Fitness Application",
    title: "Web-Application",
    image: fitness,
    icon: react,
    projectLink: "https://fitness-react-app.vercel.app/",
    github: "https://github.com/SuchitraSwain/fitness-react-app",
    selected: "reactjs",
    description:
      "Fitness exercise react application with Rapid APIs. Fully mobile friendly",
    useStack: [
      { name: "reactjs", icon: react },
      { name: "Redux", icon: redux },
      { name: "Material UI", icon: materialUI },
    ],
    carousel: [
      { image: fitness },
      { image: fitness1 },
      { image: fitness2 },
      { image: fitness3 },
      { image: fitness4 },
    ],
  },
  {
    url: "gyde",
    name: "GYDE",
    title: "Node Express web-application",
    image: gyde,
    icon: node,
    projectLink: "https://gyde.ai/",
    selected: "nextjs",
    description:
      "Gyde is a digital adoption platform(DAP) that enables enterprises & SaaS companies to guide their application (web & mobile) users with step-by-step voice assistance, byte-sized training videos & rich help articles. These guides are personalized, multilingual, and available where these are required the most - right within the application.",
    useStack: [{ name: "NodeJs", icon: nodejs }],
    carousel: [{ image: gyde }, { image: gyde1 }, { image: gyde2 }],
  },
  {
    url: "plan",
    name: "Plan8",
    title: "Website",
    image: plan,
    icon: html,
    projectLink: "https://plan8-website-80908.web.app/",
    github: "https://github.com/SuchitraSwain/Plan8",
    selected: "html",
    description:
      "OUR MISSION IS TO HELP AS MANY BUSINESSES AS POSSIBLE TO ADAPT RAPIDLY, TRANSFORM THEIR PROCESSES AND GROW THEIR PROFIT, ALL WHILE REMAINING GOOD TO THE EARTH AND GOOD TO PEOPLE.",
    useStack: [
      { name: "HTML", icon: html },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Javascript", icon: javascript },
      { name: "Firebase", icon: firebase },
    ],
    carousel: [{ image: plan }, { image: plan1 }, { image: plan2 }],
  },
  {
    url: "connect-up",
    name: "ConnectUp",
    title: "Blockchain Website",
    image: ConnectUp,
    icon: html,
    projectLink: "https://connectupapp.com/",
    github: "https://github.com/SuchitraSwain/connectUp-website",
    selected: "html",
    description:
      "ConnectUp is a decentralized social networking platform that uses blockchain technology.",
    useStack: [
      { name: "HTML", icon: html },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Javascript", icon: javascript },
      { name: "Firebase", icon: firebase },
    ],
    carousel: [
      { image: ConnectUp },
      { image: ConnectUp1 },
      { image: ConnectUp2 },
    ],
  },
  {
    url: "sustlabs",
    name: "SUSTLABS",
    title: "Website",
    image: sustlabs,
    icon: html,
    projectLink: "https://www.sustlabs.com/",
    selected: "html",
    description:
      "Join us in our mission to create a greener and more sustainable world. Let’s work together to make your physical space energy-efficient, eco-friendly and future-ready.",
    useStack: [
      { name: "HTML", icon: html },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Javascript", icon: javascript },
    ],
    carousel: [{ image: sustlabs }, { image: sustlabs1 }],
  },
  {
    url: "ohm",
    name: "OHM WEB APP",
    title: "Web Application",
    image: ohmassistant,
    icon: angular,
    projectLink: "https://ohmassistant-android.firebaseapp.com/login",
    selected: "angular",
    description:
      "Electricity supply carries wealth of data and SustLabs has managed to unlock its value through SustLabs’ proprietary technology.",
    useStack: [
      { name: "Angular", icon: angular },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Firebase", icon: firebase },
    ],
    carousel: [
      { image: ohmassistant },
      { image: ohmassistant1 },
      { image: ohmassistant2 },
    ],
  },
  {
    url: "ohm-assistant",
    name: "OHM ASSISTANT B2B WEB APP",
    title: "Web Application",
    image: b2b,
    icon: angular,
    projectLink: "https://b2b-sustlabs.firebaseapp.com/#/login",
    selected: "angular",
    description:
      "B2B web application is an web-portal for tracking real-time individual smart meter data using MQTT. Real-time energy consumption graph as per day, month and year.",
    useStack: [
      { name: "Angular", icon: angular },
      { name: "Bootstrap", icon: bootstrap },
      { name: "MQTT", icon: mqtt },
    ],
    carousel: [
      { image: ohmassistant },
      { image: ohmassistant1 },
      { image: ohmassistant2 },
    ],
  },
  {
    url: "rvm",
    name: "RVM Website",
    title: "Bike Racing website",
    image: rvm,
    icon: html,
    projectLink: "https://rvm-website-bike-racing.web.app",
    github: "https://github.com/SuchitraSwain/rvm",
    selected: "html",
    description:
      "Vellore Institute of Technology, Vellore, Bike Racing website",
    useStack: [
      { name: "HTML", icon: html },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Firebase", icon: firebase },
    ],
    carousel: [{ image: rvm }, { image: rvm1 }, { image: rvm2 }],
  },
];
