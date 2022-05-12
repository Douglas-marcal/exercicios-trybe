const fs = require('fs/promises');

async function getFileContent(fileName) {
  const content = await fs.readFile(fileName, 'utf-8');
  const fileContent = JSON.parse(content);
  
  return fileContent;
}

module.exports = { getFileContent };
