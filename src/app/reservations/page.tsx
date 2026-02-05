import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ReservationForm from "@/components/sections/ReservationForm";

export const metadata = {
    title: "Table Reservations | The Futora Cafe Pune",
    description: "Book your table at The Futora Cafe for a premium dining experience.",
};

export default function ReservationsPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#F7F1E1]">
            <Header />
            <main className="flex-grow pt-[120px] pb-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h4 className="text-[#913429] font-bold tracking-widest uppercase text-sm mb-4">
                            Reserve Your Spot
                        </h4>
                        <h1 className="font-display text-6xl md:text-8xl text-[#3E2723] italic">
                            Book A Table
                        </h1>
                        <p className="max-w-2xl mx-auto text-[#5D4037] mt-6 font-sans text-lg">
                            Experience the perfect blend of artisanal coffee and gourmet dining.
                            Secure your table for any occasion.
                        </p>
                    </div>

                    <ReservationForm />

                    {/* Additional Info */}
                    <div className="mt-20 grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
                        <div>
                            <h3 className="font-heading text-2xl text-[#3E2723] mb-3">Group Dining</h3>
                            <p className="text-[#5D4037] font-sans">For parties larger than 8, please contact us directly via phone or WhatsApp at +91 84466 53644.</p>
                        </div>
                        <div>
                            <h3 className="font-heading text-2xl text-[#3E2723] mb-3">Private Events</h3>
                            <p className="text-[#5D4037] font-sans">Rent our space for birthdays, corporate meets, or intimate gatherings.</p>
                        </div>
                        <div>
                            <h3 className="font-heading text-2xl text-[#3E2723] mb-3">Cancellation</h3>
                            <p className="text-[#5D4037] font-sans">Please inform us at least 2 hours in advance if you need to cancel or modify.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
