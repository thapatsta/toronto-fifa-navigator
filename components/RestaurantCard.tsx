import { Restaurant } from "@/data/restaurants";
import { MapPin, ExternalLink } from "lucide-react";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const priceColor = {
  "$": "text-green-700",
  "$$": "text-blue-700",
  "$$$": "text-orange-700",
  "$$$$": "text-purple-700",
};

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="font-semibold text-gray-900">{restaurant.name}</h3>
          <span className="text-xs font-medium text-gray-500">{restaurant.cuisine}</span>
        </div>
        <span className={`text-sm font-bold ${priceColor[restaurant.priceRange]} shrink-0`}>
          {restaurant.priceRange}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3 leading-relaxed">{restaurant.description}</p>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <MapPin size={12} />
          {restaurant.neighbourhood}
        </span>
        <a
          href={restaurant.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-light transition-colors"
        >
          Directions <ExternalLink size={11} />
        </a>
      </div>
    </div>
  );
}
