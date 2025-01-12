import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "熊伯祥",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/avatar.webp",
  skills: [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "TypeScript",
    "Vite",
    "Vitest",
    "Vue",
    "Nuxt",
    "Vue Router",
    "Pinia",
    "React",
    "Next",
    "React Router",
    "Redux",
    "Zustand",
    "React Query",
    "Axios",
    "Tailwind CSS",
    "GSAP",
    "Zod",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "RESTful API",
    "Docker",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aaabear320@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bear320",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/熊伯祥",
        icon: Icons.linkedin,

        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@aaabear320",
        icon: Icons.medium,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "奧圖數位互動科技有限公司",
      href: "https://www.auto-aiot.com/",
      badges: [],
      location: "Taichung, Taiwan",
      title: "前端工程師 (Vue.js)",
      logoUrl: "/autoaiot.svg",
      start: "January 2024",
      end: "Now",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "脈動心聯股份有限公司",
      href: "https://www.mindnodeair.com/",
      badges: [],
      location: "Taichung Taiwan",
      title: "前端工程師 (Vue.js)",
      logoUrl: "/mindnodeair.svg",
      start: "April 2023",
      end: "January 2024",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "ProLINK International Translation Service Limited",
      href: "https://prolinktranslation.com/index.php?lang=zho",
      badges: [],
      location: "Taichung, Taiwan",
      title: "Project Coordinator",
      logoUrl: "/prolink.svg",
      start: "December 2021",
      end: "April 2022",
      description:
        "在 ProLINK International Translation Service Limited 擔任專案協調員期間，負責文件翻譯（中/英/德文）、編輯、排版、校對與文案撰寫等工作，具備基礎的 Adobe Illustrator、Photoshop 和 InDesign 使用能力，並具專案管理與多媒體製作經驗。參與專案包括香港衛生署「疫苗接種宣傳影片」製作及品牌刊物「連繫．香港2021–22」等，並協助專案管理及其他主管交辦事項。",
    },
  ],
  education: [
    {
      school: "緯育 TibaMe",
      href: "https://buildspace.so",
      degree: "前端工程師專業技術養成班",
      logoUrl: "/TibaMe.svg",
      start: "August 2022",
      end: "January 2023",
    },
    {
      school: "國立高雄科技大學",
      href: "https://uwaterloo.ca",
      degree: "應用德語系",
      logoUrl: "NKUST.svg",
      start: "September 2016",
      end: "June 2020",
    },
    {
      school: "國立中科實驗高級中學",
      href: "https://wlu.ca",
      degree: "普通科",
      logoUrl: "/NEHS@CTSP.svg",
      start: "September 2013",
      end: "June 2016",
    },
  ],
  projects: [
    {
      title: "奧圖數位互動科技有限公司 - 官方網站",
      href: "https://auto-aiot.com/",
      dates: "Jan 2024 - Now",
      active: true,
      description:
        "此專案為期兩個月，作為公司的官方網站，採用了剛推出的 Nuxt 3 作為核心框架，結合伺服器端渲染 (SSR) 與靜態站點生成 (SSG)，提供卓越的效能與 SEO 表現。由於無後端支援，使用 Nuxt Content 進行內容管理，並針對 Markdown 文件進行樣式調整與專屬組件開發，以實現高度客製化展示。網站樣式以 SASS 定義，搭配 RWD 確保跨裝置使用體驗，並整合 AOS 實現滾動動畫效果。SEO 設定包含關鍵字、描述、圖片等，並運用 Nuxt SEO 強化搜尋引擎優化。",
      technologies: [
        "Typescript",
        "Vue",
        "Nuxt",
        "Nuxt Content",
        "Nuxt Image",
        "Next Icon",
        "Nuxt SEO",
        "VueUse",
        "Pinia",
        "Vitest",
        "AOS",
        "Swiper",
        "SASS",
        "Google Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://auto-aiot.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/autoaiot.mp4",
    },
    {
      title: "脈動心聯股份有限公司 - 官方網站",
      href: "https://www.mindnodeair.com/",
      dates: "Oct 2023 - Dec 2023",
      active: true,
      description:
        "由於公司舊官網的設計風格已過時且內容長期未更新，因此由我負責開發全新官方網站。考量尚未熟悉 Nuxt 框架，我選擇使用 Vite Plugin SSR 實現伺服器端渲染 (SSR)，以提升網站的 SEO 和效能。在樣式設計方面，運用 Sass 撰寫模組化與響應式的 CSS，並結合 VueUse 提高功能開發效率。此外，專案整合了 Vue 3 Carousel 和 Particles，分別實現圖片輪播效果與粒子動畫，為網站增添視覺吸引力與互動性。",
      technologies: ["Typescript", "Vite", "Vue", "Vite Plugin SSR", "Vue 3 Carousel", "Particles", "SASS"],
      links: [
        {
          type: "Website",
          href: "https://www.mindnodeair.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/mindnodeair.mp4",
    },
    {
      title: "技職大玩JOB - 梅克獅養成遊戲",
      href: "https://www.twmakers.com.tw/web/game/game_mex.jsp#gameInId",
      dates: "Apr 2023 - Now",
      active: true,
      description:
        "當我接手該專案時，技術債已經累積至難以輕易解決的程度，各組件間高度耦合，任何改動都牽一髮而動全身，導致維運成本遠超過重構成本。為了解決這些問題，我與設計師密切合作，花了四到五個月的時間，對整個遊戲的介面設計與功能進行全面改版。這次改版不僅提升了系統的穩定性與可維護性，還引入了全新職業、新增圖鑑功能以及公告功能，讓遊戲內容更加多樣化。同時，我們開放了更多獅子的飼養選項，增強了玩家的選擇空間和遊戲的深度。隨著這些優化措施的實施，目前遊戲已經吸引了 2,145 位玩家參與，並持續增長。",
      technologies: ["Typescript", "Vite", "Vue", "Vue Router", "VueUse", "Pinia", "Axios", "SASS"],
      links: [
        {
          type: "Website",
          href: "https://www.twmakers.com.tw/web/game/game_mex.jsp#gameInId",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/maker-lion.webp",
      video: "",
    },
    {
      title: "技職大玩JOB - 互動體驗遊戲",
      href: "https://www.twmakers.com.tw/web/game/game.jsp#gameId",
      dates: "Apr 2023 - Now",
      active: true,
      description:
        "在接手專案的兩年間，我開發了六款新遊戲，包括「經營大亨」、「魔法寶石大冒險」、「快門冒險」、「夢畫奇緣」、「菜鳥出任務」及「自給自足大冒險」，遊戲內容多元且富挑戰性。初期使用 Vue 開發，後來自學 React 並成功應用於後續開發，這不僅提升了我的技術能力，還促使我思考並解決開發中的各種挑戰。至今，這六款遊戲已累積超過 7,400 次遊玩，為專案帶來了良好的成效與用戶參與度。",
      technologies: ["Typescript", "Vite", "Vue", "Vue Router", "VueUse", "Pinia", "Axios", "SASS"],
      links: [
        {
          type: "經營大亨",
          href: "https://www.twmakers.com.tw/web/game/game_in.jsp?game_id=g13#gameInId",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "魔法寶石大冒險",
          href: "https://www.twmakers.com.tw/web/game/game_in.jsp?game_id=g14#gameInId",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "快門冒險",
          href: "https://www.twmakers.com.tw/web/game/game_in.jsp?game_id=g15#gameInId",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "夢畫奇緣",
          href: "https://www.twmakers.com.tw/web/game/game_in.jsp?game_id=g16#gameInId",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "菜鳥出任務",
          href: "https://www.twmakers.com.tw/web/game/game_in.jsp?game_id=g17#gameInId",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "自給自足大挑戰",
          href: "https://www.twmakers.com.tw/web/game/game_in.jsp?game_id=g18#gameInId",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/twmakers-games.webp",
      video: "",
    },
    {
      title: "技職大玩JOB - 後台管理系統",
      href: "",
      dates: "Apr 2023 - Now",
      active: true,
      description:
        "此專案為一個後台管理系統，主要用於控管前台系統並提供數據分析及內容管理功能。主要功能包括：技職大玩 JOB 網站數據分析、Google Analytics 數據展示、電子報及寄送群組管理（CRUD 操作）、梅克獅公告及背景管理（CRUD 操作）、以及帳號管理。數據可視化方面，使用 ECharts 來呈現各項數據；而電子報與梅克獅公告則透過 Quill 富文本編輯器進行內容管理。此外，系統界面採用了 Naive UI 作為 UI 組件庫，並搭配 SASS 來進行樣式設計，以實現一個高效且易於維護的管理介面。",
      technologies: [
        "Typescript",
        "Vite",
        "Vue",
        "Vue Router",
        "Pinia",
        "Axios",
        "ECharts",
        "Vue Quill",
        "Naive UI",
        "SASS",
      ],
      links: [
        {
          type: "系統介紹",
          href: "https://gamma.app/docs/JOB--r26uza4hcudyqnw",
          icon: <Icons.document className="size-3" />,
        },
      ],
      image: "/twmakers-admin.webp",
      video: "",
    },
    {
      title: "三軍總醫院運動醫學中心 - 智慧戰情室",
      href: "",
      dates: "Apr 2023 - Now",
      active: true,
      description: "",
      technologies: ["Typescript", "Vite", "Vue", "Vue Router", "Pinia", "Axios", "Naive UI", "SASS"],
      links: [
        {
          type: "系統介紹",
          href: "https://gamma.app/docs/-c1s8mlc992ts08r",
          icon: <Icons.document className="size-3" />,
        },
        {
          type: "新聞報導",
          href: "https://www.cna.com.tw/news/ahel/202412170295.aspx",
          icon: <Icons.newspaper className="size-3" />,
        },
      ],
      image: "/war-room.webp",
      video: "",
    },
    {
      title: "算你好命",
      href: "https://destiny-decoded.netlify.app/",
      dates: "Oct 2024",
      active: false,
      description:
        "這款算命小遊戲是為彰化縣打石巷形象商圈活動設計，結合塔羅牌與網路技術，讓使用者隨時查看當日運勢。作為我自學 React 後的首個專案，使用 TypeScript 提高程式碼可維護性，React 構建應用，並利用 React Router 實現頁面切換，最後透過 Tailwind CSS 打造響應式 UI，開發週期約一週。",
      technologies: ["Typescript", "Vite", "React", "React Router", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://destiny-decoded.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "活動貼文",
          href: "https://www.facebook.com/share/p/17XgukdHtf/",
          icon: <Icons.newspaper className="size-3" />,
        },
      ],
      image: "/destiny-decoded.svg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description: "Developed a virtual reality application allowing users to see themselves in third person.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description: "Developed realtime facial microexpression analyzer using AI",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description: "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description: "Developed a mock of Windows 11 with interesting notifications and functionality",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description: "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
