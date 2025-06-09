import React from "react";

export default function Footer() {
  return (
    <div className="text-xs text-center">
      Challenge by{" "}
      <Link name="Frontend Mentor" url="https://www.frontendmentor.io?ref=challenge" />
      .
      Coded by{" "}
      <Link name="Javier Espindola" url="https://github.com/Micolash89?tab=repositories" />
      .
    </div>
  );
}

export function Link({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      className="hover:underline hover:text-neutral-600 dark:hover:text-neutral-400"
    >
      {name}
    </a>
  );
}
