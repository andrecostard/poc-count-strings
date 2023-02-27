const { readdir } = require('fs').promises;

const getFileList = async (dirName) => {
  let files = [];
  const items = await readdir(dirName, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      files = [
        ...files,
        ...(await getFileList(`${dirName}/${item.name}`)),
      ];
    } else {
      if(item.name.endsWith('pt-BR.json'))
        files.push(`${dirName}/${item.name}`);
    }
  }

  return files;
};

module.exports.getFileList = getFileList;
