const net = require("net");
// const server = require("./play");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server")
    conn.write("Name: YHS")
    
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