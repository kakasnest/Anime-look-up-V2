//NPM module imports
import express from "express";
import cors from "cors";

//Filesystem imports
import connectToDB from "./utils/db_connection.js";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";

const app = express();

//Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((err, _req, res, next) => {
  res.status(500).json({ message: err });

  next();
});

//Routes
app.use("/user", userRouter);
app.use("/posts", postRouter);

connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`\nServer listening on localhost: ${process.env.PORT}`);
});
