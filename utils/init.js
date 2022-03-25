const welcome = require("cli-welcome");
const pkgJSON = require("../package.json");

module.exports = () => {
  process.on("unhandledRejection", (err) => {
    console.log(`unhandledRejection`, err);
  });

  welcome({
    bgColor: `#FADC00`,
    bold: true,
    clear: true,
    color: `#000000`,
    description: pkgJSON.description,
    title: pkgJSON.name,
    tagLine: `Get to know Madan`,
    version: pkgJSON.version,
  });
};
