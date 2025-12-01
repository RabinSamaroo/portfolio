const rabin = {
  firstName: "Rabin",
  lastName: "Samaroo",
  title: "Senior Full-Stack Engineer & Technical Lead",
  contact: {
    email: "r1samaroo@ryerson.ca",
    phone: "647-998-1462",
    location: "Houston, TX",
    websiteUrl: "https://github.com/RabinSamaroo",
  },
  socials: {
    insagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
    dribbble: "https://www.dribbble.com",
    linkedin: "https://www.linkedin.com",
  },
  languages: [{ name: "English", level: "Native" }],
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "System Design",
    "Architecture",
    "Team Leadership",
    "AWS",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Microservices",
    "CI/CD",
    "DevOps",
    "Python",
    "Agile/Scrum",
    "Code Review",
    "Mentoring",
    "UI/UX Design",
    "Figma",
    "Tailwind CSS",
    "CSS Grid",
    "Flexbox",
    "Responsive Design",
    "Design Systems",
    "Prototyping",
    "User Research",
    "Accessibility (WCAG)",
    "Animation",
    "GCP",
  ],
  quote: "Premature abstraction is the root of all evil in software design.",
  summary:
    "Senior Full-Stack Engineer and Technical Lead with over 6 years of experience architecting scalable web applications and leading high-performance teams. Specialized in the React ecosystem (Next.js, TypeScript) and cloud-native architectures. Proven track record of migrating legacy systems, optimizing frontend performance, and establishing engineering best practices. Passionate about mentorship, code quality, and delivering user-centric enterprise solutions.",
  experiences: [
    {
      company: "New Technologies Enterprises Inc.",
      position: "Senior Full-Stack Developer",
      startDate: "Jan 2024",
      endDate: "Present",
      description: `Spearheaded the modernization of a large-scale internal application, leading the migration from Angular to React while maintaining legacy system interoperability.\nArchitected and developed scalable backend services using C#, ASP.NET Core, and Entity Framework Core.\nDeployed and managed secure cloud infrastructure on Microsoft Azure, utilizing Azure App Services and Azure SQL.\nEstablished automated CI/CD pipelines using Azure DevOps, streamlining the release process for both frontend and backend services.\nProvided technical leadership to a cross-functional team, driving architectural decisions and enforcing best practices in both React and .NET ecosystems.\nOptimized high-volume SQL Server databases and implemented efficient RESTful APIs to support complex data visualization requirements.`,
      location: "Toronto, Ontario, Canada",
    },
    {
      company: "L3 Resources",
      position: "Lead Developer",
      startDate: "Dec 2023",
      endDate: "Jan 2024",
      description: `Led a distributed engineering team in architecting a high-throughput SaaS platform for the oil & gas sector using React, TypeScript, and Node.js.\nEstablished a modern frontend architecture with strict typing, component reusability, and automated testing, resulting in a 40% reduction in UI bugs.\nDesigned and implemented a distributed web scraping system handling parallel tasks, increasing data acquisition speed by 300%.\nOrchestrated the migration of legacy monolithic systems to a microservices architecture, improving system reliability and scalability.\nImplemented robust CI/CD pipelines and DevOps practices, reducing deployment friction and accelerating release cycles by 25%.\nMentored developers on React best practices and performance optimization techniques.`,
      location: "Houston, TX (Remote)",
      imagePath: "",
    },
    {
      company: "Keeper Memorials",
      position: "Lead Developer",
      startDate: "Apr 2022",
      endDate: "Nov 2023",
      description: `Directed the technical strategy and end-to-end development of the Veteran Legacy Memorials project, a high-traffic platform serving millions of users.\nArchitected secure, compliant serverless backend solutions on AWS GovCloud using Lambda and API Gateway.\nLed a cross-functional team of 5 developers, conducting code reviews, sprint planning, and ensuring on-time delivery of critical features.\nChampioned accessibility standards (WCAG 2.1 / Section 508), ensuring an inclusive user experience for all visitors.\nOptimized React application performance through virtualization, memoization, and state management refactoring, significantly improving Core Web Vitals.\nActed as the primary technical liaison for stakeholders, translating business requirements into scalable technical solutions.`,
      location: "Toronto, Ontario, Canada",
      imagePath: "",
    },
    {
      company: "Keeper Memorials",
      position: "Senior Full-Stack Developer",
      startDate: "Apr 2022",
      endDate: "Nov 2023",
      description: `Engineered an enterprise-grade digital memorialization platform using React and TypeScript, adhering to strict design specifications.\nModernized state management by migrating legacy Redux codebases to React Hooks and Context API, improving maintainability and developer velocity.\nEstablished a comprehensive testing strategy using Playwright and Jest, increasing test coverage and preventing regression issues.\nDesigned and built scalable RESTful APIs using Python, ensuring data integrity and high availability.\nMentored junior developers, fostering a culture of knowledge sharing and code quality.\nOrchestrated CI/CD pipelines on AWS to streamline deployments and enhance team productivity.`,
      location: "Toronto, Ontario, Canada",
      imagePath: "",
    },
    {
      company: "New Technologies Enterprises Inc.",
      position: "Full Stack Developer",
      startDate: "Mar 2021",
      endDate: "Apr 2022",
      description: `Architected and deployed responsive, high-performance user interfaces using React and TypeScript for diverse client projects.\nEngineered versatile REST APIs in Python to support complex business logic and third-party integrations.\nIntegrated secure payment processing workflows using Stripe and Twilio.\nCollaborated closely with design teams to translate Figma prototypes into pixel-perfect, interactive React components.\nImplemented CI/CD workflows and automated testing to ensure system reliability across multiple environments.\nOptimized database performance for Redis, MongoDB, and PostgreSQL to handle growing data loads.`,
      location: "Toronto, Ontario, Canada",
      imagePath: "",
    },
    {
      company: "Mediacorp Canada",
      position: "Back End Developer",
      startDate: "Nov 2018",
      endDate: "Mar 2021",
      description: `Developed high-performance web scrapers using TypeScript and Python, targeting complex APIs and dynamic content.\nOptimized PostgreSQL database queries, resulting in a 25% improvement in data retrieval speeds.\nScaled data collection infrastructure to handle over 125,000 records, implementing robust validation and error handling.\nUtilized Regular Expressions and advanced parsing techniques for precise data extraction.\nCollaborated with the engineering team to troubleshoot data discrepancies and improve system stability.`,
      location: "Toronto, Ontario, Canada",
      imagePath: "",
    },
  ],
  educations: [
    {
      school: "Toronto Metropolitan University",
      achievement: "Honours Bachelor of Science, Computer Science",
      endDate: "2022",
      description:
        "Focused on software engineering principles, data structures, algorithms, and systems design. Gained extensive experience in object-oriented programming, database management, and software development methodologies. Completed capstone project in distributed systems architecture.",
      imagePath: "/TMU-rgb.png",
    },
  ],
  projects: [
    {
      name: "L3 Resources",
      description:
        "Developed a comprehensive oil & gas mineral rights acquisition platform for L3 Resources, powering runsheet.com - an innovative platform that helps landmen create detailed runsheets and streamline mineral rights research. Built modern full-stack infrastructure handling complex land data workflows, automated document processing, and secure client management systems with robust web scraping capabilities and advanced data extraction pipelines.",
      imagePath:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      url: "https://www.l3resources.com/",
    },
    {
      name: "Runsheet.com",
      description:
        "Architected an innovative SaaS platform specifically designed for landmen in the oil & gas industry to create detailed runsheets and streamline mineral rights research. Built with React and TypeScript, featuring advanced mapping integrations, automated land data analysis, collaborative workflow tools, and comprehensive reporting systems that revolutionize how energy professionals manage property research and due diligence processes.",
      imagePath:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      url: "https://www.runsheet.com/login",
    },
    {
      name: "MyKeeper Digital Memorial Platform",
      description:
        "Architected and developed a comprehensive digital memorialization platform serving millions of users globally. Built scalable React and Python infrastructure supporting unlimited content uploads, virtual memorial services, and collaborative tribute features with advanced privacy controls and 508-compliant accessibility standards.",
      imagePath:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      url: "https://www.mykeeper.com/",
    },
    {
      name: "Veteran Legacy Memorial (VLM)",
      description:
        "Spearheaded development of the U.S. Department of Veterans Affairs' official memorial platform deployed on AWS GovCloud. Engineered secure, government-compliant memorial profiles for fallen veterans with advanced multimedia support, legacy preservation features, and family collaboration tools meeting federal accessibility and security standards.",
      imagePath:
        "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      url: "https://www.vlm.cem.va.gov/ROBERTWAYNEMONROE/9c3b2b",
    },
    {
      name: "Canada's Top 100 Employers Platform",
      description:
        "Engineered a comprehensive employer recognition platform serving Canada's premier workplace awards program. Built scalable web infrastructure supporting thousands of employer applications, advanced search and filtering systems, and automated content management workflows for multiple award categories.",
      imagePath: "https://static.eluta.ca/logos/2025_7_reverse_en.svg",
      url: "https://www.canadastop100.com/",
    },
    {
      name: "Eluta.ca Job Search Engine",
      description:
        "Developed a comprehensive job search platform using full-stack Python architecture with extensive web scraping infrastructure. Implemented automated data collection systems processing thousands of job postings daily from multiple sources, advanced search algorithms, and real-time job aggregation pipelines with robust error handling and data validation.",
      imagePath: "https://www.eluta.ca/++resource++img/eluta_homepage_logo.png",
      url: "https://www.eluta.ca/",
    },
    {
      name: "Find Me Food",
      description:
        "Built an innovative Tinder-style food discovery app using Next.js and Tailwind CSS, deployed on Firebase. Features swipe-based restaurant recommendations, location-based food discovery, and intuitive mobile-first design with real-time filtering and personalized matching algorithms for local dining experiences.",
      imagePath:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      url: "https://find-me-food-db1b1.web.app/",
    },
    {
      name: "New Tech Solutions",
      description:
        "Developed a comprehensive business solutions website using Bootstrap and jQuery, showcasing modern web development practices with responsive design principles. Built during tenure at New Technologies Enterprises Inc., featuring dynamic user interfaces, cross-browser compatibility, and optimized performance for diverse client requirements across multiple business verticals.",
      imagePath:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      url: "http://newtechsolutions.com/",
    },
    {
      name: "TalkDeath",
      description:
        "Developed and maintained TalkDeath.com using WordPress, creating a comprehensive digital platform dedicated to death education and end-of-life conversations. Built custom WordPress themes and plugins to support educational content delivery, community engagement features, and resource management systems. Implemented responsive design patterns, SEO optimization, and accessibility standards to create an informative platform that facilitates important discussions around mortality, grief, and death literacy.",
      imagePath:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      url: "https://talkdeath.com/",
    },
  ],
};

export default rabin;
