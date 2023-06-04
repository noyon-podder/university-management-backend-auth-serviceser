import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRoute from '../src/app/modules/users/users.route'
import userServices from './app/modules/users/user.services'
const app: Application = express()

//use cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/v1/users', userRoute)

app.get('/', async (req: Request, res: Response) => {
  await userServices.createUser({
    id: '09090',
    password: '234234',
    role: 'faculty',
  })
  res.send('Hello World!')
})

export default app
