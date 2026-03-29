export interface WatchParty {
  id: string;
  name: string;
  neighbourhood: string;
  address: string;
  googleMapsUrl: string;
  features: string[];
  tags: string[];          // Standardised spec tags for filtering + display
  description: string;
  hasOutdoorScreen: boolean;
  hasPatio: boolean;
  nearUnion?: boolean;
  nearExhibition?: boolean;
  goodForGroups?: boolean;
  familyFriendly?: boolean;
  lateNight?: boolean;
  reservations?: boolean;
  footballAtmosphere?: boolean; // "hardcore football atmosphere"
}

// Canonical tag values (used for curated buckets)
export const TAG = {
  BIG_SCREENS:   "Big screens",
  SOUND_ON:      "Sound on",
  GOOD_GROUPS:   "Good for groups",
  RESERVATIONS:  "Takes reservations",
  PATIO:         "Patio",
  FAMILY:        "Family-friendly",
  NEAR_UNION:    "Near Union",
  NEAR_EX:       "Near Exhibition",
  TRANSIT:       "Transit-friendly",
  LATE_NIGHT:    "Late-night energy",
  OUTDOOR:       "Outdoor screen",
  ATMOSPHERE:    "Football atmosphere",
} as const;

export const watchParties: WatchParty[] = [
  {
    id: "wp-1",
    name: "Real Sports Bar & Grill",
    neighbourhood: "Entertainment District",
    address: "15 York St, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Real+Sports+Bar+15+York+St+Toronto",
    features: ["199 screens", "39-ft main screen", "Full kitchen"],
    tags: [TAG.BIG_SCREENS, TAG.SOUND_ON, TAG.GOOD_GROUPS, TAG.NEAR_UNION, TAG.TRANSIT, TAG.ATMOSPHERE],
    description: "Toronto's largest sports bar with 199 screens and a 39-foot HD main screen. Expect sellout crowds for big matches — get there early.",
    hasOutdoorScreen: false,
    hasPatio: false,
    nearUnion: true,
    goodForGroups: true,
    footballAtmosphere: true,
    reservations: true,
    lateNight: true,
  },
  {
    id: "wp-2",
    name: "Dock Ellis",
    neighbourhood: "Kensington / Little Italy",
    address: "93A Nassau St, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Dock+Ellis+93+Nassau+St+Toronto",
    features: ["Craft beer", "Multiple screens", "Neighbourhood vibe"],
    tags: [TAG.BIG_SCREENS, TAG.SOUND_ON, TAG.PATIO, TAG.ATMOSPHERE],
    description: "Beloved neighbourhood sports bar with serious craft beer chops. Tight-knit crowd that actually knows the game.",
    hasOutdoorScreen: false,
    hasPatio: true,
    footballAtmosphere: true,
  },
  {
    id: "wp-3",
    name: "Wheat Sheaf Tavern",
    neighbourhood: "King West",
    address: "667 King St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Wheat+Sheaf+Tavern+667+King+St+W+Toronto",
    features: ["Est. 1849", "Big screens", "Heated patio"],
    tags: [TAG.BIG_SCREENS, TAG.SOUND_ON, TAG.PATIO, TAG.GOOD_GROUPS, TAG.NEAR_EX],
    description: "Toronto's oldest continuously operating tavern (est. 1849). Historic atmosphere with a great game-day setup and heated patio.",
    hasOutdoorScreen: false,
    hasPatio: true,
    nearExhibition: true,
    goodForGroups: true,
  },
  {
    id: "wp-4",
    name: "King Taps",
    neighbourhood: "Financial District",
    address: "130 King St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=King+Taps+130+King+St+W+Toronto",
    features: ["100+ craft taps", "Screens on every wall", "Multiple floors"],
    tags: [TAG.BIG_SCREENS, TAG.SOUND_ON, TAG.GOOD_GROUPS, TAG.NEAR_UNION, TAG.TRANSIT, TAG.LATE_NIGHT],
    description: "Massive craft beer bar with screens on every wall. Great for after-work crowds near the Financial District. Stays busy late.",
    hasOutdoorScreen: false,
    hasPatio: false,
    nearUnion: true,
    goodForGroups: true,
    lateNight: true,
  },
  {
    id: "wp-5",
    name: "Hemingway's",
    neighbourhood: "Yorkville",
    address: "142 Cumberland St, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Hemingways+142+Cumberland+St+Toronto",
    features: ["Rooftop patio", "Outdoor screen", "International crowd"],
    tags: [TAG.BIG_SCREENS, TAG.OUTDOOR, TAG.PATIO, TAG.SOUND_ON, TAG.LATE_NIGHT, TAG.TRANSIT],
    description: "Multi-level bar with a legendary rooftop patio and outdoor screen. International crowd makes it perfect for World Cup atmosphere.",
    hasOutdoorScreen: true,
    hasPatio: true,
    lateNight: true,
  },
  {
    id: "wp-6",
    name: "Shoeless Joe's",
    neighbourhood: "Entertainment District",
    address: "220 Bremner Blvd, Toronto, ON (SkyDome location)",
    googleMapsUrl: "https://maps.google.com/?q=Shoeless+Joes+220+Bremner+Blvd+Toronto",
    features: ["Multiple screens", "Sports-focused", "Walk to Exhibition"],
    tags: [TAG.BIG_SCREENS, TAG.SOUND_ON, TAG.GOOD_GROUPS, TAG.NEAR_EX, TAG.TRANSIT, TAG.ATMOSPHERE],
    description: "Toronto's go-to sports bar chain, SkyDome location is a short walk or shuttle to Exhibition. Reliable screens, good wings, zero pretension.",
    hasOutdoorScreen: false,
    hasPatio: true,
    nearExhibition: true,
    goodForGroups: true,
    footballAtmosphere: true,
  },
  {
    id: "wp-7",
    name: "Amsterdam BrewHouse",
    neighbourhood: "Harbourfront",
    address: "245 Queens Quay W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Amsterdam+BrewHouse+245+Queens+Quay+W+Toronto",
    features: ["Lakeside patio", "Outdoor screen", "Own brewery"],
    tags: [TAG.OUTDOOR, TAG.PATIO, TAG.GOOD_GROUPS, TAG.FAMILY, TAG.NEAR_EX, TAG.TRANSIT],
    description: "Massive waterfront brewhouse with a huge lakeside patio and outdoor screen. One of the best daytime match settings in the city.",
    hasOutdoorScreen: true,
    hasPatio: true,
    nearExhibition: true,
    goodForGroups: true,
    familyFriendly: true,
  },
  {
    id: "wp-8",
    name: "The Drake Hotel",
    neighbourhood: "West Queen West",
    address: "1150 Queen St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=The+Drake+Hotel+1150+Queen+St+W+Toronto",
    features: ["Rooftop", "Multiple spaces", "Hip crowd"],
    tags: [TAG.PATIO, TAG.LATE_NIGHT, TAG.TRANSIT],
    description: "Toronto institution with multiple spaces including a rooftop. More style than your average sports bar. Great for a post-match drink.",
    hasOutdoorScreen: false,
    hasPatio: true,
    lateNight: true,
  },
  {
    id: "wp-9",
    name: "Brazen Head Irish Pub",
    neighbourhood: "Liberty Village",
    address: "165 East Liberty St, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Brazen+Head+165+East+Liberty+St+Toronto",
    features: ["Walk to Exhibition", "Traditional pub", "Multiple screens"],
    tags: [TAG.BIG_SCREENS, TAG.SOUND_ON, TAG.NEAR_EX, TAG.ATMOSPHERE, TAG.GOOD_GROUPS],
    description: "Irish pub a short walk from Exhibition Place in Liberty Village. One of the closest bars to Toronto Stadium — ideal for pre/post-match.",
    hasOutdoorScreen: false,
    hasPatio: true,
    nearExhibition: true,
    goodForGroups: true,
    footballAtmosphere: true,
  },
];

// ── Curated buckets ──────────────────────────────────────────────────────────

export type CuratedBucket = {
  id: string;
  label: string;
  barIds: string[];
};

export const curatedBuckets: CuratedBucket[] = [
  {
    id: "near-union",
    label: "Best near Union Station",
    barIds: ["wp-1", "wp-4"],
  },
  {
    id: "near-exhibition",
    label: "Best near Exhibition Place",
    barIds: ["wp-3", "wp-6", "wp-7", "wp-9"],
  },
  {
    id: "atmosphere",
    label: "Best for football atmosphere",
    barIds: ["wp-1", "wp-2", "wp-6", "wp-9"],
  },
  {
    id: "groups",
    label: "Best for large groups",
    barIds: ["wp-1", "wp-3", "wp-4", "wp-7"],
  },
  {
    id: "daytime",
    label: "Best patios for daytime matches",
    barIds: ["wp-7", "wp-5", "wp-2", "wp-3"],
  },
  {
    id: "family",
    label: "Best family-friendly viewing",
    barIds: ["wp-7", "wp-6"],
  },
];
