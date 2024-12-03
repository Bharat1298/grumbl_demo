import React, { createContext, useState, useContext } from "react";

type Restaurant = {
  name: string;
  images: string[];
  distance: string;
  likes: string;
  tags: string[];
  description: string;
  reviews: string[];
  status: "no" | "maybe" | "accepted";
  lastModified: number;
};

type RestaurantContextType = {
  restaurants: Restaurant[];
  updateRestaurantStatus: (name: string, status: "no" | "maybe" | "accepted") => void;
};

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined);

export const RestaurantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([
      {
        name: "Frida Midtown",
        images: [
          "/images/cafeintermezzo.jpg",
          "/images/fridamidtown.avif",
          "/images/yuh.jpg",
        ],
        distance: "0.5 miles away",
        likes: "3 friends liked this place",
        tags: ["Mexican", "Casual", "Bar"],
        description:
          "Frida Midtown offers a vibrant atmosphere with delicious Mexican food and refreshing cocktails.",
        reviews: [
          "Great food and drinks!",
          "Loved the ambiance and the service was excellent.",
          "A bit pricey but worth it for special occasions.",
        ],
        status: "maybe",
        lastModified: -1, // Placeholder timestamp
      },
      {
        name: "Sushi Central",
        images: [
          "/images/cafeintermezzo.jpg",
          "/images/fridamidtown.avif",
          "/images/yuh.jpg",
        ],
        distance: "1.2 miles away",
        likes: "5 friends liked this place",
        tags: ["Japanese", "Casual", "Sushi"],
        description:
          "Sushi Central offers fresh sushi and a cozy atmosphere to enjoy authentic Japanese cuisine.",
        reviews: [
          "Absolutely loved the sushi rolls!",
          "Great value for the price.",
          "Service was a bit slow, but the food made up for it.",
        ],
        status: "maybe",
        lastModified: -1, // Placeholder timestamp
      },
      {
        name: "Pasta Bella",
        images: [
          "/images/cafeintermezzo.jpg",
          "/images/fridamidtown.avif",
          "/images/yuh.jpg",
        ],
        distance: "0.8 miles away",
        likes: "2 friends liked this place",
        tags: ["Italian", "Romantic", "Pasta"],
        description:
          "Pasta Bella offers handmade pasta and a romantic ambiance for a perfect dinner date.",
        reviews: [
          "The pasta was heavenly!",
          "Romantic vibe, great for a date night.",
          "A little expensive, but worth the splurge.",
        ],
        status: "maybe",
        lastModified: -1, // Placeholder timestamp
      },
      {
        "name": "Lazy Betty",
        "images": [
          "images/lazybetty.jpg"
        ],
        "distance": "2.5 miles away",
        "likes": "8 friends liked this place",
        "tags": ["American", "Fine Dining", "Tasting Menu"],
        "description": "Lazy Betty offers inventive tasting menus blending modern techniques with global flavors, all served with Southern hospitality.",
        "reviews": [
          "An exceptional dining experience with creative dishes.",
          "The tasting menu is a culinary journey worth every penny.",
          "Impeccable service and ambiance."
        ],
        "status": "maybe",
        "lastModified": -1
      },
      {
        "name": "Mujō",
        "images": [
          "images/mujo.avif"
        ],
        "distance": "3.0 miles away",
        "likes": "6 friends liked this place",
        "tags": ["Japanese", "Sushi", "Omakase"],
        "description": "Mujō specializes in an intimate omakase experience, serving exquisite Japanese cuisine with fresh, seasonal ingredients.",
        "reviews": [
          "The best sushi experience I've had in Atlanta.",
          "Each course was a delightful surprise.",
          "A must-visit for sushi enthusiasts."
        ],
        "status": "maybe",
        "lastModified": -1
      },
      {
        "name": "La Semilla",
        "images": [
          "images/lasemilla.avif"
        ],
        "distance": "1.8 miles away",
        "likes": "5 friends liked this place",
        "tags": ["Vegan", "Latin", "Casual"],
        "description": "La Semilla offers Cuban-Mexican vegan dishes in a vibrant atmosphere, celebrating Latin flavors with a plant-based twist.",
        "reviews": [
          "A haven for vegan food lovers.",
          "The flavors are rich and authentic.",
          "Even non-vegans will be impressed."
        ],
        "status": "maybe",
        "lastModified": -1
      },
      {
        "name": "Atlas",
        "images": [
          "images/atls.jpg"
        ],
        "distance": "4.0 miles away",
        "likes": "7 friends liked this place",
        "tags": ["American", "Fine Dining", "Artistic"],
        "description": "Located in the St. Regis Atlanta, Atlas combines fine dining with an impressive art collection, offering a luxurious culinary experience.",
        "reviews": [
          "A perfect spot for special occasions.",
          "The art adds a unique touch to the dining experience.",
          "Exceptional food and service."
        ],
        "status": "maybe",
        "lastModified": -1
      },
      {
        "name": "Talat Market",
        "images": [
          "images/talatmarket.jpg"
        ],
        "distance": "2.2 miles away",
        "likes": "4 friends liked this place",
        "tags": ["Thai", "Casual", "Innovative"],
        "description": "Talat Market offers a creative take on Thai cuisine, with a weekly changing menu that keeps diners coming back for new experiences.",
        "reviews": [
          "Innovative dishes that excite the palate.",
          "A fresh twist on traditional Thai flavors.",
          "Always something new and delicious to try."
        ],
        "status": "maybe",
        "lastModified": -1
      },
      {
        "name": "Gunshow",
        "images": [
          "images/gunshow.jpg"
        ],
        "distance": "3.5 miles away",
        "likes": "9 friends liked this place",
        "tags": ["American", "Interactive", "Unique"],
        "description": "Gunshow offers an interactive dining experience where chefs present dishes tableside, creating a communal and engaging atmosphere.",
        "reviews": [
          "A dining experience like no other.",
          "The chefs' creativity shines through each dish.",
          "Fun and delicious—a must-visit."
        ],
        "status": "maybe",
        "lastModified": -1
      },
      {
        "name": "The Optimist",
        "images": [
          "images/theoptimist.jpg"
        ],
        "distance": "2.8 miles away",
        "likes": "6 friends liked this place",
        "tags": ["Seafood", "Casual", "Coastal"],
        "description": "The Optimist transports guests to a coastal escape with its sustainable seafood offerings in a laid-back setting.",
        "reviews": [
          "Fresh seafood in a relaxed atmosphere.",
          "The lobster roll is a must-try.",
          "Feels like dining by the ocean."
        ],
        "status": "maybe",
        "lastModified": -1
      },
      {
        "name": "Bomb Biscuits",
        "images": [
          "images/bombbiscuits.jpg"
        ],
        "distance": "1.5 miles away",
        "likes": "5 friends liked this place",
        "tags": ["Southern", "Breakfast", "Casual"],
        "description": "Bomb Biscuits serves homestyle breakfasts and brunches, specializing in Southern-style biscuits that have garnered national acclaim.",
        "reviews": [
          "The best biscuits I've ever had.",
          "A breakfast spot that lives up to the hype.",
          "Delicious food with a cozy vibe."
        ],
        "status": "maybe",
        "lastModified": -1
      },
      {
        "name": "Hayakawa",
        "images": [
          "images/hayakawa.jpg"
        ],
        "distance": "3.2 miles away",
        "likes": "7 friends liked this place",
        "tags": ["Japanese", "Sushi", "Omakase"],
        "description": "Hayakawa offers an elegant omakase experience with Hokkaido-style nigiri, featuring thick, buttery cuts of fish.",
        "reviews": [
          "A sushi experience that's both entertaining and delicious.",
          "The chef's storytelling adds to the meal.",
          "High-quality fish and a memorable dining experience."
        ],
        "status": "maybe",
        "lastModified": -1
      },
    ]);

  const updateRestaurantStatus = (name: string, status: "no" | "maybe" | "accepted") => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.name === name
          ? { ...restaurant, status, lastModified: Date.now() }
          : restaurant
      )
    );
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, updateRestaurantStatus }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error("useRestaurantContext must be used within a RestaurantProvider");
  }
  return context;
};
