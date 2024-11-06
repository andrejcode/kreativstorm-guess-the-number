// TODO: Implement the generateRandomNumber function
function generateRandomNumber() {
  return 1;
}

// TODO: Implement the getPlayerGuess function
function getPlayerGuess() {
  return 1;
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
  let playerGuess = getPlayerGuess();
  let attemptCounter = 1;

  while (attemptCounter <= 10) {
    const checkGuessMessage = checkGuess(playerGuess, correctNumber);

    if (checkGuessMessage === 'correct') {
      const congratulatoryMessage =
        generateCongratulatoryMessage(attemptCounter);
      console.log(congratulatoryMessage);
      return;
    }

    console.log(`Your guess is ${checkGuessMessage}. Please try again!`);

    playerGuess = getPlayerGuess();
    attemptCounter += 1;
  }

  console.log(
    `Sorry! You did not guess the correct number. The correct number was ${correctNumber}.`
  );
}

game();
