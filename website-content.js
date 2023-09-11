export default {
  hero: {
    title: "Elevate your brand's online presence with us!",
    description: {
      paragaraph:
        "We help businesses improve thier conversion rate and generate leads by ",
      typed: [
        "building outstanding websites.",
        1000,
        "creating succesfull marketing campaigns.",
        1000,
        // "setting up and managing social media accounts.",
        // 1000,
        "implemenitng AI solutions.",
        1000,
      ],
    },
  },
  services: [
    {
      i: 1,
      title: "Product Design & Development",
      description:
        "We are passionate about crafting websites that not only look stunning but also perform seamlessly. With our expert team of developers, we turn your digital vision into a reality, ensuring your online presence is a powerful asset for your business.",
      imageLocation: "/img/website-building-of-shopping-sale.gif",
      detailPage: "/services/web-development",
      toolstack: [
        {
          name: "Webflow",
          imageLocation: "/img/webflow-logo-toolstack.png",
        },
        {
          name: "Framer",
          imageLocation: "/img/framer-logo-toolstack.png",
        },
        {
          name: "Custom Code",
          imageLocation: "/img/code-logo-toolstack.png",
        },
      ],
    },
    {
      i: 2,
      title: "Pay-Per-Click Advertising",
      description:
        "We understand that one size does not fit all when it comes to paid advertising. That's why we take a personalized approach to ensure your brand's success. Our expert team customizes every campaign to your unique goals and needs, ensuring that you get the results you deserve.",
      imageLocation: "/img/pay-per-click-digital-marketing.gif",
      detailPage: "/services/paid-advertising",
      toolstack: [
        {
          name: "Google Ads",
          imageLocation: "/img/google-ads-logo-toolstack.png",
        },
        {
          name: "Instagram",
          imageLocation: "/img/instagram-logo-toolstack.png",
        },
        {
          name: "Facebook",
          imageLocation: "/img/facebook-logo-toolstack.png",
        },
        {
          name: "TikTok",
          imageLocation: "/img/tiktok-logo-toolstack.png",
        },
      ],
    },
  ],
  navbar: [
    {
      name: "Home",
      link: "#home",
    },
    // {
    //   name: "Case Studies",
    //   link: "#case-studies",
    // },
    {
      name: "Services",
      link: "#services",
    },
    // {
    //   name: "Testimonials",
    //   link: "#testimonials",
    // },
    {
      name: "Contact",
      link: "#contact",
    },
  ],
  // case_studies: [
  //   {
  //     id: 1,
  //     client: "Otto",
  //     service: "Product Design",
  //     imageLocation: "/img/UI-device-example.jpg",
  //   },
  //   {
  //     id: 2,
  //     client: "Otto",
  //     service: "Product Design",
  //     imageLocation: "/img/UI-device-example.jpg",
  //   },
  //   {
  //     id: 3,
  //     client: "Otto",
  //     service: "Product Design",
  //     imageLocation: "/img/UI-device-example.jpg",
  //   },
  //   {
  //     id: 4,
  //     client: "Otto",
  //     service: "Product Design",
  //     imageLocation: "/img/UI-device-example.jpg",
  //   },
  // ],
  service_benefits: [
    {
      id: 1,
      description: "Fast delivery time",
    },
    {
      id: 2,
      description: "Client-centric approach",
    },
    {
      id: 3,
      description: "Excellent quality",
    },
    {
      id: 4,
      description: "Best practices in development & marketing",
    },
  ],
  testimonials: [],
  footer: {
    links: [
      {
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        name: "Terms of Service",
        link: "/terms-of-service",
      },
      {
        name: "Cookies Settings",
        link: "/cookies-settings",
      }
    ],
  },
  about: {
    description:
      ", a dynamic digital marketing agency based in the Netherlands. We are fueled by our passion for strategy, design, and user interaction. Our expertise lies in crafting exceptional websites and optimizing advertising campaigns for our clients through effective strategies. Our philosophy revolves around the principles of logic, simplicity, and concise communication to maximize the potential of your brand. We take great joy in assisting you in enhancing your online presence.",
  },
};
