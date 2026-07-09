"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

type FooterCtaProps = {
  button: {
    text: string;
    link: string;
  };
  children: ReactNode;
  lang: string;
};

export const FooterCta = ({ button, children, lang }: FooterCtaProps) => {
  const pathname = usePathname();
  const isContactPage = pathname === `/${lang}/contact`;

  if (isContactPage) {
    return null;
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
      {children}
      <FooterNavLink
        href={localizedPath(button.link, lang)}
        className="mt-2 inline-flex h-[40px] items-center gap-2 rounded-md border border-white/25 bg-[#0F0F0F]/95 px-6 text-xs font-medium text-white shadow-[0_16px_45px_rgba(0,0,0,.34)] backdrop-blur-2xl transition hover:bg-black sm:mt-4"
      >
        <span className="h-2 w-2 rounded-full bg-current" />
        {button.text}
      </FooterNavLink>
    </div>
  );
};

export const FooterNavLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isHashLink = href.includes("#");
    const url = new URL(href, window.location.origin);
    const targetPath = url.pathname;

    if (isHashLink) {
      return;
    }

    if (targetPath !== pathname) {
      event.preventDefault();
      router.push(href, { scroll: true });
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

const localizedPath = (path: string, lang: string) => {
  if (path.startsWith("#")) {
    return `/${lang}${path}`;
  }

  if (!path.startsWith("/")) {
    return path;
  }

  return `/${lang}${path}`;
};
