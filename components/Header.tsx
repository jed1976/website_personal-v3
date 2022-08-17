/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { HCard } from "../static/resume.ts";
import { Address } from "./Address.tsx";

export interface Props {
  contact: HCard
}

export function Header({ contact }: Props) {
  return (
    <header class={tw`hcard md:flex md:justify-between mb-8`}>
      <h2 class={tw`font-bold md:flex-1 text-gray-900 text-3xl uppercase`}>
        {contact["p-name"]}
      </h2>

      <div class={tw`md:flex-1 md:text-right text-gray-400`}>
        <Address adr={contact["p-adr"]}/>

        <a class={tw`u-email block mt-4 underline`} href={`mailto:` + contact["u-email"]} title="Send me an email">{contact["u-email"]}</a>
        <a class={tw`u-url block underline`} href={contact["u-url"]} target="_blank" title="Visit my site">{contact["u-url"]}</a>
      </div>
    </header>
  )
}
