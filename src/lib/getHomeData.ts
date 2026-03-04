import connectMongoDB from '@/src/lib/db';
import Education from '@/src/models/EducationModel';
import Experience from '../models/ExperienceModel';
import Skill from '@/src/models/SkillModel';
import Project from '../models/ProjectModel';

export async function getHomeData() {
    await connectMongoDB();

    const [experiences, educations, skills, featuredprojects] = await Promise.all([
        Experience.find().sort({ startDate: -1 }).lean(),
        Education.find().sort({ startDate: -1 }).lean(),
        Skill.find().sort({ order: 1 }).lean(),
        Project.find({ isFeatured: true })
            .sort({ order: 1 })
            .select('slug image title introduction technologies projectURL isCompleted order')
            .lean(),
    ]);

    return {
        experiences,
        educations,
        skills,
        featuredprojects,
    };
}
