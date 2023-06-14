import cors from 'cors';
import express, { Application } from 'express';

import globalErrorHandler from './middlewares/globalErrorHandler';
import routes from './routes';
const app: Application = express();

//use cors
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded());

//router api end point
app.use('/api/v1', routes);

// Testing purposed routes
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

//global Error Handler function
app.use(globalErrorHandler);

export default app;
