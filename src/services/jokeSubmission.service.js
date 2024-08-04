import express from "express";
import axios from "axios";
import { config } from "./../../config.js";

// get joke (API GET: http://localhost:8081/api/submission/jokes)
export const getJokes = async (req, res) => {
    try {
        const response = await axios.get(`${config.SUBMISSION_SERVICE_URL}submission/jokes`)
        res.status(200).json(response.data)
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

// delete/reject joke (API DELETE: http://localhost:8081/api/submission/jokes/:id)
export const deleteJoke = async (req, res) => {
    const {id} = req.params;
    try {
        await axios.delete(`${config.SUBMISSION_SERVICE_URL}submission/jokes/${id}`)
        res.status(200).json( {message: "Joke deleted sucessfully"} );
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};
