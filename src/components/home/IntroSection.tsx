import Image from 'next/image';
import siteText from '@/src/json-data/siteText.json';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import GridBackground from '../reuseables/GridBackground';
import Link from 'next/link';

export default function IntroSection() {
    return (
        <section className="flex flex-col items-center justify-center pt-32 pb-32 w-screen min-h-dvh">
            <div className="flex flex-col mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-25">
                <div className="flex justify-center">
                    <Image
                        className="h-24 w-24 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full border-4 border-textMain hover:border-accentMain transition duration-300 ease-in-out"
                        src="/static/profile-icon.webp"
                        alt="Profile Picture"
                        width={512}
                        height={512}
                    />
                </div>

                <div className="flex justify-center text-center mt-4 text-xl sm:text-2xl lg:text-4xl">
                    <p>
                        Hi, I'm <span className="font-bold">Trevor Ramtahal</span>
                    </p>
                </div>

                <div className="flex justify-center mt-1 text-sm sm:text-md lg:text-xl text-center">
                    <p>Fullstack Developer</p>
                </div>

                <div className="flex justify-center text-center text-sm font-medium sm:text-md lg:text-xl mt-4 md:mt-8">
                    <p>
                        Software Developer passionate about creating scalable and modern applications
                    </p>
                </div>

                <div className="flex justify-center mt-4 md:mt-8">
                    <a
                        href="/static/test.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium px-6 py-2 md:px-8 md:py-3 rounded-md bg-accentMain hover:bg-accentDark transition duration-300 ease-in-out"
                    >
                        View CV &gt;
                    </a>
                </div>

                <div className="flex justify-center gap-10 mt-4 md:mt-6">
                    <a
                        href="https://github.com/trevor36348"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="w-6 h-6 md:w-10 md:h-10 text-accentMain hover:text-accentDark transition duration-300 ease-in-out" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/trevor36348/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="w-6 h-6 md:w-10 md:h-10 text-accentMain hover:text-accentDark transition duration-300 ease-in-out" />
                    </a>
                    <Link href="/contact" target="" rel="noopener noreferrer">
                        <MdOutlineEmail className="w-6 h-6 md:w-10 md:h-10 text-accentMain hover:text-accentDark transition duration-300 ease-in-out" />
                    </Link>
                </div>
            </div>
            <GridBackground />
        </section>
    );
}
