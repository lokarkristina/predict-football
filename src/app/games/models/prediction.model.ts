export interface Prediction {
  id: number;
  userId: number;
  gameId: number;
  playerHomeId: number;
  playerAwayId: number;
  homeScore?: number;
  awayScore?: number;
}
