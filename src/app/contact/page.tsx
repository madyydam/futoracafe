import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import ContactHero from '@/components/sections/contact-hero';
import ContactForm from '@/components/sections/contact-form';
import ContactInfo from '@/components/sections/contact-info';

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
