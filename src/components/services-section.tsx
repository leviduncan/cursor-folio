import Link from "next/link";

const services = [
    "CODEWAVE SOLUTIONS",
    "PIXELCRAFT DEVELOPERS",
    "NEXTGEN CODERS",
    "BYTELOGIC SYSTEMS"
];

export function ServicesSection() {
    return (
        <section id="services" className="mt-32 px-6 md:px-12 lg:px-24">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">
                SERVICES
            </h2>
            <div className="flex flex-col md:flex-row md:gap-8">
                <div className="md:w-5/12">
                    <p className="text-gray-400">
                        Darrin Duncan brings your vision to life with stunning
                        designs that reverberate through time, creating waves
                        of creativity and success for your brand.
                    </p>
                </div>

                <div className="mt-12 md:mt-0 space-y-4 md:w-7/12">
                    {services.map((service, i) => (
                        <div key={i} className="flex items-center justify-between py-4 border-t border-gray-800">
                            <h3 className="text-xl">{service}</h3>
                            <Link href={`/services/${i}`} className="text-sm">
                                Read More →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 