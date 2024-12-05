"use client";

import { stringToJsx } from "../miniapp/string-to-jsx";
import { extractJsxCode } from "../miniapp/extract-jsx";

import { EXAMPLE_RESPONSE } from "./example-response";

export default function Miniapp() {
  return stringToJsx(extractJsxCode(EXAMPLE_RESPONSE));
}
