import React, { useState, useEffect } from 'react';
// import 'react-image-lightbox/style.css'; // Import lightbox styles
// import Lightbox from 'react-image-lightbox';
import Image from 'next/image';

const ImageGrid = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [currentImage, setCurrentImage] = useState(null);

    // const images = [
    //     { src: '/images/1.png', alt: 'Cupcake' },
    //     { src: '/images/3.png', alt: 'Banquet Hall' },
    //     { src: '/images/4.png', alt: 'Candy' },
    //     { src: '/images/5.png', alt: 'Dessert' },
    //     { src: '/images/6.png', alt: 'Cake' },
    //     { src: '/images/2.png', alt: 'Drinks' },
    // ];

    // const handleImageClick = (imageUrl) => {
    //     setCurrentImage(imageUrl); // Set the current image to display in the lightbox
    //     setIsOpen(true); // Open the lightbox
    // };

    // useEffect(() => {
    //     // When the lightbox is open, set aria-hidden="true" on <body>
    //     if (isOpen) {
    //         document.body.setAttribute('aria-hidden', 'true');
    //     } else {
    //         document.body.removeAttribute('aria-hidden'); // Remove the attribute when the lightbox is closed
    //     }

    //     return () => {
    //         document.body.removeAttribute('aria-hidden'); // Clean up when component unmounts or modal is closed
    //     };
    // }, [isOpen]); // Runs whenever the `isOpen` state changes

    return (
        <>
            {/* <div className="grid-container">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={1000}
          height={1000}
          className="img"
          onClick={() => handleImageClick(images[0].src)}
        />

        <div>
          <div className="grid-container-inner">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={1000}
              height={1000}
              className="img"
              onClick={() => handleImageClick(images[1].src)}
            />
            <Image
              src={images[2].src}
              alt={images[2].alt}
              width={1000}
              height={1000}
              className="img"
              onClick={() => handleImageClick(images[2].src)}
            />
          </div>
          <div className="grid-container-inner">
            <Image
              src={images[3].src}
              alt={images[3].alt}
              width={1000}
              height={1000}
              className="img"
              onClick={() => handleImageClick(images[3].src)}
            />
            <Image
              src={images[4].src}
              alt={images[4].alt}
              width={1000}
              height={1000}
              className="img"
              onClick={() => handleImageClick(images[4].src)}
            />
          </div>
        </div>

        <Image
          src={images[5].src}
          alt={images[5].alt}
          width={1000}
          height={1000}
          className="img"
          onClick={() => handleImageClick(images[5].src)}
        />

        {isOpen && (
          <Lightbox
            mainSrc={currentImage}
            onCloseRequest={() => setIsOpen(false)} // Close the lightbox when the user clicks the close button
          />
        )}
      </div> */}

            {/* Repeat of the same structure for other images */}
            <div className="grid-container">
                <Image src="/images/1.png" className="img" alt="Cupcake" width={1000} height={1000} />
                <div>
                    <div className="grid-container-inner">
                        <Image src="/images/3.png" className="img" alt="Banquet Hall" width={1000} height={1000} />
                        <Image src="/images/4.png" className="img" alt="Candy" width={1000} height={1000} />
                    </div>
                    <div className="grid-container-inner">
                        <Image src="/images/5.png" className="img" alt="Dessert" width={1000} height={1000} />
                        <Image src="/images/6.png" className="img" alt="Cake" width={1000} height={1000} />
                    </div>
                </div>
                <Image src="/images/2.png" className="img" alt="Drinks" width={1000} height={1000} />
            </div>

            {/* Mobile grid structure */}
            <div className="grid-container-mobile">
                <div className="grid-container-mobile-inn">
                    <Image src="/images/1.png" className="img" alt="Cupcake" width={1000} height={1000} />
                    <div className="grid-container-inner">
                        <Image src="/images/3.png" className="img" alt="Banquet Hall" width={1000} height={1000} />
                        <Image src="/images/4.png" className="img" alt="Candy" width={1000} height={1000} />
                    </div>
                </div>
                <div className="grid-container-mobile-inn">
                    <div className="grid-container-inner">
                        <Image src="/images/5.png" className="img" alt="Dessert" width={1000} height={1000} />
                        <Image src="/images/6.png" className="img" alt="Cake" width={1000} height={1000} />
                    </div>
                    <Image src="/images/2.png" className="img" alt="Drinks" width={1000} height={1000} />
                </div>
            </div>
        </>
    );
};

export default ImageGrid;
