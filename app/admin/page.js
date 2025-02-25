'use client'
import React, { useState } from 'react'
import VenueData from '../component/VenueData';
import ImageUpload from '../component/ImageUpload';

const page = () => {
    const [activeTab, setActiveTab] = useState('venueData');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className='adminPannel'>
                <div className='galleryTabs'>
                    <ul className="flex flex-wrap relative justify-center" role="tablist">
                        <li role="presentation">
                            <button
                                className={`imageButton ${activeTab === 'venueData' ? 'active' : ''}`}
                                onClick={() => handleTabClick('venueData')}
                                role="tab"
                                aria-controls="venueData"
                                aria-selected={activeTab === 'venueData'}
                            >
                                Venue Data
                            </button>
                        </li>
                        <li role="presentation">
                            <button
                                className={`videoButton ${activeTab === 'website' ? 'active' : ''}`}
                                onClick={() => handleTabClick('website')}
                                role="tab"
                                aria-controls="website"
                                aria-selected={activeTab === 'website'}
                            >
                                Website Data
                            </button>
                        </li>
                    </ul>
                </div>
                <div id="default-tab-content">
                    <div
                        className={`${activeTab === 'venueData' ? 'block' : 'hidden'}`}
                        id="venueData"
                        role="tabpanel"
                        aria-labelledby="venueData-tab"
                    >
                        <VenueData />
                    </div>
                    <div
                        className={`${activeTab === 'website' ? 'block' : 'hidden'}`}
                        id="website"
                        role="tabpanel"
                        aria-labelledby="website-tab"
                    >
                        <ImageUpload />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page