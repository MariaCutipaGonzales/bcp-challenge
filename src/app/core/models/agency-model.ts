export interface Agency {
  id: string;
  agencia: string;
  distrito: string;
  provincia: string;
  departamento: string;
  direccion: string;
  lat: number;
  lon: number;
  img: string;
}

export enum LOCALSTORAGE_KEY {
  AGENCY = 'agency',
}
