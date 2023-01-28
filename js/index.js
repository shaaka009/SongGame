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

function compare() {
  let x1 = Math.floor(Math.random() * (2 - 0));

  let x2 = Math.floor(Math.random() * (2 - 0));
  while (x2 == x1) {
    x2 = Math.floor(Math.random() * (2 - 0));
  }
  //console.log(x1);
  //console.log(x2);
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
  let x1 = Math.floor(Math.random() * (2 - 0));

  let x2 = Math.floor(Math.random() * (2 - 0));
  while (x2 == x1) {
    x2 = Math.floor(Math.random() * (2 - 0));
  }

  var leftTitle = document.getElementById("titleLeft");
  var rightTitle = document.getElementById("titleRight");
  var rightPic = document.getElementById("picRight");
  var leftPic = document.getElementById("picLeft");
  var leftRank = document.getElementById("rankLeft");
  var than = document.getElementById("than");

  leftTitle.innerText = songs[x1].title + ", by " + songs[x1].artist;
  rightTitle.innerText = songs[x2].title + ", by " + songs[x2].artist;
  leftPic.src = songs[x1].imgsrc;
  rightPic.src = songs[x2].imgsrc;

  leftRank.innerText = songs[x1].rank;
  than.innerText = "Than " + songs[x1].title;
}
