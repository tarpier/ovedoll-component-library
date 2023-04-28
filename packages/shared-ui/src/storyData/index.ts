import { toHTML } from "@portabletext/to-html";
// import { type SanityAddress } from "../components/types";

// const ADDRESS: Record<string, SanityAddress> = {
//   DEFAULT: {
//     _type: "location",
//     addressRegion: "Munich",
//     companyName: "FDTech GmbH",
//     email: "south@fdtech.de",
//     logo: "http://placekitten.com/400/300",
//     country: "South Africa",
//     name: "South",
//     postalCode: "80809",
//     streetAddress: "Schleißheimer Straße 267",
//     url: "https://fdtech.de",
//   },
// };

// const LINK_LIST = {
//   SOCIAL_MEDIA: [
//     {
//       _key: "1486594b-05a5-4040-8338-4e6875ad4111",
//       _type: "link",
//       rel: "nofollow",
//       target: "_blank",
//       href: "http://twitter.com/fdtech",
//       label: "fdtech on Twitter",
//     },
//     {
//       _key: "8f305fb5-8735-4c9c-9a90-56974a333f03",
//       _type: "link",
//       rel: "nofollow",
//       target: "_blank",
//       href: "http://instagram.com/fdtech",
//       label: "fdtech on Instagram",
//     },
//     {
//       _key: "578817e2-501a-4ef3-be0c-0452d2ff1122",
//       _type: "link",
//       rel: "nofollow",
//       target: "_blank",
//       href: "http://facebook.com/fdtech",
//       label: "fdtech on Facebook",
//     },
//     {
//       _key: "edbd77cb-75b8-43fc-b5a2-015403f12269",
//       _type: "link",
//       rel: "nofollow",
//       target: "_blank",
//       href: "http://xing.com/fdtech",
//       label: "fdtech on xing",
//     },
//     {
//       _key: "a0ce66b87ce2",
//       _type: "link",
//       rel: "nofollow",
//       target: "_blank",
//       href: "http://linkedin.com/fdtech",
//       label: "fdtech on linkedin",
//     },
//   ],
// };

