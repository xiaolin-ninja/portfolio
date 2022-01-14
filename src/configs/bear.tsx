import { FaPaw } from "react-icons/fa";
import {
  GiBoombox,
  GiNinjaVelociraptor,
  GiVanillaFlower,
  GiCommercialAirplane
} from "react-icons/gi";
import { SiSalesforce, SiHeroku, SiVault } from "react-icons/si";
import { GoRepo, GoBrowser, GoTerminal } from "react-icons/go";

import { BearData } from "../types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: <FaPaw />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <GiNinjaVelociraptor />,
        excerpt: "What I bring to the table: Interdisciplinary..."
      },
      {
        id: "synopsis",
        title: "Synopsis",
        file: "markdown/synopsis.md",
        icon: <GiBoombox />,
        excerpt: "Now this is the story all about how my life..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <GoBrowser />,
        excerpt: "This site was inspired by macOS..."
      }
    ]
  },
  {
    id: "professional",
    title: "Professional",
    icon: <GoTerminal />,
    md: [
      {
        id: "waypoint",
        title: "HashiCorp Waypoint",
        file: "https://raw.githubusercontent.com/hashicorp/waypoint/main/README.md",
        icon: <SiVault />,
        excerpt: "Waypoint is an open source solution...",
        link: "https://github.com/hashicorp/waypoint"
      },
      {
        id: "heroku",
        title: "Heroku Web Services",
        file: "markdown/salesforce.md",
        icon: <SiHeroku />,
        excerpt: "Heroku is a platform as a service (PaaS)...",
        link: "https://devcenter.heroku.com/articles/platform-api-reference"
      },
      {
        id: "salesforce",
        title: "Salesforce Evergreen",
        file: "https://raw.githubusercontent.com/heroku-examples/evergreen-function-circleci/main/README.md",
        icon: <SiSalesforce />,
        excerpt: "Evergreen function is a new serverless environment...",
        link: "https://developer.salesforce.com/blogs/2019/11/introducing-salesforce-evergreen"
      }
    ]
  },
  {
    id: "project",
    title: "Personal",
    icon: <GoRepo />,
    md: [
      {
        id: "whatsapptunneler",
        title: "WhatsApp Tunneler",
        file: "https://raw.githubusercontent.com/xiaolin-ninja/WhatsAppTunneler/main/README.md",
        icon: <GiCommercialAirplane />,
        excerpt: "Bypass in-flight WiFi firewall by tunneling traffic...",
        link: "https://github.com/xiaolin-ninja/WhatsAppTunneler"
      },
      {
        id: "budbud",
        title: "BudBud",
        file: "https://raw.githubusercontent.com/xiaolin-ninja/BudBud/master/README.md",
        icon: <GiVanillaFlower />,
        excerpt: "BudBud, a buddy for your bud.",
        link: "https://github.com/xiaolin-ninja/BudBud"
      }
    ]
  }
];

export default bear;
