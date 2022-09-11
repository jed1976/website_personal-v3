import { Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { Event } from "../components/Event.tsx";
import { Section } from "../components/Section.tsx";
import { Resume as data } from "../static/resume.ts";

const SEP = ", ";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{data["p-name"]}</title>
      </Head>

      <h1 class="sr-only">{data["p-name"]}</h1>

      <main class="bg-gray-100 font-mono text-gray-600 text-sm">
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
                  <a class="p-skill underline" href={skill["u-url"]} target="_blank">{skill["p-name"]}</a>
                  {data["p-skills"] && index < data["p-skills"].length - 1 ? SEP : null}
                </Fragment>
              )}
            </Fragment>
          </Section>
        </div>
      </main>
    </Fragment>
  );
}
