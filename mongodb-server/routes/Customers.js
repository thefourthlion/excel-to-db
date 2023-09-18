const express = require("express");
const router = express.Router();
const {
  createCustomers,
  readCustomers,
  readCustomersFromID,
  updateCustomers,
  deleteCustomers,
} = require("../controllers/Customers");
router.route("/create").post(createCustomers);
router.route("/read").get(readCustomers);
router.route("/read/:id").get(readCustomersFromID);
router.route("/update/:id").post(updateCustomers);
router.route("/delete/:id").delete(deleteCustomers);
module.exports = router;
