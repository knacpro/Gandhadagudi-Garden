"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function BackgroundImagesComponent() {
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "/images/group.png",
        "/images/children-package.png",
        "/images/tree-home.png",
        "/images/carrom.png",
        "/images/zip-line.png",
        "/images/punyakoti.png",
        "/images/bullocks.png",
        "/images/group-1.png",
        "/images/bird-santury.png",
        "/images/restuarant-grp.png",
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
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 sm:h-32 sm:w-32"></div>
                </div>
            ) : (
                <main className="relative w-full h-[60dvh] sm:h-screen">
                    <div className="sm:absolute inset-0 w-20 h-20 sm:w-full sm:h-full overflow-hidden">
                        <Image
                            src={images[currentImageIndex]}
                            alt="Hero Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </main>
            )}
        </>
    );
}

