'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || 'Failed to send');
            }

            toast.success('Email Successfully Sent');
            setStatus('success');
            form.reset();
        } catch (err) {
            toast.error('Error Sending Email, API Exhausted for Today');
            setStatus('error');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex-1 space-y-4 mb-12">
            <p>Name</p>
            <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full p-3 border border-accentDark rounded-md bg-subSecA"
            />

            <p>Email</p>
            <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                className="w-full p-3 border border-accentDark rounded-md bg-subSecA"
            />

            <p>Subject</p>
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-3 border border-accentDark rounded-md bg-subSecA"
            />

            <p>Message</p>
            <textarea
                name="message"
                placeholder="Your Message..."
                required
                className="w-full p-3 border border-accentDark rounded-md bg-subSecA"
            />

            <input type="text" name="company" style={{ display: 'none' }} />

            <button
                type="submit"
                className="w-full font-medium px-6 py-2 md:px-8 md:py-3 rounded-md bg-accentMain hover:bg-accentDark transition duration-300 ease-in-out cursor-pointer"
            >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
