import Image from 'next/image';
import ModalImage from "react-modal-image";

const ImageGrid = () => (
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
            {/* <ModalImage
            small={'/images/1.png'}
            large={'/images/1.png'}
            alt="Hello World!"
        />
        <ModalImage
            small={'/images/2.png'}
            large={'/images/2.png'}
            alt="Hello World!"
        /> */}
            <ModalImage
                small={'/images/1.webp'}
                large={'/images/1.webp'}
                alt="Image!" />
            {/* <Image src="/images/1.webp" className="img" alt="Cupcake" width={1000} height={1000} /> */}
            <div>
                <div className="grid-container-inner">
                    <ModalImage
                        small={'/images/3.webp'}
                        large={'/images/3.webp'}
                        alt="Image!"
                        className='w-full'
                    />
                    <ModalImage
                        small={'/images/4.webp'}
                        large={'/images/4.webp'}
                        alt="Image!"
                    />
                    {/* <Image src="/images/3.webp" className="img" alt="Banquet Hall" width={1000} height={1000} />
        <Image src="/images/4.webp" className="img" alt="Candy" width={1000} height={1000} /> */}
                </div>
                <div className="grid-container-inner">
                    <ModalImage
                        small={'/images/5.webp'}
                        large={'/images/5.webp'}
                        alt="Image!"
                    />
                    <ModalImage
                        small={'/images/6.webp'}
                        large={'/images/6.webp'}
                        alt="Image!"
                        className='w-full'
                    />
                    {/* <Image src="/images/5.webp" className="img" alt="Dessert" width={1000} height={1000} />
                    <Image src="/images/6.webp" className="img" alt="Cake" width={1000} height={1000} /> */}
                </div>
            </div>
            <ModalImage
                small={'/images/2.webp'}
                large={'/images/2.webp'}
                alt="Image!"
            />
            {/* <Image src="/images/2.webp" className="img" alt="Drinks" width={1000} height={1000} /> */}
        </div>

        {/* Mobile grid structure */}
        <div className="grid-container-mobile">
            <div className="grid-container-mobile-inn">
                {/* <Image src="/images/1.webp" className="img" alt="Cupcake" width={1000} height={1000} /> */}
                <ModalImage
                    small={'/images/1.webp'}
                    large={'/images/1.webp'}
                    alt="Image!"
                    className='w-full'
                />
                <div className="grid-container-inner">
                    {/* <Image src="/images/3.webp" className="img" alt="Banquet Hall" width={1000} height={1000} />
                    <Image src="/images/4.webp" className="img" alt="Candy" width={1000} height={1000} /> */}
                    <ModalImage
                        small={'/images/3.webp'}
                        large={'/images/3.webp'}
                        alt="Image!"
                    // className='w-full'
                    />
                    <ModalImage
                        small={'/images/4.webp'}
                        large={'/images/4.webp'}
                        alt="Image!"
                    />
                </div>
            </div>
            <div className="grid-container-mobile-inn">
                <div className="grid-container-inner">
                    {/* <Image src="/images/5.webp" className="img" alt="Dessert" width={1000} height={1000} />
                    <Image src="/images/6.webp" className="img" alt="Cake" width={1000} height={1000} /> */}
                    <ModalImage
                        small={'/images/5.webp'}
                        large={'/images/5.webp'}
                        alt="Image!"
                    />
                    <ModalImage
                        small={'/images/6.webp'}
                        large={'/images/6.webp'}
                        alt="Image!"
                    // className='w-full'
                    />
                </div>
                {/* <Image src="/images/2.webp" className="img" alt="Drinks" width={1000} height={1000} /> */}
                <ModalImage
                    small={'/images/2.webp'}
                    large={'/images/2.webp'}
                    alt="Image!"
                    className='w-full'
                />
            </div>
        </div>
    </>
);

export default ImageGrid;
