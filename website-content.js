import Image from "next/image";

export default {
  hero: {
    title: "Discover. Craft. Grow.",
    subtitle: "Result Focused Digital Agency",
    description: {
      paragaraph:
        "We Help Businesses Improve Their Conversion Rate and Generate Leads By",
      typed: [
        "Building Outstanding Websites.",
        1000,
        "Creating Successful Marketing Campaigns.",
        1000,
        "Implementing AI Solutions.",
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
        "Turn your concepts into cutting-edge designs, brought to life by our team of experts. We excel in crafting contemporary and distinctive websites, web applications, and software. Utilizing the latest technologies and tools, we ensure your product not only mirrors your brand but also embodies your values.",
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
        {
          name: "Adobe XD",
          imageLocation: "/img/icons/adobe-xd-logo-toolstack.png",
          imageAlt: "Adobe XD Icon",
        },
        {
          name: "Blender",
          imageLocation: "/img/icons/blender-logo-toolstack.png",
          imageAlt: "Blender Icon",
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
        "As a creative and innovative agency, we're aware of the power and potential of AI. We're committed to helping you leverage this technology to its fullest potential. Our team of experts will work with you to create a custom AI solution that will help you achieve your goals and take your business to the next level.",
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
        name: "Vision",
        link: "#vision",
      },
      {
        name: "Case Studies",
        link: "#case-studies",
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
    ],
  },
  about: {
    description:
      "Media Control Agency is a digital agency that makes a difference by developing outstanding websites, creating successful marketing campaigns, and implementing AI solutions.",
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
      <a href="https://www.linkedin.com/company/media-control-agency">
        <Image
          src="/img/icons/linkedin-icon.png"
          alt="LinkedIn Icon"
          width={30}
          height={30}
        />
      </a>
    ),
    facebook: (
      <a href="https://www.facebook.com/people/Media-Control-Agency/61551901261084/">
        <Image
          src="/img/icons/facebook-icon.png"
          alt="Facebook Icon"
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
  FAQ: {
    title: "Still have questions?",
    subtitle:
      "These are some frequently asked questions from our clients. Feel free to reach out to us directly.",
    faq_sections: [
      {
        title: "What services do you offer?",
        description: (
          <div>
            Currently our agency offers the following services:
            <ul>
              <li>- Product Design</li>
              <li>
                - Web/Software Development (using Webflow, Framer or Custom
                Code)
              </li>
              <li>- Paid Advertising</li>
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
              <li>- Designing (translating our joint vision into designs)</li>
              <li>
                - Development (crafting the website using tools fitting the
                client's needs and vision based on the designs)
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
          "Definitely! We prioritize lasting partnerships and take immense joy in witnessing our clients' continuous growth. When you're with us, you'll always have our unwavering support.",
        index: 4,
      },
      {
        title: "What are the costs?",
        description:
          "We believe in tailoring our approach to the uniqueness of each project, with pricing determined by its complexity and time requirements. For AI solutions and paid advertising services, a monthly maintenance fee is applied to ensure ongoing support and optimization.",
        index: 5,
      },
    ],
  },
  not_found: {
    title: "404: Page Not Found",
    description:
      "We couldn't find the requested resource. Please make sure that the path of the resource you are looking for is correct or return to the homepage.",
    return_home: "Return to Homepage",
    imageLocation: "/img/icons/404-error.svg",
  },
  case_studies: [
    {
      id: 1,
      client: "Plus 44",
      service: "Web Development & Advertising",
      website: "https://www.plus44-clo.com/",
      project: {
        scopeOfWork: ["Product Design", "Web Development", "Paid Advertising"],
        description:
          "We've designed and developed a custom e-commerce website for Plus 44, a streetwear fashion brand based in the Netherlands. We've also created and implemented a paid advertising strategy to increase the brand's awareness and sales.",
        industry: "Clothing",
        techStack: [
          {
            name: "Shopify",
            imageLocation: "/img/icons/shopify-logo-toolstack.png",
            imageAlt: "Shopify Icon",
          },
          {
            name: "Adobe XD",
            imageLocation: "/img/icons/adobe-xd-logo-toolstack.png",
            imageAlt: "Adobe XD Icon",
          },
          {
            name: "Custom Code",
            imageLocation: "/img/icons/code-logo-toolstack.png",
            imageAlt: "Custom Code Icon",
          },
          {
            name: "Blender",
            imageLocation: "/img/icons/blender-logo-toolstack.png",
            imageAlt: "Blender Icon",
          },
        ],
        challenges: {
          title:
            "Plus 44 needed a website that would represent their brand, values and overall image. They also needed a digital marketing to increase their brand awareness and accessibility.",
          description: [
            "Creative solutions using 3D modeling",
            "Implementing smart solutions like IDeal payment",
            "Clear identity representation",
          ],
        },
        solution:
          "Media Control Agency provided a tailored solution using Shopify, custom code and 3D modeling, succesfully implementing the client's vision and desired features.",
        result:
          "A unique and modern website that represents the brand's identity and values, and a successful paid advertising campaign that increased the brand's awareness and accessibility.",
      },
      coverImageLocation: {
        type: "video",
        src: "/img/PLUS_44_WEBSITE_CASESTUDY.mp4",
      },
      coverImageAlt: "Client's Project Image",
    },
    {
      id: 2,
      client: "Media Control Agency",
      service: "Web Development",
      website: "https://media-control-agency.com/",
      project: {
        scopeOfWork: ["Product Design", "Web Development"],
        description:
          "Design and development of our own website using custom code. We've used modern technologies and pure code to create a unique and modern website that represents our brand and values.",
        industry: "Digital Marketing",
        techStack: [
          {
            name: "Adobe XD",
            imageLocation: "/img/icons/adobe-xd-logo-toolstack.png",
            imageAlt: "Adobe XD Icon",
          },
          {
            name: "Custom Code",
            imageLocation: "/img/icons/code-logo-toolstack.png",
            imageAlt: "Custom Code Icon",
          },
        ],
        challenges: {
          title:
            "Creating a website that represents the Media Control Agency's brand, values and services.",
          description: [
            "Professional and modern design with clear identity representation",
            "Easy access to critical information",
            "Waking up the user's interest in the services",
            "Providing a trustworthy and reliable image of the company",
          ],
        },
        solution:
          "Unleashing the power of custom code, we were able to create a website that is not only visually appealing but also highly functional. The website is fully responsive and optimized for all devices. It is also integrated with Google Analytics and Google Tag Manager.",
        result:
          "Achieved a top-notch website, with a clear identity representation and easy information accessibility.",
      },
      coverImageLocation: {
        type: "video",
        src: "/img/MCA_WEBSITE_CASESTUDY.mp4",
      },
      coverImageAlt: "Client's Project Image",
    },
  ],
};
