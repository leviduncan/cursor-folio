import Link from "next/link";

const workItems = [
  { title: "WEB DESIGN", number: "01", desc: "Creating engaging digital experiences" },
  { title: "WEB DEVELOPMENT", number: "02", desc: "Building functional, dynamic websites" },
  { title: "BRANDING", number: "03", desc: "Elevating brands with purpose" }
];

export function FeaturedWork() {
  return (
    <section id="work" className="mt-32 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 gap-8">
        <h2 className="text-5xl md:text-6xl font-bold">
          FEATURED<br />WORK
        </h2>
        <p className="text-gray-400 lg:max-w-xs lg:text-right">
          As a front end developer using modern ideas simplicity design
          and universal visual identification tailored to dedicated and
          current market.
        </p>
      </div>

      <div className="space-y-12">
        {workItems.map((work, i) => (
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
  );
} 