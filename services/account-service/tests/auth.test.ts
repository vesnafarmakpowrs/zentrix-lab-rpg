import request from 'supertest';
import app from '../src/app'; // Adjust the import based on your app's structure
import { createUser } from '../src/repositories/userRepository';

jest.mock('../src/repositories/userRepository');

describe('Authentication Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /auth/register', () => {
    it('should register a new user', async () => {
      const newUser = { username: 'testuser', password: 'password123' };
      (createUser as jest.Mock).mockResolvedValue(newUser);

      const response = await request(app).post('/auth/register').send(newUser);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('username', newUser.username);
    });

    it('should return 400 if user already exists', async () => {
      const existingUser = { username: 'testuser', password: 'password123' };
      (createUser as jest.Mock).mockRejectedValue(new Error('User already exists'));

      const response = await request(app).post('/auth/register').send(existingUser);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error', 'User already exists');
    });
  });

  describe('POST /auth/login', () => {
    it('should log in an existing user', async () => {
      const userCredentials = { username: 'testuser', password: 'password123' };
      (createUser as jest.Mock).mockResolvedValue(userCredentials);

      const response = await request(app).post('/auth/login').send(userCredentials);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
    });

    it('should return 401 for invalid credentials', async () => {
      const invalidCredentials = { username: 'testuser', password: 'wrongpassword' };
      (createUser as jest.Mock).mockRejectedValue(new Error('Invalid credentials'));

      const response = await request(app).post('/auth/login').send(invalidCredentials);

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error', 'Invalid credentials');
    });
  });
});