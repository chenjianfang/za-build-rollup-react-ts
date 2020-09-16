#!/usr/bin/env node
const shell = require('shelljs');

const cwd = process.cwd();
console.log('cwd: ', cwd);

shell.cd(cwd);
shell.exec("rollup --config build/rollup.config.prod.js");
