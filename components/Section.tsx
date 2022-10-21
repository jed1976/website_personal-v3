import { h } from "preact";

export interface Props {
  children?: h.JSX.Element;
  title: string;
}

export function Section({ children, title }: Props) {
  return (
    <section class="mb-5">
      <h2 class="font-bold leading-loose mb-2 md:w-36 text-uppercase">{title}</h2>
      {children}
    </section>
  )
}
