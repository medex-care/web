var ghpages = require("gh-pages");

ghpages.publish("build", function (...param) {
  console.log(param);
});
