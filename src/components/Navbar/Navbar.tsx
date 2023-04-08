import React, { useState, useEffect, useRef } from 'react';
import LayoutContainer from '../LayoutContainer';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavbarLink from './NavbarLink';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleDocumentClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleMenuItemClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);
    return (
        <LayoutContainer>
            {/* small and medium screens navigation, under 1024px */}
            <div ref={ref} className="w-full flex justify-end mt-4 lg:hidden">
                <div>
                    <Button onClick={handleClick} className="p-0 m-2 text-dark-green ">
                        <FontAwesomeIcon icon={faBars} size="2xl" />
                    </Button>
                </div>
                {isOpen && (
                    <nav className="flex h-fit border-2 border-dark-green bg-white text-3xl min-w-[250px] top-16 z-10 fixed rounded">
                        <ul className="flex flex-col">
                            <NavbarLink onClick={handleMenuItemClick} href="/" linkText="Home" />
                            <NavbarLink onClick={handleMenuItemClick} href="/cat-gallery" linkText="Cat Gallery" />
                            <NavbarLink onClick={handleMenuItemClick} href="/add-a-cat" linkText="Add a Cat" />
                            <NavbarLink onClick={handleMenuItemClick} href="/catrandoo" linkText="CatRandoo(M)" />
                            <NavbarLink onClick={handleMenuItemClick} href="/catschool" linkText="Cat School" />
                        </ul>
                    </nav>
                )}
            </div>

            {/* large screens navigation, 1024px and above*/}
            <nav className="hidden lg:flex h-20 border-2 mt-4 border-dark-green bg-transparent-green justify-between text-3xl w-full items-center ">
                <div></div>
                <div>
                    <ul className="flex flex-row ">
                        <NavbarLink href="/" linkText="Home" />
                        <NavbarLink href="/cat-gallery" linkText="Cat Gallery" />
                        <NavbarLink href="/add-a-cat" linkText="Add a Cat" />
                        <NavbarLink href="/catrandoo" linkText="CatRandoo(M)" />
                        <NavbarLink href="/catschool" linkText="Cat School" />
                    </ul>
                </div>
            </nav>
        </LayoutContainer>
    );
}
