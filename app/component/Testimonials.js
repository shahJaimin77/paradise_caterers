'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <div className='testimonialMain bg-[#F8F8F8]'>
            <h2 className="title text-center">Client Testimonials</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                loop={true}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="sliderInner">
                        <Image src={'/images/comma.svg'} width={54} height={46} alt='Comma' className='img' />
                        <p>Paradise caterers have been a part of our family functions for years. Every function has been lit with their tasty and finger-licking food. Not only do they serve with full care and most appropriate and hygienic way, their attentive staff also plays a big role in such a satisfactory work.</p>
                        <h2>Dr. Ajay Shah</h2>
                        <span>Dr. Ajay Shah`s Pathology Laboratory</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderInner">
                        <Image src={'/images/comma.svg'} width={54} height={46} alt='Comma' className='img' />
                        <p>Paradise caterers have been a part of our family functions for years. Every function has been lit with their tasty and finger-licking food. Not only do they serve with full care and most appropriate and hygienic way, their attentive staff also plays a big role in such a satisfactory work.</p>
                        <h2>Dr. Ajay Shah</h2>
                        <span>Dr. Ajay Shah`s Pathology Laboratory</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliderInner">
                        <Image src={'/images/comma.svg'} width={54} height={46} alt='Comma' className='img' />
                        <p>Paradise caterers have been a part of our family functions for years. Every function has been lit with their tasty and finger-licking food. Not only do they serve with full care and most appropriate and hygienic way, their attentive staff also plays a big role in such a satisfactory work.</p>
                        <h2>Dr. Ajay Shah</h2>
                        <span>Dr. Ajay Shah`s Pathology Laboratory</span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonials