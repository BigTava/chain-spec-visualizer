import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import { getUrl } from "src/utils/get-url";

export const env = createEnv({
  /*
   * Serverside environment variables
   */
  server: {
    OPENAI_API_KEY: z.string().min(1),
  },

  /*
   * Clientside environment variables.
   */
  client: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    NEXT_PUBLIC_URL: z.preprocess((_) => getUrl(), z.string()),
  },

  /*
   * NOTE: Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   */
  runtimeEnv: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
});
