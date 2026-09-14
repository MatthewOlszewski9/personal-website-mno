import type { Metadata } from "next";
import ContactIcon from "./contact-icon";
import Reveal from "../reveal";
export const metadata: Metadata = { title: "Connect" };
const contacts = [
  { name: "LinkedIn", label: "Professional network", value: "matthewnolszewski", href: "https://www.linkedin.com/in/matthewnolszewski/", icon: "linkedin" as const },
  { name: "Email", label: "Send a message", value: "matthewnolszewski@gmail.com", href: "mailto:matthewnolszewski@gmail.com", icon: "email" as const },
  { name: "Phone", label: "Call or text", value: "(513) 978-3139", href: "tel:+15139783139", icon: "phone" as const },
  { name: "GitHub", label: "Code & projects", value: "@MatthewOlszewski9", href: "https://github.com/MatthewOlszewski9", icon: "github" as const },
];
export default function Connect() { return <><Reveal><section className="wrap page-heading"><p className="eyebrow">Connect / People make the difference</p><h1>New perspectives.<br />Shared possibilities.</h1><p className="lead">Interested in people-centered technology? Choose the place that works best for you.</p></section></Reveal><section className="wrap section contact-section"><Reveal><div className="contact-grid">{contacts.map((contact) => <a key={contact.name} className="contact-card" href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}><ContactIcon name={contact.icon} /><div><p className="eyebrow">{contact.label}</p><h2>{contact.name}</h2><p className="description">{contact.value}</p></div><span className="contact-arrow" aria-hidden="true">&#8599;</span></a>)}<div className="contact-card contact-pending" aria-label="Instagram profile link awaiting details"><ContactIcon name="instagram" /><div><p className="eyebrow">Social</p><h2>Instagram</h2><p className="description">Profile link coming soon</p></div></div></div></Reveal></section></>; }
