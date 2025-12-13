const { copyDir, updatePackageName, checkIfDirExists } = require('./utils');
const path = require('path');
const dir = path.join(__dirname);
const fse = require('fs-extra');

const genWebpage = (target) => {
  checkIfDirExists(target);
  copyDir(`${dir}/webpage`, target);
}

const genBootstrap = (target) => {
  checkIfDirExists(target);
  copyDir(`${dir}/webbootstrap`, target);
}

const genJavascript = (target) => {
  checkIfDirExists(target);
  copyDir(`${dir}/javascript`, target);
}

const genNodejs = (target) => {
  checkIfDirExists(target);
  copyDir(`${dir}/webnodejs`, target);
  updatePackageName(`${target}/package.json`, target);
  console.log('Web client created');
  console.log('Run next commands:');
  console.log(`  cd ${target}`);
  console.log('  npm install');
  console.log('  npm start');
}

const genWebEsbuildJs = (target) => {
  checkIfDirExists(target);
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
  checkIfDirExists(target);
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
  checkIfDirExists(target);
  copyDir(`${dir}/mockapi`, target);
  updatePackageName(`${target}/package.json`, target);
  console.log('MockAPI with hai-server 0.0.4');
  console.log('Run next commands:');
  console.log(`  cd ${target}`);
  console.log('  npm install');
  console.log('  npm start');
}

const genExpressApi = async (target) => {
  checkIfDirExists(target);
  copyDir(`${dir}/expressapi`, target);
  updatePackageName(`${target}/package.json`, target);

  const envContent = `APP_PORT=8000
APP_KEY=
APP_LOG=console.log

DB_DIALECT=sqlite
DB_HOST=127.0.0.1
DB_NAME=
DB_USER=
DB_PASS=
DB_STORAGE=database.sqlite
`

  await fse.writeFile(`${target}/.env`, envContent, 'utf8');

  const gitignoreContent = `/node_modules
/access.log
/.env
/database.sqlite

`

  await fse.writeFile(`${target}/.gitignore`, gitignoreContent, 'utf8');

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
  console.log('  node op make:migration something');
  console.log('  node op make:seeder something');
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
