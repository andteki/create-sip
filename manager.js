const fs = require('fs');
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
  console.log('npm install');
  console.log('npm start');
}

const genWebEsbuildJs = (target) => {
  copyDir(`${dir}/webesbuildjs`, target);
  updatePackageName(`${target}/package.json`, target);
  console.log('ESBuild client created with Javascript');
  console.log('Run next commands:');
  console.log('npm install');
  console.log('npm run dev');
  console.log('npm start');
  console.log('If you want to build, run:');
  console.log('npm run build');
}

const genWebEsbuildTs = (target) => {
  copyDir(`${dir}/webesbuildts`, target);
  updatePackageName(`${target}/package.json`, target);
  console.log('ESBuild client created with Typescript');
  console.log('Run next commands:');
  console.log('npm install');
  console.log('npm run dev');
  console.log('npm start');
  console.log('If you want to build, run:');
  console.log('npm run build');
}

const genMockApi = (target) => {
  copyDir(`${dir}/mockapi`, target);
  updatePackageName(`${target}/package.json`, target);
  console.log('MockAPI with hai-server 0.0.4');
  console.log('Run next commands:');
  console.log('npm install');
  console.log('npm start');
}

const updatePackageName = (filePath, newName) => {
  const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  if (content.name) {
    content.name = newName;
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
  }
};

const copyDir = (srcDir, destDir) => {
  fs.mkdirSync(destDir, { recursive: true });

  for (const item of fs.readdirSync(srcDir)) {
    const srcPath = path.join(srcDir, item);
    const destPath = path.join(destDir, item);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

module.exports = {
  genWebpage, 
  genBootstrap, 
  genJavascript, 
  genNodejs,
  genWebEsbuildJs,
  genWebEsbuildTs,
  genMockApi
}
