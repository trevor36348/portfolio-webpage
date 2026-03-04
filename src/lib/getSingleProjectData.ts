import connectMongoDB from '@/src/lib/db';
import Project from '../models/ProjectModel';

export async function getSingleProjectData(slug: string) {
    await connectMongoDB();

    const project = await Project.findOne({ slug }).lean();

    if (!project) return null;

    return {
        project,
    };
}
