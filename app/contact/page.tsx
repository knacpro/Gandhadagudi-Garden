import ContactForm from "@/components/contact/contact-form";
import HeroSection from "@/components/contact/hero-section";
import FooterComponent from "@/components/footer/footer";
import HeaderComponent from "@/components/header/header";

export default function Contact() {
    return (
        <>
        <HeaderComponent />
        <HeroSection />
        <ContactForm />
        <FooterComponent />
        </>
    );
}