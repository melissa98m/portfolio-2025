export default {
    meta: {
        title: "Mélissa Mangione — Portfolio",
        description: "Développeuse Fullstack. Projets, contact, stack.",
    },
    nav: {
        home: "Accueil",
        projects: "Projets",
        contact: "Contact",
        language: "Langue"
    },
    home: {
        hello: "Bonjour, je suis Mélissa Mangione",
        headline: "Développeuse Fullstack",
        subheadline1: "Disponible pour une alternance: ",
        subheadline: "e-commerce clé en main (Magento/PrestaShop) ou app sur-mesure (Laravel/Symfony), orientée performance et accessibilité.",
        cta: "Voir mes projets",
        cv: {
            view: "Voir mon CV",
            download: "Télécharger",
        },
    },
    projects: {
        kicker: "Mes travaux",
        title: "Projets",
        status: {
            deployed: "En ligne",
            wip: "En développement",
            contributor: "Contributeur·rice",
        },
        github: "GitHub",
        preview: "Aperçu",
        moreOn: "Plus de projets sur",
    },
    contact: {
        kicker: "Discutons",
        title: "Contact",
        blurb: "Une question ou un projet en tête ? Écrivez-moi.",
        locationLabel: "Localisation :",
        locationValue: "Le champ prés Froges, Isére",
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer",
        success: "Merci pour votre message !",
        error: "Un problème est survenu lors de l’envoi du message.",
    },
    footer: {
        rights: "Tous droits réservés.",
        builtWith: "Construit avec",
        styledWith: "Stylisé avec",
        deployedOn: "Déployé sur",
    },
    likeButton: {
        likeSingular: "mention J’aime",
        likePlural: "mentions J’aime",
        aria: "Bouton J’aime",
        updateError: "Une erreur est survenue lors de la mise à jour des likes.",
        docMissing: "Le document n’existe pas.",
    },
    skills: {
        title: "Ce que je fais",
        categories: {
            web: "Développement Web",
            ecommerce: "E-commerce",
            project: "Gestion de projet",
        },
        items: {
            web: {
                spa: "Applications monosite (SPA)",
                landing: "Landing pages et sites vitrines",
                portfolio: "Sites portfolio",
            },
           ecommerce: {
                commerce: "E-commerce adaptés au mobile",
                cms: "Création de e-commerce avec Magento et Prestashop",
            },
            project: {
                gestion: "Gestion de projet avec Trello/Jira",
                redaction: "Redaction de cahier des charges, dossier technique",
                ci: "Utilisation de Docker, et de Github Actions pour automatiser un projet",
            },
        },
    },



} as const;
