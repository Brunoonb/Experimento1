module.exports = {
  prefix: "ds",
  source: ["tokens/core/**/*.json"],
  platforms: {
    cssLight: {
      source: ["tokens/core/**/*.json", "tokens/semantic/light/**/*.json"],
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "tokens-light.css",
          format: "css/variables",
          options: { selector: ":root,[data-theme='light']" }
        }
      ]
    },
    cssDark: {
      source: ["tokens/core/**/*.json", "tokens/semantic/dark/**/*.json"],
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "tokens-dark.css",
          format: "css/variables",
          options: { selector: "[data-theme='dark']" }
        }
      ]
    },
    js: {
      source: ["tokens/core/**/*.json", "tokens/semantic/light/**/*.json"],
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          destination: "tokens-light.json",
          format: "json/nested"
        }
      ]
    }
  }
};
