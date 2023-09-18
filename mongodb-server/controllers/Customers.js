const Customers = require("../models/Customers");
exports.createCustomers = async (req, res) => {
  try {
    let newCustomers = new Customers({
      Name: req.body.Name,
      Balance: req.body.Balance,
      Phone: req.body.Phone,
    });
    await newCustomers.save();
    res.send(newCustomers);
  } catch (err) {
    console.log(err);
  }
};
exports.readCustomers = async (req, res) => {
  try {
    Customers.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    }).sort({ createdAt: -1 });
  } catch (err) {
    console.log(err);
  }
};
exports.readCustomersFromID = async (req, res) => {
  try {
    await Customers.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};
exports.updateCustomers = async (req, res) => {
  try {
    await Customers.findByIdAndUpdate(
      req.params.id,
      { Name: req.body.Name, Balance: req.body.Balance, Phone: req.body.Phone },
      (err, result) => {
        if (err) {
          res.json({ app: err });
        }
        res.send(result);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
exports.deleteCustomers = async (req, res) => {
  try {
    if ((await Customers.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await Customers.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
