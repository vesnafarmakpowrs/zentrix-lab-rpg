import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service'

const authService = new AuthService();

export const register = async (req: Request, res: Response) => {
  const { username, password, role } = req.body;
  try {
    console.log(`${username} ${password}  ${role}`);
    const user = await authService.registerUser(username, password, role);
    console.log(`${user} `);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error registering user', error});
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    console.log(`${username} ${password} `);
    const token = await authService.loginUser(username, password);
    if (token) {
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};