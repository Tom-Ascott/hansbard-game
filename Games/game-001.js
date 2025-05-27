// Game #1 - Cabinet Reshuffle
// Date: 2025-05-26
// Theme: Government reshuffles meet card games!

const GAME_001 = {
  gameNumber: 1,
  date: "2025-05-26",
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
