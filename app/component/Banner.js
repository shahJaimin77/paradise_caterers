import Image from 'next/image'
import React from 'react'

const Banner = ({ img, title, desc }) => {
    return (
        <>
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