import express from "express";
import photosRouter from "./routes/photos.js";
import cors from "cors"; 

const PORT = 5050;

const app = express();
app.use(express.json());
app.use(cors());

//endpoints
app.use("/photos", photosRouter);

app.listen(PORT, () => {
  console.log(`listening on local host ${PORT}`);
});

