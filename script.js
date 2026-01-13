const prompts = [
  "Enter an adjective",
  "Enter a verb",
  "Enter a body part",
  "Enter an animal",
  "Enter a food",
  "Enter a piece of clothing",
  "Enter a random object",
  "Enter another verb",
  "Enter a place",
  "Enter a plural object"
];

const userInputs = [];
let currentIndex = 0;

const inputEl = document.getElementById("word-input");
const btnEl = document.getElementById("next-btn");
const storyEl = document.getElementById("story");

inputEl.placeholder = prompts[currentIndex];

btnEl.addEventListener("click", () => {
  const value = inputEl.value.trim();
  if (!value) return;

  userInputs.push(value);
  inputEl.value = "";
  currentIndex++;

  if (currentIndex < prompts.length) {
    inputEl.placeholder = prompts[currentIndex];
    inputEl.style.transform = "scale(1.05)";
    setTimeout(() => inputEl.style.transform = "scale(1)", 150);
  } else {
    generateStory();
    document.getElementById("input-container").style.display = "none";
  }
});

function generateStory() {
  const s = userInputs;

  const story = 
`It was a ${s[0]} morning when I decided to ${s[1]} while wearing my favorite ${s[5]}.  
Suddenly, a ${s[3]} jumped onto my ${s[2]} and tried to eat my ${s[4]}.  
Panicked, I grabbed a ${s[6]} and started ${s[7]} across ${s[8]}, narrowly avoiding flying ${s[9]}.  
The ${s[3]} got tangled in my ${s[5]} and rolled down a hill like a very confused snowball.  
I couldn’t stop laughing, and somehow everyone in ${s[8]} joined in, tossing ${s[9]} into the air like it was a professional sport.  
By the end of the day, my ${s[2]} was sore, my ${s[4]} was missing, and the ${s[3]} became a local celebrity for its daring antics.  
I realized that even the most ${s[0]} mornings can turn into unforgettable adventures if you just ${s[1]} bravely.`;

  storyEl.innerText = story;
  storyEl.classList.remove("fade");
  void storyEl.offsetWidth;
  storyEl.classList.add("fade");
}
