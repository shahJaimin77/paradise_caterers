"use client"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function VenueData() {
    // Validation schema using Yup
    const validationSchema = Yup.object({
        venueName: Yup.string().required("Venue Name is required"),
        venueAddress: Yup.string().required("Address is required"),
        googleMapsLink: Yup.string().url("Invalid URL format").required("Google Maps Link is required"),
    })

    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <div className="addNeeVenueData rounded-[4px]">
            <h2 className="text-xl font-semibold mb-2">Add New Venue</h2>
            <Formik
                initialValues={{ venueName: "", venueAddress: "", googleMapsLink: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className="space-y-4 grid grid-cols-2 gap-3">
                        <div className="relative">
                            <label className="block mb-1">Venue Name</label>
                            <Field
                                type="text"
                                name="venueName"
                                className="w-full px-3 py-2 border rounded"
                            />
                            <ErrorMessage
                                name="venueName"
                                component="div"
                                className="error"
                            />
                        </div>
                        <div className="relative">
                            <label className="block mb-1">Address</label>
                            <Field
                                type="text"
                                name="venueAddress"
                                className="w-full px-3 py-2 border rounded"
                            />
                            <ErrorMessage
                                name="venueAddress"
                                component="div"
                                className="error"
                            />
                        </div>
                        <div className='col-span-2 relative'>
                            <label className="block mb-1">Google Maps Link</label>
                            <Field
                                type="url"
                                name="googleMapsLink"
                                className="w-full px-3 py-2 border rounded"
                            />
                            <ErrorMessage
                                name="googleMapsLink"
                                component="div"
                                className="error"
                            />
                        </div>
                        <button
                            type="submit"
                            className="col-span-2 button btn-primary uppercase flex gap-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                <path fillRule="evenodd" fill="#fff" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                            </svg> Save
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
