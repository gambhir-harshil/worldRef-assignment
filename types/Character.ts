export interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episodes: string[];
  url: string;
}

export interface CharacterResponse {
  results: Character[];
}
