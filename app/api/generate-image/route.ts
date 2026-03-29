import { NextRequest, NextResponse } from "next/server";

const DEFAULT_MODEL = "flux";
const DEFAULT_WIDTH = "1024";
const DEFAULT_HEIGHT = "1024";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const prompt = searchParams.get("prompt");

  if (!prompt) {
    return NextResponse.json({ error: "Missing prompt parameter" }, { status: 400 });
  }

  const model = searchParams.get("model") ?? DEFAULT_MODEL;
  const width = searchParams.get("width") ?? DEFAULT_WIDTH;
  const height = searchParams.get("height") ?? DEFAULT_HEIGHT;

  const params = new URLSearchParams({ model, width, height, nologo: "true" });
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?${params.toString()}`;

  try {
    const response = await fetch(url);

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
