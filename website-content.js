import Image from "next/image";

export default {
  hero: {
    title: "Elevate your brand's online presence with us!",
    subtitle: "Result Focused Digital Agency",
    description: {
      paragaraph:
        "WE HELP BUSINESSES IMPROVE THEIR CONVERSION RATE AND GENERATE LEADS BY",
      typed: [
        "BUILDING OUTSTANDING WEBSITES.",
        1000,
        "CREATING SUCCESSFUL MARKETING CAMPAIGNS.",
        1000,
        "IMPLEMENTING AI SOLUTIONS.",
        1000,
      ],
    },
    imageLocation: "/img/mesh-gradient-background.png",
    altImage: "Mesh Gradient Background",
  },
  services: [
    {
      i: 1,
      title: "Product Design & Development",
      description:
        "We are passionate about crafting websites that not only look stunning but also perform seamlessly. With our expert team of developers, we turn your digital vision into a reality, ensuring your online presence is a powerful asset for your business.",
      imageLocation: "/img/website-building-of-shopping-sale.gif",
      altImage: "Website Building Image",
      detailPage: "/services/web-development",
      toolstack: [
        {
          name: "Webflow",
          imageLocation: "/img/icons/webflow-logo-toolstack.png",
          imageAlt: "Webflow Icon",
        },
        {
          name: "Framer",
          imageLocation: "/img/icons/framer-logo-toolsatck.png",
          imageAlt: "Framer Icon",
        },
        {
          name: "Custom Code",
          imageLocation: "/img/icons/code-logo-toolstack.png",
          imageAlt: "Custom Code Icon",
        },
      ],
    },
    {
      i: 2,
      title: "Pay-Per-Click Advertising",
      description:
        "We understand that one size does not fit all when it comes to paid advertising. That's why we take a personalized approach to ensure your brand's success. Our expert team customizes every campaign to your unique goals and needs, ensuring that you get the results you deserve.",
      imageLocation: "/img/pay-per-click-digital-marketing.gif",
      altImage: "Paid Advertisment Image",
      detailPage: "/services/paid-advertising",
      toolstack: [
        {
          name: "Google Ads",
          imageLocation: "/img/icons/google-ads-logo-toolstack.png",
          imageAlt: "Google Ads Icon",
        },
        {
          name: "Instagram",
          imageLocation: "/img/icons/instagram-logo-toolstack.png",
          imageAlt: "Instagram Icon",
        },
        {
          name: "Facebook",
          imageLocation: "/img/icons/facebook-logo-toolstack.png",
          imageAlt: "Facebook Icon",
        },
        {
          name: "TikTok",
          imageLocation: "/img/icons/tiktok-logo-toolstack.png",
          imageAlt: "TikTok Icon",
        },
      ],
    },
    {
      i: 3,
      title: "AI Solutions",
      description:
        "At our core, we're driven by a passion for seamlessly integrating AI solutions into your business, propelling you toward your goals. Our team of seasoned experts specializes in implementing AI solutions that enhance your business's efficiency and productivity. We're here to guide you through every phase of your journey, from harnessing the potential of chatbots to delving into the realm of machine learning",
      imageLocation: "",
      altImage: "AI Solutions Image",
      detailPage: "/services/web-ai",
      toolstack: [
        {
          name: "ChatGPT",
          imageLocation: "/img/icons/chatgpt-logo-toolstack.webp",
          imageAlt: "ChatGPT Icon",
        },
        {
          name: "Custom Code",
          imageLocation: "/img/icons/code-logo-toolstack.png",
          imageAlt: "Custom Code Icon",
        },
      ],
    },
  ],
  navbar: {
    logo: {
      imageLocation: "/img/logo.png",
      altImage: "Media Control Agency Logo",
    },
    links: [
      {
        name: "Home",
        link: "#home",
      },
      {
        name: "Services",
        link: "#services",
      },
      {
        name: "Contact",
        link: "#contact",
      },
    ],
  },
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
    footer_credit: "© 2023 Media Control Agency. All right reserved.",
    links: [
      {
        name: "Privacy Policy",
        link: "/privacy-policy",
        index: 1,
      },
      {
        name: "Terms of Service",
        link: "/terms-of-service",
        index: 2,
      },
      {
        name: "Cookies Settings",
        link: "/cookies-settings",
        index: 3,
      },
    ],
  },
  about: {
    header: <span className="font-bold">We are Media Control Agency</span>,
    description:
      ", a dynamic digital marketing agency based in the Netherlands. We are fueled by our passion for strategy, design, and user interaction. Our expertise lies in crafting exceptional websites and optimizing advertising campaigns for our clients through effective strategies. Our philosophy revolves around the principles of logic, simplicity, and concise communication to maximize the potential of your brand. We take great joy in assisting you in enhancing your online presence.",
  },
  contact: {
    subtitle: "Ready to collaborate?",
    phone: (
      <a href="tel:+31629628588" className="">
        +31 629 628 588
      </a>
    ),
    email: (
      <a href="mailto:info@media-control-agency.com?subject=Collaboration">
        info@media-control-agency.com
      </a>
    ),
    kvk: "91179947",
    tax: "NL004874490B47",
    instagram: (
      <a href="https://www.instagram.com/mediacontrolag/">
        <Image
          src="/img/icons/instagram-icon.png"
          alt="Instagram Icon"
          width={30}
          height={30}
        />
      </a>
    ),
    linkedin: (
      <a
        href="https://www.linkedin.com/company/media-control-agency"
      >
        <Image
          src="/img/icons/linkedin-icon.png"
          alt="LinkedIn Icon"
          width={30}
          height={30}
        />
      </a>
    ),
  },
  contact_page: {
    subtitle_1:
      "Our team is growing. We’d love for you to join us. Reach us by filling up this form...",
    subtitle_2:
      "...or book a meeting with the founder and discuss yoor project and possible approaches!",
    meeting_description:
      "By the end of this meeting, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results online with outstanding websites & paid advertising.",
    meeting_link: "https://calendly.com/media-control-agency/consultation",
  },
  FAQ: [
    {
      title: "What services do you offer?",
      description: (
        <div>
          Currently our agency offers the following services:
          <ul>
            <li>- Product Design</li>
            <li>
              - Web/Software Development (using Webflow, Framer or Custom Code)
            </li>
            <li>- Pay Per Click Advertising</li>
            <li>- Implementation of AI Solutions</li>
          </ul>
        </div>
      ),
      index: 1,
    },
    {
      title: "How do you build websites?",
      description: (
        <div>
          Our process is simple yet effective. It divides into these steps:
          <ul>
            <li>- Discovery (getting to know the client and his needs)</li>
            <li>
              - Designing (translating our joint vision into wireframes in
              Figma)
            </li>
            <li>
              - Development (implementing the designs in Figma in Webflow or
              other tools)
            </li>
            <li>- QA (review & testing) </li>
            <li>- Improvements (implementing fixes)</li>
          </ul>
        </div>
      ),
      index: 2,
    },
    {
      title: "How do you create effective campaigns?",
      description: (
        <div>
          Our process is effective and focused on individual needs of each
          client. It divides into these steps:
          <ul>
            <li>- Discovery (getting to know the client and his needs)</li>
            <li>- Research (getting to know the markt and requirments)</li>
            <li>
              - Strategy (setting up an individual strategy based on the
              research)
            </li>
            <li>
              - Implementation (implementing the strategy and analysing the
              results)
            </li>
            <li>
              - Review (reviewing the results and making improvements with the
              client)
            </li>
          </ul>
        </div>
      ),
      index: 3,
    },
    {
      title: "Do you provide ongoing support?",
      description:
        "Certainly! We prioritize lasting partnerships and take immense joy in witnessing our clients' continuous growth. When you're with us, you'll always have our unwavering support.",
      index: 4,
    },
    {
      title: "What are the costs?",
      description:
        "We charge a fixed price for each project. The price depends on the complexity of the project. We also offer a monthly subscription for ongoing campaings, support and maintenance.",
      index: 5,
    },
  ],
  not_found: {
    title: "404: Page Not Found",
    description:
      "We couldn't find the requested resource. Please make sure that the path of the resource you are looking for is correct or return to the homepage.",
    return_home: "Return to Homepage",
    imageLocation: "/img/icons/404-error.svg",
  },
};
