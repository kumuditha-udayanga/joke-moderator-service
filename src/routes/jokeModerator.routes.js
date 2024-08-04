import express from "express";
import { submitJoke, createJokeType } from "../services/jokeDeliver.service.js";
import { getJokes, deleteJoke } from "../services/jokeSubmission.service.js";
import { verifyAuthentication } from "../middleware/authJwt.middleware.js";

export const jokeModeratorRoutes = express.Router();

jokeModeratorRoutes.route("/").post(verifyAuthentication, submitJoke);
jokeModeratorRoutes.route("/type/").post(verifyAuthentication, createJokeType);

jokeModeratorRoutes.route("/").get(verifyAuthentication, getJokes);

jokeModeratorRoutes.route("/:id").delete(verifyAuthentication, deleteJoke);

