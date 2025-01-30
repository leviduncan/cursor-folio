import Image from "next/image";
import Link from "next/link";

const workItems = [
    { title: "COOL PRODUCTS", number: "01", desc: "Electronics eccommerce store", img: "/images/app.png", link: "https://dd-context-store-app.netlify.app/" },
    { title: "RECIPE HUNT", number: "02", desc: "Find your favorite dishes", img: "/images/recipe-hunt.png", link: "https://recipe-hunt.darrinduncan.com/" },
    { title: "Starrmark Solutions.LLC", number: "03", desc: "Government Contractor", img: "/images/starrmark.png", link: "https://starrmarksolutions.llc/" },
    { title: "All For His Glory", number: "03", desc: "Featured Flag Collection", img: "/images/a4hg.png", link: "https://allforhisgloryworship.com/" }
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {workItems.map((work, i) => (
                    <div key={i} className="group py-8">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-4">
                                <div className="w-full ">
                                    <Image
                                        src={work.img}
                                        alt={work.title}
                                        width={400}
                                        height={400}
                                        className="xl:w-full xl:h-[320px] object-cover rounded-lg"
                                        priority
                                    />
                                </div>
                                <div className="w-full ">
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-2xl font-bold">{work.title}</h3>
                                        <span className="text-sm text-gray-500">({work.number})</span>
                                    </div>
                                    <p className="text-gray-400 mt-2">{work.desc}</p>
                                    <Link href={work.link} className="text-sm group-hover:translate-x-2 transition-transform" target="_blank">
                                        View project →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 