import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "The Futora Cafe – Best Cafe in Pune | FC Road Coffee & Food",
  description: "Visit The Futora Cafe – one of the best cafes in Pune near FC Road. Amazing coffee, cozy vibe & delicious food. Founded by Madhur Dhadve.",
  manifest: "/manifest.json",
};

import { LazyMotion, domAnimation } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="181cb15d-0961-460f-888f-83bfd54e1847"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <CartProvider>
          <LazyMotion features={domAnimation}>
            <PageTransition>
              {children}
            </PageTransition>
          </LazyMotion>
          <CartDrawer />
          <WhatsAppButton />
        </CartProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
