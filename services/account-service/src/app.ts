import express from 'express';
import bodyParser from 'body-parser';
import authRoutes  from './routes/auth.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Account Service is running on port ${PORT}`);
});