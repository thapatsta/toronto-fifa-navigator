export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  country: string;
  neighbourhood: string;
  address: string;
  googleMapsUrl: string;
  priceRange: "$" | "$$" | "$$$" | "$$$$";
  description: string;
}

export const restaurants: Restaurant[] = [
  // Canadian
  {
    id: "r-1",
    name: "Richmond Station",
    cuisine: "Canadian",
    country: "Canada",
    neighbourhood: "Downtown",
    address: "1 Richmond St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Richmond+Station+1+Richmond+Street+W+Toronto",
    priceRange: "$$$",
    description: "Ingredient-forward Canadian cooking by Top Chef Canada winner Carl Heinrich. Famous for the Station Burger and seasonal tasting menus.",
  },
  {
    id: "r-2",
    name: "Canoe Restaurant & Bar",
    cuisine: "Canadian",
    country: "Canada",
    neighbourhood: "Financial District",
    address: "66 Wellington St W (54th Floor), Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Canoe+Restaurant+66+Wellington+Toronto",
    priceRange: "$$$$",
    description: "Contemporary Canadian fine dining with panoramic views of Lake Ontario from the TD Tower's 54th floor. Michelin Guide listed.",
  },
  // Ghanaian
  {
    id: "r-3",
    name: "African Chop Bar",
    cuisine: "Ghanaian",
    country: "Ghana",
    neighbourhood: "North York",
    address: "2503 Finch Ave W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=African+Chop+Bar+2503+Finch+Ave+W+Toronto",
    priceRange: "$$",
    description: "Authentic Ghanaian home cooking — Waakye, Jollof rice, Banku with grilled tilapia, and rich stews. The real deal.",
  },
  {
    id: "r-4",
    name: "Afrobeat Kitchen",
    cuisine: "West African / Ghanaian",
    country: "Ghana",
    neighbourhood: "Parkdale",
    address: "1510 Queen St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Afrobeat+Kitchen+1510+Queen+St+W+Toronto",
    priceRange: "$$",
    description: "Lively West African spot in Parkdale known for Kenkey, Waakye, and suya. Black-owned and community-rooted.",
  },
  // Panamanian / Latin American
  {
    id: "r-5",
    name: "La Bella Managua",
    cuisine: "Central American",
    country: "Panama",
    neighbourhood: "Bloor West Village",
    address: "872 Bloor St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=La+Bella+Managua+872+Bloor+St+W+Toronto",
    priceRange: "$$",
    description: "Toronto's best Central American kitchen — Nicaraguan but close enough for Panamanian flavours. Think gallo pinto, tostones, and ceviche.",
  },
  {
    id: "r-6",
    name: "El Rincon",
    cuisine: "Latin American",
    country: "Panama",
    neighbourhood: "Kensington Market",
    address: "229 Augusta Ave, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=El+Rincon+229+Augusta+Ave+Toronto",
    priceRange: "$",
    description: "Casual Latin American staples in the heart of Kensington Market — plantains, empanadas, rice and beans done right.",
  },
  // German
  {
    id: "r-7",
    name: "WVRST",
    cuisine: "German",
    country: "Germany",
    neighbourhood: "King West",
    address: "609 King St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=WVRST+609+King+St+W+Toronto",
    priceRange: "$$",
    description: "Modern beer hall with artisan German sausages and a killer craft beer list. Communal tables, lively atmosphere — perfect for a pre-match pint.",
  },
  {
    id: "r-8",
    name: "Schmaltz Appetizing",
    cuisine: "German / Eastern European",
    country: "Germany",
    neighbourhood: "Kensington Market",
    address: "414 College St, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Schmaltz+Appetizing+414+College+St+Toronto",
    priceRange: "$$",
    description: "European-style deli with smoked meats, cured fish, and hearty sandwiches. Great schnitzels and sausage boards.",
  },
  // Ivorian / West African
  {
    id: "r-9",
    name: "Instant du Palais",
    cuisine: "Ivorian (Côte d'Ivoire)",
    country: "Côte d'Ivoire",
    neighbourhood: "Davisville",
    address: "557 Mount Pleasant Rd, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Instant+du+Palais+557+Mount+Pleasant+Toronto",
    priceRange: "$$",
    description: "Toronto's only dedicated Ivorian restaurant. Authentic attiéké (cassava couscous), garba (fried fish), and placali. A hidden gem.",
  },
  {
    id: "r-10",
    name: "Nganda African Street Food",
    cuisine: "West African",
    country: "Côte d'Ivoire",
    neighbourhood: "Downtown",
    address: "254 Adelaide St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Nganda+African+Street+Food+254+Adelaide+Toronto",
    priceRange: "$$",
    description: "Pan-West African street food covering Ivory Coast, Senegal, Nigeria, and more. The jollof rice and grilled goat are outstanding.",
  },
  // Croatian / Balkan
  {
    id: "r-11",
    name: "DROM Taberna",
    cuisine: "Balkan / Eastern European",
    country: "Croatia",
    neighbourhood: "Queen West",
    address: "458 Queen St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=DROM+Taberna+458+Queen+St+W+Toronto",
    priceRange: "$$",
    description: "Live Balkan music venue with Eastern European food and drinks. Cevapi, burek, rakia — and dancing until late. The vibe is unmatched.",
  },
  {
    id: "r-12",
    name: "MAK European Delicatessen",
    cuisine: "Croatian / Balkan",
    country: "Croatia",
    neighbourhood: "North York",
    address: "1335 Lawrence Ave E, North York, ON",
    googleMapsUrl: "https://maps.google.com/?q=MAK+European+Delicatessens+1335+Lawrence+Ave+E+Toronto",
    priceRange: "$",
    description: "Family-run European deli loaded with Croatian and Balkan imports — burek pastries, cevapi, sausages, and hard-to-find Eastern European goods.",
  },
  // Senegalese / West African
  {
    id: "r-13",
    name: "Nganda African Street Food",
    cuisine: "West African / Senegalese",
    country: "Senegal",
    neighbourhood: "Downtown",
    address: "254 Adelaide St W, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Nganda+African+Street+Food+254+Adelaide+Toronto",
    priceRange: "$$",
    description: "The thiéboudienne (Senegalese fish and rice) and yassa dishes here are as close as you'll get to Dakar in Toronto.",
  },
  {
    id: "r-14",
    name: "Blessinglicious",
    cuisine: "West African",
    country: "Senegal",
    neighbourhood: "Scarborough",
    address: "2849 Kingston Rd, Toronto, ON",
    googleMapsUrl: "https://maps.google.com/?q=Blessinglicious+2849+Kingston+Rd+Toronto",
    priceRange: "$$",
    description: "Nigerian street food with strong West African roots — suya skewers, egusi soup, jollof rice with plantains. Worth the trip to Scarborough.",
  },
];
