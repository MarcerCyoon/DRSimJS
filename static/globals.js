// + denotes character name placeholder

var interactionOneArray = [
  "+ spends time alone in their room.",
  "+ eats some donuts.",
  "+ does their laundry.",
  "+ cries in their room.",
  "+ spends the entire day sleeping.",
  "+ takes a walk through the garden.",
  "+ reads some books."
];

var interactionTwoArray = [
  "+ and + go swimming together.",
  "+ and + open up to each other.",
  "+ and + take a bath together.",
  "+ and + gossips about the fellow students.",
  "+ and + play card games together.",
  "+ surprises + with a present."
];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}
