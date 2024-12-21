const fs = require('fs');

const genWebpage = (target) => {
  copyDir('webpage', target);
}

const copyDir = (srcDir, destDir) => {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    fs.copyFileSync(`${srcDir}/${file}`, `${destDir}/${file}`);
  }
}

module.exports = {
  genWebpage
}
