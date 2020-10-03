var express = require("express");
var router = express.Router();

/* ------ GET homepage */

router.get("/", (req, res, next) => {
	//instructions

	res.render("index", {
		title: "Fake Spotify",
		// my variables ,
		// my scripts : "scriptName",
	});
});

module.exports = router;
