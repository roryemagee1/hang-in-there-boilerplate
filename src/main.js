
var titleDumper = document.querySelector(".poster-title");
var quoteDumper = document.querySelector(".poster-quote");
var imageDumper = document.querySelector(".poster-img");

var imageInput = document.querySelector("#poster-image-url");
var titleInput = document.querySelector("#poster-title");
var quoteInput = document.querySelector("#poster-quote");
var saveThisPosterButton = document.querySelector(".save-poster");
var showSavedButton = document.querySelector(".show-saved");
var heTouchedTheButton = document.querySelector(".show-random");
var makePosterButton = document.querySelector(".show-form");
var nevermindReturnButton = document.querySelector(".show-main");
var backToMainButton = document.querySelector(".back-to-main");
var showMyPosterButton = document.querySelector(".make-poster")



// we've provided you with some data to work with 👇

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

var savedPosters = [];
var currentPoster;

// event listeners go here :point_down:
window.addEventListener('load', randomPoster)
heTouchedTheButton.addEventListener('click', randomPoster);
showSavedButton.addEventListener('click', showSaved);
makePosterButton.addEventListener('click', showMakeMyPoster);
nevermindReturnButton.addEventListener('click', backHome);
backToMainButton.addEventListener('click', backHome);
showMyPosterButton.addEventListener('click', showUserPoster);
saveThisPosterButton.addEventListener('click', savePoster);

// (we've provided one for you to get you started)!

function showUserPoster(event) {
  event.preventDefault()
  makeAppear(houdiniMainPoster);
  makeDisappear(posterForm);
  titles.push(titleInput.value);
  quotes.push(quoteInput.value);
  images.push(imageInput.value);
  makePoster()
}

function makePoster() {
  userPoster = new Poster(
    images[images.length-1],
    titles[titles.length-1],
    quotes[quotes.length-1],
  )
  imageDumper.src = userPoster.imageURL;
  titleDumper.innerText = userPoster.title;
  quoteDumper.innerText = userPoster.quote;
}

console.log(images[images.length-1])
var userPoster = new Poster(
  imageInput.value,
  titleInput.value,
  quoteInput.value)
console.log(userPoster)
console.log(savedPosters)

function showMakeMyPoster() {
  makeDisappear(houdiniMainPoster);
  makeAppear(posterForm);
};

function showSaved() {
  makeDisappear(houdiniMainPoster);
  makeAppear(savedPostersPage);
  makeSavedAppear();
}

function backHome() {
  makeDisappear(savedPostersPage);
  makeDisappear(posterForm);
  makeAppear(houdiniMainPoster);
  makeSavedDisappear();
}

function randomPoster() {
  currentPoster = new Poster(
    images[getRandomIndex(images)],
    titles[getRandomIndex(titles)],
    quotes[getRandomIndex(quotes)],
  )
  generatePoster()
};

function generatePoster() {
  imageDumper.src = currentPoster.imageURL;
  titleDumper.innerText = currentPoster.title;
  quoteDumper.innerText = currentPoster.quote;
};

function makeDisappear(element) {
  event.preventDefault();
  element.classList.add("hidden");
};

function makeAppear(element) {
  event.preventDefault();
  element.classList.remove("hidden");
};

function savePoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  };
};

function makeSavedAppear() {
  for(var i = 0; i < savedPosters.length; i++){
    savedPostersGrid.innerHTML += ""
    savedPostersGrid.innerHTML += `
    <section class="mini-posters-grid mini-poster">
    <img class="poster-img" src="${savedPosters[i].imageURL}" alt="saved-poster">
    <h2>${savedPosters[i].title}</h2>
    <h4>${savedPosters[i].quote}</h4>
    `;
  }
  makeAppear(savedPostersPage)
}

function makeSavedDisappear() {
  savedPostersGrid.innerHTML = "";
}




// function makeSavedAppear() {
//   savedPostersGrid.innerHTML = ""
//   savedPostersGrid.innerHTML = `
//     <article class="saved-posters-grid">
//       <ul class="mini-poster">
//         <img src="${savedPosters[0].imageURL}" alt="No saved posters.">
//         <h2>${savedPosters[0].title}</h2>
//         <h4>${savedPosters[0].quote}</h4>
//       </ul>
//     </article>
//   `;
// }

// function makeSavedAppear() {
//   var ul = document.createElement("ul")
//   for (var i = 0; 0 < savedPosters.length; i++) {
//     ul.innerHTML = "";
//     ul.innerHTML = `
//       <ul class="mini-poster">
//         <img src="${savedPosters[i].imageURL}" alt="No saved posters.">
//         <h2>${savedPosters[i].title}</h2>
//         <h4>${savedPosters[i].quote}</h4>
//       </ul>
//     `;
//     savedPostersGrid.appendChild(ul);
//   };
// };

// function makeSavedAppear() {
//   savedPostersGrid.innerHTML = ""
//   savedPostersGrid.innerHTML = `
//     <article class="saved-posters-grid">
//       <ul class="mini-poster">
//         <img src="${savedPosters[0].imageURL}" alt="No saved posters.">
//         <h2>${savedPosters[0].title}</h2>
//         <h4>${savedPosters[0].quote}</h4>
//       </ul>
//     </article>
//   `;
// }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
