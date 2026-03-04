import ProjectClient from '@/src/components/reuseables/ProjectClient';
import { getProjectsData } from '@/src/lib/getProjectsData';

export default async function Projects() {
    const data = await getProjectsData();

    const projects = data.projects.map((project) => ({
        ...project,
        _id: project._id.toString(),
    }));

    return (
        <main className="pt-32 mb-12 flex flex-col justify-between mx-auto px-4 md:px-6 lg:px-8 max-w-7xl animate-fadeIn">
            <h3 className="text-4xl mb-4 flex font-bold justify-center text-center">Projects</h3>
            <h3 className="text-lg mb-4 flex justify-center text-center">
                Projects and work completed using various technologies / stacks
            </h3>

            <ProjectClient carddata={projects} />
        </main>
    );
}
