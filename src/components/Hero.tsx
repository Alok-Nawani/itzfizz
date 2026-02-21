'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const carWrapperRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const statsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Remove the initial entrance animations completely. 
            // We want everything hidden to start!

            // Hide Title and Stats initially so they can animate in on scroll
            gsap.set(textContainerRef.current, { opacity: 0, y: -40 });
            gsap.set(statsContainerRef.current?.children || [], { opacity: 0, y: 40 });

            // --- GSAP Setup for the Car Scrolling (Left to Right) ---
            gsap.set(carWrapperRef.current, {
                x: "-30vw", // Completely offscreen on the left
            });

            // --- Main Pinning Scroll Timeline ---
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=2000", // Keep it pinned while we scroll for 2000px height
                    scrub: 0.5,
                    pin: true,     // Pin the entire hero section so text stays visible!
                }
            });

            // The car moves across smoothly
            scrollTl.to(carWrapperRef.current, {
                x: "100vw", // Drives completely across to the right side
                ease: "none",
                duration: 1
            }, 0);

            // Animate Title in first as the car starts moving
            scrollTl.to(textContainerRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            }, 0.1);

            // Animate stats in one by one as the car reveals them!
            // Starts appearing just after the title
            scrollTl.to(statsContainerRef.current?.children || [], {
                opacity: 1,
                y: 0,
                stagger: 0.2, // sequential cascade appearance
                ease: "power2.out",
                duration: 0.4 // Quick smooth transition for each element
            }, 0.2);

            // Optional: subtly parallax the track inner container or text to give a sense of speed
            scrollTl.to(trackRef.current, {
                backgroundPosition: "100% 50%",
                ease: "none"
            }, 0);

        }, containerRef); // Scope everything

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-[#050505]"
        >
            {/* 
        1. Top Text Section (From Image 2)
      */}
            <div
                ref={textContainerRef}
                className="relative z-20 w-full flex flex-col items-center pt-[10vh] px-4"
            >
                <h1
                    className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] font-black tracking-[0.2em] md:tracking-[0.4em] text-white uppercase text-center"
                    style={{ letterSpacing: '0.4em' }}
                >
                    WELCOME ITZFIZZ
                </h1>
            </div>

            {/* 
        2. The Central Track with the Car
        Using a vibrant green track similar to Image 1 to illuminate the black car.
      */}
            <div className="relative w-full h-[35vh] flex items-center justify-center my-auto">
                {/* Green Track Background */}
                <div
                    ref={trackRef}
                    className="absolute top-0 left-0 w-full h-full bg-[#4ade80] opacity-90 border-y border-emerald-300/30"
                >
                    {/* Optional track line details for depth */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/10 -translate-y-1/2 border-dashed border-b border-black/20" />
                </div>

                {/* The Moving Car Object */}
                <div
                    ref={carWrapperRef}
                    className="absolute z-30 h-auto flex items-center justify-center pointer-events-none drop-shadow-2xl mix-blend-multiply"
                    style={{ width: "min(35vw, 600px)" }} // Responsive car sizing
                >
                    <Image
                        src="/black-car.png"
                        alt="Black Sports Car"
                        width={1000}
                        height={600}
                        // Car points right natively. mix-blend-multiply drops the white background! 
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            </div>

            {/* 
        3. Bottom Stats Section (From Image 2)
      */}
            <div
                ref={statsContainerRef}
                className="relative z-20 w-full flex flex-wrap justify-center gap-12 md:gap-32 pb-[10vh] px-4"
            >
                <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                        100K+
                    </span>
                    <span className="text-xs md:text-sm text-zinc-400 mt-2 font-semibold tracking-[0.2em] uppercase">
                        Happy Users
                    </span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                        99.9%
                    </span>
                    <span className="text-xs md:text-sm text-zinc-400 mt-2 font-semibold tracking-[0.2em] uppercase">
                        Performance
                    </span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                        50+
                    </span>
                    <span className="text-xs md:text-sm text-zinc-400 mt-2 font-semibold tracking-[0.2em] uppercase">
                        Global Awards
                    </span>
                </div>
            </div>

        </section>
    );
}
