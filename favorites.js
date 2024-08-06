
const favQuotes = [
    'The truth will set you free, but first it will piss you off.', 
    "It is our choices that define who we are, not our abilities.",
    "Keep what is useful, discard what isn't, and add what is uniquely yours.",
    "Seek first to understand, then to be understood.",
    "The future is already here, it is just unevenly distributed.",
    "The old world is dying and the new one struggles to be born. Now is the time of monsters.",
    "Too many among us die at thirty and are buried at eighty.",
    "The tragedy of life is not death but what we let die inside of us while we live.",
    "A fool never learns, a smart man learns from his mistakes, and a wise man learns from the mistakes of others.",
    "Growth comes from execution. Execution requires willpower. Willpower is dependent on your mental and bodily state."
]

const passions = ['Technology', 'Gaming', 'Music', 'Dogs', 'Reading', 'Fitness', 'Nutrition', 'Sports Cars', 'Traveling', 'Spending time with friends']

const favShows = ['Rick and Morty', "It's Always Sunny in Philadelphia", "Avatar: The Last Airbender", "Arcane", "The Expanse", 'Pantheon', 
    'The Marvelous Mrs. Maisel', 'Cyberpunk: Edgerunners',"Impractical Jokers", "Nathan for You"]

let randomNum = Math.ceil(Math.random() * 10);
    
console.log('One of my favorite meaningful quotes: ' + favQuotes[randomNum -1])
console.log('One of my passions is: ' + passions[randomNum -1])
console.log('One of my favorite TV shows is: ' + favShows[randomNum -1])

