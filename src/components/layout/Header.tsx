'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-layout bg-layout/80 fixed top-0 right-0 left-0 z-50 backdrop-blur-md">
            <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-7xl h-24 flex flex-row items-center gap-8">
                <div className="h-16 w-16">
                    <Link href="/">
                        <Image
                            className="rounded-md border-2 border-accentDark hover:scale-105 transition duration-300"
                            src="/static/profile-icon.webp"
                            alt="Profile Picture"
                            width={512}
                            height={512}
                        />
                    </Link>
                </div>
                <nav className="flex gap-2 font-medium">
                    <Link
                        href="/projects"
                        className="hidden sm:flex py-2 px-4 rounded-full hover:bg-accentDark transition duration-300 ease-in-out"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/about"
                        className="hidden sm:flex py-2 px-4 rounded-full hover:bg-accentDark transition duration-300 ease-in-out"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="hidden sm:flex py-2 px-4 rounded-full hover:bg-accentDark transition duration-300 ease-in-out"
                    >
                        Contact
                    </Link>
                </nav>

                <button
                    className={`sm:hidden flex items-center ml-auto p-2 rounded-lg  ${isOpen ? 'bg-accentDark' : 'bg-transparent'} hover:bg-accentDark transition duration-300 ease-in-out`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <GiHamburgerMenu className="w-8 h-8" />
                </button>
            </div>
            {isOpen && (
                <nav className="sm:hidden mt-2 space-y-2 bg-subSecA flex flex-col items-center">
                    <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className="block w-full py-3 hover:bg-accentDark font-medium text-center"
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        onClick={() => setIsOpen(false)}
                        className="block w-full py-3 hover:bg-accentDark font-medium text-center"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block w-full py-3 hover:bg-accentDark font-medium text-center"
                    >
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
