import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
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
              Let's discuss
              <span className="text-xl">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Image src="/can-mockup.jpg" alt="Can mockup" width={400} height={400} className="w-full object-cover" />
            <Image src="/labels.jpg" alt="Labels" width={400} height={400} className="w-full object-cover" />
            <Image src="/macbook.jpg" alt="MacBook" width={400} height={400} className="w-full object-cover col-span-2" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-xl">
          <p className="text-gray-400">
            Olive Studio brings your vision to life with stunning
            designs that reverberate through time, creating waves
            of creativity and success for your brand.
          </p>
        </div>
        
        <div className="mt-12 space-y-4">
          {[
            "CODEWAVE SOLUTIONS",
            "PIXELCRAFT DEVELOPERS",
            "NEXTGEN CODERS",
            "BYTELOGIC SYSTEMS"
          ].map((service, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-t border-gray-800">
              <h3 className="text-xl">{service}</h3>
              <Link href={`/services/${i}`} className="text-sm">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="mt-32 px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">
            FEATURED<br />WORK
          </h2>
          <p className="text-gray-400 max-w-xs text-right">
            As a front end developer using modern ideas simplicity design
            and universal visual identification tailored to dedicated and
            current market.
          </p>
        </div>

        <div className="space-y-12">
          {[
            { title: "WEB DESIGN", number: "01", desc: "Creating engaging digital experiences" },
            { title: "WEB DEVELOPMENT", number: "02", desc: "Building functional, dynamic websites" },
            { title: "BRANDING", number: "03", desc: "Elevating brands with purpose" }
          ].map((work, i) => (
            <div key={i} className="group border-t border-gray-800 py-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold">{work.title}</h3>
                    <span className="text-sm text-gray-500">({work.number})</span>
                  </div>
                  <p className="text-gray-400 mt-2">{work.desc}</p>
                </div>
                <Link href={`/work/${i}`} className="text-sm group-hover:translate-x-2 transition-transform">
                  View projects →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Expertise Section */}
      <section className="mt-32 px-6 md:px-12 lg:px-24 pb-24">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          OUR SERVICE<br />EXPERTISE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-sm text-gray-500">(01)</span>
            <h3 className="text-xl font-bold mt-4 mb-6">UI/UX DESIGNER</h3>
            <p className="text-gray-400">
              Creating Intuitive User Interfaces That Enhance Interaction.<br /><br />
              Focusing On User Needs To Deliver Exceptional Experiences.
            </p>
          </div>

          <div>
            <span className="text-sm text-gray-500">(02)</span>
            <h3 className="text-xl font-bold mt-4 mb-6">BRANDING</h3>
            <p className="text-gray-400">
              Building Emotional Connections That Foster Brand Loyalty.<br /><br />
              Empowering Businesses To Stand Out In A Crowded Market.
            </p>
          </div>

          <div>
            <span className="text-sm text-gray-500">(03)</span>
            <h3 className="text-xl font-bold mt-4 mb-6">DEVELOPMENT</h3>
            <p className="text-gray-400">
              Developing Intuitive Platforms For Seamless Interaction.<br /><br />
              Combining Creativity With Technical Expertise.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
