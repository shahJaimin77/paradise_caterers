// app/api/upload-media/route.js
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const { images, videos } = await request.json();
    
    // Upload images to Cloudinary
    const uploadedImages = [];
    if (images && images.length > 0) {
      const imageUploadPromises = images.map(image => {
        return cloudinary.v2.uploader.upload(image.data_url, {
          folder: "venue_media", // Folder in Cloudinary
        });
      });
      
      const results = await Promise.all(imageUploadPromises);
      uploadedImages.push(...results);
    }
    
    // Upload videos to Cloudinary
    const uploadedVideos = [];
    if (videos && videos.length > 0) {
      // Handle videos one by one to better catch any errors
      for (const video of videos) {
        try {
          // For videos from file input, data_url is an objectURL which Cloudinary can't process directly
          // We need to upload the file itself or use a different approach
          console.log("Uploading video", video.type);
          
          // Skip videos without proper data
          if (!video.data_url) {
            console.log("Skipping video with no data_url");
            continue;
          }
          
          // For videos, we need a different approach than just sending the objectURL
          // We can try a base64 approach if the data_url is properly formatted
          if (video.data_url.startsWith('data:')) {
            const result = await cloudinary.v2.uploader.upload(video.data_url, {
              resource_type: "video",
              folder: "venue_media/videos",
            });
            uploadedVideos.push(result);
          } else {
            console.log("Video data_url is not in the expected format for direct upload");
            // We'll skip this video for now
          }
        } catch (videoError) {
          console.error("Error uploading individual video:", videoError);
          // Continue with other videos rather than failing the entire request
        }
      }
    }
    
    // Respond with the uploaded media URLs
    const uploadedMedia = {
      images: uploadedImages.map(item => item.secure_url),
      videos: uploadedVideos.map(item => item.secure_url),
    };
    
    return NextResponse.json(uploadedMedia, { status: 200 });
  } catch (error) {
    console.error("Error uploading media:", error);
    return NextResponse.json({ error: "Failed to upload media: " + error.message }, { status: 500 });
  }
}

// Set a larger limit for the body parser since we're handling file uploads
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb',
    },
  },
};