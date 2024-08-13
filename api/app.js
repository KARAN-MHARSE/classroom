const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { connection } = require("./src/db/connection");

app.use(express.json());
app.use(
  cors({
    origin: "https://karan-classroom.netlify.app",
  })
);

// import routes
const userRoute = require("./src/routes/user.route");

// set routes
app.use("/api/v1/user", userRoute);

// Error middleware
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, error: err.message });
});

const port = process.env.PORT || 5000;

const start = async () => {
  await connection()
    .then(() => {
      app.listen(port, console.log(`The server is listening on port ${port}`));
    })
    .catch((Err) => {
      console.log("Error:", Err.message);
    });
};

start();
