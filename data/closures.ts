export interface Closure {
  id: string;
  name: string;
  type: "road_closure" | "restriction" | "parking" | "transit_change" | "cycling" | "pedestrian";
  scope: "full_tournament" | "match_day_only";
  description: string;
  alternative: string;
  area: string;
  coordinates?: {
    type: "point" | "line" | "polygon";
    coords: number[][];
  };
}

export const fullTournamentClosures: Closure[] = [
  {
    id: "ft-1",
    name: "Fleet Street — TTC Only",
    type: "road_closure",
    scope: "full_tournament",
    description: "Fleet Street between Angelique Ave and Strachan Ave is restricted to TTC vehicles only for the full tournament duration (June 11 – July 19).",
    alternative: "Use Strachan Ave or Bathurst St to access the area by car.",
    area: "Exhibition Place",
    coordinates: {
      type: "line",
      coords: [[43.637, -79.41], [43.636, -79.418]],
    },
  },
  {
    id: "ft-2",
    name: "Fort York Boulevard — Pedestrian Only",
    type: "pedestrian",
    scope: "full_tournament",
    description: "Fort York Boulevard between Angelique St and Lake Shore Blvd West is pedestrian-only for the full 22 days (June 11 – July 19).",
    alternative: "Walk freely — this is your main route to the Fan Festival! Access by car via Bathurst St or Strachan Ave.",
    area: "Fort York / The Bentway",
    coordinates: {
      type: "line",
      coords: [[43.639, -79.408], [43.6365, -79.406]],
    },
  },
  {
    id: "ft-3",
    name: "Garrison Crossing Bridge — CLOSED",
    type: "road_closure",
    scope: "full_tournament",
    description: "Garrison Crossing Bridge (pedestrian bridge spanning the rail corridor) is closed for the entire FIFA Fan Festival period.",
    alternative: "Cross via Strachan Avenue or Bathurst Street instead.",
    area: "Fort York",
  },
  {
    id: "ft-4",
    name: "Bike Racks & Bike Share Docks Removed",
    type: "cycling",
    scope: "full_tournament",
    description: "All bike racks and Bike Share Toronto docks near Exhibition Place, Toronto Stadium, and the Fan Festival area have been removed for the duration.",
    alternative: "Temporary Bike Share valet and valet bike parking available outside Exhibition Place.",
    area: "Exhibition Place / Fort York",
  },
  {
    id: "ft-5",
    name: "No Public Parking Near Venues",
    type: "parking",
    scope: "full_tournament",
    description: "No public parking at Toronto Stadium, Exhibition Place, or surrounding neighbourhoods including Liberty Village and Fort York. Local access restrictions in place.",
    alternative: "Don't drive. Take TTC, GO Transit, or the shuttle from St. Andrew Station.",
    area: "Exhibition Place / Liberty Village / Fort York",
  },
];

