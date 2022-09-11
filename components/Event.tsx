import { Fragment } from "preact";
import { HEvent } from "../static/resume.ts";

export interface Props {
  event: HEvent
}

export function Event({ event }: Props) {
  return (
    <article class="h-event last:mb-0 mb-5">
      <h3 class="font-bold leading-loose text-gray-900">
        {event["dt-start"]}-{event["dt-end"]}:&nbsp;
        {event["p-name"] ? <Fragment>{event["p-name"]}, </Fragment> : null}
        {event["p-location"] && event["p-location"]["u-url"] ? <a class="underline" href={event["p-location"]["u-url"]} target="_blank">{event["p-location"]["p-name"]}</a> : event["p-location"] && event["p-location"]["p-name"]}
      </h3>
      {event["p-summary"] ? <p>{event["p-summary"]}</p> : null}
    </article>
  )
}
