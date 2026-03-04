'use client';
import toast from 'react-hot-toast';
import { MdOutlineEmail } from 'react-icons/md';

export default function ScrollToTop() {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText('trevor.ramtahal@gmail.com');
            toast.success('Email Copied!');
        } catch (err) {
            console.error('Failed to copy text:', err);
            toast.error('Failed to Copy Email.');
        }
    };

    return (
        <button
            className="w-full flex flex-row items-center rounded-xl bg-subSecA px-5 py-3 mb-8 border border-subSecA hover:border-accentDark transition duration-300 ease-in-out appearance-none text-left cursor-pointer"
            onClick={handleCopy}
        >
            <MdOutlineEmail className="w-10 h-10 text-accentMain mr-2" />
            <div className="flex flex-col justify-between items-start">
                <p className="mt-1 text-xl font-bold">Email</p>
                <p className="mb-1 text-md">trevor.ramtahal@gmail.com</p>
            </div>
        </button>
    );
}
