// Game #XXX - [THEME NAME]
// Date: YYYY-MM-DD
// Theme: [Brief description of the double meaning]

const GAME_XXX = {
  gameNumber: XXX,
  date: "YYYY-MM-DD",
  title: "[Theme Title]",
  explanation: "[Full explanation of how the theme connects two concepts]",
  // Strategic progression: [Describe the pattern, e.g., Lower, Higher, Higher, Lower, Higher]
  rounds: [
    {
      known: { word: "[Word1]", count: 00000 },
      unknown: { word: "[Word2]", count: 00000 },
      answer: "lower", // or "higher"
    },
    {
      known: { word: "[Word2]", count: 00000 },
      unknown: { word: "[Word3]", count: 00000 },
      answer: "higher", // or "lower"
    },
    {
      known: { word: "[Word3]", count: 00000 },
      unknown: { word: "[Word4]", count: 00000 },
      answer: "higher", // or "lower"
    },
    {
      known: { word: "[Word4]", count: 00000 },
      unknown: { word: "[Word5]", count: 00000 },
      answer: "lower", // or "higher"
    },
    {
      known: { word: "[Word5]", count: 00000 },
      unknown: { word: "[Word6]", count: 00000 },
      answer: "higher", // or "lower"
    },
  ],
};

/* 
HOW TO USE THIS TEMPLATE:
1. Copy this file and rename it to game-XXX.js (where XXX is the next number)
2. Replace all XXX with your game number
3. Set the date for when this game should appear
4. Fill in your theme title and explanation
5. Add your 6 words with their Hansard counts
6. Set the correct answer for each round
7. Test that the progression creates good gameplay!

TIPS FOR GOOD THEMES:
- Choose words that work in both contexts (e.g., parliamentary AND another domain)
- Order words strategically - mix higher/lower for variety
- Aim for surprising revelations (words players wouldn't expect to be high/low)
- The final word should create an "aha!" moment when the theme is revealed
*/
