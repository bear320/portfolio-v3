import { Icons } from "@/components/icons";

export const DATA = {
  name: "熊伯祥",
  initials: "DV",
  url: "https://oliver-xiong-portfolio.vercel.app/",
  location: "Taichung, Taiwan 🇹🇼",
  locationLink: "https://www.google.com/maps/place/taichung",
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
    "Socket.IO",
    "Git",
    "Docker",
    "Figma",
  ],
  navbar: [
    // { href: "/", icon: Icons.home, label: "Home" },
    // { href: "/blog", icon: Icons.blog, label: "Blog" },
    {
      href: "https://drive.google.com/file/d/1rlC4dUzS7jXXA0C0Ll0ZLtPQPUNzb5dN/view?usp=drive_link",
      icon: Icons.resume,
      label: "履歷",
    },
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
      company: "奧圖數位互動科技有限公司 / 脈動心聯股份有限公司 (關係企業)",
      href: "https://www.auto-aiot.com/",
      badges: [],
      location: "Taichung, Taiwan",
      title: "前端工程師 Frontend Developer (Vue.js)",
      logoUrl: "/autoaiot.svg",
      start: "Apr 2023",
      end: "Now",
      description:
        "運用技能：JavaScript、TypeScript、Vue3、Nuxt3、React、Tailwind CSS、Sass。<br/>工作內容：前端頁面搭建、既有網站維護、串接 API、程式碼重構、後台與操作系統開發、互動遊戲開發、技術文件撰寫、前端技術研究、SEO 設置。<br/>參與專案：台灣戲曲中心（觀眾服務網、）、技職大玩JOB（官網維護、後台系統開發、互動遊戲開發與重構）、可口可樂互動專案（闖關與抽獎系統開發）、三軍總醫院運動醫學中心（智慧戰情室分析系統開發）、台灣國際人工智慧暨物聯網展（互動遊戲開發）、公司內部專案（官網重構與 SEO 設置、場域監控系統開發）。",
    },
    {
      company: "ProLINK International Translation Service Limited",
      href: "https://prolinktranslation.com/index.php?lang=zho",
      badges: [],
      location: "Taichung, Taiwan",
      title: "Project Coordinator",
      logoUrl: "/prolink.svg",
      start: "Dec 2021",
      end: "Apr 2022",
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
      start: "Aug 2022",
      end: "Jan 2023",
    },
    {
      school: "國立高雄科技大學",
      href: "https://ifad.nkust.edu.tw/",
      degree: "應用德語系",
      logoUrl: "NKUST.svg",
      start: "Sep 2016",
      end: "Jun 2020",
    },
    {
      school: "國立中科實驗高級中學",
      href: "https://www.nehs.tc.edu.tw/",
      degree: "普通科",
      logoUrl: "/NEHS@CTSP.svg",
      start: "Sep 2013",
      end: "Jun 2016",
    },
  ],
  projects: [
    {
      title: "臺灣戲曲中心 - 洗手間看板系統",
      href: "",
      dates: "Oct 2024 - May 2025",
      description:
        "本專案為臺灣戲曲中心建置的即時廁所看板系統，整合 IoT 硬體設備，提供場館內各樓層洗手間與無障礙設施的使用狀態與人流資訊。使用者可透過安裝於現場的顯示螢幕，即時掌握當前廁所的排隊情況與設備使用狀況。前端介面以 Vue 開發，顯示內容包含場館名稱、天氣、目前時間、廁所位置地圖與設備狀態，並透過色彩標示提升視覺辨識效率。前端實作負責接收後端透過 Socket.IO 傳輸的即時資料，並建置狀態監聽與畫面自動更新機制，確保資訊呈現即時、穩定且直觀，強化整體使用體驗與現場導引效率。",
      technologies: [
        "Typescript",
        "Vite",
        "Vue",
        "Vue Router",
        "Vue I18n",
        "Vue 3 Carousel",
        "Pinia",
        "Axios",
        "Socket.IO",
        "TanStack Query",
        "Sass",
      ],
      links: [
        {
          type: "系統文件",
          href: "https://gamma.app/docs/-q7z5fcrn8z3ghuu",
          icon: <Icons.document className="size-3" />,
        },
      ],
      image: "",
      video: "/restroom-kanban.mp4",
    },
    {
      title: "臺灣戲曲中心 - 觀眾服務網",
      href: "https://audienceservice.ncfta.gov.tw/",
      dates: "Oct 2024 - May 2025",
      description:
        "本專案為臺灣戲曲中心打造的觀眾服務網，透過整合式網頁系統，提供場館導引、空氣品質監測、緊急事件指引、服務資訊、問卷回饋與洗手間使用狀況等功能，協助現場觀眾即時掌握所需資訊。系統支援雙語介面、主題切換與字級調整，並搭配視覺化圖表與互動式操作介面，強化使用者體驗與資訊可及性。其中洗手間使用狀況與人流資訊結合 IoT 感測設備，並透過 Socket.IO 實現即時資料更新與畫面同步，提供即時性與準確度兼具的互動服務，整體系統兼具實用性、易用性與現場應用彈性。",
      technologies: [
        "Typescript",
        "Vite",
        "Vue",
        "Vue Router",
        "Vue I18n",
        "Vue 3 Carousel",
        "Pinia",
        "Axios",
        "Socket.IO",
        "TanStack Query",
        "Sass",
      ],
      links: [
        {
          type: "網站連結",
          href: "https://audienceservice.ncfta.gov.tw/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/audience-service.mp4",
    },
    {
      title: "算你好命 - 商圈活動互動遊戲",
      href: "https://destiny-decoded.netlify.app/",
      dates: "Oct 2024",
      description:
        "本專案為彰化縣打石巷形象商圈活動所設計的互動式算命小遊戲，結合塔羅牌元素與網頁技術，使用者可透過網站即時查詢當日運勢。本專案為自學 React 後的首個實作作品，開發時採用 TypeScript 以提升程式碼可讀性與可維護性，並運用 Tailwind CSS 加速 UI 開發流程。整體開發週期約為一週，完成具備簡易互動體驗與主題風格一致的前端應用。",
      technologies: [
        "Typescript",
        "Vite",
        "React",
        "React Router",
        "Tailwind CSS",
      ],
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
      dates: "Apr 2024 - Oct 2024",
      description:
        "本系統為三軍總醫院運動醫學中心量身開發，主要功能為即時整合與呈現現場硬體設備資訊。透過 WebSocket 技術，即時接收並更新儀表板上的場域地圖資訊，包括患者位置、生理數據、設備使用狀況與當日報到情形等。系統前端以 Axios 串接 API，提供醫療人員快速檢視患者醫療紀錄的介面，並與多項硬體設備進行深度整合，支援遠端操作控制、即時復健影像查看與影像投放至指定螢幕等功能。",
      technologies: [
        "Typescript",
        "Vite",
        "Vue",
        "Vue Router",
        "Pinia",
        "Socket.IO",
        "Axios",
        "Naive UI",
        "Sass",
      ],
      links: [
        {
          type: "系統文件",
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
      dates: "Jan 2024 - Feb 2024",
      description:
        "本專案為期兩個月，目標為建置公司官方網站，選用當時新推出的 Nuxt 3 作為主要開發框架，以提升網站的 SEO 表現。考量專案未搭配後端服務，採用 Nuxt Content 作為靜態內容管理工具，並針對 Markdown 文件進行樣式自訂與開發專屬元件，以實現高度客製化的文章展示。網站樣式使用 Sass 撰寫，搭配 RWD 響應式設計以支援多裝置瀏覽，並整合 AOS 實現視覺動態效果。SEO 部分涵蓋標題、關鍵字、描述與社群分享圖等設定，並透過 Nuxt SEO 套件強化搜尋引擎優化，最終完成一個兼具效能與視覺品質的官方網站。",
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
      dates: "Oct 2023 - Dec 2023",
      description:
        "因應公司舊版官網設計風格過時且內容長期未更新，啟動新版官方網站的重新設計與開發。考量當時對 Nuxt 框架尚不熟悉，專案採用 Vite Plugin SSR 實現伺服器端渲染，以提升網站效能與載入速度，並結合 Ranking 工具進行 SEO 優化與持續改善。開發過程中運用了 VueUse 以提升開發效率，並整合 Vue 3 Carousel 與 Particles 分別實現圖片輪播與背景動畫效果，強化網站的視覺吸引力與互動體驗。",
      technologies: [
        "Typescript",
        "Vite",
        "Vue",
        "Vite Plugin SSR",
        "Vue 3 Carousel",
        "Particles",
        "Sass",
      ],
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
      description:
        "接手本專案時，系統存在大量技術債，元件間高度耦合，任何變動皆可能影響整體運作，導致維護成本高於重構成本。為改善此狀況，與設計團隊密切合作，進行為期約四至五個月的完整介面與功能重構，全面優化使用者體驗與程式結構，提升系統的穩定性與可維護性。重構期間同步擴充多項功能，包括新增多種職業類型、圖鑑功能與公告模組，並增加可飼養獅子的選項，強化遊戲的深度與玩家的操作彈性。截至目前，該遊戲已累積 2,423 位玩家參與，並持續穩定成長中。",
      technologies: [
        "Typescript",
        "Vite",
        "Vue",
        "Vue Router",
        "VueUse",
        "Pinia",
        "Axios",
        "Sass",
      ],
      links: [
        {
          type: "網站連結",
          href: "https://www.twmakers.com.tw/web/game/game_mex.jsp#gameInId",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/maker-lion.mp4",
    },
    {
      title: "技職大玩JOB - 互動體驗遊戲",
      href: "https://www.twmakers.com.tw/web/game/game.jsp#gameId",
      dates: "2023 - 2024",
      description:
        "在參與該專案的兩年間，負責開發共六款互動遊戲，分別為「經營大亨」、「魔法寶石大冒險」、「快門冒險」、「夢畫奇緣」、「菜鳥出任務」與「自給自足大冒險」，內容涵蓋益智、闖關、經營等多種類型。初期以 Vue 進行開發，後期導入 React 框架，並成功應用於後續遊戲製作中，提升前端開發效率與維護性。六款遊戲上線後累積總遊玩次數超過 9,500 次，提升了用戶互動率與專案整體成效。",
      technologies: [
        "Typescript",
        "Vite",
        "React",
        "Vue",
        "Vue Router",
        "VueUse",
        "Pinia",
        "Axios",
        "Sass",
      ],
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
      description:
        "本專案為一套後台系統，提供網站前台內容管理與數據分析功能。主要功能包含：技職大玩 JOB 網站流量數據分析、Google Analytics 數據視覺化展示、電子報及寄送群組管理（含 CRUD 操作）、梅克獅公告與背景管理（含 CRUD 操作）、以及帳號管理等。系統使用 ECharts 實作資料視覺化，並透過 Quill 富文本編輯器進行電子報與公告內容的編輯與管理。",
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
      image: "",
      video: "/twmakers-admin.mp4",
    },
    {
      title: "KOALA+ - 團體專題",
      href: "https://tibamef2e.com/cgd103/g1/",
      dates: "November 2022 - January 2023",
      description:
        "本專案為參與前端培訓課程期間的團體專題，並首次擔任團隊組長角色。前端採用 Vue 作為開發框架，後端使用 PHP 搭配 MySQL。團隊成員各自負責專案中特定頁面的設計與開發，並撰寫對應的 API 以與資料庫互動。專案期間首次導入 Git 進行版本控制，並透過 GitHub 進行協作與代碼管理。初期團隊對 Git 操作尚不熟悉，過程中遇到多次合併與操作問題，最終透過協作與學習逐步建立開發流程，順利完成專案。",
      technologies: [
        "JavaScript",
        "Vue",
        "Vue Router",
        "Vuex",
        "Chart.js",
        "View UI",
        "Sass",
        "PHP",
        "MySQL",
      ],
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
      description:
        "這個網站是於完成 HTML、CSS 與 JavaScript 基礎課程後所製作的第一個完整專案，同時作為前端培訓課程中的個人期末專題。專案內容涵蓋網站架構規劃、設計規範制定、Wireframe 與 Mockup 製作，以及網站開發等完整流程，均由本人獨立完成。在實作過程中，累積了大量實務經驗，並於結業成果發表中獲得「最佳網站」第三名及「介面設計」第三名的獎項肯定。",
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
      title: "前端開發筆記：View Transition",
      dates: "Apr 5th, 2025",
      location: "Taichung, Taiwan",
      description:
        "因應專案需求及對提升使用者體驗的關注，我開始研究 View Transition API —— 一項用於優化 DOM 狀態變更與頁面切換視覺效果的嶄新技術。過去在探索 Scroll-driven Animation 的過程中，我意識到現有的動畫手法雖能強化互動性，但對於非滾動行為的畫面轉換仍存在明顯斷層。View Transition API 則提供了更優雅的解法，無論在單頁應用 (SPA) 或多頁應用 (MPA) 中，都能實現更加連貫自然的轉場效果。本篇文章整理了我對此技術的研究過程與實作心得，期望能為有志於打造流暢網頁體驗的開發者提供具體參考。",
      image: "/medium.svg",
      links: [
        {
          title: "文章連結",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://medium.com/@aaabear320/前端開發筆記-view-transition-a7be10665cd0",
        },
      ],
    },
    {
      title: "前端開發筆記：網站無障礙規範",
      dates: "Mar 30th, 2025",
      location: "Taichung, Taiwan",
      description:
        "近期因應工作專案需求，我開始研究網站無障礙相關規範，然而發現網路上的多數資料多聚焦於基本概念與設計原則，對於時間有限的情況下，難以全面掌握所有知識。為了更有效率地達成專案目標，我選擇從網站無障礙認證的檢驗標準——《網站無障礙規範》著手研究。畢竟推動網站無障礙的核心目的即在於通過認證，從實際規範出發，能更清楚掌握需要符合的條件與實作重點。為此，我投入大量時間深入研究，並將所學內容整理為筆記與技術文章，不僅於公司內部進行分享與交流，也公開提供給有相關需求的開發者，期望協助更多人更快掌握重點、順利取得網站無障礙認證。",
      image: "/medium.svg",
      links: [
        {
          title: "文章連結",
          icon: <Icons.medium className="h-4 w-4" />,
          href: "https://medium.com/@aaabear320/前端開發筆記-網站無障礙規範-9be7e0abc765",
        },
      ],
    },
    {
      title: "前端開發筆記：Scroll-driven Animations",
      dates: "Dec 14th, 2023",
      location: "Taichung, Taiwan",
      description:
        "這篇文章是我為公司內部技術分享所撰寫，主題介紹當時剛推出的 CSS 滾動式動畫技術 —— Scroll-driven Animation。以往實作類似效果通常需透過 JavaScript 搭配工具（如 GSAP），但由於我當時尚未熟悉 GSAP，便開始尋找純 CSS 的解法，進而發現這項新技術。由於中文教學資源相對稀少，我參考原文資料並在 Medium 撰寫成文，期望與更多開發者交流分享。文章在 Medium 上累積超過 2K 瀏覽次數 (Views)、1.2K 完整閱讀次數 (Reads) 及 120 次拍手 (Claps)，也因此選定此主題作為內部分享會內容，讓更多同仁認識並應用這項技術。",
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
      dates: "Dec 13th, 2023",
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
      title:
        "前端開發筆記：Firebase + Github Actions 自動部署＆Github Actions Secrets",
      dates: "Jun 25th, 2023",
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
