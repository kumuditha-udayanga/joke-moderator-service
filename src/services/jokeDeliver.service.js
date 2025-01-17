import express from "express";
import axios from "axios";
import { config } from "../../config.js";

// create new joke in deliver microservice
export const submitJoke = async (req, res) => {
    try {
        const joke = req.body;
        
        if(!joke) {
            res.status(400).json({message: "All fields required"});
        }

        await axios.post(`${config.DELIVERY_SERVICE_URL}deliver/jokes/`, joke);
        return res.status(201).json({message: "Joke recorded successfully"});
    } catch(err) {
        res.status(500).json({ message: err });
    }
};

// create new joke type in deliver microservice
export const createJokeType = async (req, res) => {
    try {
        const type = req.body;

        await axios.post(`${config.DELIVERY_SERVICE_URL}deliver/joke-types/`, type)
        return res.status(201).json({message: "Joke type recorded successfully"});
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};
