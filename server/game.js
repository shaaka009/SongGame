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

var movie1 = { title: "Stronger",
               artist: "Kanye West",
               rank: 500,
               release: 2007
            imgsrc: "https://wallpaperaccess.com/full/425004.jpg" }




//You can use this to check if your server is working
app.get("/", (req, res) => {
  res.send("Welcome to your server");
});

//Route that handles login logic
app.post("/login", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
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
