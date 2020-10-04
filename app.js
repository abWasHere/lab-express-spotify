require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const SpotifyWebApi = require("spotify-web-api-node");

/* ---------------------------------------- SETUP EXPRESS */
const app = express();
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

/* ---------------------------------------- SETUP SPOTIFY API */
// Credentials
const spotifyApi = new SpotifyWebApi({
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
});
// Retrieve an access token
spotifyApi
	.clientCredentialsGrant()
	.then((data) => spotifyApi.setAccessToken(data.body["access_token"]))
	.catch((error) =>
		console.log("Something went wrong when retrieving an access token", error)
	);

app.listen(process.env.PORT, () =>
	console.log(
		`My Spotify project running on port ${process.env.PORT} 🎧 🥁 🎸 🔊`
	)
);
/* ---------------------------------------- SETUP ROUTER */

// GET homepage
app.get("/", (req, res) => {
	res.render("index", {
		title: "Fake Spotify",
	});
});

// GET artists
app.get("/artist-search", (req, res) => {
	console.log("trying to get :", req.query);

	spotifyApi
		.searchArtists(req.query.searchedArtist)
		.then((data) => {
			console.log("The received data from the API: ", data.body.artists.items);
			const artistsRes = data.body.artists.items;
			res.render("artist-search-results", {
				title: "Artists found",
				artistsRes,
			});
		})
		.catch((err) =>
			console.log("The error while searching artists occurred: ", err)
		);
});

// GET artist albums
app.get("/albums/:artist_id", (req, res, next) => {


})