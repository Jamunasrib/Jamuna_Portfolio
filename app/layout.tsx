import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jamuna Sri B | Software Developer",
  description: "Portfolio of Jamuna Sri B, 2026 Computer Science graduate and software developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
