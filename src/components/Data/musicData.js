// here we will create a list of music data
// for our music player in our sidebar
const makeId = function () {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter++;
  }
  return result;
}

const mD = [
  {
    id: makeId(),
    title: "DJ ABLO mix 2024",
    artist: "DJ ABLO",
    cover: "../img/afroHouse.png",
    src: "../utils/black.mp3",
  },
  { 
    id: makeId(),
    title: "Lil One",
    artist: "Future",
    cover: "../img/future.png",
    src: "../utils/Lil One.mp3",
  },
  {
    id: makeId(),
    title: "Duffle bag boy",
    artist: "Playaz Circle ft Lil Wayne",
    cover: "../img/lilwayne.png",
    src: "../utils/Dufflebag.mp3",
  },
  {
    id: makeId(),
    title: "A Milli",
    name: "Lil Wayne",
    cover: "../img/amilli.png",
    src: "../utils/A Milli.mp3",
  },
  {
    id: makeId(),
    title: "GTA",
    artist: "Future, Metro Boomin",
    cover: "../img/GTA.png",
    src: "../utils/gta.mp3",
  },
  {
    id: makeId(),
    title: "Like That",
    artist: "Future,Kendrick Lamar, Metro Boomin",
    cover: "../img/GTA.png",
    src: "../utils/likethat.mp3",
  },
];

console.log(mD[0]['id']);

export default mD;