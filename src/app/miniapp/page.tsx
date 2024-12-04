"use client";

import { useChatContext } from "src/context/miniapp-context";
import { stringToJsx } from "./string-to-jsx";
import { extractJsxCode } from "./extract-jsx";

export default function Miniapp() {
  const { message } = useChatContext();

  console.log("message", message);

  if (message === null) {
    return <p className="text-center text-gray-500">No messages yet.</p>;
  }

  return stringToJsx(extractJsxCode(message));
}
