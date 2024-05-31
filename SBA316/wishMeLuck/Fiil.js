/* I don't care if Monday's blue
Tuesday's grey and Wednesday too
Thursday, I don't care about you
It's Friday, I'm in love

Monday, you can fall apart
Tuesday, Wednesday, break my heart
Oh, Thursday doesn't even start
It's Friday, I'm in love

Saturday, wait
And Sunday always comes too late
But Friday, never hesitate

I don't care if Monday's black
Tuesday, Wednesday, heart attack
Thursday, never looking back
It's Friday, I'm in love

Monday, you can hold your head
Tuesday, Wednesday, stay in bed
Or Thursday, watch the walls instead
It's Friday, I'm in love

Saturday, wait
And Sunday always comes too late
But Friday, never hesitate

Dressed up to the eyes
It's a wonderful surprise
To see your shoes and your spirits rise
Throw out your frown
And just smile at the sound
Sleek as a shriek, spinning 'round and 'round
Always take a big bite
It's such a gorgeous sight
To see you eat in the middle of the night
You can never get enough
Enough of this stuff
It's Friday, I'm in love

I don't care if Monday's blue
Tuesday's grey and Wednesday too
Thursday, I don't care about you
It's Friday, I'm in love

Monday, you can fall apart
Tuesday, Wednesday, break my heart
Thursday doesn't even start
It's Friday, I'm in love */

//This should disappear once the button is clicked
const startQuestion = document.getElementById("startQuestion");

//I want to use the answer button to start the song and pass the value
const answerButton = document.querySelector("button");

function 

    answerButton.addEventListener('click', getLyrics ())

    // script.js
function getLyrics() {
    const dayInput = startQuestion.textContent('dayInput').value.toLowerCase();
    let lyrics = '';

    switch (dayInput) {
        case 'monday':
            lyrics = "I don't care if Monday's blue...";
            break;
        case 'tuesday':
            lyrics = "Tuesday's grey and Wednesday too...";
            break;
        case 'wednesday':
            lyrics = "Thursday, I don't care about you...";
            break;
        case 'thursday':
            lyrics = "It's Friday, I'm in love...";
            break;
        case 'friday':
            lyrics = "Saturday, wait, and Sunday always comes too late...";
            break;
        case 'saturday':
            lyrics = "Saturday, wait, and Sunday always comes too late...";
            break;
        case 'sunday':
            lyrics = "Saturday, wait, and Sunday always comes too late...";
            break;
        default:
            lyrics = " If not today, then when!";
    }

    document.getElementById('lyrics').textContent = lyrics;
}
