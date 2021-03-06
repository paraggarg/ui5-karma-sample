module.exports = function(config) {
    require("./karma.conf")(config);
    config.set({

        preprocessors: {
            "{webapp,webapp/!(test)}/*.js": ["coverage"]
        },

        coverageReporter: {
            includeAllSources: true,
            reporters: [
                {
                    type: "html",
                    dir: "coverage"
                },
                {
                    type: "text"
                }
            ],
            check: {
                each: {
                    statements: 0,
                    branches: 0,
                    functions: 0,
                    lines: 0
                }
            }
        },
        reporters: ["progress", "coverage"],
        browsers: ["ChromeHeadless"],
        singleRun: true
  
    });
  };