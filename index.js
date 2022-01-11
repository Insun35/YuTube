import express from "express";

const app = express();

const home = (req, res) => {
    res.send("Welcome to homepage");
};

app.get("/", home);

const handleListen = () => {
    console.log("Server is listening!");
};

app.listen(4000, handleListen);