export interface Bank {
  id: string;
  name: string;
  description: string;
  website: string;
  image: string;
  accountOpeningSteps: string[];
  services: {
    studentAccount: boolean;
    internationalServices: boolean;
    digitalBanking: boolean;
    islamicBanking: boolean;
    smeFocus: boolean;
  };
}