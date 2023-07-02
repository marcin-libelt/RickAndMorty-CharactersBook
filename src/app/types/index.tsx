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
  episode: Episode[];
}

export interface GenericList {
  data: Array<object> | Array<JSX.Element> | object[] | any;
  rendererItem: Function;
  renderEmpty: JSX.Element;
  rootClassName?: string;
  itemClassName?: string;
}
