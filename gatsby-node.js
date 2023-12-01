exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        "querystring": require.resolve("querystring-es3"),
      },
    },
  });
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/api/facebookProxy',
    component: require.resolve('./src/api/facebookProxy.js'),
  });
};
