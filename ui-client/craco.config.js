// const path = require("path");

module.exports = {
  webpack: {
    // alias: {
    //   "@scenes": path.resolve(__dirname, "src/scenes"),
    //   "@components": path.resolve(__dirname, "src/components"),
    // },
    configure: {
      ignoreWarnings: [
        function ignoreSourcemapsloaderWarnings(warning) {
          return (
            warning.module &&
            warning.module.resource.includes("node_modules") &&
            warning.details &&
            warning.details.includes("source-map-loader")
          );
        },
      ],
    },
  },
};
