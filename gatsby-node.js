const { createFilePath } = require(`gatsby-source-filesystem`);

// 노드 생성 시 호출되는 함수
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // 만약 노드의 타입이 MarkdownRemark인 경우에만 처리
  if (node.internal.type === `MarkdownRemark`) {
    // 마크다운 파일의 경로를 생성
    const slug = createFilePath({ node, getNode, basePath: `content` });
    // 노드에 slug라는 필드를 추가하여 경로 저장
    createNodeField({ node, name: `slug`, value: slug });
  }
};

// 블로그 페이지 생성 함수
const createBlogPages = ({ createPage, results }) => {
  // 블로그 포스트 템플릿 파일 경로
  const blogPostTemplate = require.resolve(`./src/templates/blog-template.js`);
  // GraphQL 쿼리 결과에서 데이터 추출
  const { edges } = results.data.allMarkdownRemark;

  // 각 노드에 대해 페이지 생성
  edges.forEach(({ node, next, previous }) => {
    createPage({
      // 경로 설정
      path: node.fields.slug,
      // 페이지에 사용할 컴포넌트 설정
      component: blogPostTemplate,
      context: {
        // 페이지 컴포넌트에 전달할 추가 데이터 설정
        slug: node.fields.slug,
        nextSlug: next?.fields.slug ?? '',
        prevSlug: previous?.fields.slug ?? '',
      },
    });
  });
};

// 카테고리 페이지 생성 함수
const createPostsPages = ({ createPage, results }) => {
  // 카테고리 템플릿 파일 경로
  const categoryTemplate = require.resolve(`./src/templates/category-template.js`);
  // 중복을 허용하지 않는 Set 객체 생성
  const categorySet = new Set();
  // GraphQL 쿼리 결과에서 데이터 추출
  const { edges } = results.data.allMarkdownRemark;

  // 모든 노드의 카테고리를 Set에 추가
  edges.forEach(({ node }) => {
    const postCategories = node.frontmatter.categories.split(' ');
    postCategories.forEach((category) => categorySet.add(category));
  });

  // Set을 배열로 변환하여 카테고리 목록 생성
  const categories = [...categorySet];

  // 초기 카테고리를 'Study'로 설정
  const initialCategory = 'Study';

  // 전체 카테고리 페이지 생성
  createPage({
    path: `/posts`,
    component: categoryTemplate,
    context: { currentCategory: initialCategory, edges, categories },
  });

  // 각 카테고리별 페이지 생성
  categories.forEach((currentCategory) => {
    createPage({
      path: `/posts/${currentCategory}`,
      component: categoryTemplate,
      context: {
        currentCategory,
        categories,
        // 해당 카테고리에 속한 노드들만 추출하여 페이지에 전달
        edges: edges.filter(({ node }) => node.frontmatter.categories.includes(currentCategory)),
      },
    });
  });
};

// Gatsby 노드 생성 시 호출되는 함수
exports.onCreateNode
