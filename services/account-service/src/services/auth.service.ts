import { User } from '../models/user.model';
import  UserRepository  from '../repositories/userRepository';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class AuthService {
   
    async registerUser(username : string, password: string, role: 'User' | 'GameMaster' = 'User'): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = await UserRepository.createUser(username, hashedPassword, role);
        return newUser;
    }

    async loginUser(username: string, password: string): Promise<string | null> {
        const user = await UserRepository.findUserByUsername(username);
       
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user.id, username: user.username , role: user.role }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });
            return token;
        }
        return null;
    }
}