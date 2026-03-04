import Image from 'next/image';
import siteText from '@/src/json-data/siteText.json';

export default function About() {
    return (
        <main className="pt-32 pb-0 sm:pb-32 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 animate-fadeIn">
            <p className="text-4xl mb-4 flex font-bold text-center">About Me</p>
            <p className="text-lg flex justify-center text-center">
                More about my skills and background
            </p>

            <div className="flex flex-col md:flex-row h-auto items-center py-8">
                <div className="flex flex-col">
                    <Image
                        className="h-64 w-64 mb-8 rounded-full border-4 border-textMain hover:border-accentMain transition duration-300 ease-in-out"
                        src="/static/profile-icon.webp"
                        alt="Profile Picture"
                        width={512}
                        height={512}
                    />
                    <div
                        className={`px-3 py-3 w-64 text-sm mb-12 md:mb-0 font-medium rounded-lg text-center
                        ${
                            siteText.aboutStatus
                                ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        }`}
                    >
                        {siteText.aboutStatus ? 'Looking for Work' : 'Currently Working'}
                    </div>
                </div>

                <div className="max-w-2xl ml-0 md:ml-12 mb-12 md:my-auto p-8 text-center">
                    {siteText.aboutParagraphs.map((aboutParagraph: string, index: number) => (
                        <p key={index} className="mb-4 text-md">
                            {aboutParagraph}
                        </p>
                    ))}
                </div>
            </div>
        </main>
    );
}
