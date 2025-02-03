import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Image from 'next/image'
import AddressForm from '../component/AddressForm'
import Footer from '../component/Footer'

const Venue = () => {
  return (
    <>
      <Navbar />
      <div className="pageBannerPadding">
        <Banner img={'v-banner'} title='Venue' desc='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.' />
        <div className="vanueGridMain">
          <div className="vanueGridL">
            <div className="gridVenueInn gridVenueInnMar">
              <Image src={`/images/place.png`} width={400} height={200} alt='Grid Image' className='img w-full' />
              <Image src={`/images/place.png`} width={400} height={200} alt='Grid Image' className='img w-full' />
            </div>
            <div className="gridVenueInn">
              <Image src={`/images/place.png`} width={400} height={200} alt='Grid Image' className='img w-full' />
              <Image src={`/images/place.png`} width={400} height={200} alt='Grid Image' className='img w-full' />
            </div>
          </div>
          <div className="vanueGridR">
            <Image src={`/images/place.png`} width={400} height={200} alt='Grid Image' className='img w-full h-full' />
          </div>
        </div>
      </div>
      <AddressForm />
      <Footer />
    </>
  )
}

export default Venue