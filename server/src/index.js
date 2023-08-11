import express from "express";
import cors from "cors";

import placesRouter from "./routes/places.js";

export const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

// membuat route (langsung)
app.get("/hello", (_req, res) => {
  res.send("Hello Node.js!");
});

const router = express.Router();

router.use("/places", placesRouter);

app.use("/api", router);

app.listen(3000, () => console.log("Server berhasil dijalankan di port 3000."));
