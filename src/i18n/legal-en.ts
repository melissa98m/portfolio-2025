export default {
  mentionsLegales: {
    title: "Legal Notice",
    metaTitle: "Legal Notice — Mélissa Mangione",
    metaDesc: "Legal notice for Mélissa Mangione's portfolio website.",
    lastUpdate: "Last updated: March 2025",
    intro: "In accordance with the provisions of Articles 6-III and 19 of Law No. 2004-575 of June 21, 2004 on Confidence in the Digital Economy (LCEN), these legal notices detail the identity and contact details of the different parties involved in this website.",
    editor: {
      title: "1. Website Publisher",
      name: "Mélissa Mangione",
      activity: "Fullstack Developer — Professional portfolio",
      address: "Le Champ près Froges, Isère, France",
      email: "melissa.mangione@gmail.com",
    },
    host: {
      title: "2. Hosting Provider",
      name: "Vercel Inc.",
      address: "340 S Lemon Ave #4133, Walnut, CA 91789, United States",
      site: "https://vercel.com",
    },
    intellectual: {
      title: "3. Intellectual Property",
      content: "All content on this site (text, images, source code, design) is protected by copyright and belongs to Mélissa Mangione unless otherwise stated. Any unauthorized reproduction, representation or use constitutes infringement subject to penalties.",
    },
    links: {
      title: "4. Hyperlinks",
      content: "This site may contain links to other websites. Mélissa Mangione has no control over the content of these sites and disclaims any responsibility for their content. Creating links to this site is allowed without specific framework, provided it does not damage the site's image.",
    },
    disclaimer: {
      title: "5. Limitation of Liability",
      content: "The information provided on this site is for informational purposes only. Despite efforts to keep it up to date, errors or omissions may occur. Mélissa Mangione cannot be held liable for any direct or indirect damage resulting from the use of information on this site.",
    },
    law: {
      title: "6. Governing Law",
      content: "These legal notices are governed by French law. In case of dispute, French courts shall have exclusive jurisdiction.",
    },
    backHome: "Back to home",
  },
  politiqueConfidentialite: {
    title: "Privacy Policy",
    metaTitle: "Privacy Policy — Mélissa Mangione",
    metaDesc: "Privacy policy and personal data protection for Mélissa Mangione's portfolio.",
    lastUpdate: "Last updated: March 2025",
    intro: "This privacy policy describes how Mélissa Mangione collects, uses and protects the personal data of visitors to this site, in accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act.",
    controller: {
      title: "1. Data Controller",
      content: "The data controller is Mélissa Mangione, contactable at melissa.mangione@gmail.com.",
    },
    collected: {
      title: "2. Data Collected",
      content: "The only personal data collected is that voluntarily sent via the contact form: name, email address and message. No data is collected automatically without your explicit consent.",
    },
    purpose: {
      title: "3. Purpose of Processing",
      content: "Contact form data is used solely to respond to your inquiries. It is never sold, rented or transmitted to third parties for commercial purposes.",
    },
    legalBasis: {
      title: "4. Legal Basis",
      content: "Processing is based on your consent (mandatory checkbox before submission) and on the legitimate interest of responding to professional contact requests.",
    },
    retention: {
      title: "5. Retention Period",
      content: "Contact form data is kept only as long as strictly necessary to process your request, then deleted. Emails received may be archived for up to 3 years for professional follow-up purposes, unless you object.",
    },
    rights: {
      title: "6. Your Rights",
      content: "Under the GDPR, you have the right to access, rectify, delete and port your data, as well as the right to limit processing and to object. To exercise these rights, contact melissa.mangione@gmail.com. You may also lodge a complaint with the CNIL (www.cnil.fr).",
    },
    security: {
      title: "7. Security",
      content: "Data is transmitted securely (HTTPS). Emails are sent via Resend, a third-party provider compliant with security standards. The form includes a honeypot field and anti-spam mechanisms.",
    },
    backHome: "Back to home",
  },
  politiqueCookies: {
    title: "Cookie Policy",
    metaTitle: "Cookie Policy — Mélissa Mangione",
    metaDesc: "Information about cookies and trackers used on Mélissa Mangione's portfolio.",
    lastUpdate: "Last updated: March 2025",
    intro: "This policy informs you about the nature of cookies placed on this site and how to manage them, in accordance with the GDPR and CNIL recommendations.",
    what: {
      title: "1. What is a cookie?",
      content: "A cookie is a small text file stored on your device when you visit a website. It allows information (preferences, consent, etc.) to be remembered to improve your browsing experience.",
    },
    types: {
      title: "2. Types of cookies used",
      essential: {
        title: "Strictly necessary cookies",
        content: "These cookies are essential for the site to function. They allow, among other things, your cookie consent choice to be remembered. They do not require your prior consent.",
      },
      preference: {
        title: "Preference cookies",
        content: "These cookies store your choices (e.g. preferred language). They improve your experience without collecting data for marketing purposes.",
      },
      analytics: {
        title: "Analytics cookies (optional)",
        content: "If you accept analytics cookies, trackers may be used to measure site traffic (e.g. Vercel Analytics). This data is anonymized and used only to understand traffic.",
      },
    },
    consent: {
      title: "3. Managing your consent",
      content: "On your first visit, a banner invites you to choose which cookies you accept. You can change your preferences at any time by clicking the \"Manage cookies\" link in the footer.",
    },
    refusal: {
      title: "4. Refusing cookies",
      content: "Refusing optional cookies does not prevent browsing the site. Only strictly necessary cookies will be retained. You can also configure your browser to block certain cookies.",
    },
    backHome: "Back to home",
  },
  legal: {
    mentionsLegales: "Legal Notice",
    politiqueConfidentialite: "Privacy Policy",
    politiqueCookies: "Cookie Policy",
  },
  cookieBanner: {
    title: "This site uses cookies",
    description: "We use essential cookies for the site to function properly and to remember your preferences. Optional analytics cookies help improve the experience.",
    acceptAll: "Accept all",
    acceptEssential: "Essential only",
    customize: "Customize",
    close: "Close",
    customizeTitle: "Manage my preferences",
    essentialLabel: "Essential cookies (required)",
    essentialDesc: "Necessary for the site to function and to store your consent.",
    analyticsLabel: "Analytics cookies",
    analyticsDesc: "Anonymous traffic measurement to understand site usage.",
    save: "Save my choices",
    manageCookies: "Manage cookies",
  },
  consent: {
    contactLabel: "I agree that my data (name, email, message) will be used to contact me back. See our",
    contactPrivacy: "privacy policy",
    contactRequired: "You must accept the privacy policy to send the message.",
  },
} as const;
