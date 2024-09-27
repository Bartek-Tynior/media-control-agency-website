/* eslint-disable import/no-anonymous-default-export */
import Image from "next/image";

export default {
  hero: {
    title: "Build Faster. Connect Better.",
    subtitle: "Design-Driven Digital Agency",
    shortDescription:
      "Ready to boost your business with standout design and a website that truly speaks to your audience? You’re in the right spot.",
    imageLocation: "/img/mesh-gradient-background.png",
    altImage: "Mesh Gradient Background",
  },
  about: {
    description:
      "At Media Control Agency, we’re all about helping you stand out online. From building sleek websites to crafting smart marketing strategies, we're here to help your brand shine.",
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
  process: {
    title: "Our simple 3-step process to skyrocket your business.",
    subtitle:
      "Traditional design is out the door and giving way to design that sets new standards.",
    steps: [
      {
        i: 1,
        title: "Concept & Strategy",
        description:
          "We dive deep into understanding your brand, goals, and target audience. Together, we outline a clear strategy that lays the foundation for an impactful digital presence.",
      },
      {
        i: 2,
        title: "Design & Development",
        description:
          "Our team translates the strategy into stunning, user-centric designs and seamlessly brings them to life. We ensure every pixel and line of code reflects your brand's uniqueness.",
      },
      {
        i: 3,
        title: "Launch & Grow",
        description:
          "After thorough testing, we launch your project with confidence. Our partnership doesn’t end there – we provide ongoing support and enhancements to help your digital presence thrive.",
      },
    ],
  },
  services: [
    {
      i: 1,
      title: "Product Design",
      description:
        "Craft sleek, user-focused designs that bring your ideas to life. We combine creativity with strategic thinking to create products that stand out and captivate your audience.",
      imageLocation: "/img/product-design.gif",
      altImage: "Product Design Image",
      detailPage: "/services/product-design",
      toolstack: [
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
      title: "Web Development",
      description:
        "Build modern, responsive websites that deliver seamless user experiences. From concept to launch, we create high-performing websites tailored to your brand.",
      imageLocation: "/img/web-development.gif",
      altImage: "Web Development Image",
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
      i: 3,
      title: "App Development",
      description:
        "Transform your vision into dynamic, user-friendly mobile apps. We design and develop apps that are intuitive, engaging, and optimized for performance across all devices.",
      imageLocation: "/img/app-development.gif",
      altImage: "App Development Image",
      detailPage: "/services/app-development",
      toolstack: [
        {
          name: "Swift",
          imageLocation: "/img/icons/swift-logo-toolstack.png",
          imageAlt: "Switt Icon",
        },
      ],
    },
    {
      i: 4,
      title: "MVP Building",
      description:
        "Launch quickly with a Minimum Viable Product that captures your core idea. We help you test, validate, and refine your product with agility and speed.",
      imageLocation: "/img/mvp-building.gif",
      altImage: "MVP Building Image",
      detailPage: "/services/mvp-building",
      toolstack: [
        {
          name: "Custom Code",
          imageLocation: "/img/icons/code-logo-toolstack.png",
          imageAlt: "Custom Code Icon",
        },
      ],
    },
    {
      i: 5,
      title: "E-commerce",
      description:
        "Boost your sales with a custom-built e-commerce platform that’s tailored for growth. We create seamless shopping experiences that convert visitors into loyal customers.",
      imageLocation: "/img/e-commerce.gif",
      altImage: "E-commerce Image",
      detailPage: "/services/e-commerce",
      toolstack: [
        {
          name: "Shopify",
          imageLocation: "/img/icons/shopify-logo-toolstack.png",
          imageAlt: "Shopify Icon",
        },
      ],
    },
  ],
  comparison: {
    title: "Why Choose Us Over the Competition?",
    subtitle:
      "We're more than a web/app development agency – we're your creative partner, committed to delivering outstanding results that resonate with your brand.",
    competitors: [
      "Generic, templated designs",
      "Overpriced services with hidden fees",
      "Slow, drawn-out project timelines",
      "Limited understanding of user experience",
      "Inconsistent communication and follow-ups",
      "One-size-fits-all solutions",
    ],
    mca: [
      "Unique, design-driven solutions tailored to your brand",
      "Transparent pricing with no hidden costs",
      "Rapid delivery without compromising quality",
      "Deep expertise in UX/UI with a focus on modern trends",
      "Dedicated project managers & 24/7 support",
      "Fully customized strategies aligned with your goals",
    ],
  },
  pricing: {
    title: "Invest in Your Digital Future",
    subtitle:
      "Simple, flexible pricing with no hidden fees. Cancel or pause anytime.",
    packages: [
      {
        title: "Design Partnership",
        description:
          "Ideal for businesses looking for a consistent design experience to elevate their brand across all digital touchpoints.",
        price: "€4,097/mo",
        additionalInfo: "Pause or cancel anytime",
        features: [
          "Complete design for your website, product, or app",
          "One request at a time",
          "Average 2-3 business day delivery",
          "Fully async collaboration",
          "Optional weekly strategy meetings",
          "Unlimited requests & revisions",
          "Easy credit card payments",
          "Direct access to a dedicated designer",
        ],
        withGradient: true,
        buttonText: "Join Partnership (unavailable)",
        secondaryButtonText: "Schedule a call",
      },
      {
        title: "Single Project",
        description:
          "Best for one-off website, design, or app development projects with comprehensive support.",
        price: "€8,000+",
        additionalInfo: "Starting at",
        features: [
          "Tailored project approach",
          "Dedicated design & development team",
          "Flexible timelines",
          "Full support during the project",
          "Custom branding and design solutions",
        ],
        withGradient: false,
        buttonText: "Request a quote (unavailable)",
        secondaryButtonText: "Schedule a call",
      },
    ],
  },
  FAQ: {
    title: "Still Have Questions?",
    subtitle:
      "We've gathered some of the most common questions our clients ask. Feel free to reach out to us directly if you need more information.",
    faq_tiles: [
      {
        title: "Who is behind Media Control Agency?",
        description:
          "Media Control Agency is led by a passionate designer and developer duo with over 5 years of experience in the industry.",
        index: 1,
      },
      {
        title: "What is included in your plans?",
        description:
          "Our plans are comprehensive and include everything from initial concept design, website/app development, revisions, to final deployment. We ensure a seamless experience with unlimited requests, revisions, and ongoing support to bring your ideas to life.",
        index: 2,
      },
      {
        title: "Why choose us over hiring a full-time designer and developer?",
        description:
          "Hiring us offers flexibility, expertise, and cost-efficiency. You'll gain access to a team of experienced professionals at a fraction of the cost of hiring full-time staff, without the long-term commitment. Plus, our diverse skills mean you get design, development, and strategy in one package.",
        index: 3,
      },
      {
        title: "What if I'm not satisfied with the design or result?",
        description:
          "Your satisfaction is our priority. We offer unlimited revisions to ensure that the final design or product meets your expectations. We’ll work closely with you every step of the way to guarantee that you’re happy with the outcome.",
        index: 4,
      },
      {
        title: "How quickly will I receive my project?",
        description:
          "We pride ourselves on efficient delivery times. Typically, we provide an average turnaround of 2-3 business days per request, with larger projects having tailored timelines. We’ll keep you informed at every stage to ensure timely completion.",
        index: 5,
      },
      {
        title: "What if I only have a single request?",
        description:
          "No problem at all! We offer a 'Single Project' plan specifically designed for clients who have one-off design or development needs. This allows you to benefit from our expertise without committing to a long-term partnership.",
        index: 6,
      },
      {
        title: "Do you offer refunds if I'm not satisfied with the service?",
        description:
          "We are committed to delivering high-quality results, and while refunds are not typically offered, we will work tirelessly to ensure you are satisfied with the final product. Your happiness and success are our top priorities.",
        index: 7,
      },
    ],
  },
  footer_card: {
    title: "Let's bring your brand to new heights.",
    subtitle:
      "Book a free 15-minute discovery call to see if Media Control Agency is the right fit for you (spoiler alert: it totally is).",
    button: {
      text: "Book a call",
      link: "/contact",
    },
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
  essential_elements: {
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
          name: "Process",
          link: "#process",
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
    footer: {
      footer_credit:
        "© 2024 All rights reserved Made with 💜 by Media Control Agency",
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
        <span className="inline-flex items-center gap-3 text-sm">
          <a href="https://www.instagram.com/mediacontrolag/">
            <Image
              src="/img/icons/instagram-icon.png"
              alt="Instagram Icon"
              width={20}
              height={20}
            />
          </a>
          Instagram
        </span>
      ),
      linkedin: (
        <span className="inline-flex items-center gap-3 text-sm">
          <a href="https://www.linkedin.com/company/media-control-agency">
            <Image
              src="/img/icons/linkedin-icon.png"
              alt="LinkedIn Icon"
              width={20}
              height={20}
            />
          </a>
          LinkedIn
        </span>
      ),
      facebook: (
        <span className="inline-flex items-center gap-3 text-sm">
          <a href="https://www.facebook.com/people/Media-Control-Agency/61551901261084/">
            <Image
              src="/img/icons/facebook-icon.png"
              alt="Facebook Icon"
              width={20}
              height={20}
            />
          </a>
          Facebook
        </span>
      ),
    },
  },
  other_pages: {
    not_found: {
      title: "404: Page Not Found",
      description:
        "We couldn't find the requested resource. Please make sure that the path of the resource you are looking for is correct or return to the homepage.",
      return_home: "Return to Homepage",
      imageLocation: "/img/icons/404-error.svg",
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
  },
};
