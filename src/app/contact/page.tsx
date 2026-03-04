import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import ContactForm from '@/src/components/reuseables/ContactForm';
import CopyEmailButton from '@/src/components/reuseables/CopyEmailButton';

export default function About() {
    return (
        <main className="pt-32 relative flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 animate-fadeIn">
            <p className="text-4xl mb-4 flex font-bold text-center">Get in Touch</p>
            <p className="text-lg mb-4 flex text-center max-w-lg">
                Have an inquiry or are interested in learning more? Feel free to contact me through
                one of the methods below:
            </p>

            <div className="flex flex-col md:flex-row items-center gap-20">
                <ContactForm />

                <div className="flex-1 flex-col mb-12 justify-center">
                    <a
                        className="w-full flex flex-row rounded-xl items-center bg-subSecA px-5 py-3 mb-8 border border-subSecA hover:border-accentDark transition duration-300 ease-in-out"
                        href="https://github.com/trevor36348"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="w-10 h-10 text-accentMain mr-2" />
                        <div className="flex flex-col justify-between items-start">
                            <p className="mt-1 text-xl font-bold">Github</p>
                            <p className="mb-1 text-md">trevor36348</p>
                        </div>
                    </a>

                    <a
                        className="w-full flex flex-row rounded-xl items-center bg-subSecA px-5 py-3 mb-8 border border-subSecA hover:border-accentDark transition duration-300 ease-in-out"
                        href="https://www.linkedin.com/in/trevor36348/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="w-10 h-10 text-accentMain mr-2" />
                        <div className="flex flex-col justify-between items-start">
                            <p className="mt-1 text-xl font-bold">LinkedIn</p>
                            <p className="mb-1 text-md">trevor36348</p>
                        </div>
                    </a>

                    <CopyEmailButton />
                </div>
            </div>
        </main>
    );
}
