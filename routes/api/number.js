const router = require("express").Router();
const numController = require("../../controllers/numController");

router.route("/")
    .post(numController.create);

module.exports = router;