import Image from 'next/image';
import { iconMap, IconName } from '@/src/components/icons/iconIndex';
import { FaGithub } from 'react-icons/fa';
import { ProjectCardData } from '@/src/types/ProjectType';
import Link from 'next/link';

type ProjectCardDataProps = {
    carddata: ProjectCardData[];
    animationTrigger: number;
};

export default function ProjectCard({ carddata, animationTrigger }: ProjectCardDataProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center ">
            {carddata.map((singlecarddata) => (
                <div
                    key={`${singlecarddata._id}-${animationTrigger}`}
                    className="border rounded-lg mt-3 mb-4 bg-subSecA border-subSecB transition ease-in-out flex flex-col relative shadow-md hover:shadow-[0_0_10px_3px_rgba(209,0,38,0.4)] transition-shadow duration-300 animate-fadeIn"
                >
                    <div>
                        <Image
                            className="border border-subSecB border-4 rounded-lg"
                            src={singlecarddata.image}
                            alt=""
                            width={1920}
                            height={1080}
                        />
                    </div>

                    <div className="px-3 pt-6 pb-4 flex flex-col flex-1">
                        <p className="text-2xl font-bold">{singlecarddata.title}</p>

                        <p className="mt-2 mb-6 flex flex-grow text-textSub">
                            {singlecarddata.introduction}
                        </p>

                        <p className="mb-2 text-sm text-textSub">Technologies</p>
                        <div className="flex flex-wrap w-full overflow-hidden text-textSub">
                            {(singlecarddata.technologies as string[])
                                .filter((name): name is IconName => name in iconMap)
                                .map((iconName) => {
                                    const IconComponent = iconMap[iconName];
                                    return (
                                        <div key={iconName} className="rounded-lg p-1">
                                            <IconComponent className="w-8 h-8 gap-2" />
                                        </div>
                                    );
                                })}
                        </div>

                        <hr className="mt-4 border-subSecB border-1" />

                        <div className="mt-4 flex items-center">
                            <a
                                className="items-center text-accentMain hover:text-accentDark transition duration-300 ease-in-out"
                                href={singlecarddata.projectURL}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="ml-1 w-8 h-8" />
                            </a>

                            <Link
                                href={`/projects/${singlecarddata.slug}`}
                                className="font-medium ml-2 rounded-lg py-1 px-2 bg-accentMain hover:bg-accentDark transition duration-300 ease-in-out"
                            >
                                More Info
                            </Link>
                        </div>
                        <div className="absolute bottom-0 right-0 flex items-end gap-0">
                            <div className="h-3 w-14 bg-accentMain [clip-path:polygon(25%_0,100%_0,100%_100%,0%_100%)]"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
