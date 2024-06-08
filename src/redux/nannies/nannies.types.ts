interface Review {
  comment: string;
  rating: number;
  reviewer: string;
}

export interface Nanny {
  id: string;
  name: string;
  age: number;
  experience: number;
  about: string;
  avatar_url: string;
  birthday: string;
  characters: string[];
  education: string;
  kids_age: string;
  location: string;
  price_per_hour: number;
  rating: number;
  reviews: Review[];
}
