import { Location } from 'src/entities/location.entity';

export interface ICoworking {
  name: string;
  location: Location;
  openingTime: string;
  closingTime: string;
  mainPhoto: string;
}
