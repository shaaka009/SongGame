var x1 = 0;
var x2 = 1;

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
    "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781534452282/respect-9781534452282_hr.jpg",
};

var songs = [song1, song2];

function calculate(guess) {
  if (songs[x1].rank > songs[x2].rank && guess == "higher") {
    console.log("correct!");
    newCompare();
  } else if (songs[x1].rank < songs[x2].rank && guess == "lower") {
    console.log("correct!");
    newCompare();
  } else {
    console.log("wrong");
  }
}

function newCompare() {
  x1 = Math.floor(Math.random() * (2 - 0));

  x2 = Math.floor(Math.random() * (2 - 0));
  while (x2 == x1) {
    x2 = Math.floor(Math.random() * (2 - 0));
  }
  var leftTitle = document.getElementById("titleLeft");
  var rightTitle = document.getElementById("titleRight");
  var rightPic = document.getElementById("picRight");
  var leftPic = document.getElementById("picLeft");
  var leftRank = document.getElementById("rankLeft");

  leftTitle.innerText = songs[x1].title + ", by " + songs[x1].artist;
  rightTitle.innerText = songs[x2].title + ", by " + songs[x2].artist;
  leftPic.src = songs[x1].imgsrc;
  rightPic.src = songs[x2].imgsrc;

  leftRank.innerText = songs[x1].rank;
}

function firstCompare() {
  var leftTitle = document.getElementById("titleLeft");
  var rightTitle = document.getElementById("titleRight");
  var rightPic = document.getElementById("picRight");
  var leftPic = document.getElementById("picLeft");
  var leftRank = document.getElementById("rankLeft");
  var than = document.getElementById("than");

  leftTitle.innerText = songs[0].title + ", by " + songs[0].artist;
  rightTitle.innerText = songs[1].title + ", by " + songs[1].artist;
  leftPic.src = songs[0].imgsrc;
  rightPic.src = songs[1].imgsrc;

  leftRank.innerText = songs[0].rank;
  than.innerText = "Than " + songs[0].title;
}
