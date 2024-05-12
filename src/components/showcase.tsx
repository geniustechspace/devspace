"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, A11y } from 'swiper/modules';
import { Image } from "@nextui-org/react";


export const ShowcaseSlider = () => {
    return (
        <section className='card rounded-md'>
            <Swiper
                keyboard
                effect='fade'
                fadeEffect={{ crossFade: true, }}
                modules={[EffectFade, Pagination, A11y]}
                slidesPerView={1}
                pagination={{ dynamicBullets: true, }}
                autoplay={{ delay: 8000 }} loop
            >
                <SwiperSlide className="w-full rounded-sm">
                    <Image classNames={{ img: "object-cover h-[12em] md:h-[20em] xl:h-[24em] rounded" }} radius='none'
                        width="100%"
                        src="/images/geniustechspace.jpg"
                        fallbackSrc="https://via.placeholder.com/300x200"
                        alt="NextUI Image with fallback"
                    />
                </SwiperSlide>

                <SwiperSlide className="w-full rounded-sm">
                    <Image classNames={{ img: "object-cover h-[12em] md:h-[20em] xl:h-[24em] rounded" }} radius='none'
                        width="100%"
                        src="/images/timeflies.png"
                        fallbackSrc="https://via.placeholder.com/300x200"
                        alt="NextUI Image with fallback"
                    />
                </SwiperSlide>

                <SwiperSlide className="w-full rounded-sm">
                    <Image classNames={{ img: "object-cover h-[12em] md:h-[20em] xl:h-[24em] rounded" }} radius='none'
                        width="100%"
                        src="/images/geniustechspace.jpg"
                        fallbackSrc="https://via.placeholder.com/300x200"
                        alt="NextUI Image with fallback"
                    />
                </SwiperSlide>

                <SwiperSlide className="w-full rounded-sm">
                    <Image classNames={{ img: "object-cover h-[12em] md:h-[20em] xl:h-[24em] rounded" }} radius='none'
                        width="100%"
                        src="/images/timeflies.png"
                        fallbackSrc="https://via.placeholder.com/300x200"
                        alt="NextUI Image with fallback"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}


export const ShowcaseBreadCrum = () => {
    return (
        <section className='card min-h-24 rounded-md p-3'>
            bb
        </section>
    );
}
