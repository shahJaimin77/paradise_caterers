import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    // Fetch the most recent media entry
    const { data, error } = await supabase
      .from('media')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);
    
    if (error) throw error;
    
    return NextResponse.json({
      success: true,
      media: data[0] || {}
    });
  } catch (error) {
    console.error('Error fetching media data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch media data' },
      { status: 500 }
    );
  }
}