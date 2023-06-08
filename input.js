

// w = "Move: up"
// a = "Move: left"
// s = "Move: down"
// d = "Move: right"
let connection;


const handleUserInput = function(key){
  const stdout = process.stdout;
  if (key === '\u0003') {
    console.log("Exited the game.\n");
    process.exit();
  }
  if (key === 'w'){
    connection.write("Move: up");
  }
  if (key === 'a'){
    connection.write("Move: left");
  }
  if (key === 's'){
    connection.write("Move: down");
  }
  if (key === 'd'){
    connection.write("Move: right");
  }
};

const setupInput = (conn) =>{
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",handleUserInput);
  // stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};
