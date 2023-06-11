import cors from 'cors'
import express, { Application } from 'express'

import { UserRoutes } from './app/modules/users/user.route'
import globalErrorHandler from './middlewares/globalErrorHandler'
const app: Application = express()

//use cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/v1/users', UserRoutes)

// Testing purposed routes
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

//global Error Handler function
app.use(globalErrorHandler)

export default app
