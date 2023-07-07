import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';

import globalErrorHandler from './middlewares/globalErrorHandler';
import routes from './routes';
import { StatusCodes } from 'http-status-codes';
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
//   res.send('we are working');
// });

//global Error Handler function
app.use(globalErrorHandler);

//handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api Not Found!!',
      },
    ],
  });
  next();
});

export default app;
