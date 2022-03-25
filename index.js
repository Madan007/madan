#!/usr/bin/env node

// Global modules Import
const chalk = require("chalk");
const logsymbols = require("log-symbols");

//Local modules import
const init = require("./utils/init");

(() => {
  const log = console.log;

  const github = `${chalk.hex("6cc644").bold(`GitHub   `)}`;
  const linkedin = `${chalk.hex("0077b5").bold(` LinkedIn `)}`;

  //Alerts
  const success = chalk.green.inverse;
  const info = chalk.blue.inverse;
  const warning = chalk.keyword("orange").inverse;
  const error = chalk.red.bold.inverse;

  init();

  log(`
              ${chalk.hex("cd004b").bold.inverse(` About Me `)}
  
  ${chalk.blue.bold(` Madan Kumar `)}- ${chalk.italic(
    `Software Development Engineer`
  )}
  
  ${chalk.italic.underline(
    `Award-winning open-source engineer & developer advocate. Author of various open-source dev-tools and sotware libaries used by millions of developers worldwide.`
  )}
  
  📚 ${github}: ${chalk.dim(`https://github.com/madan007`)}
  🎖 ${linkedin}: ${chalk.dim(`https://www.linkedin.com/in/madan-k-97606010a/`)}
  `);

  log(`
  ${logsymbols.success} ${success(` SUCCESS `)} : Thanks for cheking out my CLI.
  
  ${logsymbols.info} ${info(` INFO `)} : Can expect for more CLI tools.
  
  ${logsymbols.warning} ${warning(` WARNING `)} : Lack of creativity.
  
  ${logsymbols.error} ${error(` ERROR `)} : On vacation!.
  `);
})();
