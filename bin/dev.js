#!/usr/bin/env node
const shell = require('shelljs');

const cwd = process.cwd();
console.log('cwd: ', cwd);

shell.cd(cwd);
shell.exec("rollup --watch src --config build/rollup.config.dev.js");
