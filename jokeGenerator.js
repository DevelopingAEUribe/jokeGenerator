// Step 1: Define Arrays for Joke Components
const setups = [
    "Why dont skeletons fight each other?",
    "What did the fish say when it hit the wall?",
    "Why dont scientists trust atoms?",
    "Why did the scarecrow win an award?",
    "What do you call fake spaghetti?"
];

const punchlines = [
    "They dont have the guts.",
    "Dam!",
    "Because they make up everything!",
    "Because he was outstanding in his field!",
    "An impasta!"
];

// Step 2: Function to Generate a Random Joke
function generateJoke() {
    const setup = setups[Math.floor(Math.random() * setups.length)];
    const punchline = punchlines[Math.floor(Math.random() * punchlines.length)];
    
    return `${setup} \n ${punchline}`;
}

// Step 3: Display the Random Joke in the Console
console.log(generateJoke());
