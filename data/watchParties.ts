export interface WatchParty {
  id: string;
  name: string;
  neighbourhood: string;
  address: string;
  googleMapsUrl: string;
  features: string[];
  description: string;
  hasOutdoorScreen: boolean;
  hasPatio: boolean;
}

export const watchParties: WatchParty[] = [
  {
    id: "wp-1",
    name: "Real Sports Bar & Grill",
    neighbourhood: "Entertainment District",
    address: "15 York St, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Real+Sports+Bar+15+York+St+Toronto",
    features: ["Multiple giant screens", "Full kitchen", "Near Union Station"],
    description: "Toronto's largest sports bar with 199 screens and a 39-foot HD main screen. Expect sellout crowds for big matches — get there early.",
    hasOutdoorScreen: false,
    hasPatio: false,
  },
  {
    id: "wp-2",
    name: "Dock Ellis",
    neighbourhood: "Kensington / Little Italy",
    address: "93A Nassau St, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Dock+Ellis+93+Nassau+St+Toronto",
    features: ["Craft beer", "Neighbourhood vibe", "Multiple screens"],
    description: "Beloved neighbourhood sports bar with serious craft beer chops. Tight-knit crowd that actually knows the game.",
    hasOutdoorScreen: false,
    hasPatio: true,
  },
  {
    id: "wp-3",
    name: "Wheat Sheaf Tavern",
    neighbourhood: "King West",
    address: "667 King St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Wheat+Sheaf+Tavern+667+King+St+W+Toronto",
    features: ["Toronto's oldest tavern", "Big screens", "Patio"],
    description: "Toronto's oldest continuously operating tavern (est. 1849). Historic atmosphere with surprisingly great game-day setup.",
    hasOutdoorScreen: false,
    hasPatio: true,
  },
  {
    id: "wp-4",
    name: "King Taps",
    neighbourhood: "Financial District",
    address: "130 King St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=King+Taps+130+King+St+W+Toronto",
    features: ["100+ craft taps", "Giant screens", "Multiple floors"],
    description: "Massive craft beer bar with screens on every wall. Great for after-work crowds near the Financial District.",
    hasOutdoorScreen: false,
    hasPatio: false,
  },
  {
    id: "wp-5",
    name: "Hemingway's",
    neighbourhood: "Yorkville",
    address: "142 Cumberland St, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Hemingways+142+Cumberland+St+Toronto",
    features: ["Rooftop patio", "Outdoor screen", "International crowd"],
    description: "Multi-level bar with a legendary rooftop patio. International crowd makes it perfect for World Cup atmosphere.",
    hasOutdoorScreen: true,
    hasPatio: true,
  },
  {
    id: "wp-6",
    name: "Shoeless Joe's",
    neighbourhood: "Multiple Locations",
    address: "Various — check Google Maps",
    googleMapsUrl: "https://maps.google.com/?q=Shoeless+Joes+Toronto",
    features: ["Multiple screens", "Sports-focused", "Multiple locations"],
    description: "Toronto's go-to sports bar chain with locations across the city. Reliable screens, good wings, zero pretension.",
    hasOutdoorScreen: false,
    hasPatio: true,
  },
  {
    id: "wp-7",
    name: "Amsterdam BrewHouse",
    neighbourhood: "Harbourfront",
    address: "245 Queens Quay W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Amsterdam+BrewHouse+245+Queens+Quay+W+Toronto",
    features: ["Waterfront patio", "Large outdoor screen", "Own brewery"],
    description: "Massive waterfront brewhouse with a huge lakeside patio. One of the best outdoor settings in the city for a summer match.",
    hasOutdoorScreen: true,
    hasPatio: true,
  },
  {
    id: "wp-8",
    name: "The Drake Hotel",
    neighbourhood: "West Queen West",
    address: "1150 Queen St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=The+Drake+Hotel+1150+Queen+St+W+Toronto",
    features: ["Rooftop", "Hip crowd", "Multiple spaces"],
    description: "Toronto institution with multiple spaces including a rooftop. More style than your average sports bar, but they'll have the big games on.",
    hasOutdoorScreen: false,
    hasPatio: true,
  },
];
