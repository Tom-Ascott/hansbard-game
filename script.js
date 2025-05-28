/* =================================
   HANSBARD GAME - COMPLETE JAVASCRIPT
   Parliamentary word game functionality
   ================================= */

/* =================================
   GAME DATA - LOADED DYNAMICALLY
   Game data loaded from daily game files
   ================================= */

let currentGameTheme = null; // Will be loaded dynamically

// Game state tracking
let currentRound = 0;
let score = 0;
let gameComplete = false;
let resultsPattern = []; // Track correct/incorrect pattern for sharing

/* =================================
   DAILY STREAK SYSTEM
   Track consecutive days of play to encourage daily habits
   ================================= */

// Streak management functions
const StreakManager = {
  // Get current streak data from localStorage
  getStreakData() {
    const defaultData = {
      currentStreak: 0,
      longestStreak: 0,
      lastPlayedDate: null,
      gamesCompleted: [], // Array of completed game numbers
    };

    const storedData = localStorage.getItem("hansbard-streak");
    if (!storedData) {
      return defaultData;
    }

    try {
      return { ...defaultData, ...JSON.parse(storedData) };
    } catch (error) {
      console.warn("Failed to parse streak data, resetting:", error);
      return defaultData;
    }
  },

  // Save streak data to localStorage
  saveStreakData(streakData) {
    try {
      localStorage.setItem("hansbard-streak", JSON.stringify(streakData));
    } catch (error) {
      console.error("Failed to save streak data:", error);
    }
  },

  // Get today's date as YYYY-MM-DD string
  getTodayString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  },

  // Get yesterday's date as YYYY-MM-DD string
  getYesterdayString() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, "0");
    const day = String(yesterday.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  },

  // Check and update streak when game loads
  checkStreak() {
    const streakData = this.getStreakData();
    const today = this.getTodayString();
    const yesterday = this.getYesterdayString();

    // If never played before, no action needed
    if (!streakData.lastPlayedDate) {
      console.log("New player - no streak to check");
      return streakData;
    }

    // If last played today, streak continues (no change)
    if (streakData.lastPlayedDate === today) {
      console.log(`Streak continues: ${streakData.currentStreak} days`);
      return streakData;
    }

    // If last played yesterday, streak can continue when game completed
    if (streakData.lastPlayedDate === yesterday) {
      console.log(`Streak ready to continue: ${streakData.currentStreak} days`);
      return streakData;
    }

    // If last played more than 1 day ago, streak is broken
    if (streakData.currentStreak > 0) {
      console.log(
        `Streak broken! Was ${streakData.currentStreak} days, now reset to 0`
      );
      streakData.currentStreak = 0;
      this.saveStreakData(streakData);
    }

    return streakData;
  },

  // Update streak when game is completed
  updateStreakOnCompletion(gameNumber) {
    const streakData = this.getStreakData();
    const today = this.getTodayString();
    const yesterday = this.getYesterdayString();

    // Add this game to completed games list (avoid duplicates)
    if (!streakData.gamesCompleted.includes(gameNumber)) {
      streakData.gamesCompleted.push(gameNumber);
    }

    // If already played today, don't update streak
    if (streakData.lastPlayedDate === today) {
      console.log("Already played today - streak unchanged");
      this.saveStreakData(streakData);
      return streakData;
    }

    // If last played yesterday (or never), increment streak
    if (!streakData.lastPlayedDate || streakData.lastPlayedDate === yesterday) {
      streakData.currentStreak += 1;
      streakData.lastPlayedDate = today;

      // Update longest streak if needed
      if (streakData.currentStreak > streakData.longestStreak) {
        streakData.longestStreak = streakData.currentStreak;
      }

      // Track streak milestones in Google Analytics
      if ([3, 7, 14, 30, 50, 100].includes(streakData.currentStreak)) {
        gtag("event", "streak_milestone", {
          streak_length: streakData.currentStreak,
          milestone_type: streakData.currentStreak + "_day_streak",
        });
      }

      console.log(`Streak updated: ${streakData.currentStreak} days`);
    } else {
      // Gap in playing - start new streak
      streakData.currentStreak = 1;
      streakData.lastPlayedDate = today;
      console.log("Started new streak: 1 day");
    }

    this.saveStreakData(streakData);
    return streakData;
  },

  // Get streak display text for UI
  getStreakDisplayText(streakData) {
    if (streakData.currentStreak === 0) {
      return "Start your streak today!";
    } else if (streakData.currentStreak === 1) {
      return "🔥 1 Day Streak!";
    } else {
      return `🔥 ${streakData.currentStreak} Day Streak!`;
    }
  },

  // Check if user has completed today's game
  hasCompletedToday(gameNumber) {
    const streakData = this.getStreakData();
    const today = this.getTodayString();
    return (
      streakData.lastPlayedDate === today &&
      streakData.gamesCompleted.includes(gameNumber)
    );
  },
};

