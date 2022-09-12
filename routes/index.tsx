import { Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { Event } from "../components/Event.tsx";
import { Section } from "../components/Section.tsx";
import { Resume as data } from "../static/resume.ts";

const COLORS = ["blue", "gray", "green", "indigo", "pink", "purple", "red", "yellow"];
const SEP = ", ";

function randomColor(colors: Array<string>, level = 300) {
  return `bg-${colors[Math.floor(Math.random() * colors.length)]}-${level}`;
}

export default function Home() {
  const COLOR = randomColor(COLORS);

  return (
    <Fragment>
      <Head>
        <title>{data["p-name"]}</title>
      </Head>

      <h1 class="sr-only">{data["p-name"]}</h1>

      <main class={COLOR + " font-mono pb-2 text-black text-opacity-60 text-sm"}>
        <div class="mx-auto max-w-screen-md px-4 py-8 ">
          {data["p-contact"] && <Header contact={data["p-contact"]} />}

          <Section title="Experience">
            <Fragment>
              {data["p-experience"] && data["p-experience"].map(exp =>
                <Event event={exp}/>
              )}
            </Fragment>
          </Section>

          <Section title="Education">
            <Fragment>
              {data["p-education"] && data["p-education"].map(edu =>
                <Event event={edu}/>
              )}
            </Fragment>
          </Section>

          <Section title="Skills">
            <Fragment>
              {data["p-skills"] && data["p-skills"].map((skill, index) =>
                <Fragment>
                  <a class="p-skill text-black text-opacity-80 underline" href={skill["u-url"]} target="_blank">{skill["p-name"]}</a>
                  {data["p-skills"] && index < data["p-skills"].length - 1 ? SEP : null}
                </Fragment>
              )}
            </Fragment>
          </Section>
        </div>
        <a class="inline-block ml-3" href="https://fresh.deno.dev">
          <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge-dark.svg" alt="Made with Fresh" />
        </a>
      </main>
    </Fragment>
  );
}
