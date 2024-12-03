export default function Home() {
  return (
    <main
      className="h-full md:min-w-[18rem] lg:min-w-[24rem] xl:min-w-[32rem]"
      id="block-panel-left"
      style={{ flex: "1 1 0px", overflow: "hidden" }}
      data-panel=""
      data-panel-group-id="block-panel-group"
      data-panel-id="block-panel-left"
      data-panel-size="1.0"
    >
      <div className="absolute inset-0 flex select-none items-center justify-center overflow-hidden sm:p-4">
        <div className="absolute top-1/2 z-10 flex min-h-[285px] w-full max-w-[49rem] -translate-y-1/2 flex-col items-stretch justify-start px-6 sm:min-h-[270px]">
          <div className="mb-6 flex flex-col items-center gap-6">
            <h1
              data-testid="app-title"
              className="font-heading text-pretty text-center text-[29px] font-semibold tracking-tighter text-gray-900 sm:text-[32px] md:text-[46px]"
            >
              What can I help you build?
            </h1>
          </div>
          <div className="bg-gray-100 rounded-b-xl">
            <form className="focus-within:border-alpha-600 border-alpha-400 bg-background-subtle relative rounded-xl border transition-colors">
              <div className="@container/textarea bg-background-subtle relative z-10 grid rounded-xl">
                <label className="sr-only" htmlFor="chat-main-textarea">
                  Chat Input
                </label>

                <div className="relative flex [&amp;_textarea]:relative [&amp;_textarea]:z-10 [&amp;_textarea]:bg-transparent rounded-xl border-0">
                  <textarea
                    autoFocus
                    id="chat-main-textarea"
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
                    className="focus-visible:ring-offset-background inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap text-nowrap border font-medium outline-none ring-blue-600 transition-all focus-visible:ring-2 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 disabled:ring-0 has-[:focus-visible]:ring-2 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:bg-gray-100 aria-disabled:text-gray-400 aria-disabled:ring-0 [&amp;>svg]:pointer-events-none [&amp;>svg]:size-4 [&amp;_svg]:shrink-0 disabled:border-alpha-400 text-background aria-disabled:border-alpha-400 border-gray-900 bg-gray-900 hover:border-gray-700 hover:bg-gray-700 focus:border-gray-700 focus:bg-gray-700 focus-visible:border-gray-700 focus-visible:bg-gray-700 px-3 text-sm has-[>kbd]:gap-2 has-[>svg]:px-2 has-[>kbd]:pr-[6px] rounded-lg size-7"
                    disabled
                    data-testid="prompt-form-send-button"
                    type="submit"
                  >
                    <svg
                      data-testid="geist-icon"
                      height="16"
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width="16"
                      style={{ color: "currentcolor" }}
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
        </div>
      </div>
    </main>
  );
}
