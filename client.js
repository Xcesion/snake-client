const net = require("net");
// const server = require("./play");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server")
    // conn.write("Name: YHS")
    
    // setInterval(()=> {
    //   conn.write("Move: up")
    //  }, 50);
    // conn.write("Move: down");
  });

  conn.on("data", (data) => {
    console.log("data", data);
  });
  return conn;
};


module.exports = {connect};