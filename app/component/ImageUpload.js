import axios from "axios";
import { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";

export default function ImageUpload() {
    const [images, setImages] = useState({
        venueBanner: [],
        galleryBanner: [],
        contactBanner: [],
        venueImages: [],
        galleryImages: [],
        galleryVideos: []  // Gallery Videos section
    });

    const onChangeBanner = (imageList, banner) => {
        setImages((prevImages) => ({
            ...prevImages,
            [banner]: imageList
        }));
    };

    const onChangeVenueImages = (imageList) => {
        setImages((prevState) => ({
            ...prevState,
            venueImages: imageList
        }));
    };

    const onChangeGalleryImages = (imageList) => {
        setImages((prevState) => ({
            ...prevState,
            galleryImages: imageList
        }));
    };

    const onChangeGalleryVideos = (videoList) => {
        setImages((prevState) => ({
            ...prevState,
            galleryVideos: videoList
        }));
    };

    const onUpload = async () => {
        console.log(images, 'images')
        const formData = new FormData();

        // Add banner images to formData
        images.venueBanner.forEach((image) => {
            formData.append('venueBanner', image.file);
        });
        images.galleryBanner.forEach((image) => {
            formData.append('galleryBanner', image.file);
        });
        images.contactBanner.forEach((image) => {
            formData.append('contactBanner', image.file);
        });

        // Add venue images to formData
        images.venueImages.forEach((image) => {
            formData.append('venueImages', image.file);
        });

        // Add gallery images to formData
        images.galleryImages.forEach((image) => {
            formData.append('galleryImages', image.file);
        });

        // Add gallery videos to formData
        images.galleryVideos.forEach((video) => {
            formData.append('galleryVideos', video.file);
        });

        try {
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                alert('Upload successful!');
            } else {
                alert('Upload failed!');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return (
        <>
            <div className="addNeeVenueData">
                <h2>Banner Images</h2>
                <div className="grid grid-cols-3 gap-2">
                    {["venueBanner", "galleryBanner", "contactBanner"].map((banner, index) => (
                        <div key={index} className="dynamicBannerImage flex gap-2 flex-col items-start justify-start">
                            <h3>{banner.replace("Banner", " Banner Image")}</h3>
                            <ImageUploading
                                value={images[banner]}
                                onChange={(imageList) => onChangeBanner(imageList, banner)}
                                dataURLKey="data_url"
                            >
                                {({ imageList, onImageUpload, onImageRemoveAll, onImageRemove, isDragging, dragProps }) => (
                                    <div className="upload__image-wrapper">
                                        <button
                                            className="uploader"
                                            style={isDragging ? { color: "red" } : undefined}
                                            onClick={onImageUpload}
                                            {...dragProps}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" fill="#000" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                                            </svg>
                                            Upload Image
                                        </button>
                                        {imageList.map((image, index) => (
                                            <div key={index} className="image-item">
                                                <img src={image["data_url"] || "/placeholder.svg"} alt="" width="100" />
                                                <div className="image-item__btn-wrapper">
                                                    <button className="removeImg cursor-pointer bg-[#dc3545] w-full" onClick={() => onImageRemove(index)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path fill="#fff" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </ImageUploading>
                        </div>
                    ))}
                </div>
            </div>

            <div className="addNeeVenueData my-4">
                <h2>Venue Images</h2>
                <div className="dynamicBannerImage flex gap-2 flex-col items-start justify-start">
                    <h3>Venue Page Images <br /> <span>Note: Select the checkbox to show image on home screen </span></h3>
                    <ImageUploading
                        multiple
                        value={images.venueImages}
                        onChange={onChangeVenueImages}
                        maxNumber={5}
                        dataURLKey="data_url"
                    >
                        {({ imageList, onImageUpload, onImageRemoveAll, onImageRemove, isDragging, dragProps }) => (
                            <div className="upload__image-wrapper">
                                <button
                                    className="uploader"
                                    style={isDragging ? { color: "red" } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" fill="#000" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                                    </svg>
                                    Upload Image
                                </button>
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item relative">
                                        <img src={image["data_url"] || "/placeholder.svg"} alt="" width="100" />
                                        <div className="image-item__btn-wrapper">
                                            <button className="removeImg cursor-pointer bg-[#dc3545] w-full" onClick={() => onImageRemove(index)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="#fff" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                                                </svg>
                                            </button>
                                            <input type="checkbox" value={index} title="Show on Home Screen" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ImageUploading>
                </div>
            </div>

            {/* New Gallery Images Section */}
            <div className="addNeeVenueData my-4">
                <h2>Gallery Images</h2>
                <div className="dynamicBannerImage flex gap-2 flex-col items-start justify-start">
                    <h3>Upload Gallery Images <br /> <span>Note: You can upload multiple gallery images separately.</span></h3>
                    <ImageUploading
                        multiple
                        value={images.galleryImages}
                        onChange={onChangeGalleryImages}
                        maxNumber={10}
                        dataURLKey="data_url"
                    >
                        {({ imageList, onImageUpload, onImageRemoveAll, onImageRemove, isDragging, dragProps }) => (
                            <div className="upload__image-wrapper">
                                <button
                                    className="uploader"
                                    style={isDragging ? { color: "red" } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" fill="#000" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                                    </svg>
                                    Upload Image
                                </button>
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image["data_url"] || "/placeholder.svg"} alt="" width="100" />
                                        <div className="image-item__btn-wrapper">
                                            <button className="removeImg cursor-pointer bg-[#dc3545] w-full" onClick={() => onImageRemove(index)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="#fff" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ImageUploading>
                </div>
            </div>

            {/* New Gallery Videos Section */}
            <div className="addNeeVenueData my-4">
                <h2>Gallery Videos</h2>
                <div className="dynamicBannerImage flex gap-2 flex-col items-start justify-start">
                    <h3>Upload Gallery Videos <br /> <span>Note: You can upload videos separately from images.</span></h3>
                    <div className="upload__image-wrapper">
                        <button
                            className="uploader"
                            onClick={() => {
                                const input = document.createElement("input");
                                input.type = "file";
                                input.accept = "video/*";
                                input.onchange = (e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        const newVideo = {
                                            file,
                                            data_url: URL.createObjectURL(file)
                                        };
                                        setImages((prevState) => ({
                                            ...prevState,
                                            galleryVideos: [...prevState.galleryVideos, newVideo]
                                        }));
                                    }
                                };
                                input.click();
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                <path fillRule="evenodd" fill="#000" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                            </svg>
                            Upload Video
                        </button>
                        {images.galleryVideos.map((video, index) => (
                            <div key={index} className="video-item relative">
                                <video width="100" controls>
                                    <source src={video.data_url} type="video/mp4" />
                                </video>
                                <div className="video-item__btn-wrapper">
                                    <button className="removeImg cursor-pointer bg-[#dc3545] w-full" onClick={() => {
                                        const newVideos = images.galleryVideos.filter((_, i) => i !== index);
                                        setImages((prevState) => ({
                                            ...prevState,
                                            galleryVideos: newVideos
                                        }));
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#fff" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6zM8 9h8v10H8zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button className="button btn-primary mt-5" onClick={onUpload}>
                Upload Images & Videos
            </button>
        </>
    );
}
