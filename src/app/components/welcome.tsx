import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { plusJakartaSans } from "./fonts";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/bundle';

export default function Welcome() {
    return (
        <section className="flex flex-col content-center justify-center max-w-full sm:flex-row gap-4 lg:gap-16 text-blue-900">
            <div className={` flex flex-col items-center justify-center ${plusJakartaSans.className} sm:max-w-[500px] lg:max-w-[600px] text-center`}>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Welcome to TPG Management</h1>
                <p className="text-sm lg:text-lg  max-w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis, iste dolore animi tempora repudiandae sit optio, libero minima amet hic quia modi. Libero laborum quasi facilis omnis nulla sint.</p>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                speed={1200}
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 2000 }}
                className=" max-w-[320px] sm:max-w-[640px] lg:max-w-[40vw] rounded-xl lg:grow"
            >
                <SwiperSlide>
                    <Image src='/stocki1.jpg' alt="img1" width={1000} height={500} className="hidden sm:hidden lg:block h-[500px]" />
                    <Image src='/stocki1.jpg' alt="img1" width={320} height={320} className="block sm:hidden h-[320px]" />
                    <Image src='/stocki1.jpg' alt="img1" width={640} height={320} className="hidden sm:block lg:hidden h-[320px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='/stocki2.jpg' alt="img1" width={1000} height={500} className="hidden sm:hidden lg:block h-[500px]" />
                    <Image src='/stocki2.jpg' alt="img1" width={320} height={320} className="block sm:hidden h-[320px]" />
                    <Image src='/stocki2.jpg' alt="img1" width={640} height={320} className="hidden sm:block lg:hidden h-[320px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='/stocki3.jpg' alt="img1" width={1000} height={500} className="hidden sm:hidden lg:block h-[500px]" />
                    <Image src='/stocki3.jpg' alt="img1" width={320} height={320} className="block sm:hidden h-[320px]" />
                    <Image src='/stocki3.jpg' alt="img1" width={640} height={320} className="hidden sm:block lg:hidden h-[320px]" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src='/stocki4.jpg' alt="img1" width={1000} height={500} className="hidden sm:hidden lg:block h-[500px]" />
                    <Image src='/stocki4.jpg' alt="img1" width={320} height={320} className="block sm:hidden h-[320px]" />
                    <Image src='/stocki4.jpg' alt="img1" width={640} height={320} className="hidden sm:block lg:hidden h-[320px]" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}