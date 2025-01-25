'use client';

import Link from "next/link";

const services = [
  "CODEWAVE SOLUTIONS",
  "PIXELCRAFT DEVELOPERS",
  "NEXTGEN CODERS",
  "BYTELOGIC SYSTEMS"
];

export function ServicesSection() {
  return (
    <section className="mt-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-xl">
        <p className="text-gray-400">
          Darrin Duncan brings your vision to life with stunning
          designs that reverberate through time, creating waves
          of creativity and success for your brand.
        </p>
      </div>
      
      <div className="mt-12 space-y-4">
        {services.map((service, i) => (
          <div key={i} className="flex items-center justify-between py-4 border-t border-gray-800">
            <h3 className="text-xl">{service}</h3>
            <Link href={`/services/${i}`} className="text-sm">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
} 