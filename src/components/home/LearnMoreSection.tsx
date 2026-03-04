import Link from 'next/link';

export default function LearnMoreSection() {
    return (
        <section className="mx-auto px-4 md:px-6 lg:px-8 max-w-lg my-30 flex flex-col">
            <h3 className="text-3xl font-medium mb-4 flex justify-center text-center">
                Learn More
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 flex justify-items-center">
                <Link
                    href="/about"
                    className="font-bold px-6 py-2 md:px-8 md:py-3 mt-4 w-50 rounded-md bg-accentMain hover:bg-accentDark transition duration-300 ease-in-out flex justify-center"
                >
                    <p>About Me</p>
                </Link>
                <Link
                    href="/contact"
                    className="font-bold px-6 py-2 md:px-8 md:py-3 mt-4 w-50 rounded-md bg-accentMain hover:bg-accentDark transition duration-300 ease-in-out flex justify-center"
                >
                    <p>Contact Me</p>
                </Link>
            </div>
        </section>
    );
}
