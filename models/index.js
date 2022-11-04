import express from 'express';
import bodyParser from 'body-parser';

import flightRoute from './routes/flightRoute.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.jason());

app.use('/flight', flightRoute);

app.get('/',(req, res) => res.send('Hello from Homepage.'));


app.listen(PORT, () => console.log(`server Running on port:http://localhost:${PORT}`));