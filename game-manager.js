// Game Manager - Handles loading the correct daily game
// This file determines which game to load based on the current date

// List of all available games with their dates
const GAME_SCHEDULE = [
  { date: "2025-05-27", file: "game-001.js", gameVar: "GAME_001" },
  { date: "2025-05-28", file: "game-002.js", gameVar: "GAME_002" },
  // Add more games here as you create them
  // { date: "2025-05-28", file: "game-003.js", gameVar: "GAME_003" },
];

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
  const game = GAME_SCHEDULE.find((g) => g.date === dateString);

  if (game) {
    return game;
  }

  // If no game found for today, cycle through available games
  // This ensures there's always a game to play
  const daysSinceStart = getDaysSince("2025-05-26");
  const gameIndex = daysSinceStart % GAME_SCHEDULE.length;
  return GAME_SCHEDULE[gameIndex];
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
  const gameInfo = getGameForDate(todayDate);

  console.log(`Loading game for ${todayDate}: ${gameInfo.file}`);

  // Dynamically load the game script
  const script = document.createElement("script");
  script.src = `games/${gameInfo.file}`;

  return new Promise((resolve, reject) => {
    script.onload = () => {
      // Access the game data from the global variable
      const gameData = window[gameInfo.gameVar];
      if (gameData) {
        console.log(`Successfully loaded: ${gameData.title}`);
        resolve(gameData);
      } else {
        reject(new Error(`Game data not found: ${gameInfo.gameVar}`));
      }
    };

    script.onerror = () => {
      reject(new Error(`Failed to load game file: ${gameInfo.file}`));
    };

    document.head.appendChild(script);
  });
}

// Export for use in main game script
window.GameManager = {
  loadTodaysGame,
  getTodayDate,
  getGameForDate,
};