const TEXT = {
  BUTTON_LABEL: ["Our Solutions", "About Us", "Write an email", "Read more"],
  TEXT: {
    SHORT:
      "Nostrud non cupidatat in labore. Eu enim sint reprehenderit fugiat. Eiusmod elit est aliqua anim laboris ex reprehenderit Lorem fugiat. Do ea aliqua magna aliqua ut commodo ut do commodo labore elit. Nostrud ad et labore sunt ad commodo duis. Duis labore veniam id sunt anim incididunt qui velit consectetur mollit dolor adipisicing deserunt. Quis duis ipsum minim.",
    MEDIUM: `In eu veniam sit consequat Lorem sint proident enim consectetur. Duis ipsum irure ad. Incididunt laborum occaecat amet magna irure laborum aute. Cillum sint amet magna tempor officia anim officia laborum tempor cillum Lorem proident cillum magna velit. Cupidatat ex qui deserunt nostrud. Magna commodo voluptate ipsum pariatur magna consequat ipsum laboris. Est anim sit elit magna.

        Laboris officia adipisicing esse dolore laborum eu tempor amet esse mollit magna commodo elit ad. Ipsum nisi anim est occaecat amet enim exercitation ea esse reprehenderit aliquip enim veniam. Nostrud aliquip deserunt ea laborum culpa magna veniam. Proident ullamco ex deserunt cupidatat aute anim sint laborum aliquip. Voluptate qui elit id laboris Lorem reprehenderit qui qui aute. Consectetur labore consequat aute sit ad Lorem tempor esse fugiat non nisi tempor adipisicing excepteur in.

        Sunt velit ipsum ullamco reprehenderit aute esse dolore nostrud laboris anim veniam officia quis id. Enim occaecat mollit amet ea proident excepteur sit elit culpa nostrud ipsum aute. In nostrud dolore Lorem voluptate consequat incididunt cillum Lorem proident. Ex pariatur eu mollit veniam.`,
    LONG: `Sint cupidatat est et exercitation occaecat ut officia Lorem eiusmod id ex proident ea. Sunt qui quis nostrud amet anim ipsum ex. Adipisicing excepteur id deserunt laborum nisi proident pariatur minim dolor ad nulla ad magna anim. Deserunt laboris ex labore in sit laborum irure eiusmod voluptate cupidatat eu ad pariatur reprehenderit. Nostrud cillum exercitation proident eu non deserunt ex magna magna. Ea non quis sunt irure. Amet sint occaecat nulla veniam incididunt do nostrud cupidatat do cupidatat eu nulla eu fugiat mollit.

        Consequat nulla ea ex id anim magna esse magna do aliqua mollit. Est aliqua aliqua ullamco pariatur duis proident sit est incididunt. Id incididunt est occaecat excepteur nulla aliquip aliquip nulla amet duis reprehenderit. Adipisicing esse ullamco amet fugiat commodo cupidatat aliquip consequat sint eu proident consequat mollit esse. Enim incididunt qui voluptate dolore duis enim anim tempor esse pariatur.

        Aliqua dolore sit exercitation dolore exercitation reprehenderit magna excepteur consectetur. Velit consectetur ea voluptate commodo occaecat consectetur nisi sint anim amet eu sit. Laboris eiusmod id irure eu aute amet nostrud do ex enim eiusmod. Esse voluptate sunt fugiat velit ex tempor adipisicing cillum laborum labore et. Laboris laboris dolor in dolor laboris eiusmod laborum. Ex quis esse ullamco ullamco culpa reprehenderit qui aliqua. Labore eiusmod elit anim magna enim aliqua quis consectetur dolor sunt. Do est labore minim ullamco veniam anim ut tempor eu dolore.

        Nisi enim aliquip Lorem esse. Laborum excepteur occaecat officia commodo eu nulla fugiat ut sit incididunt est sint. Magna consequat et elit officia nostrud dolore et amet duis esse commodo. In pariatur ex esse ullamco incididunt dolor elit commodo nostrud incididunt. Ex deserunt ex in. Esse aute laboris velit duis cillum nulla Lorem minim id dolor Lorem incididunt voluptate excepteur non.

        Nulla et occaecat anim ex excepteur. In esse exercitation laborum labore sit deserunt tempor quis culpa ex cupidatat esse voluptate fugiat. Id ea aliqua consectetur mollit cillum pariatur ex sunt excepteur sint velit adipisicing. Quis voluptate exercitation enim aliquip magna in non tempor aliquip tempor velit.

        Non laborum velit fugiat id culpa minim non nisi. Officia est mollit sint nisi velit cillum sint adipisicing aliqua tempor ad ipsum et id. Ullamco consectetur commodo anim elit culpa adipisicing laborum consequat aliqua. Ad ad anim et aute nostrud occaecat aliqua veniam dolor exercitation sunt tempor veniam incididunt id. Eiusmod do enim exercitation non. Magna consequat nisi et minim aliqua minim ad eiusmod ex aute. Pariatur duis adipisicing irure duis consectetur minim est.`,
  },
  HEADING: {
    SHORT: "Meet & join the team",
    MEDIUM: "Mobility for everyone, anytime, anywhere",
    LONG: "If you have any questions regarding applications, the HR team will be happy to help you, just send us an email.",
    SPECIAL_CHARACTER: "Meet & join the team",
  },
};

