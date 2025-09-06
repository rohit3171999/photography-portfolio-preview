import React, { useState } from "react";
import "./App.css";

export default function App() {
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (imgClass) => {
        setLightboxImage(imgClass);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center hero-bg">
                <div className="hero-overlay"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl font-bold mb-6">Welcome to Our Portfolio</h1>
                    <p className="text-xl mb-8">Showcasing our best work with pride</p>
                    <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-lg rounded-lg transition duration-300">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-20 bg-gray-800">
                <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                    {/* Image 1 */}
                    <div
                        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openLightbox("img-1")}
                    >
                        <div className="portfolio-img img-1"></div>
                        <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View
                        </p>
                    </div>
                    {/* Image 2 */}
                    <div
                        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openLightbox("img-2")}
                    >
                        <div className="portfolio-img img-2"></div>
                        <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View
                        </p>
                    </div>
                    {/* Image 3 */}
                    <div
                        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openLightbox("img-3")}
                    >
                        <div className="portfolio-img img-3"></div>
                        <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View
                        </p>
                    </div>
                    {/* Image 4 */}
                    <div
                        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openLightbox("img-4")}
                    >
                        <div className="portfolio-img img-4"></div>
                        <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View
                        </p>
                    </div>
                    {/* Image 5 */}
                    <div
                        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openLightbox("img-5")}
                    >
                        <div className="portfolio-img img-5"></div>
                        <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View
                        </p>
                    </div>
                    {/* Image 6 */}
                    <div
                        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openLightbox("img-6")}
                    >
                        <div className="portfolio-img img-6"></div>
                        <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View
                        </p>
                    </div>
                    {/* Image 7 */}
                    <div
                        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openLightbox("img-7")}
                    >
                        <div className="portfolio-img img-7"></div>
                        <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View
                        </p>
                    </div>
                    {/* Image 8 */}
                    <div
                        className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openLightbox("img-8")}
                    >
                        <div className="portfolio-img img-8"></div>
                        <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View
                        </p>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="lightbox-backdrop"
                    role="dialog"
                    aria-modal="true"
                    onClick={closeLightbox}
                >
                    <button
                        className="lightbox-close-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeLightbox();
                        }}
                    >
                        &times;
                    </button>
                    <div className={`portfolio-img ${lightboxImage} lightbox-content`}></div>
                </div>
            )}
        </div>
    );
}
