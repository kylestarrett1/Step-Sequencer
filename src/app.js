// Shortcut to get elements
var el = function (element) {
  if (element.charAt(0) === "#") {
    // If passed an ID...
    return document.querySelector(element); // ... returns single element
  }

  return document.querySelectorAll(element); // Otherwise, returns a nodelist
};

var kickTrigger = el("#kick"),
  kickSample = el("#kick-sample"),
  snareTrigger = el("#snare"),
  snareSample = el("#snare-sample"),
  loTomTrigger = el("#lo-tom"),
  loTomSample = el("#loTom-sample"),
  hiTomTrigger = el("#hi-tom"),
  hiTomSample = el("#hiTom-sample"),
  clHatTrigger = el("#cl-hat"),
  clHatSample = el("#clHat-sample"),
  opHatTrigger = el("#op-hat"),
  opHatSample = el("#opHat-sample"),
  clapTrigger = el("#clap"),
  clapSample = el("#clap-sample"),
  clavesTrigger = el("#claves"),
  clavesSample = el("#claves-sample"),
  agogoTrigger = el("#agogo"),
  agogoSample = el("#agogo-sample"),
  crashTrigger = el("#crash"),
  crashSample = el("#crash-sample");

kickTrigger.addEventListener("click", () => {
  kickSample.play();
});

snareTrigger.addEventListener("click", () => {
  snareSample.play();
});

loTomTrigger.addEventListener("click", () => {
  loTomSample.play();
});

hiTomTrigger.addEventListener("click", () => {
  hiTomSample.play();
});

clHatTrigger.addEventListener("click", () => {
  clHatSample.play();
});

opHatTrigger.addEventListener("click", () => {
  opHatSample.play();
});

kickTrigger.addEventListener("click", () => {
  kickSample.play();
});
