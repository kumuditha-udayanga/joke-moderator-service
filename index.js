import express from "express";
import cors from "cors";
import { config } from "./config.js";
import { jokeModeratorRoutes } from "./src/routes/jokeModerator.routes.js";
import { authRoutes } from "./src/routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.json({message: "Joke Moderation service"});
});

app.use("/api/moderator/jokes", jokeModeratorRoutes);
app.use("/api/moderator/auth", authRoutes);

app.listen(config.PORT, () => {
    console.log(`Serving running on port ${config.PORT}`);
});
