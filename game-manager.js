// Game Manager - Simplified architecture using games database
// This file determines which game to load based on the current date

// Function to get today's date in YYYY-MM-DD format
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Function to get the game for a specific date
function getGameForDate(dateString) {
  // Find game by exact date match
  const game = window.GAMES_DATABASE.find((g) => g.date === dateString);

  if (game) {
    return game;
  }

  // If no game found for today, cycle through available games
  // This ensures there's always a game to play
  const daysSinceStart = getDaysSince("2025-05-26");
  const gameIndex = daysSinceStart % window.GAMES_DATABASE.length;
  return window.GAMES_DATABASE[gameIndex];
}

// Helper function to calculate days between dates
function getDaysSince(startDate) {
  const start = new Date(startDate);
  const today = new Date(getTodayDate());
  const diffTime = Math.abs(today - start);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Main function to load today's game
async function loadTodaysGame() {
  const todayDate = getTodayDate();

  // Check if games database is loaded
  if (!window.GAMES_DATABASE) {
    throw new Error(
      "Games database not loaded. Make sure games-database.js is included."
    );
  }

  const gameData = getGameForDate(todayDate);

  console.log(
    `Loading game for ${todayDate}: ${gameData.title} (#${gameData.gameNumber})`
  );

  return gameData;
}

// Function to get all games (useful for archive feature)
function getAllGames() {
  if (!window.GAMES_DATABASE) {
    throw new Error("Games database not loaded.");
  }
  return window.GAMES_DATABASE;
}

// Function to get game by number (useful for archive feature)
function getGameByNumber(gameNumber) {
  if (!window.GAMES_DATABASE) {
    throw new Error("Games database not loaded.");
  }
  return window.GAMES_DATABASE.find((g) => g.gameNumber === gameNumber);
}

// Function to check if a date is weekend (Saturday or Sunday)
function isWeekend(dateString) {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
  return dayOfWeek === 0 || dayOfWeek === 6;
}

// Export for use in main game script
window.GameManager = {
  loadTodaysGame,
  getTodayDate,
  getGameForDate,
  getAllGames, // New: for archive feature
  getGameByNumber, // New: for archive feature
  isWeekend,
};
