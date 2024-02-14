import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="text-gray-600 body-font container mx-auto flex gap-4 lg:gap-0 py-4 lg:py-12 md:flex-row flex-col-reverse items-center px-4 lg:px-0">
            <div className="lg:flex-grow w-full md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font lg:text-4xl text-2xl mb-4 font-medium text-gray-900">LinkedIn Solutions for Every Budget:
                    <br className="hidden lg:inline-block" /> Unlock Opportunities Today!
                </h1>
                <p className="mb-3 lg:mb-6 lg:text-lg text-justify max-w-xl leading-relaxed">Welcome to <span className="text-blue-500">buylinkedinacc.com</span>, where professional success meets affordability! Whether you need a new account or want to boost your connections, reactions, comments, or company page follows, we have got you covered at the best prices. Our services ensure you will stand out professionally without any hassle. Join countless satisfied customers who have chosen us for their LinkedIn needs.</p>
                <div className="flex justify-center gap-6">
                    <Link href={'/explore-our-services'} className="button">Explore Our Services</Link>
                </div>
            </div>

            <div className="w-full lg:max-w-xl md:w-1/2">
                <Image width={600} height={512} className="object-cover h-[30dvh] lg:h-[80dvh] object-center rounded" alt="hero" src="https://res.cloudinary.com/dwx2jd8b1/image/upload/v1707330466/Website-assets/linkedin-buy/_ae723cb6-5db0-463d-afe7-b0f0afdec3a6.jpeg_caqfg5.jpg" />
            </div>
        </section>
    );
};
