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
      description: ['알고리즘도', '개발도', 'AI도'],
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
        title: '',
        description: '.',
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
        title: '2021 스노우 소프트웨어 랩 1기 본선 진출',
        description:
          '채식 식단 관리 다이어리 VEGEMATE 어플을 만들어 본선에 진출하였습니다. 최종 수상권에는 들지 못했지만, 어플리케이션의 설계와 뎁스, 플로우 차트까지 앱 개발을 경험할 수 있었던 좋은 기회였습니다. 또한, 마케팅과 홍보 분야에서도 많은 배움을 얻는 소프트웨어 창업 공모전이었습니다.',
        techStack: ['front-end', 'back-end'],
        thumbnailUrl: 'vegemateppt.png',
        links: {
          post: 'http://m.mhj21.com/143938',
          github: '',
          demo: '',
        },
      },
      {
        title: '제3회 AI SPARK CHALLENG 최우수상(2rd)',
        description:
          '감정정보를 통한 영상 하이라이트 요약 프로그램을 개발하여 최우수상을 수상하였습니다. 영상의 하이라이트는 감정정보가 자주 등장하는 영상 프레임과 상관관계가 있다고 가정하였습니다. 그에 따라 우리 모델은 비디오에서 시각 정보와 음성 정보를 동시에 추출한 뒤, attention mechanism을 통해 하이라이트를 뽑아냅니다. 또한, 감정 정보에 중요도 점수를 부여하여 그 점수를 기반으로 하이라이트를 생성합니다.',
        techStack: ['Computer Vison', 'SER'],
        thumbnailUrl: 'aispark.png',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        title: '2022 Azure Virtual Hackathon 대상(1st)',
        description:
          '시각 장애 유튜버를 위한 영상 편집 도움 서비스 Hi Azure!: Helping video creators who are visually-impaired edit videos using Azure Cloud AI!를 개발하여 대상을 수상했습니다. Hi Azure!는 사용자가 제공한 영상을 프레임 단위로 분할한 뒤, 시각 정보를 음성으로 변환하여 제공합니다. 이 과정에서 Azure Cognitive Services, Image Analysis, Convert Text to Audio, Dense Captioning을 활용하였습니다.',
        techStack: ['Microsoft Azure', 'Computer Vison'],
        thumbnailUrl: 'aispark.png',
        links: {
          post: '',
          github: 'https://github.com/Jeiyoon/Azure-Virtual-Hackathon-2022',
          demo: '',
        },
      },
    ],
  },
};
