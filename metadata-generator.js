const fs = require("fs");

const numItems = 10;

//generate images
for (var i = 0; i < numItems; i++) {
  var inStr = fs.createReadStream("./template.png");
  var outStr = fs.createWriteStream(`./assets/${i}.png`);

  inStr.pipe(outStr);
}

// read and create metadata
// const imageDir = fs.readdirSync("./assets");

for (var i = 0; i < numItems; i++) {
  const img = `${i}.png`;
  const metadata = {
    name: "Sodl out",
    symbol: "SODL",
    image: img,
    properties: {
      files: [{ uri: img, type: "image/png" }],
      creators: [
        {
          address: "F2eYiFsVehoZh3sesnKD8e7hDsQv57NtPUjyCW7qTS6i",
          share: 100,
        },
      ],
    },
  };
  fs.writeFileSync(`./assets/${i}.json`, JSON.stringify(metadata, null, 2));
}
