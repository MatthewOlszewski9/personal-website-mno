import Image from "next/image";

type IconName = "github" | "linkedin" | "instagram" | "phone" | "email";

const icons: Record<IconName, { src: string; alt: string }> = {
  github: { src: "/contact-github.png", alt: "GitHub" },
  instagram: { src: "/contact-instagram.png", alt: "Instagram" },
  linkedin: { src: "/contact-linkedin.png", alt: "LinkedIn" },
  phone: { src: "/contact-phone.png", alt: "Phone" },
  email: { src: "/contact-email.png", alt: "Email" },
};

export default function ContactIcon({ name }: { name: IconName }) {
  const icon = icons[name];
  return <span className={`brand-glyph image-glyph image-glyph-${name}`} aria-hidden="true"><Image src={icon.src} alt={icon.alt} width={128} height={128} sizes="58px" /></span>;
}
