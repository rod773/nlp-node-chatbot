import express from "express";
import ejs from "ejs";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
