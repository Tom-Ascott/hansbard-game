/* =================================
   HANSBARD GAME - BASIC FUNCTIONALITY
   Parliamentary word game JavaScript
   ================================= */

// Wait for page to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  console.log("HansBard game loaded successfully");

  // Get button elements
  const higherBtn = document.querySelector(".choice-btn:nth-child(1)");
  const lowerBtn = document.querySelector(".choice-btn:nth-child(2)");

  /* =================================
       BUTTON CLICK HANDLERS
       Basic functionality to test interaction
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
       GUESS HANDLING FUNCTION
       Process player's choice and show feedback
       ================================= */
  function handleGuess(choice) {
    // For now, just show an alert with the choice
    // Later we'll replace this with real game logic
    alert(
      `You chose: ${choice.toUpperCase()}\n\nThis is just a test - real game logic coming next!`
    );

    // Disable buttons after choice (temporary)
    higherBtn.disabled = true;
    lowerBtn.disabled = true;

    // Re-enable after 2 seconds for testing
    setTimeout(function () {
      higherBtn.disabled = false;
      lowerBtn.disabled = false;
    }, 2000);
  }
});
