import EducationSection from '@/src/components/home/EducationSection';
import ExperienceSection from '@/src/components/home/ExperienceSection';
import IntroSection from '@/src/components/home/IntroSection';
import FeaturedProjects from '@/src/components/home/FeaturedProjects';
import LearnMoreSection from '@/src/components/home/LearnMoreSection';
import SkillSection from '../components/home/SkillSection';
import { getHomeData } from '../lib/getHomeData';

export default async function Home() {
    const data = await getHomeData();

    return (
        <main className="animate-fadeIn">
            <IntroSection />
            <FeaturedProjects carddata={data.featuredprojects} />
            <SkillSection skills={data.skills} />
            <ExperienceSection experiences={data.experiences} />
            <EducationSection educations={data.educations} />
            <LearnMoreSection />
        </main>
    );
}
