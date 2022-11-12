const express = require("express");
const path = require("path");
const multer = require("multer");
const upload = multer();

const PORT = process.env.PORT || 5000;

const app = express();
app.set("view engine", "ejs");

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.json());
app.get("/", (req, res) => {
  return res.render("index");
});
app.get("/about", (req, res) => {
  return res.render("about");
});
app.get("/work", (req, res) => {
  return res.render("work");
});
app.get("/contact", (req, res) => {
  return res.render("contact");
});
app.post("/contact", upload.none(), async (req, res) => {
  const data = req.body;
  console.log(data);
  return res.json({ message: "Request has been received " });
});

app.all("*", (req, res) => {
  return res.render("index");
});

app.listen(PORT, () => {
  console.log("App is listening to: ", PORT);
});
