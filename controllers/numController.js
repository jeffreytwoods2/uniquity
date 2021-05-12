const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Submission
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err));
    }
};