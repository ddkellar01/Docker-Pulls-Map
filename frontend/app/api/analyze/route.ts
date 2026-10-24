import { NextResponse } from 'next/server';

export async function POST() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

  try {
    const res = await fetch(`${backendUrl}/api/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { analysis: 'Failed to trigger Gemini Pro backend analysis.' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error invoking Gemini Pro backend route:', error);
    return NextResponse.json(
      { analysis: 'Error communicating with AI engine server.' },
      { status: 500 }
    );
  }
}
