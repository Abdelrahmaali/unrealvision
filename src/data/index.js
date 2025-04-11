import {
  algorithms,
  devnotes,
  oscs,
  one,
  two,
  three
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "portfolio",
    title: "VIDEOS",
  },
  {
    id: "experience",
    title: "Visual Journeys",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Seaside Serenity",
    details: [
      "A calming walk along the beach, capturing moments of healing and tranquility.",
      "Soothing waves and serene landscapes evoke peace and introspection.",
      "<span style='color: white;'>Perfect for relaxation and mindfulness</span>."
    ]
  },
  {
    title: "Dodge Charger Power",
    details: [
      "A thrilling showcase of the Dodge Charger’s power and performance.",
      "Highlighting sleek design, speed, and the unmistakable roar of the engine.",
      "Produced with high-energy shots <span style='color: white;'>and dynamic visuals</span>."
    ]
  },
  {
    title: "Good Vibes & Travels",
    details: [
      "Exploring new horizons with a focus on positivity and adventure.",
      "Capturing vibrant cultures, stunning landscapes, and unforgettable moments.",
      "An uplifting journey <span style='color: white;'>for the soul of any traveler</span>."
    ]
  }
];

const portfolio = [
  {
    name: "Beach Strolls & Inner Calm",
    
    image: one,
  },
  {
    name: "The Thrill of the Dodge Charger",
    
    image: two,
  },
  {
    name: "Good Vibes Only",
   
    image: three,
  },
];

export { experiences, portfolio };

