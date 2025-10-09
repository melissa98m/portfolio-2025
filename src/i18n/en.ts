export default {
    meta: {
        title: "Mélissa Mangione — Portfolio",
        description: "Fullstack Developper. Projects, contact, stack.",
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
        subheadline: "I build fast and accessible web experiences.",
        cta: "See my projects",
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
        locationValue: "Le champ prés Froges, Isére",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        success: "Thank you for your message!",
        error: "There was a problem sending your message.",
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
            mobile: "Mobile Development",
            design: "UI/UX Design & Prototyping",
        },
        items: {
            web: {
                spa: "Single Page Applications (SPAs)",
                landing: "Landing pages and business websites",
                portfolio: "Portfolio websites",
            },
            mobile: {
                pwa: "Mobile-friendly web apps",
                reactNative: "React Native mobile apps",
            },
            design: {
                ui: "UI design with Figma & Canva",
                ux: "UX research & improvements",
                proto: "Prototyping for websites & mobile apps",
            },
        },
    },



} as const;
