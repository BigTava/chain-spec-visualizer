import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import path from "path";
import fs from "fs/promises";

export const maxDuration = 30;

async function readPromptFromFile(): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), "/src/app/api/chat/prompt.md");
    const content = await fs.readFile(filePath, "utf-8");
    return content.trim();
  } catch (error) {
    console.error("Error reading prompt file:", error);
    return "";
  }
}

export async function POST(req: Request) {
  const { messages: promptRequest } = await req.json();

  const userPrompt = await promptRequest[0].content;
  const systemPrompt = await readPromptFromFile();
  console.log("user prompt", userPrompt);
  const result = streamText({
    model: openai("gpt-4o"),
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
      // implement your own logic here, e.g. for storing messages
      // or recording token usage
    },
  });

  return result.toDataStreamResponse();
}
