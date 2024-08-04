import express from "express";
import { submitJoke, createJokeType } from "../services/jokeDeliver.service.js";
import { getJokes, deleteJoke } from "../services/jokeSubmission.service.js";

export const jokeModeratorRoutes = express.Router();

jokeModeratorRoutes.route("/").post(submitJoke);
jokeModeratorRoutes.route("/type/").post(createJokeType);

jokeModeratorRoutes.route("/").get(getJokes);
jokeModeratorRoutes.route("/:id").delete(deleteJoke);

