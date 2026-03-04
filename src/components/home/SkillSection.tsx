import { iconMap, IconName } from '../icons/iconIndex';
import { Skill } from '@/src/types/SkillType';

type SkillProps = {
    skills: Skill[];
};

export default function SkillSection({ skills }: SkillProps) {
    const techstack = [
        {
            field: 'Languages',
            technologies: skills.filter((s: { category: string }) => s.category === 'language'),
        },
        {
            field: 'Frontend & Design',
            technologies: skills.filter((s: { category: string }) => s.category === 'frontend'),
        },
        {
            field: 'Backend & Tools',
            technologies: skills.filter((s: { category: string }) => s.category === 'backend'),
        },
    ];
    
    function hasIcon(skills: Skill): skills is Skill & { name: IconName } {
        return skills.name in iconMap;
    }

    return (
        <section className="mx-auto px-4 md:px-6 lg:px-8 max-w-4xl mt-30 flex flex-col">
            <h3 className="text-3xl mb-4 flex font-medium justify-center text-center">
                Primary Tech Stack
            </h3>

            {techstack.map((section) => (
                <div key={section.field} className="flex flex-col">
                    <div className="flex flex-col items-center">
                        <p className="text-lg mb-3 text-textSub">{section.field}</p>

                        <div className="flex flex-wrap justify-center">
                            {section.technologies.filter(hasIcon).map((icon) => {
                                const IconComponent = iconMap[icon.name];

                                return (
                                    <div
                                        key={icon._id}
                                        className="mb-4 w-22 h-auto mx-3 flex flex-col rounded-lg px-2 py-4 items-center bg-subSecA shadow-md hover:shadow-[0_0_10px_3px_rgba(209,0,38,0.4)] transition-shadow duration-300"
                                    >
                                        <IconComponent className="w-10 h-10 text-accentMain" />
                                        <p className="mt-1">{icon.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
