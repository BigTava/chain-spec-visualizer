import { NextRequest, NextResponse } from "next/server";
import { openai } from "src/config/openai";
import { z } from "zod";
import { getAndValidateRequestData } from "src/utils/get-and-validate-request-data";
import { streamText } from "ai";

export const RUNTIME = "edge";

const schema = z.object({
  prompt: z.string(),
});
export async function POST(req: NextRequest) {
  try {
    const { data, error } = await getAndValidateRequestData(req, schema);
    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Bad Request" }, { status: 400 });
    }
    const { prompt } = data;

    const { textStream } = streamText({
      model: openai.model,
      messages: [
        {
          role: "system",
          content:
            "You are an AI assistant that helps users design and build web applications. You provide clear, efficient code solutions and explanations.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    return new Response(textStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 400 }
    );
  }
}
