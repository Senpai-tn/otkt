import express from "express";
import { connect } from "mongoose";
import Eventrouter from "./routes/Events/routes";
const app = express();
connect("mongodb://mongo:27017/OTKT").then(() =>
  console.log("connected to db")
);

/** Bodyparser */
app.use(express.json());

/** Routes */
app.use("/event", Eventrouter);

app.get("/", (req, res) => {
  res.send("Hello sweetie how are you");
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
