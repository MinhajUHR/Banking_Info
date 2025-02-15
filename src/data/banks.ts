import { Bank } from '../types';

export const banks: Bank[] = [
  {
    id: "ab-bank",
    name: "AB Bank PLC",
    description: "One of the first private sector banks in Bangladesh, providing innovative financial solutions since 1982. Offers comprehensive student banking and international remittance services.",
    website: "https://abbl.com/",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=1470",
    accountOpeningSteps: [
      "Visit nearest branch with valid ID",
      "Fill out account opening form",
      "Provide passport-size photographs",
      "Submit required documents",
      "Initial deposit"
    ],
    services: {
      studentAccount: true,
      internationalServices: true,
      digitalBanking: true,
      islamicBanking: false,
      smeFocus: false
    }
  },
  {
    id: "brac-bank",
    name: "BRAC Bank PLC",
    description: "A leading private commercial bank focusing on SME banking with a nationwide presence. Offers specialized student accounts and comprehensive international banking solutions.",
    website: "https://www.bracbank.com/",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1471",
    accountOpeningSteps: [
      "Choose account type",
      "Complete online application",
      "Schedule branch visit",
      "Document verification",
      "Account activation"
    ],
    services: {
      studentAccount: true,
      internationalServices: true,
      digitalBanking: true,
      islamicBanking: false,
      smeFocus: true
    }
  },
  {
    id: "city-bank",
    name: "City Bank PLC",
    description: "A major private commercial bank offering comprehensive banking solutions including student banking and international services.",
    website: "https://www.thecitybank.com/",
    image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=1470",
    accountOpeningSteps: [
      "Online pre-application",
      "Branch visit with documents",
      "Biometric verification",
      "Initial deposit",
      "Receive debit card"
    ],
    services: {
      studentAccount: true,
      internationalServices: true,
      digitalBanking: true,
      islamicBanking: false,
      smeFocus: true
    }
  },
  // ... (previous bank entries with updated services)
];