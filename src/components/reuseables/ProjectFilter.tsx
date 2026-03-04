type FilterProps = {
    activeFilter: string;
    setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function ProjectFilter({ activeFilter, setActiveFilter }: FilterProps) {
    const buttons = ['All', 'Next.js', 'React', 'Node.js', 'Tailwind', 'MongoDB'];

    return (
        <div className="flex flex-col">
            <hr className="mt-8 mb-4 h-px border-0 bg-gradient-to-r from-accentMain/10 via-accentMain to-accentMain/10" />
            <div className="flex flex-wrap gap-4 justify-center">
                {buttons.map((btn) => (
                    <button
                        key={btn}
                        onClick={() => setActiveFilter(btn)}
                        className={`
                            px-4 py-2 rounded-md font-medium cursor-pointer
                            ${
                                activeFilter === btn
                                    ? 'bg-accentDark'
                                    : 'bg-accentMain border border-accentMain hover:border-acc transition duration-300 ease-in-out'
                            }
                    `}
                    >
                        {btn}
                    </button>
                ))}
            </div>
            <hr className="mt-4 mb-4 h-px border-0 bg-gradient-to-r from-accentMain/10 via-accentMain to-accentMain/10" />
        </div>
    );
}
