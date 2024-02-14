// home and play ground
function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const Element = document.getElementById(elementId);
    Element.classList.remove('hidden')
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}




function getRandomAlphabet(){
    //get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')
    // console.log(alphabets);

    //get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    

    const alphabet = alphabets[index]
    // console.log(index,alphabet);
    return alphabet;
    

}



function handleKeyboardKeyupEvent(event){
    const playerPress = event.key
    console.log('Player Press:', playerPress);

    // get the excepted to press 
    const currentAlphabetElementById = document.getElementById('current-alphabet');
   
    const currentAlphabet = currentAlphabetElementById.innerText;
    const exceptedAlphabet = currentAlphabet.toLocaleLowerCase();
     console.log(exceptedAlphabet,playerPress);


    //  checked match or not 
    if(playerPress===exceptedAlphabet){
        console.log('You get a point')
        console.log('you have pressed correctly:', exceptedAlphabet);
        // update score 
        // step-1: get the current score 



        
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore);
        // step-2: increase the score by 1
        const newScore = currentScore+1;
        
        // step-3: show the update score 
        currentScoreElement.innerText=newScore;

        // start a new round 
        removeBackgroundColorById(exceptedAlphabet);
        continueGame();

    }
    else{
        console.log('you missed. you lost a life');
        //step-1: get the current life number 
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // step-2: Reduce the life count 
        const newLife = currentLife-1;
        if(newLife===0){
            gameOver()
        }


        // step-3: Display the update life count 
        currentLifeElement.innerText= newLife;
    }
}
// capture keyboard key press 
document.addEventListener('keyup', handleKeyboardKeyupEvent)





function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log(alphabet);
    // console.log('Your random alphabet:',alphabet)

    // set randomly generate  alphabet to the display
    const currentAlphabetElementById = document.getElementById('current-alphabet');
    currentAlphabetElementById.innerText = alphabet;
    setBackgroundColorById(alphabet);

}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');

}



function Play(){
    // hide everything show only play ground 
    hiddenElementById('home-screen')
    hiddenElementById('final-score')
     showElementById('play-ground')

    // reset score and life 
    
    continueGame()
    
}

// game over

function gameOver(){
    hiddenElementById('play-ground')
    
    showElementById('final-score')

}


