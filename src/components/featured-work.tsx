import Image from "next/image";
import Link from "next/link";
import AppImg from '../../public/images/app.png';
import RecImg from '../../public/images/recipe-hunt.png';
import StarrImg from '../../public/images/starrmark.png';
import A4hgImg from '../../public/images/a4hg.png';

const workItems = [
    { title: "COOL PRODUCTS", number: "01", desc: "Electronics eccommerce store", img: AppImg, link: "https://dd-context-store-app.netlify.app/" },
    { title: "RECIPE HUNT", number: "02", desc: "Find your favorite dishes", img: RecImg, link: "https://recipe-hunt.darrinduncan.com/" },
    { title: "Starrmark Solutions.LLC", number: "03", desc: "Government Contractor", img: StarrImg, link: "https://starrmarksolutions.llc/" },
    { title: "All For His Glory", number: "04", desc: "Featured Flag Collection", img: A4hgImg, link: "https://allforhisgloryworship.com/" }
];

export function FeaturedWork() {
    return (
        <section id="work" className="mt-32 px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 gap-8">
                <h2 className="text-5xl md:text-6xl font-bold">
                    FEATURED<br />WORK
                </h2>
                <p className="text-gray-400 lg:max-w-lg lg:text-right flex">
                    Here are some of my favorite projects, where I&apos;ve combined modern design principles, simplicity, and a passion for delivering value to create engaging and effective user experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {workItems.map((work) => (
                    <div key={work.title} className="group py-8">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-4">
                                <div className="w-full ">
                                    <Image
                                        src={work.img}
                                        alt={work.title}
                                        width={400}
                                        height={400}
                                        className="xl:w-full xl:h-[320px] object-cover rounded-lg"
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