exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        "querystring": require.resolve("querystring-es3"),
      },
    },
  });
};
