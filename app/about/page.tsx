import type { Metadata } from "next";
import Link from "next/link";
import GoldenCircle from "./golden-circle";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <section className="wrap page-heading">
        <p className="eyebrow">About / My Golden Circle</p>
        <h1>People first.<br />Purpose always.</h1>
        <blockquote className="golden-quote">
          <p>&ldquo;People don&apos;t buy what you do; they buy why you do it.&rdquo;</p>
          <cite><a href="https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action" target="_blank" rel="noreferrer">Simon Sinek, How Great Leaders Inspire Action</a></cite>
        </blockquote>
        <p className="lead">My why, how, and what all come back to the people a solution serves.</p>
      </section>
      <GoldenCircle />
      <section className="wrap section">
        <Link className="button" href="/projects">See what I&apos;m building &rarr;</Link>
      </section>
    </>
  );
}
