const MAX_ATTEMPTS = 10;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
  while (true) {
    const input = prompt('Enter your guess (between 1 and 100):');

    if (input === null) {
      return null;
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

  while (attemptCounter <= MAX_ATTEMPTS) {
    const playerGuess = getPlayerGuess();

    if (playerGuess === null) {
      alert('Game cancelled.');
      break;
    }

    try {
      const checkGuessMessage = checkGuess(playerGuess, correctNumber);

      if (checkGuessMessage === 'correct') {
        const congratulatoryMessage =
          generateCongratulatoryMessage(attemptCounter);
        alert(congratulatoryMessage);
        return;
      }

      if (attemptCounter < 10) {
        alert(
          `Your guess is ${checkGuessMessage}. Please try again!.\nYou have ${
            MAX_ATTEMPTS - attemptCounter
          } ${attemptCounter === 9 ? 'attempt' : 'attempts'} left.`
        );
      }
    } catch (error) {
      console.error(error);
      return;
    }

    attemptCounter += 1;
  }

  alert(
    `Sorry! You did not guess the correct number. The correct number was ${correctNumber}.`
  );
}

game();
