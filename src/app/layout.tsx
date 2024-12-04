import type { Metadata } from "next";
import { ChatProvider } from "src/context/miniapp-context";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "400", "600", "900"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Polkadot Factory",
  description:
    "Create an UI that interacts with Polkadot chains in 5 seconds instead 1 month",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={unbounded.className}>
        <ChatProvider>{children}</ChatProvider>
      </body>
    </html>
  );
}
