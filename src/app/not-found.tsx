import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center mx-auto px-4 md:px-6 lg:px-8 max-w-xl">
            <div className="flex flex-col">
                <p className="text-8xl mb-1 flex font-bold justify-center">404</p>
                <p className="text-textSub text-4lg mb-4 flex font-bold justify-center">
                    Page Not Found
                </p>
                <p className="text-textSub text-md mb-4 flex justify-center">
                    The page you were looking for doesn't exist.
                </p>
                <Link
                    href="/"
                    className="w-full bg-accentMain hover:bg-accentDark text-white p-3 rounded flex justify-center"
                >
                    Return Home
                </Link>
            </div>
        </main>
    );
}
