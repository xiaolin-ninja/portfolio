import { FaPaw } from "react-icons/fa";
import {
  GiBoombox,
  GiNinjaVelociraptor,
  GiVanillaFlower,
  GiCommercialAirplane
} from "react-icons/gi";
import { GoRepo, GoBrowser } from "react-icons/go";

import { BearData } from "../types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: <FaPaw />,
    md: [
      {
        id: "synopsis",
        title: "Synopsis",
        file: "markdown/synopsis.md",
        icon: <GiBoombox />,
        excerpt: "Now this is the story all about how my life..."
      },
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <GiNinjaVelociraptor />,
        excerpt: "What I bring to the table: Interdisciplinary..."
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
    id: "project",
    title: "Projects",
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
