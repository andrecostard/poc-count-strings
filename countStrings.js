const fs = require('fs');

const readFile = (filePath) => {
  const jsonData = fs.readFileSync(filePath);

  return JSON.parse(jsonData);
}

const countRecursively = (jsonContent) => {
  let count = 0;
  for (let key in jsonContent) {
    if (typeof jsonContent[key] === 'object') {
      count += countRecursively(jsonContent[key]);
    } else {
      count++;
    }
  }
  return count;
}

const countStrings = (filePath) => {
  let jsonContent = readFile(filePath);
  return countRecursively(jsonContent);
}

module.exports.countStrings = countStrings;
