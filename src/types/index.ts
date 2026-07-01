// User Profile Types
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  nationality: string;
  age: number;
  language: string;
  budget: number;
  arrivalDate: string;
  createdAt: string;
}

// Onboarding Types
export interface OnboardingStep1 {
  nationality: string;
  age: number;
  language: string;
  budget: number;
  arrivalDate: string;
}

export interface OnboardingStep2 {
  cleanliness: number; // 1-10
  noise: number; // 1-10
  parties: number; // 1-10
  pets: boolean;
  schedulePreference: 'early' | 'late' | 'flexible';
}

export interface OnboardingStep3 {
  personality: 'introvert' | 'extrovert' | 'ambivert';
  interests: string[];
  sports: string[];
  networking: boolean;
  culturalActivities: boolean;
  musicPreferences: string[];
}

export interface OnboardingStep4 {
  objectives: string[];
  duration: string;
  workField?: string;
}

export interface UserOnboarding extends OnboardingStep1, OnboardingStep2, OnboardingStep3, OnboardingStep4 {
  completed: boolean;
  currentStep: number;
}

// House Types
export interface House {
  id: string;
  title: string;
  description: string;
  address: string;
  neighborhood: string;
  price: number;
  rooms: number;
  bathrooms: number;
  images: string[];
  wifi: number; // Mbps
  distanceToMetro: number; // km
  distanceToSupermarket: number; // km
  allowsEmpadronamiento: boolean;
  rules: string[];
  currentResidents: Resident[];
  rating: number;
  reviews: Review[];
  amenities: string[];
  createdAt: string;
}

export interface Resident {
  id: string;
  name: string;
  avatar: string;
  nationality: string;
  age: number;
  bio: string;
  interests: string[];
  cleanliness: number;
  noise: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  text: string;
  createdAt: string;
}

// Community Types
export interface CommunityGroup {
  id: string;
  name: string;
  description: string;
  icon: string;
  memberCount: number;
  color: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  groupId: string;
  attendees: number;
  maxAttendees?: number;
  image: string;
}

// Tutorial Types
export interface Tutorial {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number; // seconds
  category: string;
  thumbnail: string;
}

// Compatibility Score Types
export interface CompatibilityScore {
  total: number;
  cleanliness: number;
  schedule: number;
  budget: number;
  sociability: number;
  interests: number;
  language: number;
}

// Rewards Types
export interface Reward {
  id: string;
  name: string;
  description: string;
  points: number;
  category: string;
  image: string;
  discount: number;
  partnerName: string;
}

export interface UserRewards {
  points: number;
  level: number;
  redeemedRewards: string[];
}
