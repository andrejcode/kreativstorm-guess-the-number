console.log('Hello, world!');

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
