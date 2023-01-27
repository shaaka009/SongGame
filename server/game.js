const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

// We are using our packages here
app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(cors());

var song1 = {
  title: "Stronger",
  artist: "Kanye West",
  rank: 500,
  release: 2007,
  imgsrc: "https://wallpaperaccess.com/full/425004.jpg",
};

var song2 = {
  title: "Respect",
  artist: "Arethra Franklin",
  rank: 1,
  release: 1967,
  imgsrc:
    "https://www.rollingstone.com/wp-content/uploads/2021/09/1-aretha-franklin-respect.jpeg?w=306",
};

var songs = [song1, song2];

//You can use this to check if your server is working
app.get("/", (req, res) => {
  res.send("Welcome to your server");
});

//Route that handles login logic
app.post("/compare", (req, res) => {
  console.log("correct!");
});

//Route that handles signup logic
app.post("/signup", (req, res) => {
  console.log(req.body.fullname);
  console.log(req.body.username);
  console.log(req.body.password);
});

//Start your server on a specified port
app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
