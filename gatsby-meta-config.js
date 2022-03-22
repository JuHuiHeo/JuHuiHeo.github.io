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
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
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
