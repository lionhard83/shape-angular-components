import { Team } from './Team';

export interface Match {
    attendace: number;
    away_team: Team,
    home_team: Team,
}