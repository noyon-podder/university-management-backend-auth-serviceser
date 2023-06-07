import { Request, Response } from 'express'
import userServices from './user.services'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userServices.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User create successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User created failed',
    })
  }
}
export default { createUser }
