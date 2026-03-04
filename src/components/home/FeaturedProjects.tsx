import Link from 'next/link';
import ProjectCard from '../reuseables/ProjectCard';
import { ProjectCardData } from '@/src/types/ProjectType';

type ProjectCardDataProps = {
    carddata: ProjectCardData[];
};

export default function FeaturedProjects({ carddata }: ProjectCardDataProps) {
    return (
        <section className="flex flex-col mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mt-30">
            <h3 className="text-3xl mb-4 flex font-medium justify-center text-center">
                Featured Projects
            </h3>

            <ProjectCard carddata={carddata} animationTrigger={0} />

            <div className="flex justify-center">
                <Link
                    href="/projects"
                    className="font-bold px-6 py-2 md:px-8 md:py-3 mt-4 rounded-md bg-accentMain hover:bg-accentDark transition duration-300 ease-in-out"
                >
                    <p>View More Projects</p>
                </Link>
            </div>
        </section>
    );
}
