// utils/autoloader.js
const fs = require('fs');
const path = require('path');



const autoloadModules = (dir) => {
  const modules = {};
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isFile() && file.endsWith('.js')) {
      const moduleName = path.basename(file, '.js');
      modules[moduleName] = require(fullPath);
    }
  });
  console.log(modules);
  return modules;
};

module.exports = autoloadModules;

