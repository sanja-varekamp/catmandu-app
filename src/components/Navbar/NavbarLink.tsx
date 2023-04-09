import React from 'react';
import { Button } from '../Button';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

interface Props {
  linkText: string;
  href: string;
  onClick?: () => void;
}

export default function NavbarLink({ linkText, href, onClick }: Props) {
  const resolvedPath = useResolvedPath(href);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className="w-fit p-4">
      <Button
        className={`${isActive ? 'text-pink' : 'text-dark-green'}
        font-bold
        bg-transparent text-dark-green border-transparent  hover:text-pink m-0 px-1 hover:bg-transparent`}
        onClick={onClick}
        as={NavLink}
        to={href}
      >
        {linkText}
      </Button>
    </li>
  );
}
