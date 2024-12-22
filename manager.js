const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname);


const genWebpage = (target) => {
  copyDir('webpage', target);
}

const genJavascript = (target) => {
  copyDir('javascript', target);
}

const copyDir = (srcDir, destDir) => {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(`${dir}/${srcDir}`)) {
    fs.copyFileSync(`${dir}/${srcDir}/${file}`, `${destDir}/${file}`);
  }
}

module.exports = {
  genWebpage, genJavascript
}
