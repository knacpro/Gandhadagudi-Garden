"use client"
import BookResort from "@/components/BookResort";
import ContactForm from "@/components/contact/contact-form";
import GoogleMapCard from "@/components/contact/google-map-card";
import HeroSection from "@/components/contact/hero-section";
import FooterComponent from "@/components/footer/footer";
import HeaderComponent from "@/components/header/header";

export default function Contact() {
    return (
        <>
        <HeaderComponent />
        <HeroSection />
        <ContactForm />
        <GoogleMapCard />
        <BookResort />
        <FooterComponent />
        </>
    );
}