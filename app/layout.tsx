import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "./navigation";
import "./globals.css";
import "./motion.css";
export const metadata: Metadata = { title: { default: "Matthew Olszewski | People-Centered Solutions", template: "%s | Matthew Olszewski" }, description: "Matthew Olszewski: Computer Science and Engineering senior at Ohio State, focused on people-centered solutions." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Navigation /><main id="main">{children}</main><footer><div className="wrap footer"><Link className="logo" href="/">MNO<span>.</span></Link><p>Matthew Olszewski</p><Link href="/connect">Let&apos;s connect &rarr;</Link></div></footer></body></html>;
}
