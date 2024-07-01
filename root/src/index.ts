import express from "express";
import { connect } from "mongoose";
const app = express();

connect("mongodb://root:example@mongo:27017").then(() =>
  console.log("connected to db")
);
app.get("/", (req, res) => {
  res.send("Hello sweetie how are you sweetie");
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
