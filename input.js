
const handleUserInput = function(key){
  const stdout = process.stdout;
  if (key === '\u0003') {
    console.log("Exited the game.\n");
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",handleUserInput);
  // stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {handleUserInput, setupInput};
