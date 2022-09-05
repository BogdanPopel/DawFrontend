export interface Location {
  id: number;
  name: string;
  address: {
    streetNumber: string,
    county: string,
    city: string
  };

}
