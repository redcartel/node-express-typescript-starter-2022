import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fourOhFour from './middlewares/fourOhFour';
import errorHandler from './middlewares/errorHandler';
import root from './routes/root';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/', root);

app.use(fourOhFour);
app.use(errorHandler);

export default app;