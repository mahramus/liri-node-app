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
      omdbFetch();
      break;
  
    case "do-what-it-says":
      randomFetch();
      break;
  };

  /* Pseudocode

  function tweetFetch() will query the Twitter API for my last 20 tweets and output them to the command line

  function spotifyFetch() will query the Spotify API for the requested song and return a JSON file with a ton of info; we will only output Artist, Song's name, Preview link, Album title

  function omdbFetch() will query the OMDb API for the requested movie and return a JSON with a ton of info; we will only output Movie title, Movie year, IMDB rating, Rotten Tomatoes score, Country of production, Language, Plot, Actors

  function randomFetch() will use the fs Node package to do whatever API call we specify in the random.txt file