const PORTABLE_TEXT = {
  SHORT: [
    {
      _key: "e79610d7b782",
      _type: "block",
      children: [
        {
          _key: "c15b7e285cd80",
          _type: "span",
          marks: [],
          text: "Labore anim proident proident sunt enim ipsum ea voluptate ipsum fugiat ipsum in. Sit mollit anim pariatur nulla velit ullamco non veniam nulla. Nostrud dolor mollit et magna sit dolore consectetur reprehenderit. Deserunt aliquip do magna reprehenderit qui cillum cupidatat enim consectetur dolor.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
  MEDIUM: [
    {
      _key: "e79610d7b782",
      _type: "block",
      children: [
        {
          _key: "c15b7e285cd80",
          _type: "span",
          marks: [],
          text: "Labore anim proident proident sunt enim ipsum ea voluptate ipsum fugiat ipsum in. Sit mollit anim pariatur nulla velit ullamco non veniam nulla. Nostrud dolor mollit et magna sit dolore consectetur reprehenderit. Deserunt aliquip do magna reprehenderit qui cillum cupidatat enim consectetur dolor.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "1553511540db",
      _type: "block",
      children: [
        {
          _key: "d439b8be9d35",
          _type: "span",
          marks: [],
          text: "Nisi ex et veniam exercitation adipisicing do tempor reprehenderit amet. Eu cupidatat mollit labore adipisicing ut laboris adipisicing veniam labore non Lorem aliquip. Excepteur labore labore duis consequat dolore reprehenderit voluptate cupidatat aute nulla laboris sunt. Ad velit ad amet laborum occaecat anim aliquip pariatur ipsum consectetur anim quis excepteur. Pariatur irure ea excepteur. Id tempor reprehenderit Lorem pariatur consectetur sint occaecat adipisicing exercitation laboris. Aliquip qui non minim occaecat.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
  LONG: [
    {
      _key: "e79610d7b782",
      _type: "block",
      children: [
        {
          _key: "c15b7e285cd80",
          _type: "span",
          marks: [],
          text: "Labore anim proident proident sunt enim ipsum ea voluptate ipsum fugiat ipsum in. Sit mollit anim pariatur nulla velit ullamco non veniam nulla. Nostrud dolor mollit et magna sit dolore consectetur reprehenderit. Deserunt aliquip do magna reprehenderit qui cillum cupidatat enim consectetur dolor.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "1553511540db",
      _type: "block",
      children: [
        {
          _key: "d439b8be9d35",
          _type: "span",
          marks: [],
          text: "Nisi ex et veniam exercitation adipisicing do tempor reprehenderit amet. Eu cupidatat mollit labore adipisicing ut laboris adipisicing veniam labore non Lorem aliquip. Excepteur labore labore duis consequat dolore reprehenderit voluptate cupidatat aute nulla laboris sunt. Ad velit ad amet laborum occaecat anim aliquip pariatur ipsum consectetur anim quis excepteur. Pariatur irure ea excepteur. Id tempor reprehenderit Lorem pariatur consectetur sint occaecat adipisicing exercitation laboris. Aliquip qui non minim occaecat.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "4f165e33af00",
      _type: "block",
      children: [
        {
          _key: "ef23ce4cde8d",
          _type: "span",
          marks: [],
          text: "",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "68ab9fb1c384",
      _type: "block",
      children: [
        {
          _key: "f4ce94cc24db",
          _type: "span",
          marks: [],
          text: "Mollit laborum aliqua cupidatat veniam culpa quis mollit. Dolor esse quis excepteur. Officia occaecat adipisicing aliquip tempor elit anim quis proident labore quis do laborum. Cupidatat duis nostrud adipisicing esse nulla tempor exercitation dolor tempor duis consectetur occaecat ad ex sunt.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
  MINIMALRICHTEXT: [
    {
      _key: "e79610d7b782",
      _type: "block",
      children: [
        {
          _key: "c15b7e285cd80",
          _type: "span",
          marks: [],
          text: "Labore anim ",
        },
        {
          _key: "cedb0c2ef084",
          _type: "span",
          marks: ["strong"],
          text: "proident proident sunt",
        },
        {
          _key: "346db6fb666d",
          _type: "span",
          marks: [],
          text: " enim ipsum ea voluptate ipsum fugiat ipsum in. Sit mollit anim pariatur nulla velit ullamco non veniam nulla. Nostrud dolor ",
        },
        {
          _key: "8c5ab301214e",
          _type: "span",
          marks: ["em"],
          text: "mollit et magna sit dolore consectetur",
        },
        {
          _key: "40b67450819e",
          _type: "span",
          marks: [],
          text: " reprehenderit. Deserunt aliquip do ",
        },
        {
          _key: "98757893421a",
          _type: "span",
          marks: ["58f1594cdb89"],
          text: "magna reprehenderit ",
        },
        {
          _key: "c5c9edc62280",
          _type: "span",
          marks: [],
          text: "qui cillum cupidatat enim consectetur dolor.",
        },
      ],
      markDefs: [
        {
          _key: "58f1594cdb89",
          _type: "link",
          href: "#",
        },
      ],
      style: "normal",
    },
    {
      _key: "1553511540db",
      _type: "block",
      children: [
        {
          _key: "d439b8be9d35",
          _type: "span",
          marks: [],
          text: "Nisi ex et veniam exercitation adipisicing do tempor reprehenderit amet. Eu cupidatat mollit labore adipisicing ut laboris adipisicing veniam labore non Lorem aliquip. Excepteur labore labore duis consequat dolore reprehenderit voluptate cupidatat aute nulla laboris sunt. Ad velit ad amet laborum occaecat anim aliquip pariatur ipsum consectetur anim quis excepteur. Pariatur irure ea excepteur. Id tempor reprehenderit Lorem pariatur consectetur sint ",
        },
        {
          _key: "e80dea950883",
          _type: "span",
          marks: ["strong"],
          text: "occaecat adipisicing ",
        },
        {
          _key: "3dcf1a9fbf83",
          _type: "span",
          marks: [],
          text: "exercitation laboris. Aliquip qui non minim occaecat.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
    {
      _key: "f39b44809097",
      _type: "block",
      children: [
        {
          _key: "a79b8bf766e6",
          _type: "span",
          marks: [],
          text: "Mollit laborum",
        },
      ],
      level: 1,
      listItem: "bullet",
      markDefs: [],
      style: "normal",
    },
    {
      _key: "27f996dacd43",
      _type: "block",
      children: [
        {
          _key: "cdb3ca7cc513",
          _type: "span",
          marks: [],
          text: "proident labore quis do laborum",
        },
      ],
      level: 1,
      listItem: "bullet",
      markDefs: [],
      style: "normal",
    },
    {
      _key: "aa02e83f887a",
      _type: "block",
      children: [
        {
          _key: "9046d66dd2a4",
          _type: "span",
          marks: [],
          text: "Cupidatat duis",
        },
      ],
      level: 1,
      listItem: "bullet",
      markDefs: [],
      style: "normal",
    },
    {
      _key: "68ab9fb1c384",
      _type: "block",
      children: [
        {
          _key: "f4ce94cc24db",
          _type: "span",
          marks: [],
          text: "Mollit laborum aliqua cupidatat veniam culpa quis mollit. Dolor esse quis excepteur. Officia occaecat adipisicing aliquip tempor elit anim quis proident labore quis do laborum. Cupidatat duis nostrud adipisicing esse nulla tempor exercitation dolor tempor duis consectetur occaecat ad ex sunt.",
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
};

const COPY_TEXT = {
  SHORT: toHTML(PORTABLE_TEXT.SHORT, {}),
  MEDIUM: toHTML(PORTABLE_TEXT.MEDIUM, {}),
  LONG: toHTML(PORTABLE_TEXT.LONG, {}),
  MINIMALRICHTEXT: toHTML(PORTABLE_TEXT.MINIMALRICHTEXT, {}),
};

// const IMAGE_URL = {
//   "16/9": {
//     "320": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//     "640": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//     "1280": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//     "1920": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//   },
//   "4/3": {
//     "320": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//     "640": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//     "1280": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//     "1920": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//   },
//   "1/1": {
//     "320": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//     "640": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//     "1280": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//     "1920": "be200f4a03ab2b9db683fddd2d0a9cad91799b5d-1440x1336.jpg",
//   },
// } as const;

// export { TEXT, PORTABLE_TEXT, COPY_TEXT, IMAGE_URL, LINK_LIST, ADDRESS };
export {TEXT, COPY_TEXT}