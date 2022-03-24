#!/usr/bin/env node
const welcome = require("cli-welcome");
const pkgJSON = require("./package.json");

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

console.log(`Madan Kumar - Software Engineer`);
