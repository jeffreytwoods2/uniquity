const router = require("express").Router();
const numRoute = require("./number");

router.use("/number", numRoute);

module.exports = router;