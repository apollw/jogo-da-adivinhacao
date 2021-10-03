'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Quando não há input
  if (!guess) {
    //document.querySelector('.message').textContent = 'Sem número!';
    displayMessage('Sem Número!');

    //Quando jogador vence
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Número Correto!';
    displayMessage('Número Correto!');
    document.querySelector('.number').textContent = secretNumber;

    //Editando estilos CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Quando o palpite é diferente da resposta correta
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //  guess > secretNumber ? 'Muito Alto!' : 'Muito Baixo!';
      displayMessage(guess > secretNumber ? 'Muito Alto!' : 'Muito Baixo!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Você perdeu!';
      document.querySelector('.score').textContent = 0;
    }
  }

  /*
    //Quando o palpite é muito alto
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Muito Alto!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Você perdeu!';
      document.querySelector('.score').textContent = 0;
    }

    //Quando o palpite é muito baixo
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Muito Baixo!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Você perdeu!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

//Reiniciando o jogo
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Comece a adivinhar...';
  displayMessage('Comece a adivinhar...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
