const fs = require('fs/promises');

async function writeFiles(fileName, fileContent) {
  try {
    await fs.writeFile(fileName, fileContent);
    return 'ok';
  } catch (error) {
    return error;
  }
}

module.exports = { writeFiles };
