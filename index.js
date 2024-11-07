const MAX_ATTEMPTS = 10;

/**
 * Generates a random number between 1 and 100 (inclusive).
 *
 * @returns {number} A random number between 1 and 100.
 */
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

/**
 * Prompts the user to enter a guess between 1 and 100.
 * Repeats the prompt until a valid number is entered.
 *
 * @returns {number|null} The player's guess if it's a valid number between 1 and 100, or null if the prompt is cancelled.
 */
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

/**
 * Checks the player's guess against the correct number.
 *
 * @param {number} playerGuess - The player's guess.
 * @param {number} correctNumber - The correct number to guess.
 * @returns {string} - A message indicating if the guess is "too low", "too high", or "correct".
 *
 * @throws {Error} - Throws an error if inputs are not valid numbers.
 */
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

/**
 * Generates a congratulatory message based on the number of attempts taken to guess the number.
 *
 * @param {number} attemptCounter - The number of attempts taken to guess the number.
 * @returns {string} A congratulatory message corresponding to the number of attempts.
 */
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

/**
 * Runs the number guessing game.
 * The player has 10 attempts to guess the correct number.
 * After each guess, the player is informed whether their guess is too high, too low, or correct.
 * If the player guesses the correct number within 10 attempts, a congratulatory message is displayed.
 * If the player does not guess the correct number within 10 attempts, the correct number is revealed.
 */
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
          } ${attemptCounter === 9 ? 'attempt' : 'attempts'} left.` // Pluralize "attempt" if there is more than one attempt left.
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
