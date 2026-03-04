import connectMongoDB from '@/src/lib/db';
import Project from '../models/ProjectModel';

export async function getProjectsData() {
    await connectMongoDB();

    const projects = await Project.find()
        .select('slug image title introduction technologies projectURL isCompleted order')
        .sort({ order: 1 })
        .lean();

    return {
        projects,
    };
}
