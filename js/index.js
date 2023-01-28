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

function compare() {
  let x1 = Math.floor(Math.random() * (2 - 0));

  let x2 = Math.floor(Math.random() * (2 - 0));
  while (x2 == x1) {
    x2 = Math.floor(Math.random() * (2 - 0));
  }
  console.log(x1);
  console.log(x2);

  let leftTitle = document.getElementById("titleLeft");
  let rightTitle = document.getElementById("titleRight");

  leftTitle.innerText = songs[x1].title + ", by " + songs[x1].artist;
  rightTitle.innerText = songs[x2].title + ", by " + songs[x2].artist;
}

function firstCompare() {}
