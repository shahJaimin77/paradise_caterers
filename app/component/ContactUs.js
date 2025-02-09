import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactUs = () => {
    return (
        <div className="grid grid-cols-2 gap-[183px] contactUsComponent">
            <div className="contactUsComponentL">
                <h4>Contact Us</h4>

                <div className="grid grid-cols-2 gap-x-[50px] gap-y-[64px] contactDetailsMargin">
                    <div className="dataInner">
                        <span>Email ID</span>
                        <a href="mailto:paradisecaterers09@gmail.com">paradisecaterers09@gmail.com</a>
                    </div>
                    <div className="dataInner">
                        <span>Phone Number</span>
                        <div className="flex gap-2">
                            <a href="tel:+918369545550">+91 83695 45550</a> |
                            <a href="tel:+ 917506751991">+ 91 75067 51991</a>
                        </div>
                    </div>
                    <div className="dataInner col-span-2">
                        <span>Address</span>
                        <p>A/33, Shop No.3, Sumangal CHS LTD, Anand Nagar, Dahisar (East). <br /> Mumbai - 400 068. India.</p>
                        <Link href={'https://maps.app.goo.gl/BAtR4ownd8PPKsqM6'} target='_blank' className='button btn-golden'>Get Directions</Link>
                    </div>
                </div>

                <div className="socialLinks">
                    <span>Follow us</span>
                    <div className="flex gap-[11px]">
                        <Link href="#" className="socialIcon facebook">
                            <Image src={'/images/fb.svg'} alt='Icon' className='img' width={24} height={24} />
                        </Link>
                        <Link href="#" className="socialIcon instagram">
                            <Image src={'/images/ig.svg'} alt='Icon' className='img' width={24} height={24} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="contactUsComponentR">
                {/* <Image src={'/images/place.png'} alt='Icon' className='img placeHolder' width={548} height={496} /> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.6341507054976!2d72.8633389!3d19.254769799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e5431a1437%3A0x8fc5b305ca4fb5ef!2sVIDYA%20MANDIR%20BANQUET%20HALL%20-%20Paradise%20Caterers!5e0!3m2!1sen!2sin!4v1738951735619!5m2!1sen!2sin" width="548" height="496" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default ContactUs