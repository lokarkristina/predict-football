export interface Prediction {
  id: number;
  userId: number;
  homeCountryId: number;
  awayCountryId: number;
  homeScore?: number;
  awayScore?: number;
}
