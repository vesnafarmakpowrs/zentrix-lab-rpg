import { Pool } from 'pg';
import { User } from '../models/user.model';
import dotenv from 'dotenv';

dotenv.config({path: '../../.env'});

const pool = new Pool({
    connectionString : process.env.DATABASE_URL
  });
  
export const createUser = async (username: string, password: string, role: 'User' | 'GameMaster' = 'User' ): Promise<User> => {
   
    const result = await pool.query(
        'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *',
        [username, password, role]
    );
    return result.rows[0];
};

export const findUserById = async (id: number): Promise<User | null> => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows.length ? result.rows[0] : null;
};

export const findUserByUsername = async (username: string): Promise<User | null> => {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows.length ? result.rows[0] : null;
};

const UserRepository = {
    createUser,
    findUserById,
    findUserByUsername,
  };
  
  export default UserRepository;
  