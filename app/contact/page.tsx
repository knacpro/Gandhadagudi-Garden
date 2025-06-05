"use client"
import BookResort from "@/components/BookResort";
import ContactForm from "@/components/contact/contact-form";
import GoogleMapCard from "@/components/contact/google-map-card";
import HeroSection from "@/components/contact/hero-section";
import FooterComponent from "@/components/footer/footer";
import HeaderComponent from "@/components/header/header";
import SocialMediaFloatingIcons from "@/components/home/SocialMediaFloatingIcons";
import { useState } from "react";

export default function Contact() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
        <HeaderComponent mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <HeroSection />
        <ContactForm />
        <GoogleMapCard />
        <BookResort />
        <FooterComponent />
        <SocialMediaFloatingIcons />
        </>
    );
}