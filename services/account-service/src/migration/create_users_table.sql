-- Option 1: Using an ENUM type for role
CREATE TYPE user_role AS ENUM ('User', 'GameMaster');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role user_role NOT NULL
);