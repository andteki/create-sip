#!/usr/bin/env node

const { 
  genWebpage, 
  genBootstrap, 
  genJavascript, 
  genNodejs,
  genWebEsbuildJs,
  genWebEsbuildTs,
  genMockApi,
  genExpressApi
} = require('./manager');
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
    message: 'Project type: ',
    choices: [
      { 
        title: 'Webpage',
        description: 'Simple webpage: index.html, style.css',
        value: 'webpage' 
      },
      { 
        title: 'Web Bootstrap',
        description: 'Simple webpage with Bootstrap',
        value: 'webbootstrap' 
      },
      { 
        title: 'JavaScript', 
        description: 'Only index.html, style.css, app.js',
        value: 'javascript' 
      },
      { 
        title: 'Web Node.js', 
        description: 'Node.js project for webpage',
        value: 'webnodejs' 
      },
      { 
        title: 'ESBuild JavaScript',
        description: 'Esbuild JavaScript webpage',
        value: 'webesbuildjs'
      },
      { 
        title: 'ESBuild TypeScript',
        description: 'Esbuild TypeScript webpage',
        value: 'webesbuildts'
      },
      { 
        title: 'hai mock API',
        description: 'API server with hai-server 0.0.4',
        value: 'mockapi'
      },
      { 
        title: 'Express API',
        description: 'Express API using Sequelize and ES modules',
        value: 'expressapi' 
      },
      { 
        title: 'Cancel', 
        value: 'cancel' 
      }
    ],
    initial: 0
  }
];

(async () => {  
  const res = await prompts(questions);
  if(res.type === 'webpage') {
    console.log('Create a new webpage...');
    genWebpage(res.name);
    return;
  }
  if(res.type === 'webbootstrap') {
    console.log('Create a new webpage with Bootstrap...');
    genBootstrap(res.name);
    return;
  }
  if(res.type === 'javascript') {
    console.log('Create a new javascript...');
    genJavascript(res.name);
    return;
  }
  if(res.type === 'webnodejs') {
    console.log('Create a new webpage with Node.js...');
    genNodejs(res.name);
    return;
  }
  if(res.type === 'webesbuildjs') {
    console.log('Create a new webpage with ESBuild and Javascript...');
    genWebEsbuildJs(res.name);
    return;
  }
  if(res.type === 'webesbuildts') {
    console.log('Create a new webpage with ESBuild and Typescript...');
    genWebEsbuildTs(res.name);
    return;
  }
  if(res.type === 'mockapi') {
    console.log('Create a new hai mock API server...');
    genMockApi(res.name);
    return;
  }
  if(res.type === 'expressapi') {
    console.log('Create a new Express API with ES modules...');
    genExpressApi(res.name);
    return;
  }
  
})();
