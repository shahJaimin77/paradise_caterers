'use client'

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    fullName: Yup.string()
        .required('Full Name is required')
        .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Name can only contain letters.'
        )
        .min(3, 'Full Name must be at least 3 characters'),
    phoneNo: Yup.string()
        .required('Phone Number is required')
        .matches(
            /^[0-9]{10}$/,
            'Phone Number must be 10 digits'
        ),
    email: Yup.string()
        .required('Email is required')
        .email('Invalid email address'),
    message: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters'),
});

const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                fullName: '',
                phoneNo: '',
                email: '',
                message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form submitted:', values);
            }}
        >
            {({ touched, errors }) => (
                <Form>
                    <div className='relative'>
                        {/* <label htmlFor="fullName">Full Name*</label> */}
                        <Field
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Full Name*"
                        />
                        <ErrorMessage
                            name="fullName"
                            component="div"
                            className="error"
                        />
                    </div>

                    <div className='relative'>
                        {/* <label htmlFor="phoneNo">Phone No.*</label> */}
                        <Field
                            type="text"
                            id="phoneNo"
                            name="phoneNo"
                            placeholder="Phone Number*"
                        />
                        <ErrorMessage
                            name="phoneNo"
                            component="div"
                            className="error"
                        />
                    </div>

                    <div className='relative'>
                        {/* <label htmlFor="email">Email*</label> */}
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email*"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                        />
                    </div>

                    <div className='relative'>
                        {/* <label htmlFor="message">Message*</label> */}
                        <Field
                            as="textarea"
                            id="message"
                            name="message"
                            placeholder="Message*"
                        />
                        <ErrorMessage
                            name="message"
                            component="div"
                            className="error"
                        />
                    </div>

                    <div>
                        <button type="submit" className='button btn-maroon'>Get Quote</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
