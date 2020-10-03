var express = require("express");
var router = express.Router();

/* ------ GET artists */

router.get("/artist-search", (req, res, next) => {
	//instructions
	spotifyApi
		.searchArtists(/*'HERE GOES THE QUERY ARTIST'*/)
		.then((data) => {
			console.log("The received data from the API: ", data.body);
			// ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
			res.render("artist-search-results", {
				title: "Artists found",
				// my variables ,
				// my scripts : "scriptName",
			});
		})
		.catch((err) =>
			console.log("The error while searching artists occurred: ", err)
		);
});



module.exports = router;
