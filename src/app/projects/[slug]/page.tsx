import { getSingleProjectData } from '@/src/lib/getSingleProjectData';
import Image from 'next/image';
import { iconMap, IconName } from '@/src/components/icons/iconIndex';
import { FaGithub } from 'react-icons/fa';
import { TbArrowBackUp } from 'react-icons/tb';
import { ImNewTab } from 'react-icons/im';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function Projects({ params }: PageProps) {
    const { slug } = await params;

    const data = await getSingleProjectData(slug);

    if (!data) {
        notFound();
    }

    return (
        <main className="pt-32 mb-12 flex flex-col px-8 justify-between mx-auto max-w-4xl animate-fadeIn">
            <div className="flex justify-left mb-8">
                <a
                    href="/projects"
                    className="font-medium text-sm px-6 py-2 md:px-8 md:py-3 mt-4 rounded-md bg-accentMain hover:bg-accentDark transition duration-300 ease-in-out"
                >
                    <div className="flex flex-row gap-2 items-center">
                        <TbArrowBackUp />
                        <p>Back to Projects</p>
                    </div>
                </a>
            </div>

            <div
                key={data.project.slug}
                className=" rounded-lg mt-3 mb-4 transition ease-in-out flex flex-col relative"
            >
                <Image
                    className="border border-subSecA border-4 rounded-lg"
                    src={data.project.image}
                    alt="Project Image / Placeholder Image"
                    width={1920}
                    height={1080}
                />

                <div className="py-8 flex flex-col">
                    <p className="mt-2 text-3xl sm:text-5xl font-medium">{data.project.title}</p>

                    <p className="mt-2 mb-8 text-xl text-textSub">{data.project.introduction}</p>

                    <div className="">
                        <p className="text-sm text-textSub">Technologies</p>
                        <div className="flex flex-wrap w-full overflow-hidden">
                            {(data.project.technologies as string[])
                                .filter((name): name is IconName => name in iconMap)
                                .map((iconName) => {
                                    const IconComponent = iconMap[iconName];
                                    return (
                                        <div
                                            key={iconName}
                                            className="mt-2 flex flex-row items-center mr-2 rounded-lg px-2 py-2 items-center bg-subSecA"
                                        >
                                            <IconComponent className="w-8 h-8 gap-2" />
                                            <p className="text-md ml-2">{iconName}</p>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center border border-accentDark rounded-lg p-4 items-center bg-subSecA">
                        <div
                            className={`px-3 py-3 text-sm font-medium rounded-lg 
                            ${
                                data.project.isCompleted
                                    ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                            }`}
                        >
                            {data.project.isCompleted ? 'Completed' : 'In Development'}
                        </div>
                        <div className="flex flex-row">
                            <a
                                href={data.project.projectURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 font-medium bg-accentMain hover:bg-accentDark transition duration-300 ease-in-out rounded-lg"
                            >
                                <div className="flex flex-row items-center">
                                    <FaGithub className="w-6 h-6" />
                                    <p className="hidden sm:inline ml-2">Source Code</p>
                                </div>
                            </a>
                            {data.project.siteURL && (
                                <a
                                    href={data.project.siteURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 font-medium bg-accentMain hover:bg-accentDark transition duration-300 ease-in-out rounded-lg ml-2"
                                >
                                    <div className="flex flex-row items-center">
                                        <ImNewTab className="w-6 h-6" />
                                        <p className="hidden sm:inline ml-2">Live Demo</p>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="mt-16">
                        <p className="mb-4 text-4xl font-medium">Overview</p>
                        <p className="mb-2 text-md">{data.project.overview}</p>
                    </div>

                    <div>
                        <p className="mt-8 mb-4 text-4xl font-medium">Key Features</p>

                        {data.project.keyFeatures.map(
                            (
                                section: { sectionTitle: string; sectionText: any[] },
                                index: number
                            ) => (
                                <div key={index} className="mb-8">
                                    <p className="mb-2 text-2xl">{section.sectionTitle}</p>
                                    <ul className="list-disc pl-6 text-textSub">
                                        {section.sectionText.map(
                                            (sectionText: string, index: number) => (
                                                <li key={index} className="mb-2 text-md">
                                                    {sectionText}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
