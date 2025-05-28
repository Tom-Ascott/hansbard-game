// HansBard Games Database
// All games stored in a single, maintainable file

const GAMES_DATABASE = [
  // Game #1 - Cabinet Reshuffle
  {
    gameNumber: 1,
    date: "2025-05-26",
    title: "Cabinet Reshuffle",
    explanation:
      "Today's theme connects government cabinet reshuffles with card games! Each word works for both political reorganization and dealing cards.",
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
  },

  // Game #2 - Political Theater
  {
    gameNumber: 2,
    date: "2025-05-28",
    title: "Political Theater",
    explanation:
      "Today's theme connects parliamentary proceedings with theatrical performance! Each word works for both political drama and stage drama.",
    rounds: [
      {
        known: { word: "Performance", count: 74134 },
        unknown: { word: "Cast", count: 42641 },
        answer: "lower",
      },
      {
        known: { word: "Cast", count: 42641 },
        unknown: { word: "Role", count: 215804 },
        answer: "higher",
      },
      {
        known: { word: "Role", count: 215804 },
        unknown: { word: "Stage", count: 342707 },
        answer: "higher",
      },
      {
        known: { word: "Stage", count: 342707 },
        unknown: { word: "Scene", count: 23076 },
        answer: "lower",
      },
      {
        known: { word: "Scene", count: 23076 },
        unknown: { word: "Act", count: 904293 },
        answer: "higher",
      },
    ],
  },

  // Game #3 - Crossing the Floor
  {
    gameNumber: 3,
    date: "2025-05-29",
    title: "Crossing the Floor",
    explanation:
      "Today's cryptic theme combines different types of crossings with different types of floors! From zebra crossings to dance floors, each word represents either a type of crossing or a type of floor that appears in Parliamentary debates.",
    rounds: [
      {
        known: { word: "Ground", count: 208330 },
        unknown: { word: "Shop", count: 44428 },
        answer: "lower",
      },
      {
        known: { word: "Shop", count: 44428 },
        unknown: { word: "Dance", count: 6972 },
        answer: "lower",
      },
      {
        known: { word: "Dance", count: 6972 },
        unknown: { word: "Zebra", count: 634 },
        answer: "lower",
      },
      {
        known: { word: "Zebra", count: 634 },
        unknown: { word: "Border", count: 53982 },
        answer: "higher",
      },
      {
        known: { word: "Border", count: 53982 },
        unknown: { word: "Double", count: 63477 },
        answer: "higher",
      },
    ],
  },

  // TO ADD MORE GAMES:
  // Just copy this template and fill in the details:
  /*
  {
    gameNumber: 4,
    date: "2025-05-30",
    title: "[Your Theme Title]",
    explanation: "[Your theme explanation]",
    rounds: [
      { known: { word: "Word1", count: 0 }, unknown: { word: "Word2", count: 0 }, answer: "lower" },
      { known: { word: "Word2", count: 0 }, unknown: { word: "Word3", count: 0 }, answer: "higher" },
      { known: { word: "Word3", count: 0 }, unknown: { word: "Word4", count: 0 }, answer: "higher" },
      { known: { word: "Word4", count: 0 }, unknown: { word: "Word5", count: 0 }, answer: "lower" },
      { known: { word: "Word5", count: 0 }, unknown: { word: "Word6", count: 0 }, answer: "higher" },
    ],
  },
  */
];

// Export the database for use by the game manager
window.GAMES_DATABASE = GAMES_DATABASE;
