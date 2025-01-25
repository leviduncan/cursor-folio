import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="pt-32 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        <div className="xl:flex xl:items-center">
          <div className="flex flex-col md:flex-row md:items-end md:gap-8 xl:flex-col xl:items-start xl:gap-12 w-full">
            <div className="md:w-1/2 xl:w-full">
              <p className="text-sm mb-4">(HELLO, I am Darrin)</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.8]">
                <span className="inline-flex gap-2 items-baseline">
                  FRONT <span className="font-serif italic text-3xl sm:text-5xl md:text-6xl xl:text-7xl">end</span>
                </span>
                <br />
                DEVELOPER
              </h1>
            </div>

            <div className="mt-6 md:mt-0 md:w-1/2 xl:w-full">
              <p className="text-gray-400">
                As a front end developer using modern ideas simplicity design
                and universal visual identification tailored to dedicated and
                current market.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 mt-8 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                Let&apos;s discuss
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="block">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="hidden md:flex md:flex-col xl:flex-row xl:col-span-2 gap-4">
              <Image 
                src="https://images.unsplash.com/photo-1610824352934-c10d87b700cc?q=80&w=1200"
                alt="Minimal white can mockup" 
                width={400} 
                height={400} 
                className="w-full h-[310px] xl:w-1/2 xl:h-[320px] object-cover rounded-lg"
                priority
              />
              <Image 
                src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200" 
                alt="Product labels" 
                width={400} 
                height={400} 
                className="w-full h-[310px] xl:w-1/2 xl:h-[320px] object-cover rounded-lg"
                priority
              />
            </div>
            <Image 
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200"
              alt="MacBook on desk" 
              width={800} 
              height={400} 
              className="w-full h-[320px] md:h-[640px] xl:h-[320px] object-cover rounded-lg md:col-span-1 xl:col-span-2"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 