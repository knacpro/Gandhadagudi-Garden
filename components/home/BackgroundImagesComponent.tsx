"use client";

import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface PropType {
    isMenuOpen: boolean;
}

export function BackgroundImagesComponent() {
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "/images/group.png",
        "/images/children-package.png",
        "/images/bird.png",
        "/images/carrom.png",
        "/images/zip-line.png"
    ];

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [images.length]);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                </div>
            ) : (
                <main className="relative w-full h-screen">
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <Image
                            src={images[currentImageIndex]}
                            alt="Hero Background"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </main>
            )}
        </>
    );
}

