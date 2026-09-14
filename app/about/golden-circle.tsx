"use client";

import { useState } from "react";
import "./golden-circle.css";

const sections = {
  why: {
    label: "Why",
    heading: "People are the purpose.",
    text: "I want people to be at the core of my work. Technology is most meaningful to me when it responds to real needs and makes someone's experience better.",
  },
  how: {
    label: "How",
    heading: "Understand first. Then build.",
    text: "My approach starts with listening, asking questions, and understanding the people behind a problem. I bring together engineering, business, and mathematics to think through both the solution and its impact.",
  },
  what: {
    label: "What",
    heading: "People-centered solutions.",
    text: "I'm a Computer Science and Engineering senior at The Ohio State University, with minors in Business and Mathematics. I'm building a foundation for creating technology with people at its center.",
  },
};

type Section = keyof typeof sections;

export default function GoldenCircle() {
  const [selected, setSelected] = useState<Section>("why");
  const content = sections[selected];

  return (
    <section className="wrap golden-section" aria-label="My Golden Circle">
      <div className="golden-circle">
        {(["why", "how", "what"] as const).map((section) => (
          <button
            key={section}
            className={`golden-layer golden-${section}`}
            type="button"
            aria-label={`Read my ${sections[section].label}`}
            aria-pressed={selected === section}
            aria-controls="golden-detail"
            onClick={() => setSelected(section)}
          >
            <span>{sections[section].label}</span>
          </button>
        ))}
      </div>
      <div key={selected} id="golden-detail" className="golden-detail" aria-live="polite">
        <p className="eyebrow">My {content.label}</p>
        <h2>{content.heading}</h2>
        <p className="description">{content.text}</p>
      </div>
    </section>
  );
}
