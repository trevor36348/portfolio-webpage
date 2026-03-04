import { Education } from '@/src/types/EducationType';

type EducationProps = {
    educations: Education[];
};

export default function EducationSection({ educations }: EducationProps) {
    return (
        <section className="mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mt-30">
            <h3 className="text-3xl font-medium mb-4 flex justify-center text-center">Education</h3>
            {educations.map((educationData) => (
                <div
                    key={educationData._id}
                    className="p-4 border rounded-lg mt-3 mb-4 bg-subSecA border-subSecB transition ease-in-out flex flex-col relative shadow-md hover:shadow-[0_0_10px_3px_rgba(209,0,38,0.4)] transition-shadow duration-300"
                >
                    <div className="flex flex-col sm:flex-row items-center">
                        <p>
                            <span className="font-bold">{educationData.institution}</span> |{' '}
                            <span className="text-accentLight">{educationData.location}</span>
                        </p>

                        <p className="sm:ml-auto text-accentLight">
                            {educationData.startDate} to {educationData.endDate}
                        </p>
                    </div>
                    <hr className="my-2 border-subSecB border-1" />
                    <div>
                        <p className="text-2xl">{educationData.degree}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
