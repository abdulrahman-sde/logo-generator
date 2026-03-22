import { NextRequest, NextResponse } from "next/server";

const DEFAULT_MODEL = "flux";
const DEFAULT_WIDTH = "768";
const DEFAULT_HEIGHT = "768";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const encodedPrompt = searchParams.get("prompt");

  if (!encodedPrompt) {
    return NextResponse.json({ error: "Missing prompt parameter" }, { status: 400 });
  }

  const apiKey = process.env.POLLINATIONS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "POLLINATIONS_API_KEY environment variable is not set" },
      { status: 500 }
    );
  }

  const model = searchParams.get("model") ?? DEFAULT_MODEL;
  const width = searchParams.get("width") ?? DEFAULT_WIDTH;
  const height = searchParams.get("height") ?? DEFAULT_HEIGHT;

  const params = new URLSearchParams({ model, width, height, nologo: "true" });
  const url = `https://gen.pollinations.ai/image/${encodedPrompt}?${params.toString()}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Pollinations API error: ${errorText}` },
        { status: response.status }
      );
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get("content-type") ?? "image/jpeg";

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: { "Content-Type": contentType },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: `Failed to reach Pollinations API: ${message}` },
      { status: 502 }
    );
  }
}
