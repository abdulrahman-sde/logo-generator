import {
  Zap,
  Palette,
  Download,
  Layers,
  Sliders,
  Users,
  LucideIcon,
} from "lucide-react";
import type { Logo } from "@/lib/types";

type Feature = {
  icon: LucideIcon;
  iconBg: string;
  title: string;
  description: string;
}[];

export const features: Feature = [
  {
    icon: Zap,
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    title: "Lightning Fast",
    description: "Generate professional logos in seconds, not hours or days.",
  },
  {
    icon: Palette,
    iconBg: "bg-gradient-to-br from-teal-500 to-teal-600",
    title: "Endless Customization",
    description:
      "Fine-tune colors, styles, and layouts to match your brand perfectly.",
  },
  {
    icon: Download,
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    title: "Instant Downloads",
    description:
      "Get high-resolution files in multiple formats ready for use anywhere.",
  },
  {
    icon: Layers,
    iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
    title: "Multiple Variations",
    description:
      "Generate different versions of your logo to find the perfect match.",
  },
  {
    icon: Sliders,
    iconBg: "bg-gradient-to-br from-pink-500 to-pink-600",
    title: "Advanced Controls",
    description:
      "Specify styles, colors, and themes to guide the AI generation process.",
  },
  {
    icon: Users,
    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    title: "No Design Skills Needed",
    description: "Our AI handles the design work, you just provide the ideas.",
  },
];

export const sampleLogos = [
  {
    id: 1,
    title: "Fashion Art",
    category: "Studio",
    imageUrl: "/logos/logo1.png",
    colors: ["#000000", "#FAF9F6"],
    tags: [
      "Modern",
      "Minimalistic",
      "Typographic",
      "Editorial",
      "Artistic",
      "Monochromatic",
    ],
  },
  {
    id: 2,
    title: "Creative Learning",
    category: "Education",
    imageUrl: "/logos/logo2.png",
    colors: ["#E94425", "#5B8FD2", "#FCE471", "#C4E59C"],
    tags: [
      "Playful",
      "Creative",
      "Modern",
      "Geometric",
      "Vibrant",
      "Youth-centric",
      "Fun",
    ],
  },
  {
    id: 3,
    title: "Construction",
    category: "Company",
    imageUrl: "/logos/logo4.png",
    colors: ["#26A69A", "#FFFFFF", "#263238"],
    tags: ["Minimalistic", "Modern", "Geometric", "Elegant", "Artistic"],
  },
  {
    id: 4,
    title: "Tourist",
    category: "Travelling",
    imageUrl: "/logos/logo8.png",
    colors: ["#022455", "#FB8234", "#FFFFFF"],
    tags: ["Traditional", "Ancient", "Travel", "Elegant", "Minimal", "Luxury"],
  },
  {
    id: 5,
    title: "Tech Startup",
    category: "Technology",
    imageUrl: "/logos/logo5.png",
    colors: ["#99CCFF", "#3366CC", "#663399", "#FFFFFF", "#000000"],
    tags: ["Abstract", "Layered", "bold", "Modern"],
  },
  {
    id: 6,
    title: "Fashion Brand",
    category: "Store",
    imageUrl: "/logos/logo6.png",
    colors: ["#F5F5F5", "#556B2F"],
    tags: ["Minimalistic", "Modern", "Typographic", "Monogram", "Elegant"],
  },
  {
    id: 7,
    title: "Food",
    category: "Restaurant",
    imageUrl: "/logos/logo7.png",
    colors: ["#FEC01D", "#000000", "#FFFFFF"],
    tags: ["Modern", "Minimalistic", "Artistic", "Elegant", "Creative"],
  },
  {
    id: 8,
    title: "Jewellers",
    category: "Store",
    imageUrl: "/logos/logo3.png",
    colors: ["#343434", "#CDAD5E"],
    tags: ["Luxury", "Traditional", "Ancient", "Modern", "Elegant"],
  },
];

export const faqItems = [
  {
    question: "How does AI generate logos?",
    answer:
      "Our AI uses advanced machine learning algorithms trained on millions of professional logos. It analyzes your prompt, understands design principles, and generates unique logos based on your specifications. The AI considers color theory, typography, and visual hierarchy to create balanced, professional designs.",
  },
  {
    question: "Do I own the rights to my generated logo?",
    answer:
      "Yes, you have full commercial rights to any logo you generate on our platform. Once you download your logo, it's yours to use for your business, brand, or personal project without any licensing restrictions.",
  },
  {
    question: "Can I edit my logo after it's generated?",
    answer:
      "After generation, you can fine-tune various aspects of your logo including colors, layout, typography, and more. Our platform provides intuitive editing tools to help you perfect your design.",
  },
  {
    question: "What file formats do I receive?",
    answer:
      "You'll receive your logo in multiple formats including PNG (with transparent background), JPG, SVG (vector format for scaling), and PDF. This ensures you can use your logo across different platforms and media.",
  },
  {
    question: "How many logos can I generate?",
    answer:
      "The number of logos you can generate depends on your subscription plan. Free users can generate a limited number of logos per month, while premium subscribers enjoy unlimited generations and additional features.",
  },
];

