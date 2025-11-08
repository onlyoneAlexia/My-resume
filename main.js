
const customName = document.getElementById("customname");
const randomize = document.getElementById("randomize");
const story = document.getElementById("story");

function randomValueFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. " +
  "When they got to :inserty:, they stared in horror for a few moments, then :insertz:. " +
  "Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];


randomize.addEventListener("click", result);

function result() {

  let newStory = storyText;

  // pick random items
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);


  newStory = newStory.replaceAll(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);


  const name = customName.value.trim();
  if (name !== "") {
    newStory = newStory.replace("Bob", name);
  }


  const ukChecked = document.getElementById("uk").checked;
  if (ukChecked) {
  
    const stones = Math.round(300 / 14) + " stone";

  
    const centigrade = Math.round((94 - 32) * (5 / 9)) + " centigrade";

    newStory = newStory.replace("94 fahrenheit", centigrade);
    newStory = newStory.replace("300 pounds", stones);
  }


  story.textContent = newStory;
}
