import { openai as openaiSDK } from "@ai-sdk/openai";
import { env } from "./env";

// Create and export the OpenAI configuration
export const openai = {
  model: openaiSDK("gpt-4-turbo"),
  apiKey: env.OPENAI_API_KEY,
};
