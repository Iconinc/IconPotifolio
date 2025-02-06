import { ContentData } from "@/types";

export const contentData: ContentData = {
  navigation: {
    logo: "/icons/ICON..svg",
    links: [
      { id: 1, title: "Works", href: "#work" },
      { id: 2, title: "About", href: "#about" },
      { id: 3, title: "Services", href: "#services" },
      { id: 4, title: "Process", href: "#process" },
      { id: 5, title: "Contact", href: "#contact" },
    ],
    ctaButton: {
      text: "Let's Talk",
      href: "#contact",
    },
  },
  hero: {
    title: "Design. Prototype.",
    titleHighlight: "Collaborate.",
    description:
      "Create beautiful designs for websites, apps, and more, directly in your browser.",
    cta: "View My Work",
    image: "/images/hero-image.png",
  },
  work: [
    {
      id: 1,
      title: "Fintech Dello Banking App",
      description:
        "An AI-powered car monitoring system with real-time diagnostics and maintenance tracking",
      image: "/images/image framer.svg",
      category: "Product Design",
      tags: ["Branding", "Product Design", "UI/UX", "Banking"],
      link: "/case-studies/dello-banking",
    },
    {
      id: 2,
      title: "Dazzle © Branding",
      description:
        "A comprehensive financial management dashboard with intuitive data visualization",
      image: "/images/image framer 2.svg",
      category: "Product Design",
      tags: ["Branding", "Product Design", "UI/UX", "Finance"],
      link: "/case-studies/dazzle-finance",
    },
    {
      id: 3,
      title: "Plant Scan Application",
      description:
        "Smart plant identification and care management system with real-time monitoring",
      image: "/images/image frame 3.svg",
      category: "Product Design",
      tags: ["Branding", "Product Design", "Mobile App", "IoT"],
      link: "/case-studies/plant-scan",
    },
    {
      id: 4,
      title: "Solar Panel Solutions",
      description:
        "Modern solar panel configuration and monitoring system for sustainable energy",
      image: "/images/image frame 4.svg",
      category: "Product Design",
      tags: ["Branding", "Product Design", "Clean Energy", "IoT"],
      link: "/case-studies/solar-panel",
    },
  ],
  about: [
    {
      text: "Software engineer",
      color: "text-[#1E1E1E]",
      weight: "font-normal",
    },
    { text: "and Expert", color: "text-[#647197]" },
    { text: "UI/UX Design", color: "text-[#1E1E1E]", weight: "font-normal" },
    { text: "with over", color: "text-[#647197]" },
    { text: "5 Years", color: "text-[#1E1E1E]", weight: "font-normal" },
    { text: "of industry Experience.", color: "text-[#647197]" },
    { text: "Expertise extends to", color: "text-[#647197]" },
    {
      text: "Project Management",
      color: "text-[#1E1E1E]",
      weight: "font-normal",
    },
    {
      text: "enabling us to create both aesthetically pleasing and easily implementable.",
      color: "text-[#647197]",
    },
  ],

  services: [
    {
      id: 1,
      number: "01",
      title: {
        start: "UI/UX",
        highlight: "and Software",
        end: "Engineer",
      },
      description:
        "Our service enhances your websites content and structure, optimizing elements like title tags and meta descriptions to improve rankings and user engagement.",
      icon: "/icons/service-ux.svg",
    },
    {
      id: 2,
      number: "02",
      title: {
        start: "Link",
        highlight: "Building",
        end: "& SEO Audits",
      },
      description:
        "We develop a customized link building strategy to acquire high-quality backlinks, boosting your website's authority and credibility for better search engine visibility.",
      icon: "/icons/service-seo.svg",
    },
    {
      id: 3,
      number: "03",
      title: {
        start: "Keyword",
        highlight: "& Content",
        end: "Research",
      },
      description:
        "we credre a tailoreg conTenr rign rOot resonates wit your audience, progucing SEO-friendly content that drives organic traffic and establishes your brand authority.",
      icon: "/icons/service-research.svg",
    },
  ],
  process: [
    {
      id: 1,
      title: "Discovery Phase",
      description:
        "In this initial stage, we conduct a comprehensive analysis of your business, target audience, and industry landscape to understand your unique needs and objectives.",

      tasks: [
        "Conduct comprehensive business analysis",
        "Identify unique needs and objectives",
      ],
      status: "completed",
    },
    {
      id: 2,
      title: "Strategy Development",
      description:
        "Based on the insights gathered during the discovery phase, we develop a tailored SEO strategy that outlines the specific tactics and approaches to be implemented to achieve your goals.",

      tasks: [
        "Conduct comprehensive business analysis",
        "Identify unique needs and objectives",
      ],
      status: "active",
    },
    {
      id: 3,
      title: "Realization",
      description:
        "With the strategy in place, we execute the planned SEO activities, including keyword optimization, content creation, link building, and technical enhancements. Throughout this stage, we continuously monitor performance metrics.",

      tasks: [
        "Conduct comprehensive business analysis",
        "Identify unique needs and objectives",
      ],
      status: "pending",
    },
    {
      id: 4,
      title: "Reporting and Analysis",
      description:
        "Finally, we provide regular reports and analysis that highlight the progress of your SEO campaign, including key performance indicators, traffic trends, and ranking improvements.",

      tasks: [
        "Conduct comprehensive business analysis",
        "Identify unique needs and objectives",
      ],
      status: "pending",
    },
  ],
  tools: [
    { name: "Figma", icon: "/icons/devicon--figma.svg" },
    { name: "Angular", icon: "/icons/devicon--angular.svg" },
    { name: "firebase", icon: "/icons/devicon--firebase.svg" },
    { name: "Git", icon: "/icons/devicon--git.svg" },
    { name: "Github", icon: "/icons/mdi--github.svg" },
    { name: "HTML", icon: "/icons/devicon--html5-wordmark.svg" },
    {
      name: "Next.js",
      icon: "/icons/nextjs-icon-light-background.svg",
    },
    {
      name: "Node.js",
      icon: "/icons/devicon--nodejs-wordmark.svg",
    },
    { name: "React", icon: "/icons/devicon--react.svg" },
    { name: "Slack", icon: "/icons/devicon--slack.svg" },
    { name: "Tailwind", icon: "/icons/devicon--tailwindcss.svg" },
    { name: "JAVA", icon: "/icons/skill-icons--java-light.svg" },
    { name: "Vite", icon: "/icons/logos--vitejs.svg" },
    { name: "GraphQl", icon: "/icons/logos--graphql.svg" },
    { name: "CSS", icon: "/icons/skill-icons--css.svg" },
    { name: "Mongo DB", icon: "/icons/skill-icons--mongodb.svg" },
    { name: "Redux", icon: "/icons/skill-icons--redux.svg" },
    { name: "Vercel", icon: "/icons/vercel-icon-dark.svg" },
    { name: "Jira", icon: "/icons/devicon--jira.svg" },
    { name: "AWS", icon: "/icons/logos--aws.svg" },
    { name: "Framer", icon: "/icons/logos--framer.svg" },
  ],
  contact: {
    title: "Let's Talk",
    description:
      "Have a project in mind? Looking to partner or work together? Reach out through the form below.",
    email: "hello@yourdomain.com",
    phone: "+(250) 000-0000",
    location: "Kigali, RW",
    form: {
      name: {
        label: "Name",
        placeholder: "Enter your name",
      },
      email: {
        label: "Email",
        placeholder: "Enter your email",
      },
      message: {
        label: "Message",
        placeholder: "Tell me about your project",
      },
      button: "Send Message",
    },
  },
  footer: {
    copyright: {
      year: "2025",
      text: "Copyright passionated crafted by",
      brand: "ICON",
    },
    navigation: {
      internal: [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Work", href: "#work" },
        { id: 3, label: "About", href: "#about" },
        { id: 4, label: "Contact", href: "#contact" },
      ],
      social: [
        {
          id: 1,
          label: "Twitter",
          href: "https://twitter.com",
          isExternal: true,
        },
        {
          id: 2,
          label: "Dribbble",
          href: "https://dribbble.com",
          isExternal: true,
        },
        {
          id: 3,
          label: "Instagram",
          href: "https://instagram.com",
          isExternal: true,
        },
      ],
    },
    contact: {
      title: "Contact",
      heading: "Let's start creating together",
      cta: {
        text: "Let's talk",
        href: "#contact",
      },
    },
  },
};

export default contentData;
