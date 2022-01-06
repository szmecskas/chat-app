const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.post("/api/save-call-id", controller.saveCallId); //save the call id to the redis
router.het("/api/get-call-id/:id", controller.getCallId); //get the id from the browser

module.exports = router;