import { NextRequest, NextResponse } from "next/server";

// SYSTEM_PROMPT left as docs, but currently not used in mock flow.
const SYSTEM_PROMPT = `You are an AI assistant representing Neeraj Ruwali's portfolio and projects...`;

const REQUEST_TIMEOUT_MS = 5000; // 5 seconds - avoids hanging fetch

// Temporary mocked API response for local dev / debugging.
// Replace this with real OpenAI/OpenRouter logic once compilation/stability is verified.
async function getMockResponse(message: string) {
    // Simulate quick response path (no external calls)
    return {
        reply: `API working ✅ (mock response). Received: ${message}`,
    };
}

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body = await request.json();
        const { message } = body;

        if (!message || typeof message !== "string" || message.trim().length === 0) {
            return NextResponse.json(
                { error: "message must be a non-empty string" },
                { status: 400 }
            );
        }

        // Safety note: replace this logic with real API call after debugging.
        // Avoid direct fetch in route while debugging compilation hang.
        const mock = await getMockResponse(message.trim());

        return NextResponse.json({ success: true, ...mock }, { status: 200 });
    } catch (err) {
        console.error("🚨 /api/chat POST error:", err);

        if (err instanceof SyntaxError) {
            return NextResponse.json(
                { error: "Invalid JSON payload" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// Optional health check. Always fast and deterministic.
export async function GET() {
    return NextResponse.json(
        {
            status: "ok",
            message: "API route healthy",
            endpoint: "/api/chat",
            usage: "POST { message: string }",
        },
        { status: 200 }
    );
}
