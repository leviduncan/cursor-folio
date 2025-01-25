'use client';

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="pt-32 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm mb-4">(HELLO, SAIM)</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            FRONT <span className="font-serif italic">end</span><br />
            DEVELOPER
          </h1>
          <p className="mt-6 text-gray-400 max-w-lg">
            As a front end developer using modern ideas simplicity design
            and universal visual identification tailored to dedicated and
            current market.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-8 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
            Let&apos;s discuss
            <span className="text-xl">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Image 
            src="https://images.unsplash.com/photo-1610824352934-c10d87b700cc?q=80&w=1200"
            alt="Minimal white can mockup" 
            width={400} 
            height={400} 
            className="w-full h-[300px] object-cover rounded-lg"
            priority
          />
          <Image 
            src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200" 
            alt="Product labels" 
            width={400} 
            height={400} 
            className="w-full h-[300px] object-cover rounded-lg"
            priority
          />
          <Image 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200"
            alt="MacBook on desk" 
            width={800} 
            height={400} 
            className="w-full h-[400px] object-cover col-span-2 rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
} 