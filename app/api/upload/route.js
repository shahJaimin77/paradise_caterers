import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import FormData from 'form-data'; // You need the `form-data` package to handle multipart requests
import fs from 'fs';
import { IncomingForm } from 'formidable';

// Disable the default body parser since we need to handle the file upload manually
export const config = {
  api: {
    bodyParser: false,  // Disable default body parsing to handle it manually
  },
};

export async function POST(request) {
  const form = new IncomingForm(); // Formidable will help parse the multipart/form-data
  const formData = {};

  return new Promise((resolve, reject) => {
    form.parse(request, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form data:', err);
        return reject(new NextResponse('Failed to parse form data', { status: 500 }));
      }

      // Assuming we only have one file uploaded
      const file = files.file[0]; // Use the correct key here (e.g., 'file' or any field name you're using)

      try {
        // Read the file and upload it to Vercel Blob
        const fileBuffer = fs.readFileSync(file.filepath);
        const { url, blob } = await put(fileBuffer, {
          contentType: file.mimetype, // Set content type from the file's mime type
          access: 'public',           // Make the file publicly accessible
        });

        return resolve(NextResponse.json({ uploadUrl: url, blobUrl: blob.url }));
      } catch (uploadError) {
        console.error('Error uploading file to Vercel Blob:', uploadError);
        return reject(new NextResponse('Failed to upload file', { status: 500 }));
      }
    });
  });
}
