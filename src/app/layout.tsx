import './globals.css';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import { Toaster } from 'react-hot-toast';

import type { Metadata } from 'next';
import ScrollToTop from '../components/reuseables/ScrollToTop';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: "Trevor Ramtahal's Portfolio Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-background text-textMain m-0 p-0">
                <Header />
                {children}
                <ScrollToTop />
                <Toaster position="bottom-center" />
                <Footer />
            </body>
        </html>
    );
}
