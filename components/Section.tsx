import { h } from "preact";

export interface Props {
  children?: h.JSX.Element;
  title: string;
}

export function Section({ children, title }: Props) {
  return (
    <section class="md:flex mb-5">
      <h3 class="font-bold leading-loose mb-2 md:w-36 text-gray-500">{title}</h3>
      <div class="flex-1">
        {children}
      </div>
    </section>
  )
}
