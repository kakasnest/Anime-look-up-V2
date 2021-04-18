//NPM module imports
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import csrf from "csurf";

//Filesystem imports
import connectToDB from "./utils/db_connection.js";
import apiRouter from "./routes/api.js";

connectToDB();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(csrf({ cookie: true }));
app.use("/api", apiRouter);
app.use((err, req, res, next) => {
  res.status(500).json({ message: err });

  next();
});

app.listen(process.env.PORT, () => {
  console.log(`\nServer listening on localhost: ${process.env.PORT}`);
});
