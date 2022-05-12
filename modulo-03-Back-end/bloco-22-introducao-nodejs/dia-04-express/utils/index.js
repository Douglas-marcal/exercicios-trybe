const fs = require('fs/promises');

async function getFileContent(fileName) {
  const content = await fs.readFile(fileName, 'utf-8');
  const fileContent = JSON.parse(content);
  
  return fileContent;
}

async function addFileContent(fileName, fileContent) {
  const content = JSON.stringify(fileContent)
  await fs.writeFile(fileName, content);
}

module.exports = { getFileContent, addFileContent };
