module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "fr"],
  },
};
// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = recipes.map((recipe) => ({
//     params: { slug: recipe.slug },
//   }));

//   return { paths, fallback: false };
// };