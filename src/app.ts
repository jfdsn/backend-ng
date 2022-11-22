import * as express from 'express';
import { AppDataSource } from './database/app-data-source';
import errorMiddleware from './middlewares/errorMiddleware';
import routes from './routes/routes';
import * as cors from "cors";

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    });

const port = 5000;

const app = express();
app.use(cors());
app.use(express.json({strict:true}));
app.use('/', routes);

app.use(errorMiddleware);

app.listen(port, () : void => {
    console.log(`App working at port ${port}.`)
});