export const categories = [
  { value: "technology", label: "Technology" },
  { value: "food", label: "Food & Beverage" },
  { value: "health", label: "Health & Fitness" },
  { value: "fashion", label: "Fashion" },
  { value: "business", label: "Business" },
  { value: "education", label: "Education" },
  { value: "entertainment", label: "Entertainment" },
  { value: "other", label: "Other" },
];

export const styles = [
  { value: "minimalist", label: "Minimalist" },
  { value: "vintage", label: "Vintage" },
  { value: "futuristic", label: "Futuristic" },
  { value: "geometric", label: "Geometric" },
  { value: "typographic", label: "Typographic" },
  { value: "abstract", label: "Abstract" },
  { value: "playful", label: "Playful" },
  { value: "luxury", label: "Luxury" },
  { value: "modern", label: "Modern" },
  { value: "classic", label: "Classic" },
  { value: "artistic", label: "Artistic" },
  { value: "monogram", label: "Monogram" },
  { value: "bold", label: "Bold" },
  { value: "elegant", label: "Elegant" },
];

export const colors = [
  { id: "blue", color: "#4285F4", label: "Blue" },
  { id: "purple", color: "#A142F4", label: "Purple" },
  { id: "red", color: "#F44336", label: "Red" },
  { id: "green", color: "#0F9D58", label: "Green" },
  { id: "orange", color: "#FF9800", label: "Orange" },
  { id: "pink", color: "#E91E63", label: "Pink" },
  { id: "teal", color: "#009688", label: "Teal" },
];

export const sampleUserLogos: Logo[] = [
  {
    id: 'user-1',
    title: "My Tech Startup",
    description: "Logo for my new tech venture",
    category: "technology",
    style: "minimalist",
    colorScheme: ["#000000", "#FAF9F6"],
    imageUrl: "/logos/logo1.png",
    createdAt: "2023-05-15T10:30:00Z",
  },
  {
    id: "user-2",
    title: "Personal Blog",
    description: "Logo for my writing platform",
    category: "business",
    style: "typography",
    colorScheme: ["#E94425", "#5B8FD2", "#FCE471", "#C4E59C"],
    imageUrl: "/logos/logo2.png",
    createdAt: "2023-05-20T14:20:00Z",
  },
  {
    id: "user-3",
    title: "Fitness Challenge",
    description: "Logo for my fitness program",
    category: "health",
    style: "geometric",
    colorScheme: ["#343434", "#CDAD5E"],
    imageUrl: "/logos/logo3.png",
    createdAt: "2023-05-25T09:15:00Z",
  },
];

export const plans = [
  {
    title: "Free",
    description: "For individuals just getting started",
    price: 0,
    period: "mo",
    features: [
      { name: "5 logo generations per month", included: true },
      { name: "Basic logo customization", included: true },
      { name: "Standard quality exports", included: true },
      { name: "Community support", included: true },
      { name: "Personal use license", included: true },
      { name: "API access", included: false },
      { name: "Team collaboration", included: false },
    ],
    buttonText: "Start Free",
    buttonLink: "/signup",
    highlighted: false,
  },
  {
    title: "Pro",
    description: "For professionals and small businesses",
    price: 19,
    period: "mo",
    features: [
      { name: "50 logo generations per month", included: true },
      { name: "Advanced logo customization", included: true },
      { name: "High-quality exports", included: true },
      { name: "Priority support", included: true },
      { name: "Commercial use license", included: true },
      { name: "No watermarks", included: true },
      { name: "Logo variations", included: true },
    ],
    buttonText: "Get Pro",
    buttonLink: "/signup",
    highlighted: true,
  },
  {
    title: "Enterprise",
    description: "For teams and large organizations",
    price: 49,
    period: "mo",
    features: [
      { name: "Unlimited logo generations", included: true },
      { name: "Full customization options", included: true },
      { name: "Maximum quality exports", included: true },
      { name: "Dedicated support", included: true },
      { name: "Extended commercial license", included: true },
      { name: "API access", included: true },
      { name: "Team collaboration", included: true },
      { name: "Brand guidelines generator", included: true },
    ],
    buttonText: "Contact Sales",
    buttonLink: "/contact",
    highlighted: false,
  },
];

export const directivePrompt=`You are a brand identity prompt expert. Take the raw input below and generate a detailed, visually rich, and directive-style prompt for an AI logo generator.
The output should:
- Be one complete paragraph.
- Include style (e.g., minimalist, futuristic), color palette, industry.
- Suggest design elements (e.g., clean lines, symbols).
- Indicate usage (e.g., scalable, good for branding/packaging).
- Avoid repeating or explaining the input.
- Focus on design clarity and creativity, using natural, design-oriented language.

Input:`