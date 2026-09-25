export type CircadianPhase = 'dawn' | 'zenith' | 'restore';

export interface Product {
  id: string;
  phase: CircadianPhase;
  phaseNumber: string;
  name: string;
  tagline: string;
  description: string;
  timeWindow: string;
  price: number;
  rating: number;
  reviewCount: number;
  capsuleCount: number;
  dailyDosage: string;
  accentColor: string;
  image: string;
  keyBenefits: string[];
  compounds: {
    name: string;
    dose: string;
    function: string;
  }[];
  specSheet: {
    bioavailability: string;
    deliveryMethod: string;
    halfLife: string;
    certifications: string[];
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  cadence: '30-day' | '60-day' | 'one-time';
}

export interface ClinicalStudy {
  id: string;
  title: string;
  journal: string;
  year: number;
  doi: string;
  participants: number;
  duration: string;
  primaryOutcome: string;
  statisticalPValue: string;
  phaseTarget: CircadianPhase;
}

export interface CompoundDetail {
  id: string;
  name: string;
  trademark?: string;
  casNumber: string;
  formula: string;
  source: string;
  primaryPathway: string;
  clinicalDose: string;
  phase: CircadianPhase;
  mechanism: string;
  absorptionRate: string;
}
