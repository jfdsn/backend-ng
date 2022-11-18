import * as express from 'express';
import { AppDataSource } from './database/app-data-source';
import errorMiddleware from './middlewares/errorMiddleware';
import routes from './routes/routes';

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    });

const port = 3000;

const app = express();
app.use(express.json());
app.use('/', routes);

app.use(errorMiddleware);

app.listen(port, () : void => {console.log('App working at port 3000.')});
