//NPM module imports
import mongoose from "mongoose";
import { config } from "dotenv";

//.env configuration
config();

//DB credentials
const { DB_NAME, DB_PASSWORD, DB_USER, DB_URL } = process.env;
const DB_URL_str = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}?retryWrites=true&w=majority`;

const connectToDB = async () => {
  mongoose.connect(DB_URL_str, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: DB_NAME,
  });

  mongoose.connection
    .once("open", async () => {
      console.log("Connected to MongoDB");
    })
    .on("error", (err) => {
      console.log(err);
    });
};

export default connectToDB;
