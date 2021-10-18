import { TerminalData } from "../types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Shirley Xiaolin Xu is a back-end engineer at HashiCorp, based in
              New York City. She spends most of her daylight hours wrestling
              Kubernetes, and evenings wondering why she's still pursuing a
              Masters of Science in Cybersecurity at NYU.
            </div>
            <div className="mt-1">
              Before domestication by the good 'ol 9-5, she spent six years
              researching the intersection of Capitalism, Socialism, and
              Sustainability. After which she lived a nomadic lifestyle and ran
              several small businesses in East Asia.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              I am passionate about sustainable development and marine
              conservation. I'm a hobbyist freediver and certified Rescue Diver,
              and volunteer annually with Project AWARE and ReefCI to clean the
              reefs and hunt invasive lionfish.
            </div>
            <div className="mt-1">
              On land, I love to hike, camp, climb, travel, and explore; I train
              for adventures with calisthenics, drink too much on the weekends,
              and stay up too late reading comics in bed.
            </div>
          </div>
        )
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:shirleyxiaolinxu@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                shirleyxiaolinxu@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/xiaolin-ninja"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/xiaolin-ninja
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/shxxu"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/shxxu
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
