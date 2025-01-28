import { Icons } from "@/components/icons";

export const DATA = {
  name: "熊伯祥",
  initials: "DV",
  url: "https://dillion.io",
  location: "Taichung, Taiwan 🇹🇼",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "從翻譯產業跨界成為前端工程師，致力於打造擁有優秀使用者體驗與美感的網站與應用程式，熱愛技術 💻 與設計 🎨 的完美結合！",
  summary:
    "作為一位充滿熱忱的前端工程師，我擅長將設計理念化為生動的網頁✨，並用 UI/UX 思維打磨每個互動細節，讓使用者體驗更加出色💡！對新技術充滿熱情的我，持續關注國際新趨勢🌍，不斷拓展技術視野，期待在每次突破中持續成長！🚀",
  avatarUrl: "/avatar.webp",
  skills: [
    "HTML",
    "CSS",
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
    "Sass",
    "Tailwind CSS",
    "Axios",
    "GSAP",
    "Zod",
    "i18n",
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
    {
      href: "https://drive.google.com/file/d/1rlC4dUzS7jXXA0C0Ll0ZLtPQPUNzb5dN/view?usp=drive_link",
      icon: Icons.resume,
      label: "履歷",
    },
    // { href: "/", icon: HomeIcon, label: "Home" },
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
        url: "https://www.linkedin.com/in/%E7%86%8A%E4%BC%AF%E7%A5%A5/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@aaabear320",
        icon: Icons.medium,

        navbar: true,
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
        "運用技能：TypeScript、Vue3、Nuxt3、React、Tailwind CSS、Sass。<br/>工作內容：前端頁面搭建、既有網站維護、串接 API、程式碼重構、操作系統開發、互動遊戲開發、技術文件撰寫、前端技術研究、SEO 設置。<br/>參與專案：技職大玩JOB（官網維護、互動遊戲開發）、可口可樂互動專案（闖關與抽獎系統開發）、三軍總醫院運動醫學中心（智慧戰情室分析系統開發）。",
    },
    {
      company: "脈動心聯股份有限公司",
      href: "https://www.mindnodeair.com/",
      badges: [],
      location: "Taichung, Taiwan",
      title: "前端工程師 (Vue.js)",
      logoUrl: "/mindnodeair.svg",
      start: "April 2023",
      end: "January 2024",
      description:
        "運用技能：JavaScript、TypeScript、Vue3、Sass。<br/>工作內容：前端頁面搭建、既有網站維護、串接 API、程式碼重構、後台系統開發、互動遊戲開發、前端技術研究、SEO 設置。<br/>參與專案：技職大玩JOB（官網維護、後台系統開發、互動遊戲開發與重構）、台灣國際人工智慧暨物聯網展（互動遊戲開發）、公司內部專案（官網重構與 SEO 設置、場域監控系統開發）。",
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
        "運用工具：Photoshop、Illustrator、InDesign。<br/>工作內容：文件翻譯（中、英、德文）、編輯、排版、校對、謄寫、文案寫作。<br/>參與專案：在職家庭津貼辦事處（外語計畫簡介及宣傳海報）、香港衛生署衛生防衛中心（疫苗接種外語宣傳影片）、香港品牌刊物（聯繫．香港2021-22）。",
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
      title: "Awwwards Winning Clone - 學習成果",
      href: "https://awwwards-clone.netlify.app/",
      dates: "January 2025",
      active: false,
      description:
        "在這個專案中，我參考了網路上的教學影片，逐步使用 React、Tailwind CSS 和 GSAP，重現了一個 Awwwards 獲獎網站。這個過程讓我深入學習如何運用 GSAP 實現流暢的滾動觸發動畫與內容進場效果，並且結合 Tailwind CSS 提升設計與開發的效率，確保網站在各種裝置上都能良好呈現。",
      technologies: ["Typescript", "Vite", "React", "Tailwind CSS", "GSAP"],
      links: [
        {
          type: "網站連結",
          href: "https://awwwards-clone.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/awwwards.mp4",
    },
    {
      title: "算你好命 - 商圈活動互動遊戲",
      href: "https://destiny-decoded.netlify.app/",
      dates: "October 2024",
      active: false,
      description:
        "這款算命小遊戲是為彰化縣打石巷形象商圈活動所設計，將塔羅牌與網路技術相結合，讓使用者隨時查詢當日運勢。作為我自學 React 後的首個實際專案，我使用 TypeScript 提高程式碼的可維護性，並藉由 Tailwind CSS 實現快速開發，整個開發週期約為一週。",
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
      title: "三軍總醫院運動醫學中心 - 智慧戰情室",
      href: "",
      dates: "April 2024 - October 2024",
      active: true,
      description:
        "此系統專為三軍總醫院運動醫學中心量身打造，透過 Web Socket 技術實現硬體設備資訊的即時接收，讓儀表板即時呈現患者位置、生理數據、設備使用狀況及當日報到情況等關鍵資訊。系統以 Axios 串接 API，讓醫療人員能便捷檢視患者醫療紀錄，並與硬體設備深度整合，支援遠端控制、即時查看復健影像及將影像投放至指定螢幕功能。",
      technologies: ["Typescript", "Vite", "Vue", "Vue Router", "Pinia", "Socket.io", "Axios", "Naive UI", "Sass"],
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
      title: "奧圖數位互動科技有限公司 - 官方網站",
      href: "https://auto-aiot.com/",
      dates: "January 2024 - February 2024",
      active: true,
      description:
        "此專案為期兩個月，旨在打造公司的官方網站，採用當時新推出的 Nuxt 3 作為核心框架，以實現卓越的 SEO 表現。由於專案無後端支援，遂採用 Nuxt Content 作為內容管理工具，並針對 Markdown 文件進行樣式調整與專屬組件開發，以達到高度客製化的文章展示效果。網站樣式採用 Sass 定義，結合 RWD 設計，確保跨裝置的良好使用體驗，並透過整合 AOS 提升視覺動態效果。SEO 設定涵蓋關鍵字、描述及圖片等，並運用 Nuxt SEO 進一步強化搜尋引擎優化，打造高效能且精緻的官方網站。",
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
        "Sass",
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
      dates: "October 2023 - December 2023",
      active: true,
      description:
        "由於公司舊版官網的設計風格已顯過時且內容長期未更新，我負責重新開發全新官方網站。考量到對 Nuxt 框架尚不熟悉，我選擇使用 Vite Plugin SSR 實現伺服器端渲染 (SSR)，以提升網站效能，同時結合 Ranking 來持續改善與提升 SEO 排名。在專案中，我使用了 VueUse 來提升開發效率，並整合了 Vue 3 Carousel 和 Particles，分別實現圖片輪播效果與粒子動畫，讓網站的視覺效果更具吸引力與互動性。",
      technologies: ["Typescript", "Vite", "Vue", "Vite Plugin SSR", "Vue 3 Carousel", "Particles", "Sass"],
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
      dates: "2023 - 2024",
      active: true,
      description:
        "當我接手該專案時，技術債已經累積至難以輕易解決的程度，各組件間高度耦合，任何改動都牽一髮而動全身，導致維運成本遠超過重構成本。為了解決這些問題，我與設計師密切合作，花了四到五個月的時間，對整個遊戲的介面設計與功能進行全面改版，不僅提升了系統的穩定性與可維護性，還引入了全新職業、新增圖鑑功能以及公告功能，讓遊戲內容更加多樣化。同時，我們開放了更多獅子的飼養選項，增強了玩家的選擇空間和遊戲的深度，目前遊戲已吸引了 2,145 位玩家參與並持續增長。",
      technologies: ["Typescript", "Vite", "Vue", "Vue Router", "VueUse", "Pinia", "Axios", "Sass"],
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
      dates: "2023 - 2024",
      active: true,
      description:
        "在接手專案的兩年間，我開發了六款新遊戲，包括「經營大亨」、「魔法寶石大冒險」、「快門冒險」、「夢畫奇緣」、「菜鳥出任務」及「自給自足大冒險」，遊戲內容多元且富挑戰性。初期使用 Vue 開發，後來自學 React 並成功應用於後續開發，這不僅提升了我的技術能力，還促使我思考並解決開發中的各種挑戰。至今，這六款遊戲已累積超過 7,400 次遊玩，為專案帶來了良好的成效與用戶參與度。",
      technologies: ["Typescript", "Vite", "Vue", "Vue Router", "VueUse", "Pinia", "Axios", "Sass"],
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
      dates: "2023 - 2024",
      active: true,
      description:
        "此專案主要用於控管網站前台系統並提供數據分析及內容管理功能，主要功能包括：技職大玩 JOB 網站數據分析、Google Analytics 數據展示、電子報及寄送群組管理（CRUD 操作）、梅克獅公告及背景管理（CRUD 操作）及帳號管理。資料視覺化方面，使用 ECharts 來呈現各項數據；而電子報與梅克獅公告則透過 Quill 富文本編輯器進行內容管理。",
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
        "Sass",
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
      title: "KOALA+ - 團體專題",
      href: "https://tibamef2e.com/cgd103/g1/",
      dates: "November 2022 - January 2023",
      active: false,
      description:
        "此專案是我參與的培訓課程團體專題，也是我首次擔任團隊組長。專案前端選用了 Vue 作為開發框架，後端則使用 PHP 和 MySQL。在專案中，每位組員負責設計與開發自己專案的頁面，並撰寫對應的 API 以進行資料庫操作。這也是我們團隊首次使用 Git 進行版本管理，並透過 GitHub 來協作與管理代碼。由於大家對 Git 不熟悉，經常發生操作錯誤，但通過學習和互相協助，我們最終克服了這些挑戰，使開發進度逐漸步入正軌。",
      technologies: ["JavaScript", "Vue", "Vue Router", "Vuex", "Chart.js", "View UI", "Sass", "PHP", "MySQL"],
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
      dates: "October 2022 - November 2022",
      active: false,
      description:
        "這個網站是我在學習 HTML、CSS 和 JavaScript 後，人生中親手打造的第一個網站，同時也是培訓班的個人專題。從構思網站架構，到制定設計規範、設計 Wireframe 和 Mockup，再到網站開發，整個過程全由我一手完成。這段期間雖然充滿挑戰，但我瘋狂汲取了大量知識與經驗，最終成功完成了一個完整的網站，並榮獲「最佳網站」第三名及「介面設計」第三名的佳績。",
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
        "這篇文章是我為公司內部技術分享撰寫的，主題是介紹當時剛推出的 CSS 滾動式動畫技術 Scroll-driven Animation。以往類似效果通常需要透過 JavaScript 和工具如 GSAP 實現，但由於我尚未熟悉 GSAP，便尋找純 CSS 的解決方案，並發現了這項新技術。由於中文教學資源少，我查閱原文資料並在 Medium 上撰寫技術文章，與更多開發者分享。這篇文章在 Medium 上累積了 1.4K views、886 reads 和 86 applaud，並選擇這個主題作為內部分享會的內容，讓更多人了解並應用這項技術。",
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
        "這份簡報源自於希望幫助新人快速掌握 Vitest 的契機，並進一步為團隊建立紮實的測試基礎。內容從零開始，系統性地介紹 Vitest 的基礎安裝與設定、核心功能，以及實際測試案例的撰寫步驟，並輔以清晰的範例與操作說明。我希望透過這份講義，不僅能降低學習門檻，還能有效提升團隊的測試開發效率與程式碼品質。",
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
        "這篇技術筆記分享了我在前端開發過程中，將個人 Side Project 自動部署至 Firebase 時遇到的實務經驗。文章詳細闡述了如何透過 Github Action Secrets 安全管理敏感資訊，從建立 Secrets 到在 Workflows 中的具體應用步驟，一應俱全。身為開發者，我希望這份經驗分享能為同樣使用 Firebase 和 Github Actions 進行前端專案自動部署的夥伴們，提供一個實用的參考指南。",
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
