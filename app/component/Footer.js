import React from 'react'
import ContactUs from './ContactUs'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="contactUsBg">
                    <ContactUs />
                </div>
                <div className="bg-[#0B0D0F] mainFooterParent">
                    <div className="mainFooter flex justify-between align-start">
                        <div className="flexFull flex justify-center footerQuickLinks">
                            <ul className='grid grid-cols-2 gap-y-5 gap-6 content-start'>
                                <li><Link href="/" className='text-white'>Home</Link></li>
                                <li><Link href="/" className='text-white'>About Us</Link></li>
                                <li><Link href="/" className='text-white'>Contact Us</Link></li>
                                <li><Link href="/" className='text-white'>Gallery</Link></li>
                                <li><Link href="/" className='text-white'>Venue</Link></li>
                            </ul>
                        </div>
                        <div className="flexFull footerLogo flex justify-center">
                            <Image src={'/images/logo_f.svg'} alt='Logo Footer' className='img' width={220} height={170} />
                        </div>
                        <div className="flexFull footerDesc">
                            <p>Welcome to the lip smacking abode of Paradise Caterers. Where we cater to your culinary needs and tickle your taste-buds with our enormous spread comprising over 1000 different food items. From Desi to Videsi, our menu boasts of a wide array of dishes that suit any and every occasion.</p>
                            <button className="button btn-golden">
                                Get Quote
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer