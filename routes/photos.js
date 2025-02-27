import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


//setup router
const router = express.Router();

// set up directory names for ES Modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PHOTOS_FILE = path.join(__dirname, "../data/photos.json");

//GET/photos
router.get("/", (_req, res) => {
  if (fs.existsSync(PHOTOS_FILE)) {
    const rawData = fs.readFileSync(PHOTOS_FILE);
    const photos = JSON.parse(rawData);
    res.json(photos);
  } else {
    res.status(404).json({ error: "Photos file not found" });
  }
});

//GET /photos /:id
router.get("/:id", (req, res) => {
  if (fs.existsSync(PHOTOS_FILE)) {
    const rawData = fs.readFileSync(PHOTOS_FILE);
    const photos = JSON.parse(rawData);
    const photoId = req.params.id;
    const photo = photos.find((p) => p.id === photoId);

    if (photo) {
      res.json(photo);
    } else {
      res.status(404).json({ error: "Photos not found" });
    }
  } else {
    res.status(404).json({ error: "Photos file not found" });
  }
});

export default router;
