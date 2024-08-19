let firstNum = 0;
let secondNum = 0;
let score = 0;

function reset () {
    updateNumbers();
}

function updateNumbers (){
    firstNum = getRandomNumber();
    secondNum = getRandomNumber();
    document.getElementById('firstNum').innerText = firstNum;
    document.getElementById('secondNum').innerText = secondNum;
}

function getRandomNumber (){
    return Math.floor(Math.random() * 10);
}

function showAlert(message, type){
    const alertBox = document.getElementById('alertBox');
    if (type === 'green') {
        alertBox.innerHTML = `<div class="alert alert-green">${message}</div>`;
    } else if (type === 'red') {
        alertBox.innerHTML = `<div class="alert alert-red">${message}</div>`;
    } else if (type === 'orange') {
        alertBox.innerHTML = `<div class="alert alert-orange">${message}</div>`;
    }
    
    setTimeout(() => {
        alertBox.innerHTML = '';
    }, 3000);
}

function submit () {
    let userAnswer = document.getElementById('answer').value;
    let correctAnswer;
    
    if (firstNum > secondNum){
        correctAnswer = '>';
    } else if (firstNum < secondNum) {
        correctAnswer = '<';
    } else if (firstNum === secondNum){
        correctAnswer = '=';
        showAlert('Nummerene er like, vennligst generer nye tall!','orange');
        return;
    }
    
    if (userAnswer === correctAnswer){
        showAlert('Korrekt!' + 'Du har fått 1 poeng', 'green');
        score += 1;
        document.getElementById('poeng').innerText = score;
        updateNumbers();
    } else {
        score -= 1;
        document.getElementById('poeng').innerText = score;
        showAlert('Feil, Det riktig svaret er' + correctAnswer + 'Du har mistet 1 poeng', 'red');
    }
}