import {v4 as iduuv4 } from 'uuid';

let flight = [];

export const createflight = (req, res) => {
    const flight = req.body;

    flight.push(...flight, id, iduuv4);

    res.send(`flight with the flightname &{flight.} added to the database`);
}


exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}


