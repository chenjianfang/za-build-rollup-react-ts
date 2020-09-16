#!/usr/bin/env node
const shell = require('shelljs');

const cwd = process.cwd();
console.log('cwd: ', cwd);

shell.cd(cwd);
shell.exec("nodemon --watch src --ignore node_modules --ignore test --exec \"rollup --config build/rollup.config.dev.js\"");