// Wait for page to load before adding event listeners
document.addEventListener("DOMContentLoaded", async function () {
  console.log("HansBard game loaded successfully");

  // Load today's game dynamically
  try {
    console.log("Loading today's game...");
    currentGameTheme = await GameManager.loadTodaysGame();
    console.log("Game loaded:", currentGameTheme.title);
    // Check streak status when game loads
    StreakManager.checkStreak();

    // Initialize the first round display
    initializeGameDisplay();
  } catch (error) {
    console.error("Failed to load game:", error);
    alert("Failed to load today's game. Please refresh the page.");
    return;
  }

  // Initialize the first round display
  function initializeGameDisplay() {
    // Set up the first round
    const firstRound = currentGameTheme.rounds[0];

    // Update the initial word display
    document.querySelector(".word-card:first-child .word-text").textContent =
      firstRound.known.word;
    document.querySelector(".word-card:first-child .word-count").textContent =
      formatCount(firstRound.known.count) + " mentions";
    document.querySelector(".word-card.unknown .word-text").textContent =
      firstRound.unknown.word;
    document.querySelector(".word-card.unknown .word-count").textContent =
      "??? mentions";

    // Update the question
    document.querySelector(
      ".question"
    ).textContent = `Is "${firstRound.unknown.word}" mentioned more or less than "${firstRound.known.word}" in UK Parliament?`;
  }

  // Set game date dynamically from loaded game
  const gameDate = new Date(currentGameTheme.date + "T00:00:00");
  const dateString = gameDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("current-date").textContent = dateString;

  // Set dynamic game number
  document.getElementById("game-number").textContent =
    currentGameTheme.gameNumber;

  /* =================================
     MODAL FUNCTIONALITY
     Show/hide the help modal dialog
     ================================= */

  // Get modal elements
  const helpButton = document.getElementById("help-button");
  const modal = document.getElementById("help-modal");
  const closeButton = document.getElementById("modal-close");

  // Show modal when help button is clicked
  helpButton.addEventListener("click", function () {
    console.log("Help button clicked - showing modal");
    modal.classList.add("show");
  });

  // Hide modal when close button is clicked
  closeButton.addEventListener("click", function () {
    console.log("Close button clicked - hiding modal");
    modal.classList.remove("show");
  });

  // Hide modal when clicking outside the modal window
  modal.addEventListener("click", function (event) {
    // Only close if clicking the overlay, not the modal window itself
    if (event.target === modal) {
      console.log("Clicked outside modal - hiding modal");
      modal.classList.remove("show");
    }
  });

  /* =================================
     FIRST VISIT AUTO-SHOW
     Show modal automatically for new visitors
     ================================= */

  // Check if this is the user's first visit
  function checkFirstVisit() {
    const hasVisitedBefore = localStorage.getItem("hansbard-visited");

    if (!hasVisitedBefore) {
      console.log("First visit detected - showing help modal");
      // Small delay so the page loads completely first
      setTimeout(function () {
        modal.classList.add("show");
      }, 1000);

      // Mark that they've visited now
      localStorage.setItem("hansbard-visited", "true");
    } else {
      console.log("Returning visitor - not showing modal automatically");
    }
  }

  // Check for first visit when page loads
  checkFirstVisit();

  // Get button elements
  const higherBtn = document.querySelector(".choice-btn:nth-child(1)");
  const lowerBtn = document.querySelector(".choice-btn:nth-child(2)");

  /* =================================
       BUTTON CLICK HANDLERS
       ================================= */

  // Higher button click handler
  higherBtn.addEventListener("click", function () {
    console.log("Higher button clicked");
    handleGuess("higher");
  });

  // Lower button click handler
  lowerBtn.addEventListener("click", function () {
    console.log("Lower button clicked");
    handleGuess("lower");
  });

  /* =================================
       COMPLETE GAME LOGIC
       ================================= */
  function handleGuess(choice) {
    // Get current round data
    const currentRoundData = currentGameTheme.rounds[currentRound];

    // Track round attempt in Google Analytics
    gtag("event", "round_attempt", {
      game_number: currentGameTheme.gameNumber,
      round_number: currentRound + 1,
      word_guessed: currentRoundData.unknown.word,
    });

    const correctAnswer = currentRoundData.answer;
    const isCorrect = choice === correctAnswer;

    // Update score if correct
    if (isCorrect) {
      score++;
    }

    // Show the result
    showResult(currentRoundData, choice, isCorrect);

    // Update progress tracker
    updateProgressTracker(isCorrect);

    // Disable buttons during result display
    higherBtn.disabled = true;
    lowerBtn.disabled = true;

    // Move to next round after delay
    setTimeout(function () {
      currentRound++;

      if (currentRound >= currentGameTheme.rounds.length) {
        // Game complete!
        showGameComplete();
      } else {
        // Next round
        updateGameDisplay();
        higherBtn.disabled = false;
        lowerBtn.disabled = false;
      }
    }, 500);
  }

  /* =================================
       DISPLAY UPDATE FUNCTIONS
       ================================= */
  function updateGameDisplay() {
    const roundData = currentGameTheme.rounds[currentRound];

    // Update word cards
    document.querySelector(".word-card:first-child .word-text").textContent =
      roundData.known.word;
    document.querySelector(".word-card:first-child .word-count").textContent =
      formatCount(roundData.known.count) + " mentions";
    document.querySelector(".word-card.unknown .word-text").textContent =
      roundData.unknown.word;
    document.querySelector(".word-card.unknown .word-count").textContent =
      "??? mentions";

    // Update question
    document.querySelector(
      ".question"
    ).textContent = `Is "${roundData.unknown.word}" mentioned more or less than "${roundData.known.word}" in UK Parliament?`;
  }

  function showResult(roundData, playerChoice, isCorrect) {
    // Reveal the unknown word count
    document.querySelector(".word-card.unknown .word-count").textContent =
      formatCount(roundData.unknown.count) + " mentions";

    // Show feedback
    const resultText = isCorrect ? "✓ Correct!" : "✗ Incorrect!";
    console.log(
      `${resultText} ${roundData.unknown.word}: ${formatCount(
        roundData.unknown.count
      )} mentions (${roundData.answer})`
    );
  }

  function updateProgressTracker(wasCorrect) {
    const roundBoxes = document.querySelectorAll(".round-box");
    const currentBox = roundBoxes[currentRound];

    // Update current round box
    currentBox.classList.remove("current");
    // Track result for sharing
    resultsPattern.push(wasCorrect);

    if (wasCorrect) {
      currentBox.classList.add("correct");
      currentBox.textContent = "✓";
    } else {
      currentBox.classList.add("incorrect");
      currentBox.textContent = "✗";
    }

    // Highlight next round if not complete
    if (currentRound + 1 < roundBoxes.length) {
      roundBoxes[currentRound + 1].classList.add("current");
    }
  }

  function showGameComplete() {
    // Update streak when game is completed
    const updatedStreakData = StreakManager.updateStreakOnCompletion(
      currentGameTheme.gameNumber
    );

    // Track game completion in Google Analytics
    gtag("event", "game_complete", {
      game_number: currentGameTheme.gameNumber,
      score: score,
      streak_length: updatedStreakData.currentStreak,
    });

    const streakText = StreakManager.getStreakDisplayText(updatedStreakData);

    // Replace the entire game area with a completion screen
    const gameArea = document.querySelector(".game-area");

    // Create the HTML step by step to avoid syntax issues
    const completionHTML =
      '<div style="text-align: center; padding: 2rem;">' +
      '<h2 style="color: var(--commons-green); margin-bottom: 1rem; font-size: 2rem;">Game Complete!</h2>' +
      '<div style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-black);">' +
      "Score: " +
      score +
      "/5" +
      "</div>" +
      // Add streak display
      '<div style="font-size: 1.3rem; margin-bottom: 1.5rem; color: var(--commons-green); font-weight: bold;">' +
      streakText +
      "</div>" +
      // Show longest streak if it's impressive (3+ days)
      (updatedStreakData.longestStreak >= 3
        ? '<div style="font-size: 1rem; margin-bottom: 1.5rem; color: var(--text-black); opacity: 0.7;">' +
          "Longest streak: " +
          updatedStreakData.longestStreak +
          " days" +
          "</div>"
        : "") +
      '<div style="background: var(--stone-white); border: 1px solid var(--border-grey); border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem;">' +
      '<div style="font-size: 1.2rem; margin-bottom: 1rem; color: var(--text-black);">' +
      "The theme for today's words is..." +
      "</div>" +
      '<button id="reveal-theme-btn" class="choice-btn" style="margin-bottom: 1rem;">🎯 Reveal Theme</button>' +
      '<div id="theme-explanation" style="display: none;">' +
      '<div style="font-size: 1.4rem; font-weight: bold; color: var(--commons-green); margin-bottom: 0.5rem; margin-top: 1rem;">' +
      '"' +
      currentGameTheme.title +
      '"' +
      "</div>" +
      '<div style="color: var(--text-black); font-style: italic;">' +
      currentGameTheme.explanation +
      "</div>" +
      "</div>" +
      "</div>" +
      '<button id="share-results" class="choice-btn" style="margin-bottom: 1rem;">Share Results</button>' +
      '<button class="choice-btn" style="margin-bottom: 1rem; margin-left: 1rem;" onclick="window.open(\'https://www.buymeacoffee.com/TomAscott\', \'_blank\')">🏛️ Buy me a coffee</button>' +
      '<button id="feedback-button" class="choice-btn" style="margin-top: 1rem;">📝 Send Feedback</button>' +
      '<p style="color: var(--text-black); opacity: 0.8;">Come back tomorrow for a new theme!</p>' +
      "</div>";

    gameArea.innerHTML = completionHTML;

    // Add reveal theme functionality
    document
      .getElementById("reveal-theme-btn")
      .addEventListener("click", function () {
        // Track theme reveal in Google Analytics
        gtag("event", "theme_reveal", {
          game_number: currentGameTheme.gameNumber,
          user_score: score,
        });
        // Hide the reveal button
        document.getElementById("reveal-theme-btn").style.display = "none";
        // Show the theme explanation
        document.getElementById("theme-explanation").style.display = "block";
      });

    // Add share functionality
    document
      .getElementById("share-results")
      .addEventListener("click", shareResults);

    // Add feedback functionality
    document
      .getElementById("feedback-button")
      .addEventListener("click", function () {
        window.location =
          "mailto:tomwolfgangascott@gmail.com?subject=HansBard Feedback&body=Hi Tom,%0A%0AI wanted to share some feedback about HansBard:%0A%0A";
      });
  }

  /* =================================
     SHARE RESULTS FUNCTIONALITY
     Create and copy shareable results text
     ================================= */

  function shareResults() {
    // Create the share text
    const today = new Date();
    const dateStr = today.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    });

    // Convert results pattern to emojis
    const emojiPattern = resultsPattern
      .map((isCorrect) => (isCorrect ? "✅" : "❌"))
      .join("");

    const shareText = `HansBard #${currentGameTheme.gameNumber} ${score}/5 🏛️
${emojiPattern}

Daily Parliamentary Word Game
hansbard.com`;

    // Copy to clipboard
    navigator.clipboard
      .writeText(shareText)
      .then(() => {
        // Show success feedback
        const shareButton = document.getElementById("share-results");
        const originalText = shareButton.textContent;
        shareButton.textContent = "Copied!";
        shareButton.disabled = true;

        // Reset button after 2 seconds
        setTimeout(() => {
          shareButton.textContent = originalText;
          shareButton.disabled = false;
        }, 2000);

        console.log("Results copied to clipboard:", shareText);
      })
      .catch((err) => {
        console.error("Failed to copy to clipboard:", err);
        // Fallback - show the text in an alert
        alert("Copy this to share your results:\n\n" + shareText);
      });
  }

  /* =================================
       UTILITY FUNCTIONS
       ================================= */
  function formatCount(count) {
    return count.toLocaleString();
  }
});
