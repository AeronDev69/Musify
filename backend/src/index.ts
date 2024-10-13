import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(routes);
app.use(cors());

app.listen(5000, () => console.log('Server started at http://localhost:5000'));
