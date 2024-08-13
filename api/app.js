const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { connection } = require("./src/db/connection");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// import routes
const userRoute = require("./src/routes/user.route");

// set routes
app.use("/api/v1/user", userRoute);

// Error middleware
app.use((err, req, res, next) => {
  res.json({ success: false, error: err.message });
});

const start = async () => {
  await connection()
    .then(() => {
      app.listen(
        process.env.PORT,
        console.log(`The server is listening on port ${process.env.PORT}`)
      );
    })
    .catch((Err) => {
      console.log("Error:", Err.message);
    });
};

start();
