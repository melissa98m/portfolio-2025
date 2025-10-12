export default {
  meta: {
    title: "Mélissa Mangione — Portfolio",
    description: "Fullstack Developer. Projects, contact, stack.",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    contact: "Contact",
    language: "Language"
  },
  home: {
    hello: "Hi, I'm Mélissa Mangione",
    headline: "Fullstack Developer",
    subheadline1: "Available for work-study programs:",
    subheadline: "turnkey e-commerce (Magento/PrestaShop) or custom app (Laravel/Symfony), focused on performance and accessibility.",
    cta: "See my projects",
    cv: {
      view: "View my CV",
      download: "Download",
    },
  },
  projects: {
    kicker: "My work",
    title: "Projects",
    status: {
      deployed: "Deployed",
      wip: "In development",
      contributor: "Contributor",
    },
    github: "GitHub",
    preview: "Preview",
    moreOn: "More projects on",
  },

  contact: {
    kicker: "Let's talk",
    title: "Contact",
    blurb: "Have a question or a project in mind? Feel free to reach out.",
    locationLabel: "Location:",
    locationValue: "Le champ près Froges, Isère",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    success: "Message sent! Thank you for your message!",
    error: "There was a problem sending your message.",
    validation: {
      nameRequired: "Name is required.",
      nameShort: "At least 2 characters.",
      emailRequired: "Email is required.",
      emailInvalid: "Invalid email format.",
      messageRequired: "Message is required.",
      messageShort: "At least 10 characters.",
    },
  },

  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with",
    styledWith: "Styled with",
    deployedOn: "Deployed on",
  },
  likeButton: {
    likeSingular: "Like",
    likePlural: "Likes",
    aria: "Like button",
    updateError: "There was a problem updating likes.",
    docMissing: "Document does not exist.",
  },
  skills: {
    title: "What I do",
    categories: {
      web: "Web Development",
      ecommerce: "E-shop",
      project: "Project Management",
    },
    items: {
      web: {
        spa: "Single Page Applications (SPAs)",
        landing: "Landing pages and business websites",
        portfolio: "Portfolio websites",
      },
      ecommerce: {
        commerce: "Mobile-friendly e-shop",
        cms: "Create e-shops with Magento and PrestaShop",
      },
      project: {
        gestion: "Project management with Trello & Jira",
        redaction: "Drafting specifications and technical documents",
        ci: "Automating projects with Docker and GitHub Actions",
      },
    },
  },
} as const;
