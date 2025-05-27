let userScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function play(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = '';

  document.getElementById('user-choice').textContent = `You chose: ${capitalize(userChoice)}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${capitalize(computerChoice)}`;

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win! 🎉';
    userScore++;
  } else {
    result = 'You lose 😢';
    computerScore++;
  }

  // Update score display
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;

  // Show result with animation
  const resultBox = document.getElementById('result');
  resultBox.textContent = result;
  resultBox.style.opacity = 0;
  resultBox.style.transform = 'translateY(-10px)';
  setTimeout(() => {
    resultBox.style.animation = 'fadeInUp 0.5s forwards';
  }, 10);

  // Add visual feedback
  highlightChoice(userChoice, computerChoice);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function highlightChoice(user, computer) {
  const buttons = document.querySelectorAll('.choices button');

  buttons.forEach(button => {
    button.classList.remove('selected');
    if (button.textContent.toLowerCase() === user) {
      button.classList.add('selected');
    }
  });

  // Optional: add a brief delay before resetting styles
  setTimeout(() => {
    buttons.forEach(btn => btn.classList.remove('selected'));
  }, 500);
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById('user-score').textContent = '0';
  document.getElementById('computer-score').textContent = '0';
  document.getElementById('user-choice').textContent = '';
  document.getElementById('computer-choice').textContent = '';
  document.getElementById('result').textContent = '';
}