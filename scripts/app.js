//DOM elements
const body = document.querySelector('body')
const boxes = document.querySelectorAll('.box');
const checkmark = document.querySelector('.validate');
const activeUserIndiv = document.querySelector('.active-user > div');
const congrat = document.querySelector('.congrat')

//cross and circle template
var cross = document.createElement('img');
cross.setAttribute('src', 'img/cross.svg');
var circle = document.createElement('img');
circle.setAttribute('src', 'img/circle.svg');
var elementsTemplate = []

//boxes' status
var indexMorpion;
var morpion = new Array(9);

//cross correspond to true and circle to false
var activeUser = true;

//creating new cross or circle
var pushElement = function() {
    if(activeUser){
    elementsTemplate.push(cross.cloneNode(false))
    } else {
    elementsTemplate.push(circle.cloneNode(false))
    }
};
pushElement();

var testWinning = function() {
    if(morpion[0]===true && morpion[1]===true && morpion[2]===true
       ||morpion[3]===true && morpion[4]===true && morpion[5]===true
       ||morpion[6]===true && morpion[7]===true && morpion[8]===true
       ||morpion[0]===true && morpion[3]===true && morpion[6]===true
       ||morpion[1]===true && morpion[4]===true && morpion[7]===true
       ||morpion[2]===true && morpion[5]===true && morpion[8]===true
       ||morpion[0]===true && morpion[4]===true && morpion[8]===true
       ||morpion[2]===true && morpion[4]===true && morpion[6]===true){
            congrat.querySelector('h2').innerHTML='cross win!';
            congrat.style.display = 'flex';

    } else if(morpion[0]===false && morpion[1]===false && morpion[2]===false
        ||morpion[3]===false && morpion[4]===false && morpion[5]===false
        ||morpion[6]===false && morpion[7]===false && morpion[8]===false
        ||morpion[0]===false && morpion[3]===false && morpion[6]===false
        ||morpion[1]===false && morpion[4]===false && morpion[7]===false
        ||morpion[2]===false && morpion[5]===false && morpion[8]===false
        ||morpion[0]===false && morpion[4]===false && morpion[8]===false
        ||morpion[2]===false && morpion[4]===false && morpion[6]===false){
            congrat.querySelector('h2').innerText='circle win!';
            congrat.style.display = 'flex';
        }
}

var i = 0; //crosses and circles index
checkmark.onclick = function() {
    morpion.splice(indexMorpion, 1, activeUser)//setting boxes' status
    activeUser = !activeUser;
    i++;
    if (activeUser) {
        activeUserIndiv.style.backgroundImage = 'url("./img/cross.svg")'
    } else {
        activeUserIndiv.style.backgroundImage = 'url("./img/circle.svg")'
    }
    pushElement();
    testWinning()
}

var restart = function() {
    congrat.style.display= 'none';
    i = 0;
    activeUser = true;
    elementsTemplate = [cross.cloneNode(false)];
    morpion = Array(9);
    for(box of boxes) {
        box.innerHTML = ""
    }
}

for(box of boxes) {
    box.addEventListener('click', function () {
        if (!this.contains(this.querySelector('img'))) {
            this.appendChild(elementsTemplate[i])
        };
        indexMorpion = this.classList[1];
    })
}