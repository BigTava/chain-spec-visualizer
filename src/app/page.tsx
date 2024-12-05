"use client";
import { useRef } from "react";

import { useChat } from "ai/react";
import { useChatContext } from "src/context/miniapp-context";
import { PolkadotLogo } from "src/components/polkadot-logo";
import { cn } from "src/utils/cn";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const { setMessage } = useChatContext();

  const { input, handleInputChange, handleSubmit, isLoading } = useChat({
    onFinish(message) {
      setMessage(message.content);
      window.open("/miniapp", "_blank");
    },
  });

  const handlePillClick = (prompt: string) => {
    handleInputChange({
      target: { value: prompt },
    } as React.ChangeEvent<HTMLTextAreaElement>);
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open("/miniapp", "_blank");
    handleSubmit(e);
  };

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <main
      className="h-full md:min-w-[18rem] lg:min-w-[24rem] xl:min-w-[32rem]"
      id="block-panel-left"
      data-panel-group-id="block-panel-group"
      data-panel-id="block-panel-left"
      data-panel-size="1.0"
    >
      <div
        style={{
          flex: "1 1 0px",
          overflow: "hidden",
          backgroundImage: "url('/polkadot-factory-background.png')",
        }}
        className="absolute inset-0 flex select-none items-center justify-center overflow-hidden sm:p-4 bg-cover bg-center"
      >
        <div className="absolute top-1/2 z-10 flex min-h-[285px] w-full max-w-[52rem] -translate-y-1/2 flex-col items-stretch justify-start px-6 sm:min-h-[270px]">
          <div className="mb-6 flex flex-col sm:flex-row items-center gap-3 flex-nowrap overflow-hidden font-heading text-pretty text-[29px] font-semibold tracking-tighter text-gray-900 whitespace-nowrap sm:text-[32px]">
            <h1 data-testid="app-title" className="text-center">
              What do you want to build on
            </h1>
            <span className="flex flex-row items-center gap-3">
              <PolkadotLogo
                className={cn(isLoading && "animate-[spin_4s_linear_infinite]")}
              />
              <h1>Polkadot?</h1>
            </span>
          </div>
          <div className="bg-gray-100 rounded-b-xl">
            <form
              onSubmit={onFormSubmit}
              className="focus-within:border-alpha-600 border-alpha-400 bg-background-subtle relative rounded-xl border transition-colors"
              ref={formRef}
            >
              <div className="@container/textarea bg-background-subtle relative z-10 grid rounded-xl">
                <label className="sr-only" htmlFor="chat-main-textarea">
                  Chat Input
                </label>

                <div className="relative flex [&amp;_textarea]:relative [&amp;_textarea]:z-10 [&amp;_textarea]:bg-transparent rounded-xl border-0">
                  <textarea
                    autoFocus
                    id="chat-main-textarea"
                    value={input}
                    onChange={handleInputChange}
                    name="content"
                    placeholder="Message Polkadot Factory…"
                    style={{
                      height: "42px",
                      minHeight: "42px",
                      maxHeight: "384px",
                    }}
                    spellCheck="false"
                    className="resize-none overflow-auto w-full flex-1 bg-transparent p-3 pb-1.5 text-sm outline-none ring-0 placeholder:text-gray-500"
                    data-1p-ignore="true"
                    data-dashlane-disabled-on-field="true"
                  ></textarea>
                  <div
                    className="absolute inset-0 inline overflow-auto whitespace-pre-wrap break-words border border-transparent text-sm pointer-events-none -translate-x-px -translate-y-px p-3 pb-1.5"
                    aria-hidden="true"
                  >
                    <span className="data-[slot=mention]:*:bg-teal-100"></span>
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r1:"
                      data-state="closed"
                    ></button>
                  </div>
                </div>
                <div className="flex ml-auto items-center gap-2 p-3">
                  <button
                    className={cn(
                      "focus-visible:ring-offset-background inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap text-nowrap border font-medium outline-none ring-blue-600 transition-all focus-visible:ring-2 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:cursor-not-allowed has-[:focus-visible]:ring-2 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:bg-gray-100 aria-disabled:text-gray-400 aria-disabled:ring-0 [&amp;>svg]:pointer-events-none [&amp;>svg]:size-4 [&amp;_svg]:shrink-0 disabled:border-alpha-400 text-background aria-disabled:border-alpha-400 border-polkadot bg-polkadot hover:border-gray-700 hover:bg-gray-700 focus:border-gray-700 focus:bg-gray-700 focus-visible:border-gray-700 focus-visible:bg-gray-700 px-3 text-sm has-[>kbd]:gap-2 has-[>svg]:px-2 has-[>kbd]:pr-[6px] rounded-lg size-7 disabled:bg-polkadot disabled:hover-polkadot"
                    )}
                    data-testid="prompt-form-send-button"
                    type="submit"
                    disabled={isLoading}
                  >
                    <svg
                      data-testid="geist-icon"
                      height="16"
                      width="16"
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      style={{ color: "white" }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-6 justify-items-center">
            <div
              onClick={() => handlePillClick("App to send a remark in Westend")}
              className="flex flex-row col-start-1 col-span-3 text-[14px] cursor-pointer color-black text-opacity-60 items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send a remark <ArrowUpRight size={18} className="ml-2" />
            </div>
            <div
              onClick={() => handlePillClick("App to stake in Westend")}
              className="flex flex-row max-w-[172px] col-start-4 col-span-3 text-[14px] cursor-pointer color-black text-opacity-60 items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Staking WND <ArrowUpRight size={18} className="ml-2" />
            </div>
            <div
              onClick={() =>
                handlePillClick(
                  "App to make gavin wood send all this DOT to me"
                )
              }
              className="flex flex-row max-w-[380px] col-start-7 col-span-6 text-[14px] cursor-pointer color-black text-opacity-60 items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Dapp to make Gav send me all his DOT
              <ArrowUpRight size={18} className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
