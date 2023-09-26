const XLSX = require("xlsx");
const path = require("path");
const axios = require("axios");

const apiUrl = "http://localhost:3002/api/Customers/create";

const filePath = path.join(__dirname, "customer_list.xlsx");

const workbook = XLSX.readFile(filePath);

const sheetName = workbook.SheetNames[1];
const sheet = workbook.Sheets[sheetName];

const data = XLSX.utils.sheet_to_json(sheet);

console.log(data);

data.forEach((row, index) => {
  console.log(`Row ${index + 1}:`);
  console.log(`  Customer: ${row.Customer}`);
  console.log(`  Balance: ${row.Balance}`);
  console.log(`  Main Phone: ${row["Main Phone"]}`);
  console.log("-------------------------");

  // axios
  //   .post(apiUrl, {
  //     Name: row.Customer,
  //     Balance: row.Balance,
  //     Phone: row["Main Phone"],
  //   })
  //   .then((response) => {
  //     console.log("Data sent successfully:", response.data);
  //   });
});
