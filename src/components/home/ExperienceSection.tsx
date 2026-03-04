import { Experience } from '@/src/types/ExperienceType';

type ExperienceProps = {
    experiences: Experience[];
};

export default function ExperienceSection({ experiences }: ExperienceProps) {
    return (
        <section className="mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mt-30">
            <h3 className="text-3xl mb-4 flex font-medium justify-center text-center">
                Work Experience
            </h3>
            {experiences.map((experienceData) => (
                <div
                    key={experienceData._id}
                    className="p-8 my-4 border rounded-lg mt-3 mb-4 bg-subSecA border-subSecB transition ease-in-out flex flex-col relative shadow-md hover:shadow-[0_0_10px_3px_rgba(209,0,38,0.4)] transition-shadow duration-300"
                >
                    <div className="flex flex-row mb-3">
                        <div className="mr-2">
                            <img
                                className="rounded-md h-16 w-16 object-contain"
                                src={experienceData.companyImage}
                            ></img>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-xl sm:text-3xl font-medium">
                                {experienceData.company}
                            </p>
                            <p className="mb-1">{experienceData.role}</p>
                        </div>
                    </div>
                    <div className="mb-3 text-accentLight">
                        <p>
                            {experienceData.location} | {experienceData.startDate} to{' '}
                            {experienceData.endDate}
                        </p>
                    </div>
                    {experienceData.technologies && (
                        <div>
                            <p className="mb-3 text-accentLight">
                                Technologies Used: {experienceData.technologies.join(', ')}
                            </p>
                        </div>
                    )}
                    <hr className="mb-3 border-subSecB border-1" />
                    <div>
                        <ul className="list-disc pl-6">
                            {experienceData.responsibilities.map((item, index) => (
                                <li key={index} className="mb-1">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    );
}
