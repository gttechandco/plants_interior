export interface Plant {
    id: number;
    name: string;
    species: string;
    acquired_date: Date;
    picture: string;
    wateringRequirements: any[]; // Définissez les interfaces appropriées pour les relations
    wateringHistories: any[];
    notifications: any[];
}
