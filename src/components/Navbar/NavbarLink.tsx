import React from 'react';
import { Button } from '../Button';
import { NavLink } from 'react-router-dom';

interface Props {
    linkText: string;
    href: string;
    onClick?: () => void;
}

export default function NavbarLink({ linkText, href, onClick }: Props) {
    // TODO figure out how to add styling for isActive without overwriting the component styling
    // const resolvedPath = useResolvedPath(href);
    // const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className="w-fit p-4">
            <Button onClick={onClick} variant="link" as={NavLink} to={href}>
                {linkText}
            </Button>
        </li>
    );
}
