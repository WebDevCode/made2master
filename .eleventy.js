module.exports = (eleventyConfig) => {
  //copy assets folder to dist
  eleventyConfig.addPassthroughCopy("assets");

  return {
    //set default markdown post processing language as njk
    markdownTemplateEngine: "njk",

    //set input and output directory
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
