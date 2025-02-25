import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
// Alternatively, you could use MongoDB, Firebase, or any other database

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const { media } = await request.json();
    
    // Save to database
    // Example using Supabase:
    const { data, error } = await supabase
      .from('media')
      .insert({
        venue_banner: media.venueBanner || [],
        gallery_banner: media.galleryBanner || [],
        contact_banner: media.contactBanner || [],
        venue_images: media.venueImages || [],
        gallery_images: media.galleryImages || [],
        gallery_videos: media.galleryVideos || [],
        created_at: new Date().toISOString()
      });
    
    if (error) throw error;
    
    return NextResponse.json({
      success: true,
      media: data
    });
  } catch (error) {
    console.error('Error saving media data:', error);
    return NextResponse.json(
      { error: 'Failed to save media data' },
      { status: 500 }
    );
  }
}