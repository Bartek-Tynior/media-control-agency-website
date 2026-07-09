import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FooterCta, FooterNavLink } from "./FooterRouteControls";

type FooterProps = {
  lang: string;
  dict: any;
};

const Footer = ({ lang, dict }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const footer = dict.essential_elements.footer;
  const contact = dict.essential_elements.contact;
  const navbar = dict.essential_elements.navbar;
  const cta = dict.footer_card;
  const footerCredit = footer.footer_credit.replace(
    "{year}",
    String(currentYear)
  );

  return (
    <footer
      className="relative overflow-hidden bg-[#F3EEE7] pt-20 text-[#111111] sm:pt-24 lg:pt-28"
      id="contact"
    >
      <MaxWidthWrapper>
        <div className="relative pb-10 sm:pb-12">
          <FooterCta button={cta.button} lang={lang}>
            <h2 className="sr-only">{cta.title}</h2>
            <p className="sr-only">{cta.subtitle}</p>
            <FooterVideoText title={cta.title} subtitle={cta.subtitle} />
          </FooterCta>

          <div className="mt-10 grid gap-10 border-t border-[#111111]/15 pt-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-[1fr_1fr_1fr_1.15fr]">
            <FooterLinkGroup title="Navigation">
              {navbar.links.map(({ index, name, link }) => (
                <FooterNavLink
                  key={index}
                  href={localizedPath(link, lang)}
                  className="text-sm font-bold text-[#111111]/65 transition hover:text-[#111111]"
                >
                  {name}
                </FooterNavLink>
              ))}
            </FooterLinkGroup>

            <FooterLinkGroup title="Socials">
              {["instagram", "linkedin", "facebook"].map((platform) => {
                const social = contact[platform];
                return (
                  <a
                    key={platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#111111]/65 transition hover:text-[#111111]"
                  >
                    {social.name}
                  </a>
                );
              })}
            </FooterLinkGroup>

            <FooterLinkGroup title="Resources">
              {footer.links.map(({ index, name, link }) => (
                <FooterNavLink
                  key={index}
                  href={localizedPath(link, lang)}
                  className="text-sm font-bold text-[#111111]/65 transition hover:text-[#111111]"
                >
                  {name}
                </FooterNavLink>
              ))}
            </FooterLinkGroup>
          </div>

          <div className="mt-10 grid gap-8 border-t border-[#111111]/15 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <FooterNavLink href={`/${lang}`} className="mb-6 block w-fit">
                <Image
                  src={navbar.logo.imageLocation}
                  width={100}
                  height={60}
                  quality={100}
                  className="h-auto w-[64px] pointer-events-none invert"
                  alt={navbar.logo.altImage}
                />
              </FooterNavLink>
              <div className="flex flex-col gap-1 text-sm font-bold text-[#111111]/65">
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                  {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <span>KVK: {contact.kvk}</span>
                <span>TAX. NO.: {contact.tax}</span>
              </div>
            </div>

            <div className="text-left lg:text-right">
              <p className="mt-3 max-w-md text-sm font-bold text-[#111111]/55">
                {footerCredit}
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

const FooterLinkGroup = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-[#111111]/45">
      {title}
    </h3>
    {children}
  </div>
);

const FooterVideoText = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <svg
    className="h-[clamp(10rem,24vw,20rem)] w-full overflow-visible"
    viewBox="0 0 1800 360"
    role="presentation"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <clipPath id="footer-fluid-text-clip">
        <text
          x="900"
          y="158"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-satoshi), Arial, sans-serif"
          fontSize="168"
          fontWeight="700"
          letterSpacing="0"
        >
          {title.toUpperCase()}
        </text>
        <text
          x="900"
          y="260"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-satoshi), Arial, sans-serif"
          fontSize="38"
          fontWeight="700"
          letterSpacing="0"
        >
          {subtitle}
        </text>
      </clipPath>
    </defs>

    <text
      x="900"
      y="158"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="var(--font-satoshi), Arial, sans-serif"
      fontSize="168"
      fontWeight="700"
      letterSpacing="0"
      fill="#111111"
      opacity="0.08"
    >
      {title.toUpperCase()}
    </text>
    <text
      x="900"
      y="260"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="var(--font-satoshi), Arial, sans-serif"
      fontSize="38"
      fontWeight="700"
      letterSpacing="0"
      fill="#111111"
      opacity="0.08"
    >
      {subtitle}
    </text>
    <foreignObject
      x="0"
      y="0"
      width="1800"
      height="360"
      clipPath="url(#footer-fluid-text-clip)"
    >
      <video
        xmlns="http://www.w3.org/1999/xhtml"
        src="/img/fluid-gradient-loop-1920x1080.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </foreignObject>
  </svg>
);

const localizedPath = (path: string, lang: string) => {
  if (path.startsWith("#")) {
    return `/${lang}${path}`;
  }

  if (!path.startsWith("/")) {
    return path;
  }

  return `/${lang}${path}`;
};

export default Footer;
