export interface Product {
  id: string;
  src: string;
  alt: string;
  name: string;
  price: string;
  description: string;
  colors: string[];
}

export const products: Product[] = [
  {
    id: "eternal-roses",
    src: "/mockups/roses.png",
    alt: "Roses artwork",
    name: "Eternal Roses",
    price: "15000 RWF",
    description: "A beautiful arrangement of eternal roses that never wilt. Perfect for any occasion.",
    colors: ["white"],
  },
  {
    id: "robotic-bloom",
    src: "/mockups/robotic-flowert.png",
    alt: "Robotic flower artwork",
    name: "Robotic Bloom",
    price: "15000 RWF",
    description: "A unique robotic flower that combines technology with nature's beauty.",
    colors: ["white"],
  },
  {
    id: "melodic-bear",
    src: "/mockups/pianist-bear.png",
    alt: "Pianist bear artwork",
    name: "Melodic Bear",
    price: "15000 RWF",
    description: "A charming bear playing the piano, perfect for music lovers.",
    colors: ["white"],
  },
  {
    id: "neo-city",
    src: "/mockups/futuristic-city.png",
    alt: "Futuristic city artwork",
    name: "Neo City",
    price: "30000 RWF",
    description: "A stunning futuristic cityscape that captures the essence of tomorrow.",
    colors: ["white"],
  },
  {
    id: "gentleman-pup",
    src: "/mockups/formal-dog.png",
    alt: "Formal dog artwork",
    name: "Gentleman Pup",
    price: "15000 RWF",
    description: "A dapper dog in formal attire, bringing elegance to any space.",
    colors: ["white"],
  },
  {
    id: "retro-wave",
    src: "/mockups/colorful-cassatte.png",
    alt: "Colorful cassette artwork",
    name: "Retro Wave",
    price: "15000 RWF",
    description: "A vibrant cassette design that celebrates the golden age of music.",
    colors: ["white"],
  },
]; 
export const faqs = [
  {
    question: "What is an FAQ section?",
    answer:
      'An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".',
  },
  {
    question: "Why do FAQs matter?",
    answer:
      "FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.",
  },
  {
    question: "Where can I add my FAQs?",
    answer:
      "FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.",
  },
];