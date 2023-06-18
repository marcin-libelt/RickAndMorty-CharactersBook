export type Episode = {
  air_date: string;
  name: string;
  id: string;
  episode: string;
};

export type Origin = {
  name: string;
};

export type Character = {
  image: string;
  name: string;
  id: string;
  origin: Origin;
  species: string;
  status: string;
  gender: string;
  type: string;
  episode: [Episode];
};
