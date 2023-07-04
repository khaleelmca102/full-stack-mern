import express from "express";

const server = express();

server.use(express.static("dist"));

server.set("view engine","ejs");

server.use("/", (req, res) => {
  res.render("index", {
    content: "EJS is <b>cool</b>",
  });
});

server.listen("8080", "127.0.0.1", () => {
  console.info(
    "Express server listing at http://127.0.0.1:8080",
  );
});
