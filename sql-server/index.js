const con = require("./connection");
const express = require("express");
const app = express();

let PORT = 3306;

app.use(express.json());

app.get("/api/customers/read", (req, res) => {
  con.query("select * from customers", (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

app.post("/api/customers/create", (req, res) => {
  const data = req.body;
  con.query("INSERT INTO customers SET ?", data, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

app.put("/:id", (req, res) => {
  const data = [req.body.name, req.body.balance, req.body.phone, req.params.id];
  con.query(
    "UPDATE customers SET name = ?,balance=?,phone=? where id = ?",
    data,
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/:id", (req, res) => {
  let student_id = req.params.id;
  con.query("DELETE from customers where id = " + student_id, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Application running on ${PORT}`);
});
