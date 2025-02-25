import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { fileName, contentType } = await request.json();
    
    // Generate a unique upload URL
    const { url, blob } = await put(fileName, {
      contentType,
      access: 'public',  // Make the file publicly accessible
    });

    return NextResponse.json({
      uploadUrl: url,
      blobUrl: blob.url,  // The URL where the file will be accessible after upload
    });
  } catch (error) {
    console.error('Error generating upload URL:', error);
    return NextResponse.json(
      { error: 'Failed to generate upload URL' },
      { status: 500 }
    );
  }
}
