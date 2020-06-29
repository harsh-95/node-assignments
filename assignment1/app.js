const archiver = require("archiver");
const fs = require("fs");
const path = require("path");


const archive = archiver("zip", {
  zlib: { level: 9 } // Sets the compression level.
});

function archiveDir(inputDirectoryPath, _, archiver) {
  function recursivelyArchive(contents) {
    contents.forEach(content => {
      const contentPath = path.join(inputDirectoryPath, content);
      const stat = fs.statSync(contentPath);
      if (stat.isDirectory()) {
        archiveDir(contentPath, _, archiver);
      } else {
        archiver.append(fs.createReadStream(contentPath), {
          name: path.basename(contentPath)
        });
      }
    });
  }

  recursivelyArchive(fs.readdirSync(inputDirectoryPath));
}

archive.pipe(fs.createWriteStream("result/target.zip"));
archiveDir("./test", ".", archive);
archive.finalize();
console.log('zip file created');
