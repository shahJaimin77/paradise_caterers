'use client'

import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Banner from '../component/Banner'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const page = () => {
    const [activeTab, setActiveTab] = useState('image');
    const router = useRouter()

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div>
            <Navbar />
            <div className="pageBannerPadding">
                <Banner img={'g-banner'} title='Gallery' desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.' />
                <div className="galleryPage">
                    <div className="galleryTabs">
                        <ul
                            className="flex flex-wrap relative justify-center"
                            role="tablist"
                        >
                            <li role="presentation">
                                <button
                                    className={`imageButton ${activeTab === 'image' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('image')}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === 'image'}
                                >
                                    <Image src={'/images/gallery.svg'} alt='Icon' className='img' width={24} height={24} /> Images
                                </button>
                            </li>
                            <li role="presentation">
                                <button
                                    className={`videoButton ${activeTab === 'videos' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('videos')}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === 'videos'}
                                >
                                    <Image src={'/images/video.svg'} alt='Icon' className='img' width={24} height={24} /> Videos
                                </button>
                            </li>
                        </ul>
                        <div className="gallery-tab-content">
                            {activeTab === 'image' && (
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={24}
                                    slidesPerView={3}
                                    navigation
                                    pagination={pagination}
                                    breakpoints={{
                                        300: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 25,
                                        },
                                    }}
                                    scrollbar={{ draggable: true }}
                                >
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <Image src={'/images/1.webp'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                            <Image src={'/images/2.webp'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <Image src={'/images/2.webp'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                            <Image src={'/images/3.webp'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <Image src={'/images/4.webp'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                            <Image src={'/images/5.webp'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <Image src={'/images/place.png'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                            <Image src={'/images/place.png'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <Image src={'/images/place.png'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                            <Image src={'/images/place.png'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <Image src={'/images/place.png'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                            <Image src={'/images/place.png'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            )}
                            {activeTab === 'videos' && (
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={24}
                                    slidesPerView={3}
                                    navigation
                                    pagination={pagination}
                                    breakpoints={{
                                        300: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 25,
                                        },
                                    }}
                                    scrollbar={{ draggable: true }}
                                >
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <video controls>
                                                <source src="/videos/v1.webm" type="video/mp4" />
                                            </video>
                                            <video controls>
                                                <source src="/videos/v2.webm" type="video/mp4" />
                                            </video>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <video controls>
                                                <source src="/videos/v2.webm" type="video/mp4" />
                                            </video>
                                            <video controls>
                                                <source src="/videos/v1.webm" type="video/mp4" />
                                            </video>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <video controls>
                                                <source src="/videos/v1.webm" type="video/mp4" />
                                            </video>
                                            <video controls>
                                                <source src="/videos/v2.webm" type="video/mp4" />
                                            </video>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <video controls>
                                                <source src="/videos/v2.webm" type="video/mp4" />
                                            </video>
                                            <video controls>
                                                <source src="/videos/v1.webm" type="video/mp4" />
                                            </video>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <video controls>
                                                <source src="/videos/v1.webm" type="video/mp4" />
                                            </video>
                                            <video controls>
                                                <source src="/videos/v2.webm" type="video/mp4" />
                                            </video>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="imgVidGrp grid gap-[17px]">
                                            <Image src={'/images/place.png'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                            <Image src={'/images/place.png'} alt='Gallery Images' className='img w-full' width={365} height={222} />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            )}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page