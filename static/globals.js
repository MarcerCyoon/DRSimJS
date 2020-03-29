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

var motiveArray = [
  "Monokuma threatens to reveal your darkest secrets if nobody is killed in the next 24 hours.",
  "Monokuma threatens to kill a person close to you that has been taken hostage if nobody is killed in the next 24 hours.",
  "Monokuma offers 1,000,000 dollars to whoever successfully graduates.",
  "Monokuma shows everyone a personal video that horrifies each and every one of them.",
  "Monokuma begins to play insanely loud and annoying music. He will only turn it off if someone is murdered.",
  "Monokuma murmurs that there is a traitor among you!"
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}
