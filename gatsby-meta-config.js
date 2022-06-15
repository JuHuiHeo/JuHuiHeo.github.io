module.exports = {
  title: `jjuuelog`,
  description: `쭈E로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://github.com/JuHuiHeo/JuHuiHeo.github.io`,
  ogImage: `/new_og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `허주희`,
    bio: {
      role: `코딩하는`,
      description: ['전공 공부도 열심히 하고', '스터디도 열심히 하고', '공모전도 열심히 하고'],
      thumbnail: 'AREmoji.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/JuHuiHeo`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `mooo0502@swu.ac.kr`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.03 ~',
        activity: '개인 블로그 운영',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/JuHuiHeo/JuHuiHeo.github.io',
          //demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2021.03 ~',
        activity: '서울여자대학교 재학',
        links: {
          //post: '/gatsby-starter-zoomkoding-introduction',
          //github: 'https://github.com/JuHuiHeo/JuHuiHeo.github.io',
          //demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2021.03 ~',
        activity: 'IT 연합동아리 TAVE 활동',
        links: {
          //post: '/gatsby-starter-zoomkoding-introduction',
          //github: 'https://github.com/JuHuiHeo/JuHuiHeo.github.io',
          //demo: 'https://www.zoomkoding.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '2021 스노우 소프트웨어 랩 1기',
        description: '채식 식단 관리 다이어리 VEGEMATE 어플을 만들어 본선에 진출하였습니다. 최종 수상권에는 들지 못했지만, 어플리케이션의 설계와 뎁스, 플로우 차트까지 앱 개발을 경험할 수 있었던 좋은 기회였습니다. 또한, 마케팅과 홍보 분야에서도 많은 배움을 얻는 소프트웨어 창업 공모전이었습니다.',
        techStack: ['front-end', 'back-end'],
        thumbnailUrl: '',
        links: {
          post: 'http://m.mhj21.com/143938',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '',
        description:
          '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],
  },
};
