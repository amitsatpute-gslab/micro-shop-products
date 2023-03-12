import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes";

dotenv.config();
const port = process.env.PORT || 8082;

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () =>
  console.log(`Products microservice listening on port ${port}!`)
);
