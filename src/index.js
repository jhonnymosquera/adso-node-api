const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const instructor = require("./routes/instructor");
const day = require("./routes/day");
const job = require("./routes/job");
const task = require("./routes/task");

const cors = require("cors");
// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api", instructor, day, job, task);

// routes
app.get("/", (req, res) => {
	res.send("Welcome to my API");
});

// mongodb connection
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Servidor conectado correctamente en: MongoDB Atlas"))
	.catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Servidor Corriendo en el Puesto: ", port));
