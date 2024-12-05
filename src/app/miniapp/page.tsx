"use client";

import { useChatContext } from "src/context/miniapp-context";
import { stringToJsx } from "./string-to-jsx";
import { extractJsxCode } from "./extract-jsx";

import { PolkadotLogo } from "src/components/polkadot-logo";

export default function Miniapp() {
  const { message } = useChatContext();
  console.log("message", message);

  if (message === null) {
    return (
      <div className="w-full">
        <PolkadotLogo className={"animate-[spin_4s_linear_infinite]"} />
      </div>
    );
  }

  console.log("app", stringToJsx(extractJsxCode(message)));

  return stringToJsx(extractJsxCode(message));
}
