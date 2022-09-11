import { Fragment } from "preact";
import { HAdr } from "../static/resume.ts";

export interface Props {
  adr: HAdr
}

export function Address({ adr }: Props) {
  return (
    <div class="h-adr">
      <span class="p-street-address">{adr["p-street-address"]}</span>
      {adr["p-extended-address"]
        ? <Fragment>, <span class="p-extended-address">{adr["p-extended-address"]}</span></Fragment>
        : null
      }

      <hr class="block invisible" />

      <span class="p-locality">{adr["p-locality"]}</span>, <span class="p-region">{adr["p-region"]}</span> <span class="p-postal-code">{adr["p-postal-code"]}</span>
    </div>
  )
}
