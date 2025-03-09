// pages/api/upload-media.js
import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

export default async function handler(req, res) {
    // Ensure only POST requests are accepted
    if (req.method === "POST") {
        const { images, videos } = req.body;

        try {
            // Upload images to Cloudinary
            const imageUploadPromises = images.map((image) => {
                return cloudinary.v2.uploader.upload(image.data_url, {
                    folder: "venue_media",
                });
            });

            const uploadedImages = await Promise.all(imageUploadPromises);

            // Upload videos to Cloudinary
            const videoUploadPromises = videos.map((video) => {
                return cloudinary.v2.uploader.upload(video.data_url, {
                    resource_type: "video",
                    folder: "venue_media/videos",
                });
            });

            const uploadedVideos = await Promise.all(videoUploadPromises);

            // Return the uploaded media URLs
            const uploadedMedia = {
                images: uploadedImages.map(item => item.secure_url),
                videos: uploadedVideos.map(item => item.secure_url),
            };

            return res.status(200).json(uploadedMedia);
        } catch (error) {
            console.error("Error uploading media:", error);
            return res.status(500).json({ error: "Failed to upload media" });
        }
    } else {
        // Return a 405 error if the method is not POST
        res.status(405).json({ error: "Method Not Allowed" });
    }
}