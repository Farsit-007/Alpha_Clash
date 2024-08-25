function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackground(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackground(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getScore(elementId){
    const getScorePoint = document.getElementById(elementId);
    const getTheValue = parseInt(getScorePoint.innerText);
    return getTheValue;
}
function getELement(elementId,getTheValue){
    const newValue = document.getElementById(elementId);
    newValue.innerText = getTheValue;
}

function getElementText(elementId){
    const element = document.getElementById(elementId);
    const newElement = element.innerText;
    return newElement;
}

function generateVal(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const val = alphabet.split('');
     
    const rand = Math.random()*25;
    const index = Math.round(rand);

    const alpha = val[index];
    return alpha;
}