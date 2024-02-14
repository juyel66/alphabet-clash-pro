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





function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log(alphabet);
    console.log('Your random alphabet:',alphabet)

    // set randomly generate  alphabet to the display
    const currentAlphabetElementById = document.getElementById('current-alphabet');
    currentAlphabetElementById.innerText = alphabet;
    setBackgroundColorById(alphabet);

}



function Play(){
    hiddenElementById('home-screen')
    showElementById('play-ground')
    continueGame()
    
}


