import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import ContactUs from '../component/ContactUs'
import AddressForm from '../component/AddressForm'
import Banner from '../component/Banner'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <Navbar />

            <div className="pageBannerPadding">
                <Banner img={'c-banner'} title='Contact Us' />
                <div className="contactUsPage">
                    <ContactUs />
                </div>
            </div>
            <AddressForm />
            <Footer />
        </>
    )
}

export default page