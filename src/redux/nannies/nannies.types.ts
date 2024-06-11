export interface Nanny {
  id: string;
  about: string;
  avatar_url: string;
  birthday: string;
  characters: string[];
  education: string;
  experience: string;
  kids_age: string;
  location: string;
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: Review[];
}

export interface Review {
  comment: string;
  rating: number;
  reviewer: string;
}

export interface NanniesState {
  nannies: Nanny[];
  favorites: Nanny[];
  activeNannie: Nanny;
  isLoading: boolean;
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}
