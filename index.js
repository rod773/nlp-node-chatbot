import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hola Mundo",
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
