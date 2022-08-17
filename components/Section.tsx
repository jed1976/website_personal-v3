/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export interface Props {
  children?: h.JSX.Element;
  title: string;
}

export function Section({ children, title }: Props) {
  return (
    <section class={tw`md:flex mb-5`}>
      <h3 class={tw`font-bold mb-2 md:w-36 text-gray-400`}>{title}</h3>
      <div class={tw`flex-1`}>
        {children}
      </div>
    </section>
  )
}
