import React from 'react'
import ContactForm from './ContactForm'
import Link from 'next/link'

const AddressForm = () => {
    return (
        <>
            <div className="addtessWithForm relative">
                <div className="addtessWithFormParent grid grid-cols-2 relative">
                    <div className="addtessWithFormL">
                        <div className="address">
                            <h4>XYZ Ground</h4>
                            <p>A/33, Shop No.3, Sumangal CHS LTD, Anand Nagar, Dahisar (East).Mumbai - 400 068. India.</p>
                            <Link href={'https://maps.app.goo.gl/BAtR4ownd8PPKsqM6'} target='_blank' className="button b-black">Get Directions</Link>
                        </div>
                        <div className="address">
                            <h4>XYZ Ground</h4>
                            <p>A/33, Shop No.3, Sumangal CHS LTD, Anand Nagar, Dahisar (East).Mumbai - 400 068. India.</p>
                            <Link href={'https://maps.app.goo.gl/BAtR4ownd8PPKsqM6'} target='_blank' className="button b-black">Get Directions</Link>
                        </div>
                    </div>
                    <div className="addtessWithFormR">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressForm