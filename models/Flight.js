import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import {createFlight} from '../controllers/Flight';

const router = express.Router();

const bookflight = [];
    {
        title : "flight to canada",
        time, 1,
        price, 26000,
        date, "26-06-2022"
        }


router.get('/', (req, res) => {
    
    res.send(flight);
});


router.post('/', flightFlight);
router.get('/:id', (req, res) => {
    const {id} = req.params;

    const foundflight = flight.find((user) => user.id );

    res.send(req.params);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    flight = flight.filter((flight) => user.id !== id);
  
    res.send(`flight with the id &{id} deleted from the database`);
});

router.patch('/:id', (req, res) =>{
    const { id } = req.params;
    const { title, price, time} = req.body;

    if(title)flight.title = title;
    if(price)flight.price = price;
    if(time)flight.time = time;

    res.send(`user with the id &{id} has been updated`);

    const flight = flight.find((flight) => flight.id == id);
})
export default router;
