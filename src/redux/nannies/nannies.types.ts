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

export interface FetchNanniesResponse {
  newNannies: Nanny[];
  page: number;
}

export interface FetchNanniesRej {
  error: string;
}

export interface NanniesState {
  nannies: Nanny[];
  favorites: Nanny[];
  activeNannie: Nanny | null;
  isLoading: boolean;
  error: string | null;
  page: number;
  total: number;
}
