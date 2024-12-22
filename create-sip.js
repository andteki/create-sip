#!/usr/bin/env node

const { genWebpage, genJavascript } = require('./manager');
const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'Project name: ',
    initial: 'app01'
  },
  {
    type: 'select',
    name: 'type',
    message: 'Project type (webpage): ',
    choices: [
      { 
        title: 'webpage',
        description: 'simple webpage: index.html, style.css',
        value: 'webpage' 
      },
      { 
        title: 'javascript', 
        description: 'simple javascript: index.html, style.css, app.js',
        value: 'javascript' 
      }
    ],
    initial: 0
  }
];

(async () => {
  const res = await prompts(questions);
  if(res.type === 'webpage') {
    console.log('create a new webpage...');
    genWebpage(res.name);
    return;
  }
  if(res.type === 'javascript') {
    console.log('create a new javascript...');
    genJavascript(res.name);
    return;
  }
  
})();
