import React from 'react'
import ContactForm from './ContactForm'

const AddressForm = () => {
    return (
        <>
            <div className="addtessWithForm relative">
                <div className="addtessWithFormParent grid grid-cols-2 relative">
                    <div className="addtessWithFormL">
                        <div className="address">
                            <h4>XYZ Ground</h4>
                            <p>A/33, Shop No.3, Sumangal CHS LTD, Anand Nagar, Dahisar (East).Mumbai - 400 068. India.</p>
                            <button className="button b-black">Get Directions</button>
                        </div>
                        <div className="address">
                            <h4>XYZ Ground</h4>
                            <p>A/33, Shop No.3, Sumangal CHS LTD, Anand Nagar, Dahisar (East).Mumbai - 400 068. India.</p>
                            <button className="button b-black">Get Directions</button>
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