export const matchDayClosures: Closure[] = [
  {
    id: "md-1",
    name: "Liberty Village — Local Traffic Only",
    type: "restriction",
    scope: "match_day_only",
    description: "Liberty Village is restricted to local traffic only on match days.",
    alternative: "If you don't live or work in Liberty Village, avoid driving through. Use King St W or Gardiner Expressway.",
    area: "Liberty Village",
    coordinates: {
      type: "polygon",
      coords: [
        [43.6427, -79.424],
        [43.6427, -79.414],
        [43.638, -79.414],
        [43.638, -79.424],
        [43.6427, -79.424],
      ],
    },
  },
  {
    id: "md-2",
    name: "Lake Shore Blvd West — Closed (Bus Staging)",
    type: "road_closure",
    scope: "match_day_only",
    description: "Lake Shore Boulevard West from British Columbia Road to Bathurst Street is closed to regular traffic on match days — used as a bus parking and staging area.",
    alternative: "Use Gardiner Expressway or King St W to travel east-west. Expect major delays if driving anywhere near the area.",
    area: "Lake Shore / Exhibition",
    coordinates: {
      type: "line",
      coords: [[43.634, -79.428], [43.6375, -79.4015]],
    },
  },
  {
    id: "md-3",
    name: "Dufferin Street South — Closed",
    type: "road_closure",
    scope: "match_day_only",
    description: "Dufferin Street south of Springhurst Avenue is closed on match days.",
    alternative: "Use Strachan Avenue or Bathurst Street to access Exhibition Place from the north.",
    area: "Dufferin / Exhibition",
  },
  {
    id: "md-4",
    name: "Strachan Avenue — Potential Pedestrianization",
    type: "restriction",
    scope: "match_day_only",
    description: "The City is considering pedestrianizing Strachan Avenue up to King Street after games. Expect restrictions post-match.",
    alternative: "Plan to walk or take transit after the game. Avoid driving on Strachan immediately after matches.",
    area: "Strachan Ave",
  },
  {
    id: "md-5",
    name: "Exhibition GO Station — Fare Holders Only",
    type: "restriction",
    scope: "match_day_only",
    description: "Exhibition GO Station becomes a customer-only zone on match days. You must have a valid GO Transit fare to access the station.",
    alternative: "Buy your GO ticket or use the TTC shuttle from St. Andrew Station if you don't have a GO fare.",
    area: "Exhibition GO",
  },
  {
    id: "md-6",
    name: "Rideshare / Taxi — Designated Areas Only",
    type: "restriction",
    scope: "match_day_only",
    description: "Rideshare and taxi pick-up and drop-off is limited to designated areas outside restricted zones. Not near the stadium or Fan Festival.",
    alternative: "Check the Uber/Lyft app for the nearest permitted pickup zone. Allow extra time — demand will be very high.",
    area: "Exhibition Place / Fort York",
  },
  {
    id: "md-7",
    name: "Dufferin Loop — NOT IN USE",
    type: "transit_change",
    scope: "match_day_only",
    description: "The Dufferin Loop is not in use on match days.",
    alternative: "Use Exhibition Loop (accessible ramp deployment available on match days) or St. Andrew Station shuttle.",
    area: "Dufferin",
  },
];

export const transitEnhancements: Closure[] = [
  {
    id: "te-1",
    name: "Route 509 & 511 — Increased Frequency",
    type: "transit_change",
    scope: "match_day_only",
    description: "Harbourfront streetcar (Route 509) and Bathurst streetcar (Route 511) run at increased frequency. Final stop moved to Fleet Street — the access point to the tournament.",
    alternative: "Take either streetcar to the Fleet Street stop. Fastest transit option from downtown.",
    area: "Downtown / Exhibition",
  },
  {
    id: "te-2",
    name: "Shuttle — St. Andrew Station to Fleet Street",
    type: "transit_change",
    scope: "match_day_only",
    description: "Free shuttle bus running from St. Andrew Station to a new hub on Fleet Street, connecting directly to Toronto Stadium and the Fan Festival.",
    alternative: "Meet at St. Andrew Station (subway line 1). Free, frequent, and fast.",
    area: "Downtown / Exhibition",
  },
  {
    id: "te-3",
    name: "Route 29 & Route 63 — Increased Frequency",
    type: "transit_change",
    scope: "match_day_only",
    description: "Dufferin bus (Route 29) and Ossington bus (Route 63) run at increased frequency on match days.",
    alternative: "Good options for fans coming from north Toronto. Connect to the streetcar network at King St.",
    area: "Dufferin / Ossington",
  },
  {
    id: "te-4",
    name: "TTC Extended Service Hours",
    type: "transit_change",
    scope: "match_day_only",
    description: "TTC extends service hours on match days to handle late-night crowds after evening games.",
    alternative: "You won't be stranded after the final whistle. Night buses also run on key corridors.",
    area: "Citywide",
  },
  {
    id: "te-5",
    name: "GO Transit — Increased Service to Exhibition",
    type: "transit_change",
    scope: "match_day_only",
    description: "GO Transit runs increased service to Exhibition GO Station on match days. Remember: Exhibition GO is fare-holders only on match days.",
    alternative: "Buy your GO fare in advance at Presto or the GO Transit app. GO service runs from Union Station.",
    area: "Exhibition GO",
  },
];

export const allClosures = [...fullTournamentClosures, ...matchDayClosures, ...transitEnhancements];
