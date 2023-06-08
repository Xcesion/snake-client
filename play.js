const net = require("net");
const {connect} = require("./client");

// const handleUserInput = function () {
//   // your code here
// };

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = stdin.on("data", key => {
    const stdout = process.stdout;
    if (key === '\u0003') {
      stdout.write("Exited the game.\n");
      process.exit();
    }
  });

  stdin.on("data", handleUserInput);

  return stdin;
};

console.log("Connecting ...");
connect();

