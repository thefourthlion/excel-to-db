const mongoose = require("mongoose");
const CustomersSchema = new mongoose.Schema(
  {
    Name: { type: String, required: [true, "Please provide Name"] },
    Balance: { type: String, required: [true, "Please provide Balance"] },
    Phone: { type: String },
  },
  { timestamps: true }
);
const Customers = mongoose.model("Customers", CustomersSchema);
module.exports = Customers;
