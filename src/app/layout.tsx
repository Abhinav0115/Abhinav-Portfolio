import "./globals.css";
import type { Metadata } from "next";
import SideBar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { ContactFormProvider, MenuProvider } from "@/components/Provider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "Abhinav Anand Portfolio (@abhinav0115)",
    description: "Abhinav Anand Portfolio - MERN Stack Developer",
    icons: ["/images/profilePic_Icon.png"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="select-none">
                <MenuProvider>
                    <ContactFormProvider>
                        <ContactForm />
                        <Toaster />
                        <div className="flex">
                            <SideBar />
                            <main className="flex-1 pl-0 lg:pl-[300px]">
                                <Navbar />
                                {children}
                            </main>
                        </div>
                    </ContactFormProvider>
                </MenuProvider>
            </body>
        </html>
    );
}
