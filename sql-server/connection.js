const mysql = require("mysql");

const con = mysql.createConnection({
  host: "cloud-b9dddf.managed-vps.net",
  port: 3306,
  user: "everettdeleon",
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
