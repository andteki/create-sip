#!/usr/bin/env node

const { program } = require('commander');
const { genWebpage } = require('./manager');

program
  .name('create-sin')
  .description('create a new sip project')

program
  .command('webpage [target]')
  .description('simple webpage')
  .action((target) => {
    console.log('create a new webpage...');
    genWebpage(target);
  });

program.parse()
