// Game #2 - Political Theater
// Date: 2025-05-28
// Theme: Parliament meets the stage!

window.GAME_002 = {
  gameNumber: 2,
  date: "2025-05-28",
  title: "Political Theater",
  explanation:
    "Today's theme connects parliamentary proceedings with theatrical performance! Each word works for both political drama and stage drama.",
  // Strategic progression: Lower, Higher, Higher, Lower, Higher
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
};
