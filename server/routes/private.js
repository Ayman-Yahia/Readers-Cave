// const express = require("express");
// const router = express.Router();
// const { getPrivateRoute } = require("../controllers/private.controller");
// const { protect } = require("../middleware/auth");

const PrivateController = require('../controllers/private.controller');
const { protect } = require("../middleware/auth");
module.exports = app => {
    app.get('/api/private', protect, PrivateController.getPrivateRoute );
}

// router.route("/").get(protect, getPrivateRoute);

// module.exports = router;