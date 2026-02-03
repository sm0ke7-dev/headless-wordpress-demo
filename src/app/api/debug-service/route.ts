import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch just the chronic pain management service
    const res = await fetch('http://physio-physical-therapy.local/wp-json/wp/v2/service?slug=chronic-pain-management');

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch', status: res.status });
    }

    const data = await res.json();

    // Return raw JSON so we can see exactly what WordPress is sending
    return NextResponse.json(data, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) });
  }
}
