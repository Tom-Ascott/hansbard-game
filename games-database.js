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

  // Game #14 - Parliamentary Yoga
  {
    gameNumber: 14,
    date: "2025-06-09",
    title: "Parliamentary Yoga",
    explanation:
      "Today's theme finds inner peace through political positions! These ancient yoga poses have quietly influenced parliamentary debates for centuries. From warrior-like politicians to finding balance in the mountain of legislation, MPs have unknowingly channeled yoga wisdom.",
    rounds: [
      {
        known: { word: "Mountain", count: 6927 },
        unknown: { word: "Cat", count: 6715 },
        answer: "lower",
      },
      {
        known: { word: "Cat", count: 6715 },
        unknown: { word: "Cow", count: 5595 },
        answer: "lower",
      },
      {
        known: { word: "Cow", count: 5595 },
        unknown: { word: "Warrior", count: 1403 },
        answer: "lower",
      },
      {
        known: { word: "Warrior", count: 1403 },
        unknown: { word: "Lotus", count: 218 },
        answer: "lower",
      },
      {
        known: { word: "Lotus", count: 218 },
        unknown: { word: "Child", count: 146890 },
        answer: "higher",
      },
    ],
  },

  // Game #15 - School Report
  {
    gameNumber: 15,
    date: "2025-06-10",
    title: "School Report",
    explanation:
      "Today's theme earns top marks by connecting education policy with academic achievement! Each word works perfectly for both government reports on schools and the report cards students receive, proving Parliament has been in session since 1803.",
    rounds: [
      {
        known: { word: "Subject", count: 710283 },
        unknown: { word: "Mark", count: 67310 },
        answer: "lower",
      },
      {
        known: { word: "Mark", count: 67310 },
        unknown: { word: "Term", count: 262268 },
        answer: "higher",
      },
      {
        known: { word: "Term", count: 262268 },
        unknown: { word: "Grade", count: 15447 },
        answer: "lower",
      },
      {
        known: { word: "Grade", count: 15447 },
        unknown: { word: "Report", count: 818889 },
        answer: "higher",
      },
      {
        known: { word: "Report", count: 818889 },
        unknown: { word: "Class", count: 2518197 },
        answer: "higher",
      },
    ],
  },

  // Game #16 - Parliamentary Pirates
  {
    gameNumber: 16,
    date: "2025-06-11",
    title: "Parliamentary Pirates",
    explanation:
      "Today's theme sets sail for adventure on the high seas of politics! These swashbuckling pirate classics have somehow found their way into parliamentary debates. From parrots in pet policy to skulls in medical discussions, MPs have been channeling their inner Captain Hook for centuries!",
    rounds: [
      {
        known: { word: "Rum", count: 1666 },
        unknown: { word: "Parrot", count: 1021 },
        answer: "lower",
      },
      {
        known: { word: "Parrot", count: 1021 },
        unknown: { word: "Skull", count: 660 },
        answer: "lower",
      },
      {
        known: { word: "Skull", count: 660 },
        unknown: { word: "Treasure", count: 4497 },
        answer: "higher",
      },
      {
        known: { word: "Treasure", count: 4497 },
        unknown: { word: "Chest", count: 4238 },
        answer: "lower",
      },
      {
        known: { word: "Chest", count: 4238 },
        unknown: { word: "Hook", count: 5149 },
        answer: "higher",
      },
    ],
  },

  // Game #17 - Parliamentary Solar System
  {
    gameNumber: 17,
    date: "2025-06-12",
    title: "Parliamentary Solar System",
    explanation:
      "Today's theme reaches for the stars! These planets from our solar system have orbited through parliamentary debates via space exploration policy, classical references to Roman gods, and the occasional astronomical metaphor. From Mars missions to the awkward pronunciation of distant worlds!",
    rounds: [
      {
        known: { word: "Venus", count: 231 },
        unknown: { word: "Saturn", count: 100 },
        answer: "lower",
      },
      {
        known: { word: "Saturn", count: 100 },
        unknown: { word: "Jupiter", count: 245 },
        answer: "higher",
      },
      {
        known: { word: "Jupiter", count: 245 },
        unknown: { word: "Mars", count: 1068 },
        answer: "higher",
      },
      {
        known: { word: "Mars", count: 1068 },
        unknown: { word: "Pluto", count: 74 },
        answer: "lower",
      },
      {
        known: { word: "Pluto", count: 74 },
        unknown: { word: "Uranus", count: 7 },
        answer: "lower",
      },
    ],
  },

  // Game #18 - Parliamentary Monsters
  {
    gameNumber: 18,
    date: "2025-06-13",
    title: "Parliamentary Monsters",
    explanation:
      "Today's theme unleashes the creatures of the night on Friday the 13th! These classic monsters have haunted parliamentary debates through horror film regulations, Halloween policy, folklore discussions, and the occasional MP comparing opponents to supernatural beings. Some monsters are more popular in Parliament than others!",
    rounds: [
      {
        known: { word: "Demon", count: 443 },
        unknown: { word: "Vampire", count: 164 },
        answer: "lower",
      },
      {
        known: { word: "Vampire", count: 164 },
        unknown: { word: "Werewolf", count: 6 },
        answer: "lower",
      },
      {
        known: { word: "Werewolf", count: 6 },
        unknown: { word: "Zombie", count: 566 },
        answer: "higher",
      },
      {
        known: { word: "Zombie", count: 566 },
        unknown: { word: "Ghost", count: 2357 },
        answer: "higher",
      },
      {
        known: { word: "Ghost", count: 2357 },
        unknown: { word: "Monster", count: 2554 },
        answer: "higher",
      },
    ],
  },

  // Game #19 - Parliamentary Tarot (Weekend Edition)
  {
    gameNumber: 19,
    date: "2025-06-14",
    title: "Parliamentary Tarot",
    explanation:
      "Today's theme channels the mystical arts! These Major Arcana tarot cards have guided parliamentary destiny for over 200 years. From debates about justice to political fools, MPs have unknowingly invoked ancient divination wisdom in their speeches.",
    rounds: [
      {
        known: { word: "Tower", count: 14700 },
        unknown: { word: "Temperance", count: 4774 },
        answer: "lower",
      },
      {
        known: { word: "Temperance", count: 4774 },
        unknown: { word: "Fool", count: 4339 },
        answer: "lower",
      },
      {
        known: { word: "Fool", count: 4339 },
        unknown: { word: "Judgement", count: 1199 },
        answer: "lower",
      },
      {
        known: { word: "Judgement", count: 1199 },
        unknown: { word: "Strength", count: 82521 },
        answer: "higher",
      },
      {
        known: { word: "Strength", count: 82521 },
        unknown: { word: "Justice", count: 229295 },
        answer: "higher",
      },
    ],
  },

  // Game #20 - Parliamentary Anatomy (Weekend Edition)
  {
    gameNumber: 20,
    date: "2025-06-15",
    title: "Parliamentary Anatomy",
    explanation:
      "Today's theme gets under the skin of medical policy! These proper anatomical bone names have appeared in parliamentary debates through NHS funding discussions, medical education curricula, and injury statistics. From the humble scapula to a surprising skeletal superstar!",
    rounds: [
      {
        known: { word: "Femur", count: 73 },
        unknown: { word: "Tibia", count: 11 },
        answer: "lower",
      },
      {
        known: { word: "Tibia", count: 11 },
        unknown: { word: "Clavicle", count: 5 },
        answer: "lower",
      },
      {
        known: { word: "Clavicle", count: 5 },
        unknown: { word: "Scapula", count: 4 },
        answer: "lower",
      },
      {
        known: { word: "Scapula", count: 4 },
        unknown: { word: "Humerus", count: 5 },
        answer: "higher",
      },
      {
        known: { word: "Humerus", count: 5 },
        unknown: { word: "Radius", count: 2967 },
        answer: "higher",
      },
    ],
  },

  // Game #21 - Press Gallery
  {
    gameNumber: 21,
    date: "2025-06-16",
    title: "Press Gallery",
    explanation:
      "Today's theme bridges parliamentary journalism with the art world! Each word works perfectly for both the press gallery where journalists report on debates and the galleries where art is displayed.",
    rounds: [
      {
        known: { word: "Gallery", count: 15858 },
        unknown: { word: "Frame", count: 16599 },
        answer: "higher",
      },
      {
        known: { word: "Frame", count: 16599 },
        unknown: { word: "Exhibition", count: 13162 },
        answer: "lower",
      },
      {
        known: { word: "Exhibition", count: 13162 },
        unknown: { word: "Portrait", count: 1866 },
        answer: "lower",
      },
      {
        known: { word: "Portrait", count: 1866 },
        unknown: { word: "Sketch", count: 3241 },
        answer: "higher",
      },
      {
        known: { word: "Sketch", count: 3241 },
        unknown: { word: "Press", count: 227846 },
        answer: "higher",
      },
    ],
  },

  // Game #22 - Division Bell
  {
    gameNumber: 22,
    date: "2025-06-17",
    title: "Division Bell",
    explanation:
      "Today's theme rings true for both Parliament and churches! Each word connects the division bell that summons MPs to vote with the ancient tradition of bell ringing.",
    rounds: [
      {
        known: { word: "Tower", count: 14700 },
        unknown: { word: "Ring", count: 20828 },
        answer: "higher",
      },
      {
        known: { word: "Ring", count: 20828 },
        unknown: { word: "Bell", count: 21684 },
        answer: "higher",
      },
      {
        known: { word: "Bell", count: 21684 },
        unknown: { word: "Strike", count: 68134 },
        answer: "higher",
      },
      {
        known: { word: "Strike", count: 68134 },
        unknown: { word: "Chamber", count: 139113 },
        answer: "higher",
      },
      {
        known: { word: "Chamber", count: 139113 },
        unknown: { word: "Division", count: 196423 },
        answer: "higher",
      },
    ],
  },

  // Game #23 - Party Platform
  {
    gameNumber: 23,
    date: "2025-06-18",
    title: "Party Platform",
    explanation:
      "Today's theme connects political parties with train stations! Each word works perfectly for both party platforms and railway platforms, proving that politics and public transport share more than just delays and disappointment.",
    rounds: [
      {
        known: { word: "Signal", count: 18553 },
        unknown: { word: "Platform", count: 16712 },
        answer: "lower",
      },
      {
        known: { word: "Platform", count: 16712 },
        unknown: { word: "Ticket", count: 11935 },
        answer: "lower",
      },
      {
        known: { word: "Ticket", count: 11935 },
        unknown: { word: "Terminal", count: 10392 },
        answer: "lower",
      },
      {
        known: { word: "Terminal", count: 10392 },
        unknown: { word: "Standing", count: 233272 },
        answer: "higher",
      },
      {
        known: { word: "Standing", count: 233272 },
        unknown: { word: "Line", count: 528179 },
        answer: "higher",
      },
    ],
  },

  // Game #24 - Military Maneuvers
  {
    gameNumber: 24,
    date: "2025-06-19",
    title: "Military Maneuvers",
    explanation:
      "Today's theme connects defense policy with chess strategy! Each word works perfectly for both military discussions and the royal game, proving that Parliament has been playing chess with policy for centuries.",
    rounds: [
      {
        known: { word: "Castle", count: 25672 },
        unknown: { word: "Queen", count: 30035 },
        answer: "higher",
      },
      {
        known: { word: "Queen", count: 30035 },
        unknown: { word: "Knight", count: 18928 },
        answer: "lower",
      },
      {
        known: { word: "Knight", count: 18928 },
        unknown: { word: "Check", count: 51616 },
        answer: "higher",
      },
      {
        known: { word: "Check", count: 51616 },
        unknown: { word: "Bishop", count: 48715 },
        answer: "lower",
      },
      {
        known: { word: "Bishop", count: 48715 },
        unknown: { word: "Pawn", count: 942 },
        answer: "lower",
      },
    ],
  },

  // Game #25 - Longest Sitting
  {
    gameNumber: 25,
    date: "2025-06-20",
    title: "Longest Sitting",
    explanation:
      "Today's the summer solstice - the longest day meets parliamentary marathons! Each word connects the astronomical longest day with Parliament's famously long sittings. From summer recesses to all-night sessions, MPs know all about endurance - whether from the sun or the Speaker!",
    rounds: [
      {
        known: { word: "Equator", count: 344 },
        unknown: { word: "Solstice", count: 98 },
        answer: "lower",
      },
      {
        known: { word: "Solstice", count: 98 },
        unknown: { word: "Recess", count: 41060 },
        answer: "higher",
      },
      {
        known: { word: "Recess", count: 41060 },
        unknown: { word: "Summer", count: 72151 },
        answer: "higher",
      },
      {
        known: { word: "Summer", count: 72151 },
        unknown: { word: "Session", count: 137642 },
        answer: "higher",
      },
      {
        known: { word: "Session", count: 137642 },
        unknown: { word: "Light", count: 186445 },
        answer: "higher",
      },
    ],
  },

  // Game #26 - Parliamentary Pairs (Weekend Edition)
  {
    gameNumber: 26,
    date: "2025-06-21",
    title: "Parliamentary Pairs",
    explanation:
      "Today's theme features homophones - words that sound identical but spell differently! These sound-alike pairs have created countless parliamentary pronunciation debates and Hansard transcription challenges over the centuries.",
    rounds: [
      {
        known: { word: "Bear", count: 175553 },
        unknown: { word: "Bare", count: 9796 },
        answer: "lower",
      },
      {
        known: { word: "Bare", count: 9796 },
        unknown: { word: "Piece", count: 73981 },
        answer: "higher",
      },
      {
        known: { word: "Piece", count: 73981 },
        unknown: { word: "Peace", count: 136180 },
        answer: "higher",
      },
      {
        known: { word: "Peace", count: 136180 },
        unknown: { word: "Dear", count: 17899 },
        answer: "lower",
      },
      {
        known: { word: "Dear", count: 17899 },
        unknown: { word: "Deer", count: 9190 },
        answer: "lower",
      },
    ],
  },

  // Game #27 - Mirror Parliament (Weekend Edition)
  {
    gameNumber: 27,
    date: "2025-06-22",
    title: "Mirror Parliament",
    explanation:
      "Today's words are palindromes - they spell the same forwards and backwards! These symmetrical words reflect Parliament's love of balanced debate, with each term representing the balanced nature of democratic discourse.",
    rounds: [
      {
        known: { word: "Civic", count: 8934 },
        unknown: { word: "Madam", count: 30934 },
        answer: "higher",
      },
      {
        known: { word: "Madam", count: 30934 },
        unknown: { word: "Deed", count: 6102 },
        answer: "lower",
      },
      {
        known: { word: "Deed", count: 6102 },
        unknown: { word: "Tenet", count: 1223 },
        answer: "lower",
      },
      {
        known: { word: "Tenet", count: 1223 },
        unknown: { word: "Level", count: 296252 },
        answer: "higher",
      },
      {
        known: { word: "Level", count: 296252 },
        unknown: { word: "Refer", count: 242525 },
        answer: "lower",
      },
    ],
  },

  // Game #28 - Economic Forecast
  {
    gameNumber: 28,
    date: "2025-06-23",
    title: "Economic Forecast",
    explanation:
      "Today's theme flows between financial policy and weather conditions! Each word works perfectly for both market reports and meteorological forecasts, proving Parliament watches both economic and atmospheric pressure.",
    rounds: [
      {
        known: { word: "Storm", count: 9332 },
        unknown: { word: "Depression", count: 17515 },
        answer: "higher",
      },
      {
        known: { word: "Depression", count: 17515 },
        unknown: { word: "Front", count: 189387 },
        answer: "higher",
      },
      {
        known: { word: "Front", count: 189387 },
        unknown: { word: "Pressure", count: 136658 },
        answer: "lower",
      },
      {
        known: { word: "Pressure", count: 136658 },
        unknown: { word: "Climate", count: 58281 },
        answer: "lower",
      },
      {
        known: { word: "Climate", count: 58281 },
        unknown: { word: "Current", count: 229130 },
        answer: "higher",
      },
    ],
  },

  // Game #29 - Digital Harvest
  {
    gameNumber: 29,
    date: "2025-06-24",
    title: "Digital Harvest",
    explanation:
      "Today's theme bridges farming policy with computer technology! Each word works perfectly for both agricultural discussions and digital systems, proving Parliament has been cultivating tech policy since long before the internet was invented.",
    rounds: [
      {
        known: { word: "Field", count: 139073 },
        unknown: { word: "Application", count: 170888 },
        answer: "higher",
      },
      {
        known: { word: "Application", count: 170888 },
        unknown: { word: "Memory", count: 33244 },
        answer: "lower",
      },
      {
        known: { word: "Memory", count: 33244 },
        unknown: { word: "Network", count: 50176 },
        answer: "higher",
      },
      {
        known: { word: "Network", count: 50176 },
        unknown: { word: "Processing", count: 14644 },
        answer: "lower",
      },
      {
        known: { word: "Processing", count: 14644 },
        unknown: { word: "Terminal", count: 10416 },
        answer: "lower",
      },
    ],
  },

  // Game #30 - Orwellian Oracle
  {
    gameNumber: 30,
    date: "2025-06-25",
    title: "Orwellian Oracle",
    explanation:
      "Today marks George Orwell's birthday! These words from his dystopian masterpieces have ironically found their way into real parliamentary debates, proving that sometimes fiction predicts political reality with unsettling accuracy.",
    rounds: [
      {
        known: { word: "Farm", count: 52878 },
        unknown: { word: "Revolution", count: 27406 },
        answer: "lower",
      },
      {
        known: { word: "Revolution", count: 27406 },
        unknown: { word: "1984", count: 24464 },
        answer: "lower",
      },
      {
        known: { word: "1984", count: 24464 },
        unknown: { word: "Truth", count: 98212 },
        answer: "higher",
      },
      {
        known: { word: "Truth", count: 98212 },
        unknown: { word: "War", count: 391118 },
        answer: "higher",
      },
      {
        known: { word: "War", count: 391118 },
        unknown: { word: "Peace", count: 136180 },
        answer: "lower",
      },
    ],
  },

  // Game #31 - Kitchen Politics
  {
    gameNumber: 31,
    date: "2025-06-26",
    title: "Kitchen Politics",
    explanation:
      "Today's theme serves up cooking terms that have simmered into political language! Each word works perfectly for both culinary techniques and political situations, proving that Parliament has been cooking up policies with the same vocabulary chefs use in the kitchen.",
    rounds: [
      {
        known: { word: "Stir", count: 4725 },
        unknown: { word: "Recipe", count: 5420 },
        answer: "higher",
      },
      {
        known: { word: "Recipe", count: 5420 },
        unknown: { word: "Heat", count: 19722 },
        answer: "higher",
      },
      {
        known: { word: "Heat", count: 19722 },
        unknown: { word: "Boil", count: 1672 },
        answer: "lower",
      },
      {
        known: { word: "Boil", count: 1672 },
        unknown: { word: "Simmer", count: 109 },
        answer: "lower",
      },
      {
        known: { word: "Simmer", count: 109 },
        unknown: { word: "Pressure", count: 136658 },
        answer: "higher",
      },
    ],
  },

  // Game #32 - Time Management
  {
    gameNumber: 32,
    date: "2025-06-27",
    title: "Time Management",
    explanation:
      "Today's theme ticks through time words that work double duty in politics! Each word measures both chronological time and parliamentary procedures, proving that MPs have been managing time and timing their management for centuries.",
    rounds: [
      {
        known: { word: "Term", count: 262686 },
        unknown: { word: "Period", count: 417051 },
        answer: "higher",
      },
      {
        known: { word: "Period", count: 417051 },
        unknown: { word: "Hour", count: 120859 },
        answer: "lower",
      },
      {
        known: { word: "Hour", count: 120859 },
        unknown: { word: "Session", count: 137675 },
        answer: "higher",
      },
      {
        known: { word: "Session", count: 137675 },
        unknown: { word: "Second", count: 656700 },
        answer: "higher",
      },
      {
        known: { word: "Second", count: 656700 },
        unknown: { word: "Minute", count: 55761 },
        answer: "lower",
      },
    ],
  },

  // Game #33 - Rhyme Time (Weekend Edition)
  {
    gameNumber: 33,
    date: "2025-06-28",
    title: "Rhyme Time",
    explanation:
      "Today's words all rhyme with each other - proving that Parliament's debates flow with poetic rhythm! These perfectly rhyming political terms show that even the most serious legislative language can have a musical quality.",
    rounds: [
      {
        known: { word: "Conceal", count: 8903 },
        unknown: { word: "Reveal", count: 14369 },
        answer: "higher",
      },
      {
        known: { word: "Reveal", count: 14369 },
        unknown: { word: "Ordeal", count: 3332 },
        answer: "lower",
      },
      {
        known: { word: "Ordeal", count: 3332 },
        unknown: { word: "Repeal", count: 37440 },
        answer: "higher",
      },
      {
        known: { word: "Repeal", count: 37440 },
        unknown: { word: "Deal", count: 743087 },
        answer: "higher",
      },
      {
        known: { word: "Deal", count: 743087 },
        unknown: { word: "Appeal", count: 173895 },
        answer: "lower",
      },
    ],
  },

  // Game #34 - Double Vision (Weekend Edition)
  {
    gameNumber: 34,
    date: "2025-06-29",
    title: "Double Vision",
    explanation:
      "Today's words are contronyms - they mean their own opposite! These confusing words have been tripping up MPs and Hansard scribes for centuries, proving that English is Parliament's trickiest opponent.",
    rounds: [
      {
        known: { word: "Oversight", count: 19058 },
        unknown: { word: "Peer", count: 13976 },
        answer: "lower",
      },
      {
        known: { word: "Peer", count: 13976 },
        unknown: { word: "Resign", count: 11756 },
        answer: "lower",
      },
      {
        known: { word: "Resign", count: 11756 },
        unknown: { word: "Sanction", count: 44917 },
        answer: "higher",
      },
      {
        known: { word: "Sanction", count: 44917 },
        unknown: { word: "Table", count: 233729 },
        answer: "higher",
      },
      {
        known: { word: "Table", count: 233729 },
        unknown: { word: "Strike", count: 68206 },
        answer: "lower",
      },
    ],
  },

  // Game #35 - Building Consensus
  {
    gameNumber: 35,
    date: "2025-06-30",
    title: "Building Consensus",
    explanation:
      "Today's theme constructs a bridge between political coalition-building and actual construction! Each word works perfectly for both parliamentary consensus-building and the architectural world, proving that MPs have been laying foundations and building frameworks for centuries.",
    rounds: [
      {
        known: { word: "Foundation", count: 60847 },
        unknown: { word: "Blueprint", count: 3056 },
        answer: "lower",
      },
      {
        known: { word: "Blueprint", count: 3056 },
        unknown: { word: "Structure", count: 82348 },
        answer: "higher",
      },
      {
        known: { word: "Structure", count: 82348 },
        unknown: { word: "Building", count: 221158 },
        answer: "higher",
      },
      {
        known: { word: "Building", count: 221158 },
        unknown: { word: "Construction", count: 83701 },
        answer: "lower",
      },
      {
        known: { word: "Construction", count: 83701 },
        unknown: { word: "Framework", count: 84313 },
        answer: "higher",
      },
    ],
  },

  // Game #36 - Parliamentary Fishing
  {
    gameNumber: 36,
    date: "2025-07-01",
    title: "Parliamentary Fishing",
    explanation:
      "Today's theme casts a line between political maneuvering and angling! Each word works perfectly for both parliamentary tactics and fishing techniques, proving that MPs have been baiting hooks and reeling in votes for centuries.",
    rounds: [
      {
        known: { word: "Hook", count: 5156 },
        unknown: { word: "Bait", count: 1566 },
        answer: "lower",
      },
      {
        known: { word: "Bait", count: 1566 },
        unknown: { word: "Reel", count: 632 },
        answer: "lower",
      },
      {
        known: { word: "Reel", count: 632 },
        unknown: { word: "Catch", count: 40408 },
        answer: "higher",
      },
      {
        known: { word: "Catch", count: 40408 },
        unknown: { word: "Net", count: 74025 },
        answer: "higher",
      },
      {
        known: { word: "Net", count: 74025 },
        unknown: { word: "Line", count: 528556 },
        answer: "higher",
      },
    ],
  },

  // Game #42 - Press Gallery
  {
    gameNumber: 42,
    date: "2025-07-07",
    title: "Press Gallery",
    explanation:
      "Today's theme reports from the press gallery! These major UK newspapers have been quoted, criticized, and debated in Parliament for centuries, proving that MPs have always had strong opinions about media coverage.",
    rounds: [
      {
        known: { word: "Daily Mail", count: 5313 },
        unknown: { word: "Observer", count: 10091 },
        answer: "higher",
      },
      {
        known: { word: "Observer", count: 10091 },
        unknown: { word: "Financial Times", count: 10217 },
        answer: "higher",
      },
      {
        known: { word: "Financial Times", count: 10217 },
        unknown: { word: "Telegraph", count: 20873 },
        answer: "higher",
      },
      {
        known: { word: "Telegraph", count: 20873 },
        unknown: { word: "Guardian", count: 22093 },
        answer: "higher",
      },
      {
        known: { word: "Guardian", count: 22093 },
        unknown: { word: "Independent", count: 190840 },
        answer: "higher",
      },
    ],
  },

  // Game #44 - Formal Correspondence
  {
    gameNumber: 44,
    date: "2025-07-09",
    title: "Formal Correspondence",
    explanation:
      "Today's theme seals the deal between political letter-writing and proper etiquette! Each phrase appears in both parliamentary correspondence and the formal letters that MPs constantly reference, proving that good manners and political protocol go hand in hand.",
    rounds: [
      {
        known: { word: "Sincerely", count: 37787 },
        unknown: { word: "Dear", count: 17934 },
        answer: "lower",
      },
      {
        known: { word: "Dear", count: 17934 },
        unknown: { word: "Respectfully", count: 19246 },
        answer: "higher",
      },
      {
        known: { word: "Respectfully", count: 19246 },
        unknown: { word: "Yours", count: 4077 },
        answer: "lower",
      },
      {
        known: { word: "Yours", count: 4077 },
        unknown: { word: "Faithfully", count: 5986 },
        answer: "higher",
      },
      {
        known: { word: "Faithfully", count: 5986 },
        unknown: { word: "Regards", count: 127447 },
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
