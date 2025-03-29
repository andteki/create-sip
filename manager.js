const { copyDir, updatePackageName } = require('./utils');
const path = require('path');
const dir = path.join(__dirname);

const genWebpage = (target) => {
  copyDir(`${dir}/webpage`, target);
}

const genBootstrap = (target) => {
  copyDir(`${dir}/webbootstrap`, target);
}

const genJavascript = (target) => {
  copyDir(`${dir}/javascript`, target);
}

const genNodejs = (target) => {
  copyDir(`${dir}/webnodejs`, target);
  updatePackageName(`${target}/package.json`, target);
  console.log('Web client created');
  console.log('Run next commands:');
  console.log(`  cd ${target}`);
  console.log('  npm install');
  console.log('  npm start');
}

const genWebEsbuildJs = (target) => {
  copyDir(`${dir}/webesbuildjs`, target);
  updatePackageName(`${target}/package.json`, target);
  console.log('ESBuild client created with Javascript');
  console.log('Run next commands:');
  console.log(`  cd ${target}`);
  console.log('  npm install');
  console.log('  npm run dev');
  console.log('  npm start');
  console.log('If you want to build, run:');
  console.log('  npm run build');
}

const genWebEsbuildTs = (target) => {
  copyDir(`${dir}/webesbuildts`, target);
  updatePackageName(`${target}/package.json`, target);
  console.log('ESBuild client created with Typescript');
  console.log('Run next commands:');
  console.log(`  cd ${target}`);
  console.log('  npm install');
  console.log('  npm run dev');
  console.log('  npm start');
  console.log('If you want to build, run:');
  console.log('  npm run build');
}

const genMockApi = (target) => {
  copyDir(`${dir}/mockapi`, target);
  updatePackageName(`${target}/package.json`, target);
  console.log('MockAPI with hai-server 0.0.4');
  console.log('Run next commands:');
  console.log(`  cd ${target}`);
  console.log('  npm install');
  console.log('  npm start');
}

const genExpressApi = (target) => {
  copyDir(`${dir}/expressapi`, target);
  updatePackageName(`${target}/package.json`, target);
  console.log('ExpressJS REST API skeleton created');
  console.log('Read docs/user_doc.md');
  console.log('Run next commands:');
  console.log(`  cd ${target}`);
  console.log('  npm install');
  console.log('  node op key:generate');
  console.log('  npm run dev');
  console.log('Usable commands:');
  console.log('  node op make:model something');
  console.log('  node op make:controller something');
  console.log('The model and controller names must be');
  console.log('given in the singular. More info:');
  console.log('  node op help')
}

module.exports = {
  genWebpage, 
  genBootstrap, 
  genJavascript, 
  genNodejs,
  genWebEsbuildJs,
  genWebEsbuildTs,
  genMockApi,
  genExpressApi
}
