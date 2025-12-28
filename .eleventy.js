module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images/icons");

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
};

