"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [["/", "Home"], ["/about", "About"], ["/projects", "Projects"], ["/education", "Education"], ["/connect", "Connect"]];
export default function Navigation() { const path = usePathname(); return <header><div className="wrap navigation"><Link className="logo" href="/" aria-label="Matthew Olszewski home">MNO<span>.</span></Link><nav aria-label="Main navigation">{links.map(([href, name]) => <Link key={href} href={href} aria-current={path === href ? "page" : undefined}>{name}</Link>)}</nav></div></header>; }
