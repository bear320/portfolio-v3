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
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 techSharing for fun](/#techSharing). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
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
    "Socket.io",
    "Git",
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
      href: "https://www.tibame.com/goodjob/frontend/location/JungliCenter",
      degree: "前端工程師專業技術養成班中壢第79期",
      logoUrl: "/TibaMe.svg",
      start: "August 2022",
      end: "January 2023",
    },
    {
      school: "國立高雄科技大學",
      href: "https://ifad.nkust.edu.tw/",
      degree: "應用德語系",
      logoUrl: "NKUST.svg",
      start: "September 2016",
      end: "June 2020",
    },
    {
      school: "國立中科實驗高級中學",
      href: "https://www.nehs.tc.edu.tw/",
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
        "此專案為期兩個月，旨在打造公司的官方網站，採用最新推出的 Nuxt 3 作為核心框架，以實現卓越的效能與 SEO 表現。由於專案無後端支援，使用 Nuxt Content 作為內容管理工具，並針對 Markdown 文件進行樣式調整與專屬組件開發，以達到高度客製化的展示效果。網站樣式採用 SASS 定義，結合 RWD 設計，確保跨裝置的良好使用體驗，並透過整合 AOS 提升視覺動態效果。SEO 設定涵蓋關鍵字、描述及圖片等，並運用 Nuxt SEO 進一步強化搜尋引擎優化，打造高效能且精緻的官方網站。",
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
          type: "網站連結",
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
          type: "網站連結",
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
          type: "網站連結",
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
          type: "系統文件",
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
      description:
        "此系統專為三軍總醫院運動醫學中心量身打造，透過 Web Socket 技術實現硬體設備資訊的即時接收，讓儀表板即時呈現患者位置、生理數據、設備使用狀況及當日報到情況等關鍵資訊。系統以 Axios 串接 API，讓醫療人員能便捷檢視患者醫療記錄，並與硬體設備深度整合，支持遠端控制、即時查看復健影像及將影像投放至指定螢幕功能。同時，系統採用 Naive UI 與 SASS 打造直觀且高效的操作介面，為醫療人員提供靈活可靠的智慧醫療管理解決方案。",
      technologies: ["Typescript", "Vite", "Vue", "Vue Router", "Pinia", "Socket.io", "Axios", "Naive UI", "SASS"],
      links: [
        {
          type: " ",
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
      title: "算你好命 - 商圈活動互動遊戲",
      href: "https://destiny-decoded.netlify.app/",
      dates: "Oct 2024",
      active: false,
      description:
        "這款算命小遊戲是為彰化縣打石巷形象商圈活動設計，結合塔羅牌與網路技術，讓使用者隨時查看當日運勢。作為我自學 React 後的首個專案，使用 TypeScript 提高程式碼可維護性，React 構建應用，並利用 React Router 實現頁面切換，最後透過 Tailwind CSS 打造響應式 UI，開發週期約一週。",
      technologies: ["Typescript", "Vite", "React", "React Router", "Tailwind CSS"],
      links: [
        {
          type: "網站連結",
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
    {
      title: "KOALA+ - 團體專題",
      href: "https://tibamef2e.com/cgd103/g1/",
      dates: "Nov 2022 - Jan 2023",
      active: false,
      description: "",
      technologies: ["JavaScript", "Vue", "Vue Router", "Vuex", "Chart.js", "View UI", "SASS", "PHP", "MySQL"],
      links: [
        {
          type: "網站連結",
          href: "https://tibamef2e.com/cgd103/g1/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "程式碼",
          href: "https://github.com/bear320/KOALA_PLUS",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "網站介紹",
          href: "https://drive.google.com/drive/folders/1fEmgaFUQs50ahVwBlitKgMuD3DcOfTMX?usp=sharing",
          icon: <Icons.document className="size-3" />,
        },
      ],
      image: "",
      video: "/koala+.mp4",
    },
    {
      title: "GERCERY 德式選物店 - 個人專題",
      href: "https://bear320.github.io/GERCERY/",
      dates: "Oct 2022 - Nov 2022",
      active: false,
      description:
        "這個網站是我在學習 HTML、CSS 和 JavaScript 後，人生中親手打造的第一個網站，同時也是培訓班的個人專題。從構思網站架構與目標受眾，到制定設計規範、設計 Wireframe 和 Mockup，再到網站開發，整個過程全由我一手完成。這段期間雖然充滿挑戰，但我瘋狂汲取了大量知識與經驗，最終成功完成了一個完整的網站，並榮獲「最佳網站」第三名及「介面設計」第三名的佳績。",
      technologies: ["HTML", "CSS", "JavaScript", "Owl Carousel", "Slick"],
      links: [
        {
          type: "網站連結",
          href: "https://bear320.github.io/GERCERY/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "程式碼",
          href: "https://github.com/bear320/GERCERY",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "網站介紹",
          href: "https://drive.google.com/file/d/1cGeferRUBEvxP8xri7ax7BIVxopqiKow/view?usp=sharing",
          icon: <Icons.document className="size-3" />,
        },
      ],
      image: "",
      video: "/gercery.mp4",
    },
  ],
  techSharing: [
    {
      title: "前端開發筆記：Scroll-driven Animations",
      dates: "December 14th, 2023",
      location: "Taichung, Taiwan",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quaerat. Impedit totam tempore illo numquam, unde repellendus ratione corporis expedita?",
      image: "/medium.svg",
      links: [
        {
          title: "文章連結",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://medium.com/@aaabear320/前端開發筆記-scroll-driven-animations-8b68242ad300",
        },
      ],
    },
    {
      title: "Learn Vitest from scratch",
      dates: "December 13th, 2023",
      location: "Taichung, Taiwan",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quaerat. Impedit totam tempore illo numquam, unde repellendus ratione corporis expedita?",
      image: "/gamma.webp",
      links: [
        {
          title: "簡報連結",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gamma.app/docs/Learn-Vitest-from-scratch-wbw6v94shjbj5s3",
        },
      ],
    },
    {
      title: "前端開發筆記：Firebase + Github Actions 自動部署＆Github Actions Secrets",
      dates: "June 25th, 2023",
      location: "Taichung, Taiwan",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quaerat. Impedit totam tempore illo numquam, unde repellendus ratione corporis expedita?",
      image: "/medium.svg",
      links: [
        {
          title: "文章連結",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://medium.com/@aaabear320/前端開發筆記-firebase-github-actions-自動部署-github-actions-secrets-e25543ee3f2",
        },
      ],
    },
  ],
} as const;
