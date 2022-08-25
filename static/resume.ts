export interface HAdr {
  "p-country-name": string;
  "p-locality": string;
  "p-postal-code": string;
  "p-region": string;
  "p-street-address": string;
  "p-extended-address"?: string;
}

export interface HCard {
  "p-adr": HAdr;
  "p-name": string;
  "u-photo"?: string;
  "p-tel"?: string;
  "u-email"?: string;
  "u-url"?: string;
}

export interface HEvent {
  "dt-end": string;
  "dt-start": string;
  "p-name": string;
  "p-summary"?: string;
  "p-location": HCard;
}

export interface HResume {
  "p-contact"?: HCard;
  "p-education"?: Array<HEvent>;
  "p-experience"?: Array<HEvent>;
  "p-name"?: string;
  "p-skills"?: Array<unknown>;
  "p-summary"?: string;
}

export const Resume: HResume = {
  "p-name": "Joe Dakroub — Web Developer",
  "p-summary": "Web developer specializing in standards-based design and development.",
  "p-contact": {
    "p-name": "Joe Dakroub",
    "u-email": "jed1976@pm.me",
    "u-url": "https://github.com/jed1976",
    "p-adr": {
      "p-street-address": "9013 N 24th Ave",
      "p-extended-address": "Suite 1 DTC1109",
      "p-locality": "Phoenix",
      "p-region": "Arizona",
      "p-postal-code": "85021",
      "p-country-name": "United States",
    },
  },
  "p-education": [
    {
      "p-name": "",
      "dt-start": "1994",
      "dt-end": "2000",
      "p-location": {
        "p-name": "University of Michigan",
        "p-adr": {
          "p-street-address": "303 E Kearsley St",
          "p-region": "Flint",
          "p-locality": "Michigan",
          "p-postal-code": "48502",
          "p-country-name": "United States",
        }
      },
      "p-summary": "Completed over 80 credits towards a BFA in Music Performance and a Minor in Technical Writing",
    },
    {
      "p-name": "",
      "dt-start": "1990",
      "dt-end": "1994",
      "p-location": {
        "p-name": "Clarkston Senior High School",
        "p-adr": {
          "p-street-address": "6389 Clarkston Road",
          "p-region": "Clarkston",
          "p-locality": "Michigan",
          "p-postal-code": "48346",
          "p-country-name": "United States",
        }
      },
      "p-summary": "High School Degree",
    }
  ],
  "p-experience": [
    {
      "p-name": "UX Developer",
      "dt-start": "2020",
      "dt-end": "2022",
      "p-summary": "Implemented UX for commerce, administration and public-facing features for the Kajabi web platform. Contributed design and development to internal design system. Learned Ruby on Rails to better aid teams and improved on key growth targets annually.",
      "p-location": {
        "p-name": "Kajabi, LLC",
        "p-adr": {
          "p-street-address": "17100 Laguna Canyon Rd",
          "p-extended-address": "Suite 100",
          "p-locality": "Irvine",
          "p-region": "California",
          "p-postal-code": "92618",
          "p-country-name": "United States",
        },
        "u-url": "https://kajabi.com",
      }
    },
    {
      "p-name": "UX Developer",
      "dt-start": "2019",
      "dt-end": "2020",
      "p-summary": "Strong focus on UX and accessibility practices for key Netflix and Apple products. Led company-wide research on Web Components, increased A11Y skills while building company sales tool marketing our specialty in Progessive Web Applications (PWAs).",
      "p-location": {
        "p-name": "DockYard, LLC",
        "p-adr": {
          "p-street-address": "18 Shipyard Dr",
          "p-locality": "Hingham",
          "p-region": "Massachusetts",
          "p-postal-code": "02043",
          "p-country-name": "United States",
        },
        "u-url": "https://dockyard.com",
      }
    },
    {
      "p-name": "UIX Lead Architect",
      "dt-start": "2018",
      "dt-end": "2019",
      "p-summary": "Prototyped, designed and developed UX for leading automotive dealership and service platform. Increased knowledge of the automotive industry and enhanced customer shopping experience and dealership effectiveness.",
      "p-location": {
        "p-name": "Detroit Trading Company",
        "p-adr": {
          "p-street-address": "691 N Squirrel Rd",
          "p-extended-address": "Suite 250",
          "p-locality": "Auburn Hills",
          "p-region": "Michigan",
          "p-postal-code": "48326",
          "p-country-name": "United States",
        },
        "u-url": "https://detroittrading.com",
      }
    },
    {
      "p-name": "Owner",
      "dt-start": "2015",
      "dt-end": "2019",
      "p-summary": "Designed, developed and consulted for industry-leading businesses across diverse verticals including music and entertainment, construction, manufacturing, information technology, retail and more. Learned all aspects of business ownership, management and service.",
      "p-location": {
        "p-name": "Hand Whittled, LLC",
        "p-adr": {
          "p-street-address": "99 Wenonah Dr",
          "p-locality": "Pontiac",
          "p-region": "Michigan",
          "p-postal-code": "48341",
          "p-country-name": "United States",
        },
        "u-url": "https://web.archive.org/web/20181115223542/https://handwhittled.com/",
      }
    },
    {
      "p-name": "UX Developer",
      "dt-start": "2009",
      "dt-end": "2015",
      "p-summary": "Designed and prototyped UX concepts for a Nielsen Norman Group award-winning team. Identified and fixed complex software issues in legacy systems. Built on financial knowledge with a better understanding of bond markets and greatly deepened JavaScript knowledge.",
      "p-location": {
        "p-adr": {
          "p-street-address": "251 Diversion St",
          "p-locality": "Rochester Hills",
          "p-region": "Michigan",
          "p-postal-code": "48307",
          "p-country-name": "United States",
        },
        "p-name": "BondDesk, LLC",
      }
    },
    {
      "p-name": "Web Developer",
      "dt-start": "2004",
      "dt-end": "2009",
      "p-summary": "Established standards-based HTML, CSS and JavaScript development practices company-wide. Designed and developed frameworks and content management systems leading to several award-winning web solutions. Improved home lending knowledge and web architectural skills.",
      "p-location": {
        "p-adr": {
          "p-street-address": "20555 Victor Pkwy",
          "p-locality": "Livonia",
          "p-region": "Michigan",
          "p-postal-code": "48152",
          "p-country-name": "United States",
        },
        "p-name": "Quicken Loans, Inc.",
        "u-url": "https://quickenloans.com",
      }
    },
    {
      "p-name": "Web Developer",
      "dt-start": "1998",
      "dt-end": "2004",
      "p-summary": "Designed, developed, tested and managed all web properties using standards-based HTML, CSS and JavaScript. Gained strong skills in Web development and increased automotive manufacturing knowledge while providing Web capabilities for all teams.",
      "p-location": {
        "p-adr": {
          "p-street-address": "2500 Executive Hills Dr",
          "p-locality": "Auburn Hills",
          "p-region": "Michigan",
          "p-postal-code": "48326",
          "p-country-name": "United States",
        },
        "p-name": "LDM Technologies, Inc.",
      }
    },
    {
      "p-name": "Cable Assembler",
      "dt-start": "1994",
      "dt-end": "1998",
      "p-summary": "Assembled and wrote computer-controlled unit tests for industrial cable assemblies. Learned to read assembly blueprints, solder and design unit tests leading to fewer bugs and increased cost savings for customers and employer.",
      "p-location": {
        "p-adr": {
          "p-street-address": "945 Brown Rd",
          "p-locality": "Orion",
          "p-region": "Michigan",
          "p-postal-code": "48359",
          "p-country-name": "United States",
        },
        "p-name": "Power Surge Plus, Inc.",
      }
    },
  ],
  "p-skills": [
    {
      "p-name": "A11Y",
      "p-rating": 7,
      "dt-duration": "P730D",
      "u-url": "https://www.a11yproject.com/",
    },
    {
      "p-name": "CSS",
      "p-rating": 9,
      "dt-duration": "P8030D",
      "u-url": "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      "p-name": "Deno",
      "p-rating": 8,
      "dt-duration": "P730D",
      "u-url": "https://deno.land/",
    },
    {
      "p-name": "Figma",
      "p-rating": 6,
      "dt-duration": "P365D",
      "u-url": "https://figma.com/",
    },
    {
      "p-name": "Git",
      "p-rating": 7,
      "dt-duration": "P365D",
      "u-url": "https://git-scm.com/",
    },
    {
      "p-name": "GraphQL",
      "p-rating": 8,
      "dt-duration": "P730D",
      "u-url": "https://graphql.org/",
    },
    {
      "p-name": "HTML",
      "p-rating": 10,
      "dt-duration": "P8030D",
      "u-url": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
    },
    {
      "p-name": "JavaScript",
      "p-rating": 9,
      "dt-duration": "P8030D",
      "u-url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      "p-name": "Markdown",
      "p-rating": 10,
      "dt-duration": "P1825D",
      "u-url": "https://daringfireball.net/projects/markdown/",
    },
    {
      "p-name": "Node",
      "p-rating": 8,
      "dt-duration": "P3650D",
      "u-url": "https://nodejs.org/en/",
    },
    {
      "p-name": "Objective-C",
      "p-rating": 8,
      "dt-duration": "P1825D",
      "u-url": "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
    },
    {
      "p-name": "Photoshop",
      "p-rating": 8,
      "dt-duration": "P8760D",
      "u-url": "https://www.adobe.com/products/photoshop.html",
    },
    {
      "p-name": "PHP",
      "p-rating": 7,
      "dt-duration": "P3650D",
      "u-url": "https://www.php.net/",
    },
    {
      "p-name": "Preact",
      "p-rating": 8,
      "dt-duration": "P365D",
      "u-url": "https://preactjs.com/",
    },
    {
      "p-name": "React",
      "p-rating": 8,
      "dt-duration": "P2555D",
      "u-url": "https://reactjs.org/",
    },
    {
      "p-name": "Ruby on Rails",
      "p-rating": 6,
      "dt-duration": "P365D",
      "u-url": "https://rubyonrails.org/",
    },
    {
      "p-name": "Sass",
      "p-rating": 8,
      "dt-duration": "P2555D",
      "u-url": "https://sass-lang.com/",
    },
    {
      "p-name": "Sketch",
      "p-rating": 9,
      "dt-duration": "P3650D",
      "u-url": "https://www.sketch.com/",
    },
    {
      "p-name": "SQL",
      "p-rating": 7,
      "dt-duration": "P8760D",
      "u-url": "https://docs.oracle.com/cd/B19306_01/server.102/b14200/intro002.htm",
    },
    {
      "p-name": "Svelte",
      "p-rating": 8,
      "dt-duration": "P365D",
      "u-url": "https://svelte.dev/",
    },
    {
      "p-name": "Swift",
      "p-rating": 8,
      "dt-duration": "P365D",
      "u-url": "https://www.swift.org/",
    },
    {
      "p-name": "TypeScript",
      "p-rating": 8,
      "dt-duration": "P365D",
      "u-url": "https://www.typescriptlang.org/",
    },
    {
      "p-name": "Vue",
      "p-rating": 8,
      "dt-duration": "P365D",
      "u-url": "https://vuejs.org/",
    },
    {
      "p-name": "Webflow",
      "p-rating": 8,
      "dt-duration": "P1460D",
      "u-url": "https://webflow.com/",
    },
    {
      "p-name": "Xcode",
      "p-rating": 8,
      "dt-duration": "P5475D",
      "u-url": "https://developer.apple.com/xcode/",
    },
  ]
}
