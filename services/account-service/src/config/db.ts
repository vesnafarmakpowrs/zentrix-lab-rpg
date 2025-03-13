import {Pool} from 'pg'

const connectionString = process.env.DATABASE_URL;

export const pool = new Pool({connectionString});

pool.on('connect',() => {
    console.log('Connected to PostgreSQL database: zentrix_account');
});

export default pool;