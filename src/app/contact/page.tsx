import dynamic from 'next/dynamic';
import Header from '@/components/sections/header';
import ContactHero from '@/components/sections/contact-hero';

// Lazy load below-the-fold components
const Footer = dynamic(() => import('@/components/sections/footer'), {
    loading: () => <div className="h-[300px] animate-pulse bg-black/5" />,
});

const ContactForm = dynamic(() => import('@/components/sections/contact-form'), {
    loading: () => <div className="h-[500px] animate-pulse bg-gray-50" />,
});

const ContactInfo = dynamic(() => import('@/components/sections/contact-info'), {
    loading: () => <div className="h-[400px] animate-pulse bg-gray-100" />,
});

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">
                <ContactHero />
                <ContactInfo />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}
