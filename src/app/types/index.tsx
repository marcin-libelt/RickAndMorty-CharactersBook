export interface Episode {
  air_date: string;
  name: string;
  id: string;
  episode: string;
}

export interface Origin {
  name: string;
}

export interface Character {
  image: string;
  name: string;
  id: string;
  origin: Origin;
  species: string;
  status: string;
  gender: string;
  type: string;
  episode: [Episode];
}
