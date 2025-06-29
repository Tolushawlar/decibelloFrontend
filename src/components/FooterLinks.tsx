import React from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => {
  const scrollTo = useScrollTo();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollTo(href.substring(1));
    }
  };

  return (
    <div>
      <h3 className="footer-heading">{title}</h3>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="footer-link"
              onClick={(e) => handleClick(e, link.href)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
