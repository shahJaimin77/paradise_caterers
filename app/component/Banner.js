'use client';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap';

const Banner = ({ img, title, desc }) => {
    // const bannerRef = useRef(null);
    // const titleRef = useRef(null);
    // const descRef = useRef(null);

    // useEffect(() => {
    //     gsap.to(bannerRef.current, {
    //         transform: 'scaleY(1) scaleX(1)',
    //         // duration: 2,
    //     })
    // }, [bannerRef])

    return (
        <>
            {/* <div className="pageBanner relative" ref={bannerRef}> */}
            <div className="pageBanner relative">
                <Image src={`/images/${img}.webp`} width={1322} height={478} alt='Banner Image' className='img w-full' />
                <div className="pageBannerInfo">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}

export default Banner