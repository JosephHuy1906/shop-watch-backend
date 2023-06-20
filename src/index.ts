import express,{ Express } from "express";
import { config } from "dotenv";
import Database from "./database/connect.db";
import rootRouter from "./routes/index.route";

config()
const app = express();
const PORT_SERVER = process.env.PORT_SERVER || 6060;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Database.connect();


app.use(`/api/${process.env.CURRENT_API_VERSION as string}`, rootRouter);

app.listen(PORT_SERVER, () =>
    console.log(`App listening on port http://localhost:${PORT_SERVER}`),
);
