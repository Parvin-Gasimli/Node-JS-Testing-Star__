// const amount =20
// if(amount<10){
//     console.log('small Num');
// }
// else{
//     console.log('Large Num');
// }
// console.log(`hey it is my first node app!!!`);
// const path=require("path")
// console.log(path.sep);
// const os =require("os");
// const user=os.userInfo()
// console.log(`The System Uptime is ${os.uptime} seconds`);
// const currentOs={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMom:os.freemem()

// }
// console.log(currentOs);
const _ = require("lodash");
const items = [1, [2, [3, [4], [3, [5, [6, [4, 5, 6, 7, 8, 9, 9]]]]]]];
const newitems = _.flattenDeep(items);
console.log(newitems);
console.log("Nodemon is Started");

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    for (let index = 0; index < 300; index++) {
      const element = index;
      for (let i = 0; i < 100; i++) {
        console.log(`${i},${element}`);
      }
    }
    res.end("THIS IS HOME PAGE");
  }
  if (req.url === "/about") {
    res.end("THIS IS ABOUT PAGE");
  }
  res.end("Pag is not defiend");
});
server.listen(5000);

//Read File ASYNC

const { readFile,writeFile } = require("fs");
const util =require('util');
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)


const getText = (path) => {
  return new Promise((reslove, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        reslove(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await readFilePromise("./global.js",'utf-8');

    console.log(first);
  } catch (error) {
    console.log(error);
  }
};
start();
// getText("./global.js")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
