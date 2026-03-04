import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className="bg-layout z-25">
            <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex flex-col sm:flex-row p-8 items-center sm:items-start">
                <div className="flex flex-col justify-between items-left">
                    <p className="mt-1 text-md font-bold text-center sm:text-start">
                        Trevor Ramtahal
                    </p>
                    <p className="mb-1 text-xs">&copy; 2026 Trevor Ramtahal. Rights Reserved?</p>
                    <hr className="mt-4 border-subSecB border-1 sm:hidden" />
                </div>

                <div className="flex flex-col sm:flex-row ml-0 sm:ml-auto sm:mr-15">
                    <div className="flex flex-col ml-0 mt-8 sm:ml-8 sm:mt-0 items-center sm:items-start">
                        <p className="mt-1 text-sm font-bold">Links</p>
                        <Link className="mb-1 text-xs" href="/" target="" rel="noopener noreferrer">
                            Home
                        </Link>
                        <Link
                            className="mb-1 text-xs"
                            href="/projects"
                            target=""
                            rel="noopener noreferrer"
                        >
                            Projects
                        </Link>
                        <Link
                            className="mb-1 text-xs"
                            href="/about"
                            target=""
                            rel="noopener noreferrer"
                        >
                            About
                        </Link>
                        <Link
                            className="mb-1 text-xs"
                            href="/contact"
                            target=""
                            rel="noopener noreferrer"
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="flex flex-col ml-0 mt-8 sm:ml-8 sm:mt-0 items-center sm:items-start">
                        <p className="mt-1 text-sm font-bold">Contact</p>
                        <a
                            className="flex flex-row items-left gap-2"
                            href="https://github.com/trevor36348"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="w-6 h-6" />
                            <span className="text-sm my-auto">Github</span>
                        </a>
                        <a
                            className="flex flex-row items-left gap-2"
                            href="https://www.linkedin.com/in/trevor36348/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="w-6 h-6" />
                            <span className="text-sm my-auto">LinkedIn</span>
                        </a>
                        <Link
                            className="flex flex-row items-left gap-2"
                            href="/contact"
                            rel="noopener noreferrer"
                        >
                            <MdOutlineEmail className="w-6 h-6" />
                            <span className="text-sm my-auto">Message</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
