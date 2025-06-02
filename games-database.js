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

  // Game #4 - Running for Office
  {
    gameNumber: 4,
    date: "2025-05-30",
    title: "Running for Office",
    explanation:
      "Today's theme connects political campaigns with athletic running! Each word relates to both electoral races and physical running.",
    rounds: [
      {
        known: { word: "Field", count: 138988 },
        unknown: { word: "Trail", count: 4015 },
        answer: "lower",
      },
      {
        known: { word: "Trail", count: 4015 },
        unknown: { word: "Race", count: 40474 },
        answer: "higher",
      },
      {
        known: { word: "Race", count: 40474 },
        unknown: { word: "Ground", count: 208330 },
        answer: "higher",
      },
      {
        known: { word: "Ground", count: 208330 },
        unknown: { word: "Pace", count: 27722 },
        answer: "lower",
      },
      {
        known: { word: "Pace", count: 27722 },
        unknown: { word: "Distance", count: 38919 },
        answer: "higher",
      },
    ],
  },

  // Game #5 - Black Rod's Ceremony (Weekend Edition)
  {
    gameNumber: 5,
    date: "2025-05-31",
    title: "Black Rod's Ceremony",
    explanation:
      "Today's theme explores the ancient ceremonies and officers of Parliament! From the Gentleman Usher of the Black Rod to the parliamentary Chaplain, each word represents a formal role or ceremonial position in Westminster's grand traditions.",
    rounds: [
      {
        known: { word: "Chaplain", count: 2814 },
        unknown: { word: "Mace", count: 1015 },
        answer: "lower",
      },
      {
        known: { word: "Mace", count: 1015 },
        unknown: { word: "Yeoman", count: 961 },
        answer: "lower",
      },
      {
        known: { word: "Yeoman", count: 961 },
        unknown: { word: "Usher", count: 1820 },
        answer: "higher",
      },
      {
        known: { word: "Usher", count: 1820 },
        unknown: { word: "Serjeant", count: 4746 },
        answer: "higher",
      },
      {
        known: { word: "Serjeant", count: 4746 },
        unknown: { word: "Gentleman", count: 1406276 },
        answer: "higher",
      },
    ],
  },

  // Game #6 - The Bard's Barbs (Weekend Edition)
  {
    gameNumber: 6,
    date: "2025-06-01",
    title: "The Bard's Barbs",
    explanation:
      "Today's theme features insults coined or popularized by Shakespeare himself! These cutting words from the Bard's pen have found their way into parliamentary debates, proving that even 400 years later, nobody hurls a literary insult quite like William Shakespeare.",
    rounds: [
      {
        known: { word: "Wretch", count: 318 },
        unknown: { word: "Dastard", count: 10 },
        answer: "lower",
      },
      {
        known: { word: "Dastard", count: 10 },
        unknown: { word: "Recreant", count: 72 },
        answer: "higher",
      },
      {
        known: { word: "Recreant", count: 72 },
        unknown: { word: "Knave", count: 223 },
        answer: "higher",
      },
      {
        known: { word: "Knave", count: 223 },
        unknown: { word: "Scoundrel", count: 374 },
        answer: "higher",
      },
      {
        known: { word: "Scoundrel", count: 374 },
        unknown: { word: "Villain", count: 1098 },
        answer: "higher",
      },
    ],
  },

  // Game #7 - Party Lines
  {
    gameNumber: 7,
    date: "2025-06-02",
    title: "Party Lines",
    explanation:
      "Today's theme bridges political parties with telephone communications! Each word works in both Westminster politics and phone conversations.",
    rounds: [
      {
        known: { word: "Ring", count: 20828 },
        unknown: { word: "Block", count: 31392 },
        answer: "higher",
      },
      {
        known: { word: "Block", count: 31392 },
        unknown: { word: "Connection", count: 176106 },
        answer: "higher",
      },
      {
        known: { word: "Connection", count: 176106 },
        unknown: { word: "Hold", count: 176733 },
        answer: "higher", // Very close! Tricky
      },
      {
        known: { word: "Hold", count: 176733 },
        unknown: { word: "Group", count: 232548 },
        answer: "higher",
      },
      {
        known: { word: "Group", count: 232548 },
        unknown: { word: "Line", count: 528179 },
        answer: "higher",
      },
    ],
  },

  // Game #8 - Spanish Imports
  {
    gameNumber: 8,
    date: "2025-06-03",
    title: "Spanish Imports",
    explanation:
      "Today's words showcase Spanish vocabulary that has enriched English! From geographical features to architectural spaces and cultural traditions, these imports from España appear in parliamentary debates on everything from urban planning to tourism policy.",
    rounds: [
      {
        known: { word: "Vista", count: 1007 },
        unknown: { word: "Plaza", count: 279 },
        answer: "lower",
      },
      {
        known: { word: "Plaza", count: 279 },
        unknown: { word: "Fiesta", count: 108 },
        answer: "lower",
      },
      {
        known: { word: "Fiesta", count: 108 },
        unknown: { word: "Patio", count: 65 },
        answer: "lower",
      },
      {
        known: { word: "Patio", count: 65 },
        unknown: { word: "Siesta", count: 17 },
        answer: "lower",
      },
      {
        known: { word: "Siesta", count: 17 },
        unknown: { word: "Sierra", count: 5045 },
        answer: "higher",
      },
    ],
  },

  // Game #9 - Court of Appeal
  {
    gameNumber: 9,
    date: "2025-06-04",
    title: "Court of Appeal",
    explanation:
      "Today's theme connects the legal system with sports courts! Each word works perfectly for both judicial proceedings and competitive games played on courts.",
    rounds: [
      {
        known: { word: "Set", count: 547642 },
        unknown: { word: "Court", count: 284052 },
        answer: "lower",
      },
      {
        known: { word: "Court", count: 284052 },
        unknown: { word: "Appeal", count: 173819 },
        answer: "lower",
      },
      {
        known: { word: "Appeal", count: 173819 },
        unknown: { word: "Serve", count: 125455 },
        answer: "lower",
      },
      {
        known: { word: "Serve", count: 125455 },
        unknown: { word: "Game", count: 34573 },
        answer: "lower",
      },
      {
        known: { word: "Game", count: 34573 },
        unknown: { word: "Match", count: 28340 },
        answer: "lower",
      },
    ],
  },

  // Game #10 - Banking Committee
  {
    gameNumber: 10,
    date: "2025-06-05",
    title: "Banking Committee",
    explanation:
      "Today's theme flows between parliamentary banking policy and river systems! Each word works perfectly for both financial institutions and waterways that MPs frequently discuss.",
    rounds: [
      {
        known: { word: "Current", count: 228637 },
        unknown: { word: "Bank", count: 103118 },
        answer: "lower",
      },
      {
        known: { word: "Bank", count: 103118 },
        unknown: { word: "Channel", count: 42622 },
        answer: "lower",
      },
      {
        known: { word: "Channel", count: 42622 },
        unknown: { word: "Flow", count: 44414 },
        answer: "higher",
      },
      {
        known: { word: "Flow", count: 44414 },
        unknown: { word: "Stream", count: 14169 },
        answer: "lower",
      },
      {
        known: { word: "Stream", count: 14169 },
        unknown: { word: "Deposit", count: 14502 },
        answer: "higher",
      },
    ],
  },

  // Game #11 - House Arrest
  {
    gameNumber: 11,
    date: "2025-06-06",
    title: "House Arrest",
    explanation:
      "Today's theme connects Parliamentary procedure with legal detention! Each word works perfectly for both the legislative process and the justice system that MPs constantly debate.",
    rounds: [
      {
        known: { word: "Brief", count: 91948 },
        unknown: { word: "Charge", count: 219468 },
        answer: "higher",
      },
      {
        known: { word: "Charge", count: 219468 },
        unknown: { word: "Arrest", count: 25376 },
        answer: "lower",
      },
      {
        known: { word: "Arrest", count: 25376 },
        unknown: { word: "Case", count: 1085461 },
        answer: "higher",
      },
      {
        known: { word: "Case", count: 1085461 },
        unknown: { word: "House", count: 2162126 },
        answer: "higher",
      },
      {
        known: { word: "House", count: 2162126 },
        unknown: { word: "Order", count: 1133105 },
        answer: "lower",
      },
    ],
  },

  // Game #12 - Parliamentary Circus (Weekend Edition)
  {
    gameNumber: 12,
    date: "2025-06-07",
    title: "Parliamentary Circus",
    explanation:
      "Today's theme explores the theatrical spectacle of politics! From MPs calling proceedings a 'circus' to debates about actual entertainment industry regulations, these words capture Parliament's most colorful moments.",
    rounds: [
      {
        known: { word: "Clown", count: 1826 },
        unknown: { word: "Monkey", count: 823 },
        answer: "lower",
      },
      {
        known: { word: "Monkey", count: 823 },
        unknown: { word: "Juggle", count: 1019 },
        answer: "higher",
      },
      {
        known: { word: "Juggle", count: 1019 },
        unknown: { word: "Circus", count: 2356 },
        answer: "higher",
      },
      {
        known: { word: "Circus", count: 2356 },
        unknown: { word: "Performance", count: 74134 },
        answer: "higher",
      },
      {
        known: { word: "Performance", count: 74134 },
        unknown: { word: "Show", count: 260774 },
        answer: "higher",
      },
    ],
  },

  // Game #13 - Parliamentary Pub (Weekend Edition)
  {
    gameNumber: 13,
    date: "2025-06-08",
    title: "Parliamentary Pub",
    explanation:
      "Today's theme raises a glass to British drinking culture in politics! From licensing laws to industry debates, plus the occasional MP accused of being 'drunk on power,' these words flow through parliamentary history.",
    rounds: [
      {
        known: { word: "Wine", count: 9490 },
        unknown: { word: "Pub", count: 8396 },
        answer: "lower",
      },
      {
        known: { word: "Pub", count: 8396 },
        unknown: { word: "Whisky", count: 7584 },
        answer: "lower",
      },
      {
        known: { word: "Whisky", count: 7584 },
        unknown: { word: "Drunk", count: 5859 },
        answer: "lower",
      },
      {
        known: { word: "Drunk", count: 5859 },
        unknown: { word: "Sober", count: 4656 },
        answer: "lower",
      },
      {
        known: { word: "Sober", count: 4656 },
        unknown: { word: "Beer", count: 19237 },
        answer: "higher",
      },
    ],
  },

  // TO ADD MORE GAMES:
  // Just copy this template and fill in the details:
  /*
  {
    gameNumber: 8,
    date: "2025-06-03",
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
