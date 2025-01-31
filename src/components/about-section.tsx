import Image from "next/image";

export function AboutSection() {
    return (
        <section id="about" className="mt-32 px-6 md:px-12 lg:px-24">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">
                ABOUT
            </h2>
            <div className="flex flex-col md:flex-row md:gap-4">
                <div className="w-full md:w-6/12">
                    <Image
                        src="/images/dd.jpg"
                        alt="Minimal white can mockup"
                        width={100}
                        height={100}
                        className="mx-auto w-1/2 h-full md:w-3/4 md:h-1/2 lg:w-3/4 lg:h-full object-cover rounded-xl"
                        priority
                    />
                </div>

                <div className="mt-12 md:mt-0 space-y-4 md:w-6/12">
                    <h3 className="text-3xl font-bold">
                        Crafting Exceptional Digital Experiences with Precision and Creativity.
                    </h3>
                    <div className="w-full">
                        <p className=" text-gray-400">
                            I&apos;m a front-end developer who is passionate about transforming ideas into impactful digital realities. Leveraging expertise in HTML5, CSS3, and JavaScript, I specialize in creating intuitive, accessible, and visually compelling web interfaces. My goal is to empower businesses with elegant, high-performance solutions that resonate with their users.
                        </p>
                        <p className=" text-gray-400">
                            Over the years, I&apos;ve honed my skills in modern web development, embracing emerging trends and technologies to stay ahead in the ever-evolving digital landscape. Whether collaborating with teams or leading projects, I bring dedication, adaptability, and an unwavering commitment to excellence.

                            I believe that great design and functionality go hand in hand, and I strive to deliver results that make a lasting impression.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 