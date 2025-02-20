import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const startTime = searchParams.get("start");

    // Validate timestamp
    if (!startTime || isNaN(Number(startTime))) {
      return NextResponse.json(
        { error: "Invalid start timestamp" },
        { status: 400 }
      );
    }

    const timestamp = Number(startTime);
    const now = Date.now() / 1000;

    // Reject future timestamps
    if (timestamp > now) {
      return NextResponse.json(
        { error: "Future timestamps not allowed" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        start: timestamp,
        tracked_at: Math.floor(now)
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Track API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
