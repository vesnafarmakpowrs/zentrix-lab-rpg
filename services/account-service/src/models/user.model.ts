export interface User {
    id: number;
    username: string;
    password: string;
    role: 'User' | 'GameMaster';
}