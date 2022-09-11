import { HCard } from "../static/resume.ts";
import { Address } from "./Address.tsx";

export interface Props {
  contact: HCard
}

export function Header({ contact }: Props) {
  return (
    <header class="hcard md:flex md:justify-between mb-8 text-black text-opacity-80">
      <h2 class="font-bold mb-4 md:flex-1 text-3xl uppercase">
        {contact["p-name"]}
      </h2>

      <div class="md:flex-1 md:text-right">
        <a class="u-email block underline" href={`mailto:` + contact["u-email"]} title="Send me an email">{contact["u-email"]}</a>
        <a class="u-url block underline" href={contact["u-url"]} target="_blank" title="Check out my work">{contact["u-url"]}</a>
      </div>
    </header>
  )
}
