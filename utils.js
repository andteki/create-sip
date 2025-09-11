const fs = require('fs');
const path = require('path');

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

const checkIfDirExists = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    console.error('Error!');
    console.error(`Directory already exists: ${dirPath}`);
    process.exit(1);
  }
};

module.exports = {
  updatePackageName,
  copyDir,
  checkIfDirExists
};
