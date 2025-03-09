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

    const [mediaList, setMediaList] = useState([]); // New state to store all uploaded media

    // Function to handle the change in images
    const onChangeBanner = (imageList, bannerType) => {
        setImages((prevState) => ({
            ...prevState,
            [bannerType]: imageList
        }));
        updateMediaList(imageList, bannerType);
    };

    const onChangeVenueImages = (imageList) => {
        setImages((prevState) => ({
            ...prevState,
            venueImages: imageList
        }));
        updateMediaList(imageList, "venueImage");
    };

    const onChangeGalleryImages = (imageList) => {
        setImages((prevState) => ({
            ...prevState,
            galleryImages: imageList
        }));
        updateMediaList(imageList, "galleryImage");
    };

    const updateMediaList = (imageList, mediaType) => {
        const newMediaList = imageList.map((image) => ({
            type: mediaType,
            data_url: image.data_url,
            isHomepage: false // Default to not shown on homepage
        }));

        setMediaList((prevList) => [...prevList, ...newMediaList]);
    };

    // Handle video upload
    const handleVideoUpload = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "video/*";
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const newVideo = {
                    file,
                    data_url: URL.createObjectURL(file),
                    type: "galleryVideo",
                    isHomepage: false // Default to not shown on homepage
                };

                setImages((prevState) => ({
                    ...prevState,
                    galleryVideos: [...prevState.galleryVideos, newVideo]
                }));
                setMediaList((prevState) => [...prevState, newVideo]);
            }
        };
        input.click();
    };

    // Handle checkbox change to mark media for homepage
    const handleCheckboxChange = (index) => {
        const updatedMediaList = [...mediaList];
        updatedMediaList[index].isHomepage = !updatedMediaList[index].isHomepage;
        setMediaList(updatedMediaList);
    };

    const onUpload = async () => {
        console.log("Uploaded Media List:", mediaList);
        // You can make an axios POST request here to upload the media if needed
        // axios.post('/upload', mediaList);
        // try {
        //     // Prepare the media data to send to the backend
        //     const uploadData = {
        //         images: mediaList.filter(item => item.type !== 'galleryVideo'), // Filter out the videos
        //         videos: mediaList.filter(item => item.type === 'galleryVideo')  // Only videos
        //     };

        //     console.log("Uploading Media List:", uploadData);

        //     // Send the media data to your API route (e.g., /api/upload-media)
        //     const response = await axios.post('/api/upload-media', uploadData);

        //     if (response.status === 200) {
        //         alert('Media uploaded successfully!');
        //     } else {
        //         alert('Failed to upload media');
        //     }
        // } catch (error) {
        //     console.error('Error uploading media:', error);
        //     alert('An error occurred while uploading media');
        // }
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
                                            <input
                                                type="checkbox"
                                                value={index}
                                                onChange={() => handleCheckboxChange(index)}
                                                title="Show on Home Screen"
                                            />
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
                            onClick={handleVideoUpload}
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
                                    }} >
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
