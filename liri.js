require("dotenv").config();

var bandList = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var request = process.argv[2];
var mediaName = process.argv[3];

switch (request) {
    case "my-tweets":
      tweetFetch();
      break;
  
    case "spotify-this-song":
      spotifyFetch();
      break;
  
    case "movie-this":
      withdraw();
      break;
  
    case "do-what-it-says":
      lotto();
      break;
  };

  