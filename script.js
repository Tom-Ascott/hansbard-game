/* =================================
   HANSBARD GAME - COMPLETE JAVASCRIPT
   Parliamentary word game functionality
   ================================= */

/* =================================
   GAME DATA - CABINET RESHUFFLE THEME
   Strategic word order for exciting gameplay
   ================================= */

const cabinetReshuffleTheme = {
  title: "Cabinet Reshuffle",
  explanation:
    "Today's theme connects government cabinet reshuffles with card games! Each word works for both political reorganization and dealing cards.",
  // Strategic progression: Lower, Higher, Higher, Lower, Higher
  rounds: [
    {
      known: { word: "Suit", count: 23606 },
      unknown: { word: "Trump", count: 4428 },
      answer: "lower",
    },
    {
      known: { word: "Trump", count: 4428 },
      unknown: { word: "Play", count: 143363 },
      answer: "higher",
    },
    {
      known: { word: "Play", count: 143363 },
      unknown: { word: "Deal", count: 742672 },
      answer: "higher",
    },
    {
      known: { word: "Deal", count: 742672 },
      unknown: { word: "Cut", count: 161421 },
      answer: "lower",
    },
    {
      known: { word: "Cut", count: 161421 },
      unknown: { word: "Hand", count: 237551 },
      answer: "higher",
    },
  ],
};

// Game state tracking
let currentRound = 0;
let score = 0;
let gameComplete = false;
let resultsPattern = []; // Track correct/incorrect pattern for sharing

// Wait for page to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  console.log("HansBard game loaded successfully");

  // Set today's date dynamically
  const today = new Date();
  const dateString = today.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("current-date").textContent = dateString;

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
    const currentRoundData = cabinetReshuffleTheme.rounds[currentRound];
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

      if (currentRound >= cabinetReshuffleTheme.rounds.length) {
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
    const roundData = cabinetReshuffleTheme.rounds[currentRound];

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
    // Replace the entire game area with a completion screen
    const gameArea = document.querySelector(".game-area");
    gameArea.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <h2 style="color: var(--commons-green); margin-bottom: 1rem; font-size: 2rem;">Game Complete!</h2>
        <div style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--text-black);">
          Score: ${score}/5
        </div>
        <div style="background: var(--stone-white); border: 1px solid var(--border-grey); border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem;">
          <div style="font-size: 1.4rem; font-weight: bold; color: var(--commons-green); margin-bottom: 0.5rem;">
            Theme: "${cabinetReshuffleTheme.title}"
          </div>
          <div style="color: var(--text-black); font-style: italic;">
            ${cabinetReshuffleTheme.explanation}
          </div>
        </div>
        <button id="share-results" class="choice-btn" style="margin-bottom: 1rem;">Share Results</button>
        <p style="color: var(--text-black); opacity: 0.8;">Come back tomorrow for a new theme!</p>
      </div>
    `;

    // Add share functionality
    document
      .getElementById("share-results")
      .addEventListener("click", shareResults);
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

    const shareText = `HansBard #1 ${score}/5 🏛️
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
