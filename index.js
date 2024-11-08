const MAX_ATTEMPTS = 10;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
  while (true) {
    const input = prompt('Enter your guess (between 1 and 100):');

    if (input === null) {
      const confirmCancel = confirm('Are you sure you want to leave the game?');

      if (confirmCancel) {
        return null;
      }

      continue;
    }

    const playerGuess = Number(input);

    if (
      !isNaN(playerGuess) &&
      Number.isInteger(playerGuess) &&
      playerGuess >= 1 &&
      playerGuess <= 100
    ) {
      return playerGuess;
    }

    alert('Invalid input. Please enter a number between 1 and 100.');
  }
}

function checkGuess(playerGuess, correctNumber) {
  if (
    typeof playerGuess !== 'number' ||
    typeof correctNumber !== 'number' ||
    isNaN(playerGuess) ||
    isNaN(correctNumber)
  ) {
    throw new Error(
      'Both playerGuess and correctNumber must be valid numbers.'
    );
  }

  if (playerGuess < correctNumber) {
    return 'too low';
  } else if (playerGuess > correctNumber) {
    return 'too high';
  } else {
    return 'correct';
  }
}

function generateCongratulatoryMessage(attemptCounter) {
  switch (attemptCounter) {
    case 1:
      return 'Amazing! You guessed the number on your first try!';
    case 2:
      return 'Great job! You guessed the number on your second attempt!';
    case 3:
      return 'Nice! You guessed the number on your third attempt!';
    default:
      return `Good job! You guessed the number in ${attemptCounter} attempts.`;
  }
}

function game() {
  const correctNumber = generateRandomNumber();
  let attemptCounter = 1;

  alert('Welcome to Guess the Number!');
  alert(
    `I've picked a random number between 1 and 100.\nYou have ${MAX_ATTEMPTS} attempts to guess it. Good luck!`
  );

  while (attemptCounter <= MAX_ATTEMPTS) {
    const playerGuess = getPlayerGuess();

    if (playerGuess === null) {
      alert("We're sorry you're leaving.");
      break;
    }

    try {
      const checkGuessMessage = checkGuess(playerGuess, correctNumber);

      if (checkGuessMessage === 'correct') {
        const congratulatoryMessage =
          generateCongratulatoryMessage(attemptCounter);
        alert(congratulatoryMessage);
        break;
      }

      if (attemptCounter < MAX_ATTEMPTS) {
        alert(
          `Your guess is ${checkGuessMessage}. Please try again!.\nYou have ${
            MAX_ATTEMPTS - attemptCounter
          } ${attemptCounter === 9 ? 'attempt' : 'attempts'} left.`
        );
      } else {
        alert(
          `Sorry! You did not guess the correct number. The correct number was ${correctNumber}.`
        );
      }
    } catch (error) {
      console.error(error);
      return;
    }

    attemptCounter += 1;
  }

  alert('Thanks for playing Guess the Number!');
}

game();
