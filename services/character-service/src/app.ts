import express from 'express';
import bodyparser from 'body-parser';
import routes  from './routes/routes';

const app = express();
const PORT = 3000;

app.use(bodyparser.json);
app.use(bodyparser.urlencoded({extended: true}));

app.use('/api/', routes);

app.listen(PORT,() => {
    console.log(`Character service is running on ${PORT}`);
});