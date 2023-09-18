const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "everettdeleon@localhost",
  password: "**********",
  database: "everettdeleon_testing",
});

con.connect((err) => {
  if (err) {
    console.log("Connection not proper");
  } else {
    console.log("connected");
  }
});

module.exports = con;
